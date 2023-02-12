import styles from '../style';
import Button from './Button';
import { star, shield, send } from '../assets';
import { features } from '../constants';

const Business = () => {
    return (
        <div className={`${styles.flexStart} md:flex-row flex-col ${styles.paddingY} `}>
            <div className="flex flex-col flex-1 mt-5 ">
                <h1 className="text-white font-poppins font-semibold md:text[35px] text-[48px] md:leading-[76px] leading-[64px]">
                    You do the business, <br className="sm:block hidden" /> we'll handle the money.
                </h1>
                <p className="text-white/70 font-poppins md:text-[14px] text-[18px] leading-[30px] mt-10 max-w-[470px]">
                    With the right credit card, you can improve your financial life by building credit, earning rewards
                    and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button styles="mt-10" />
            </div>
            <div className={`${styles.flexStart} flex-col gap-4 flex-1 md:mt-3 mt-20 text-white`}>
                {features.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.flexCenter} p-6 rounded-[20px] ${
                            index !== features.length - 1 ? 'mb-3' : 'mb-0'
                        } feature-card `}
                    >
                        <div className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue mr-3`}>
                            <img src={item.icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
                        </div>
                        <div>
                            <h1 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
                                {item.title}
                            </h1>
                            <p className="text-white/50 text-lg font-normal leading-[20px] mt-2">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Business;
