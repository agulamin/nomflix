import React from "react";
import styles from "./Header.module.css"

export default () => (
    <header className={styles.navList}>
        <ul>
            <li>
                <a href="/">Moves</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>

);
