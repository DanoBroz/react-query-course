export const possibleStatus = [
  {
    id: "backlog",
    label: "Backlog",
  },
  {
    id: "todo",
    label: "To-do",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "done",
    label: "Done",
  },
  {
    id: "canceled",
    label: "Cancelled",
  },
];

export function StatusSelect({ value, onChange, noEmptyOption = false }) {
  return (
    <select value={value} onChange={onChange} className={"status-select"}>
      {!noEmptyOption ? (
        <option value={""}>Select status to filter</option>
      ) : null}
      {possibleStatus.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
