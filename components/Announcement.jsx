import Link from "next/link";
import css from "../styles/Announcement.module.css";

export default function Announcement() {
  return (
    <div className={css.container}>
      <Link href="/Store">
        <span>Shop online</span>
      </Link>{" "}
      for fast, free delivery. Call us at 1800-80-6419 or visit{" "}
      <span>support</span>.
    </div>
  );
}
