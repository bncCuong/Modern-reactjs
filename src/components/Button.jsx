import React from 'react';

const Button = (props) => {
    return (
        <button
            className={`${props.styles} text-primary font-medium font-poppins text-[18px] bg-blue-gradient py-3 rounded-md  w-[170px]`}
        >
            Get Started
        </button>
    );
};

export default Button;
