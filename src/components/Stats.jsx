import styles from '../style';
import { stats } from '../constants';

const Stats = () => (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((item) => (
            <div key={item.id} className={`flex flex-1 gap-4 items-center justify-start m-3 flex-row `}>
                <span className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
                    {item.value}
                </span>
                <span className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase cursor-pointer ">
                    {item.title}
                </span>
            </div>
        ))}
    </div>
);

export default Stats;
