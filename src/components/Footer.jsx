import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <div className={`${styles.flexStart} md:flex-row flex-col gap-10 flex-1 py-10 `}>
            <div className={`${styles.flexStart} flex-col gap-8 pt-10 mr-16`}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <p className={`${styles.paragraph} max-w-[400px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className={`flex justify-between flex-1 md:flex-row flex-col `}>
                {footerLinks.map((items) => (
                    <div key={items.title} className="flex  flex-col ">
                        <p className="text-white font-semibold text-[18px] md:mb-10 mb-0 ">{items.title}</p>
                        <ul className=" flex md:flex-col flex-row  ">
                            {items.links.map((item) => (
                                <li key={item.name} className={`${styles.paragraph}  md:mb-0 mb-10 md:mr-0 mr-6`}>
                                    <a
                                        src={item.link}
                                        className="hover:text-blue-500  cursor-pointer sm:text-[14px] text-[12px]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
