type StatusBadgeProps = {
  status: string;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColors = {
    Alive: "bg-green-500/20 text-green-500 border-green-500/20",
    Dead: "bg-red-500/20 text-red-500 border-red-500/20",
    unknown: "bg-gray-500/20 text-gray-500 border-gray-500/20",
  };

  return (
    <span
      className={`text-base rounded-full px-2 py-1 ${statusColors[status as keyof typeof statusColors]}`}
      role="status"
      aria-label={status}
    >
      {status}
    </span>
  );
};
