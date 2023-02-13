import CardDetail from './CardDetail';
import styles from '../style';
const FeedbackCard = () => {
    return (
        <div className={`${styles.paddingY} ${styles.flexStart} flex-col`}>
            <div className="flex justify-between text-white w-full px-10">
                <h1 className=" font-poppins text-[32px] mt-10 leading-[40px] font-semibold ss:text-[48px] ss:leading-[70px]">
                    What people are <br className="md:block hidden" /> saying about us:
                </h1>
                <p
                    className={`ss:text-[18px] text-[14px] ${styles.paragraph} ss:leading-[32px] leading-[28px] w-[500px] ss:mt-16 mt-10`}
                >
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className="w-full flex flex-wrap gap-16 md:justify-between justify-center mt-20">
                <CardDetail />
            </div>
        </div>
    );
};

export default FeedbackCard;
