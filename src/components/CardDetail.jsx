import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import { quotes } from '../assets';
const CardDetail = () => {
    return (
        <>
            {feedback.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-wrap  px-10 py-12 w-[370px] h-[395px] bg-discount-gradient  font-poppins rounded-2xl"
                >
                    <img src={quotes} />
                    <p className="text-[18px] text-white leading-[32px] mt-5">{item.content}</p>
                    <div className={`${styles.flexCenter} gap-4`}>
                        <img alt="avatar" src={item.img} className="w-[48px] h-[48px] object-cover" />
                        <div>
                            <p className="text-white text-[20px] leading-[32px]">{item.name}</p>
                            <p className="text-white/50 text-[16px] leading-[24px]">{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardDetail;
