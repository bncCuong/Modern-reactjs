import { useState } from 'react';
import { navLinks } from '../constants/index';
import { close, menu, logo } from '../assets';

const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img alt="logo" src={logo} className="w-[124px] h-[32px]" />
            {/* webside  */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((item, index) => (
                    <li
                        key={item.id}
                        className={`text-white font-poppins font-normal ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                        } cursor-pointer`}
                    >
                        <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>

            {/* mobie */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    alt="menu"
                    src={!toogleMenu ? menu : close}
                    className="w-6 h-6 object-contain"
                    onClick={() => setToogleMenu((prev) => !prev)}
                />
                <div
                    className={`${
                        toogleMenu ? 'flex' : 'hidden'
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col  items-center flex-1">
                        {navLinks.map((item, index) => (
                            <li
                                key={item.id}
                                className={`text-white font-poppins font-normal ${
                                    index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                                } cursor-pointer`}
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
