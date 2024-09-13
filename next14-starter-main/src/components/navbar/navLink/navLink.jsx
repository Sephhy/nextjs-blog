"use client"

import { usePathname } from 'next/navigation'
import styles from './navLink.module.css'
import Link from 'next/link'
const NavLink = ({link}) => {

        const pathName = usePathname();
        
    return (
        <Link href={link.path} key={link.id}  className={`${styles.links} ${pathName === link.path  && styles.active}`}>{link.title}</Link>
    )
}

export default NavLink