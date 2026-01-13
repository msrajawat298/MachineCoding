"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function SidebarList({ folders }) {
    const pathname = usePathname();

    return (
        <ul className={styles.navList}>
            {folders.map((folder, index) => {
                const href = `/exercises/${folder}`;
                const isActive = pathname === href;
                return (
                    <li key={index}>
                        <Link
                            href={href}
                            className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                        >
                            {folder.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
