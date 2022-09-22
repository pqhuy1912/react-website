import image1 from '../../assets/images/img-9.jpg';
import image2 from '../../assets/images/img-2.jpg';
import image3 from '../../assets/images/img-3.jpg';
import image4 from '../../assets/images/img-4.jpg';
import image5 from '../../assets/images/img-8.jpg';
import styles from './Card.module.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className={styles.cards}>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="container">
                <div className={styles.cardItemWrap}>
                    <CardItem
                        src={image1}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Luxury"
                        to="/services"
                    />
                    <CardItem
                        src={image2}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Adventure"
                        to="/services"
                    />
                </div>
                <div className={styles.cardItemWrap}>
                    <CardItem
                        src={image3}
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="Mystery"
                        to="/services"
                    />
                    <CardItem
                        src={image4}
                        text="Experience Football on Top of the Himilayan Mountains"
                        label="Adventure"
                        to="/services"
                    />
                    <CardItem
                        src={image5}
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        to="/services"
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
