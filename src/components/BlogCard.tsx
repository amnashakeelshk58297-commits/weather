type Props = {
  title: string;
  description: string;
};

export default function BlogCard({ title, description }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "250px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
