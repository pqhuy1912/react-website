import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <Layout>
            <HeroSection />
            <Card />
            <Footer />
        </Layout>
    );
}

export default HomePage;
