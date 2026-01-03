import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#0f172a", color: "white" }}>
      <Link href="/" style={{ marginRight: "20px", color: "white" }}>
        Home
      </Link>
      <Link href="/blog" style={{ color: "white" }}>
        Blog
      </Link>
    </nav>
  );
}
