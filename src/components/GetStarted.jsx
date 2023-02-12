import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col w-full h-full rounded-full bg-primary`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient mr-2">Get</span>
                    </p>
                    <img alt="arrow-up" src={arrowUp} className="w-[23px] h-[23px] object-contain" />
                </div>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient mr-2">Started</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
