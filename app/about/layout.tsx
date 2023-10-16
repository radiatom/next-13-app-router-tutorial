import Link from 'next/link';
import React from 'react';
import styles from './about.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.about}>
            <ul>
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/team">Team</Link>
            </ul>
            {children}
        </div>
    );
}

export default Layout;
