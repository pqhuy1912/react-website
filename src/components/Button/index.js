import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.css';

function Button({ children, onClick, to, btnPrimary, btnOutline }) {
    const classes = clsx(styles.btn, {
        [styles.btnPrimary]: btnPrimary,
        [styles.btnOutline]: btnOutline,
    });

    return (
        <Link to={to} className={styles.linkBtn}>
            <button className={classes} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
}

export default Button;
