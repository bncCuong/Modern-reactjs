import {
    Billing,
    Businees,
    Button,
    CartDeal,
    Clients,
    CTA,
    FeedbackCard,
    Footer,
    Hero,
    Navbar,
    Stats,
    Testimonials,
} from './components';
import styles from './style';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`${styles.flexStart} bg-primary w-full`}>
                <div className={`${styles.boxWidth} w-full`}>
                    <Hero />
                </div>
            </div>
            <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />

                    {/* <Billing /> <Businees /> <Button /> <CartDeal /> <Clients /> <CTA /> <FeedbackCard /> <Footer />
                    <Stats /> <Testimonials /> */}
                </div>
            </div>
        </div>
    );
};
export default App;
