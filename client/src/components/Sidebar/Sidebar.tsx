import styles from './Sidebar.module.scss'
import daltonImg from '../../assets/png/dalton.png'
import samanthaImg from '../../assets/png/samantha.png'

import { Link, useLocation } from 'react-router-dom'

const sidebarNavLinks = ["dashboard", "expenses", "wallets", "summary", "accounts", "settings"]

const Sidebar = () => {
    const location = useLocation();

    return (
        <div>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarContent}>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImageDiv}>
                            <img className={styles.profileImage} src={daltonImg} alt="dalton" />
                            <p className={styles.notifications}>4</p>
                        </div>
                        <p className={styles.userName}>Dalton</p>
                        <p className={styles.userEmail}>chivambo@email.com</p>
                    </div>

                    <nav className={styles.sidebarNav}>
                        <ul>
                            {sidebarNavLinks.map((sidebarNavLink) => (
                            <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                            <Link
                                className={location.pathname === `/${sidebarNavLink}`
                                    ? styles.sidebarNavLinkActive
                                    : styles.sidebarNavLink
                                }
                                to={`/${sidebarNavLink}`}
                            >
                                {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                            </Link>
                        </li>
                            ))}

                        </ul>
                    </nav>

                </div>
            </aside>
        </div>
    )
}

export default Sidebar
