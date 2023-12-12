import React from 'react';

const NewsLogo = ({ img}) => {
    return (
        <div className="mb-10  sm:w-52 ">
            <img className=" aspect-square mt-4 max-w-xs w-24 object-contain" src={img} />
        </div>
    );
};

export default NewsLogo;