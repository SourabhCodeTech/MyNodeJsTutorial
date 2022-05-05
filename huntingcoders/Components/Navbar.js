import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <li className={styles.li}><Link href="/">Home</Link></li>
                <li className={styles.li}><Link href="/about">About</Link></li>
                <li className={styles.li}><Link href="/Blog">Blogs</Link></li>
                <li className={styles.li}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar