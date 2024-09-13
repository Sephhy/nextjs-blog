import styles from './navbar.module.css'
import NavLink from './navLink/navLink';

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
            id:0
        },
        {
            title: "About",
            path: "/about",
            id:1
        },
        {
            title: "Blog",
            path: "/blog",
            id:2
        },
        {
            title: "Contact",
            path: "/contact",
            id:3
        }
 
        
    ];

    let session = true;
    let isAdmin = true;

    return (
        <div>
            {links.map((link) => (
                <NavLink link={link} key={link.title} />
            ))}
             {session ? ( 
                <>
                    {isAdmin && <NavLink link={{title:"Admin", path: "/admin" }} />}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink link={{ title: "Login", path: "/login" }} />
            )}
           

        </div>
    )
}

export default Links