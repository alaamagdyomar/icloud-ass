import React from 'react';
import { useRouter } from 'next/router'
import NavBar from '../navbar';
import Header from '../header';
import styles from './index.module.scss'

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <div className={styles.main_layout_}>
           <Header />
            <div className={styles.contents}>
                <NavBar/>
                <main>{children}</main>
            </div>
        </div>
    );
}
