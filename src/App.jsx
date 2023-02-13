import {
    Billing,
    Businees,
    Button,
    Clients,
    CTA,
    FeedbackCard,
    Footer,
    Hero,
    Navbar,
    Stats,
    Testimonials,
    CardDeal,
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
                <div className={`${styles.boxWidth} border-b-[1px] border-white/20 mb-20`}>
                    <Stats />
                    <Businees />
                    <Billing />
                    <CardDeal />
                    <FeedbackCard />
                    <Clients />
                    <Footer />
                    <p className="text-white">Copyright @ Figma. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};
export default App;
