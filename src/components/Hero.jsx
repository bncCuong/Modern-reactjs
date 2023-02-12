import styles from '../style';
import GetStarted from './GetStarted';
import { discount, robot } from '../assets';

const Hero = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] ] ">
                    <img alt="discount" src={discount} className="w-[32px] h-[32px]" />
                    <p className={`inline ${styles.paragraph} font-poppins font-normal text-lg uppercase`}>
                        <span className="text-white">20%</span> discount for <span className="text-white">1 month</span>{' '}
                        account
                    </p>
                </div>

                <div className="flex flex-col items-start justify-between text-white">
                    <div className="flex ">
                        <h1 className="font-poppins ss:text-[72px] ss:leading-[100px] text-[52px] font-semibold">
                            The Next
                            <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>{' '}
                        </h1>
                        <div className="ss:flex flex-end hidden md:mr-4 mr-0 ml-12 mt-7">
                            <GetStarted />
                        </div>
                    </div>
                </div>
                <h1 className="font-poppins ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] font-semibold text-white w-full">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img alt="robot" src={robot} className="w-[100%] h-[100%] relative" />
                <div className="absolute z-[0] top-0 w-[40%] h-[35%] pink__gradient" />
                <div className="absolute z-[1] bottom-40 w-[80%] h-[80%] rounded-full white__gradient" />
                <div className="absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient" />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    );
};

export default Hero;
