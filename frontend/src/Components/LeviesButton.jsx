import React from 'react';

const LeviesButton = ({ href, label}) => {
    return (
        <>
            <a
                className=" border-[2px] px-10 xl:px-16 py-4 hover:text-sky-300 "
                href={href}>
                {label}
            </a>
        </>
    );
};

export default LeviesButton;