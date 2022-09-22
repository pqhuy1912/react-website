import video1 from '../../assets/videos/video-1.mp4';
import styles from './HeroSection.module.css';
import Button from '../Button';

function HeroSection() {
    return (
        <div className={styles.heroContainer}>
            <video
                src={video1}
                autoPlay
                muted
                loop
                className={styles.heroVideo}
            ></video>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>ADVENTURE AWAITS</h1>
                <p className={styles.heroDesc}>What are you waiting for?</p>
                <div className={styles.heroBtnWrap}>
                    <Button btnOutline to="/sign-up">
                        GET STARTED
                    </Button>
                    <Button btnPrimary to="/watch-trailer">
                        WATCH TRAILER
                        <i className="fa-regular fa-circle-play"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
