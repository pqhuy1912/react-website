import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Button from '../Button';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerSubscribe}>
                    <h1 className={styles.footerHeading}>
                        Join the Adventure newsletter to receive our best
                        vacation deals
                    </h1>
                    <p className={styles.footerText}>
                        You can unsubscribe at any time.
                    </p>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={styles.input}
                            />
                            <Button to="/sign-up" btnOutline>
                                Subscribe
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={styles.footertList}>
                    <div className={styles.footerItem}>
                        <h2>About Us</h2>
                        <Link to="sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className={styles.footerItem}>
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                    <div className={styles.footerItem}>
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className={styles.footerItem}>
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <Link to="/" className={styles.footerLogo}>
                        TRVL
                        <i className="fa-brands fa-typo3" />
                    </Link>
                    <p>HEZI SOLIS © 2022</p>
                    <div className={styles.socialIcon}>
                        <Link to="/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-youtube"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
