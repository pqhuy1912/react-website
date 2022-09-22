import ufo from '../../assets/images/404.png';
import styles from './PageNotFound.module.css';
import Button from '../../components/Button';

function PageNotFound() {
    return (
        <div className={styles.wrap}>
            <img src={ufo} className={styles.image} />
            <h1 className={styles.heading}>Hey Buddy</h1>
            <p className={styles.description}>
                We can't seem to find the page you are looking for.
            </p>
            <Button to="/" btnPrimary>
                Go Home
            </Button>
        </div>
    );
}

export default PageNotFound;
