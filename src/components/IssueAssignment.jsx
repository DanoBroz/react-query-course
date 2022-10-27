import { useState } from "react";
import { GoGear } from "react-icons/go";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useUserData } from "../hooks/useUserData";

export default function IssueAssignment({ assignee, issueNumber }) {
  const user = useUserData(assignee);
  const queryClient = useQueryClient();
  const [menuOpen, setMenuOpen] = useState(false);
  const usersQuery = useQuery(
    ["users"],
    async () => await fetch("/api/users").then((res) => res.json())
  );

  const setAssignment = useMutation(
    async (assignee) => {
      const result = await fetch(`/api/issues/${issueNumber}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ assignee }),
      });
      return await result.json();
    },
    {
      onMutate: (assignee) => {
        const oldAssignee = queryClient.getQueryData([
          "issues",
          issueNumber,
        ]).assignee;
        queryClient.setQueryData(["issues", issueNumber], (data) => ({
          ...data,
          assignee,
        }));
        return function rollback() {
          queryClient.setQueryData(["issues", issueNumber], (data) => ({
            ...data,
            assignee: oldAssignee,
          }));
        };
      },
      onError: (error, variables, rollback) => {
        rollback();
      },
      onSettled: () => {
        queryClient.invalidateQueries(["issues", issueNumber], { exact: true });
      },
    }
  );

  return (
    <div className="issue-options">
      <div>
        <span>Assignment</span>
        {user.isSuccess && (
          <div>
            <img src={user.data.profilePictureUrl} />
            {user.data.name}
          </div>
        )}
      </div>
      <GoGear
        onClick={() =>
          !usersQuery.isLoading && setMenuOpen((prevState) => !prevState)
        }
      />
      {menuOpen && (
        <div className="picker-menu">
          {usersQuery.data?.map((user) => (
            <div key={user.id} onClick={() => setAssignment.mutate(user.id)}>
              <img src={user.profilePictureUrl} alt="users profile picture" />
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
