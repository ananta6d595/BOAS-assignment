import React from 'react';

const LeviesButton = ({attributes, href, label}) => {
    return (
        <>
            <a
                className={attributes}
                href={href}>
                {label}
            </a>
        </>
    );
};

export default LeviesButton;