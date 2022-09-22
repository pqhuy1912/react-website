import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Navbar.module.css';
import Button from '../../Button';

function Navbar() {
    const [click, setClick] = useState(false);

    const closeMenu = () => {
        setClick(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarMain}>
                    <Link to="/" className={styles.navLogo} onClick={closeMenu}>
                        TRVL
                        <i className="fa-brands fa-typo3" />
                    </Link>
                    <div
                        className={styles.menuIcon}
                        onClick={() => setClick(!click)}
                    >
                        <i
                            className={
                                click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
                            }
                        />
                    </div>
                    <ul
                        className={clsx(styles.navList, {
                            [styles.active]: click,
                        })}
                    >
                        <li className={styles.navItem}>
                            <Link
                                to="/"
                                className={styles.navLink}
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/services"
                                className={styles.navLink}
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/products"
                                className={styles.navLink}
                                onClick={closeMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Button btnOutline to="/sign-up">
                                SIGN UP
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
