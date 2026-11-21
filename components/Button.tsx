type Props = {
  title?: string;
  className?: string;
};

export default function Button({ title = "Danger", className = "bg-blue-500" }: Props) {
  return (
    <button
      type="button"
      className={`${className} text-white px-4 py-2 rounded-full font-medium`}
    >
      {title}
    </button>
  );
}