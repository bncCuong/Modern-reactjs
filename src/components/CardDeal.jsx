import styles from '../style';
import { card } from '../assets';
import Button from './Button';
const CardDeal = () => {
    return (
        <div className={`${styles.flexStart} md:flex-row flex-col mt-20 gap-10 `}>
            <div className="flex flex-col flex-1 mt-16">
                <h1 className="max-w-[570px] font-poppins text-white text-[48px] font-semibold leading-[68px] ">
                    Find a better card deal in few easy steps.
                </h1>
                <p className="text-[18px] font-poppins text-white/50 leading-[30px] max-w-[470px] mt-10">
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç
                    Aliquet ultrices ac, ametau.
                </p>
                <Button styles="mt-8" />
            </div>
            <div className="flex flex-1 ml-20">
                <img src={card} alt="card" className="md:w-[100%] w-[70%]  " />
            </div>
        </div>
    );
};

export default CardDeal;
