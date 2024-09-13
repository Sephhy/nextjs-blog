import styles from './navbar.module.css'
import Links from "@/components/navbar/Links"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Links />
        </div>
    )
};
