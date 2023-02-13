import styles from '../style';
import { google, apple, bill } from '../assets';

const Billing = () => {
    return (
        <div className={`${styles.flexStart} mt-10 md:flex-row flex-col `}>
            <div className="flex flex-1">
                <img src={bill} alt="bill" className="w-[80%]" />
            </div>
            <div className={` flex-col flex-1 mt-14 max-w-[500px] mr-20`}>
                <h1 className="font-poppins text-[48px] leading-[75px] font-semibold text-white ">
                    Easily control your billing & invoicing.
                </h1>
                <p className="text-white/50 text-[18px] leading-[28px] mt-6 max-w-[470px]">
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci
                    rhoncus aliporttitor integer platea placerat.
                </p>
                <div className="flex gap-4 mt-10 ">
                    <img src={google} alt="goole" className="cursor-pointer" />
                    <img src={apple} alt="apple" className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Billing;
