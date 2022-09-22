import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function CardItem({ src, text, label, to }) {
    return (
        <div className={styles.cardItem}>
            <Link to={to} className={styles.cardItemLink}>
                <div className={styles.cardItemImgWrap} data-category={label}>
                    <img src={src} alt="" className={styles.cardItemImg} />
                </div>
                <p className={styles.cardItemText}>{text}</p>
            </Link>
        </div>
    );
}

export default CardItem;
