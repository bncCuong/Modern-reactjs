import styles from '../style';
import { binance, airbnb, coinbase, dropbox } from '../assets';
import Button from './Button';

const Clients = () => {
    return (
        <div className={`${styles.paddingY} ${styles.flexCenter} flex-col `}>
            <div className="flex flex-wrap items-center justify-around w-full">
                <img src={airbnb} alt="airbnb" className=" object-cover w-[190px]" />
                <img src={binance} alt="binance" className=" object-cover w-[190px]" />
                <img src={coinbase} alt="coinbase" className=" object-cover w-[190px]" />
                <img src={dropbox} alt="dropbox" className=" object-cover w-[190px]" />
            </div>
            144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)
            <div className="w-full mt-20 bg-gradient-to-br from-violet-200/20 to-[#6d6d6d]/20 rounded-xl px-10 py-16 flex md:flex-row flex-col items-center justify-around ">
                <div className="flex flex-col items-center">
                    <h1 className="text-[32px] ss:text[48px] leading-[42px] ss:leading-[68px] font-poppins font-semibold text-white">
                        Let’s try our service now!
                    </h1>
                    <p className={`md:max-w-[400px] max-w-[530px] text-[18px] ${styles.paragraph}`}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
                <div className="md:-mt-0 mt-10">
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Clients;
