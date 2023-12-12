import React from "react";
import SavingGrids from "../SavingGrids";
import Container from "../Container";

const SaveSection = () => {
    const savingContent = [
        {
            image: "https://d1k98jamwa6vrd.cloudfront.net/Frame_d938a0a104.svg?w=96&amp;q=75",
            example: "Driving over 27 kms",
            amount: "(8.35 kg of O2)",
        },
        {
            image: "https://d1k98jamwa6vrd.cloudfront.net/Frame_60102_269c873235.svg?w=96&amp;q=75",
            example: " Showering 15 times",
            amount: "(945 liters of water)",
        },
        {
            image: "https://d1k98jamwa6vrd.cloudfront.net/Layer_1_37bfccf775.svg?w=96&amp;q=75",
            example: "1 small balcony",
            amount: "(land occupation of 3 sqm per year)",
        },
        {
            image: "https://d1k98jamwa6vrd.cloudfront.net/Frame_1_236c570f3e.svg?w=96&amp;q=75",
            example: "425 tomatoes",
            amount: "(12.2 g of PO4)",
        },
    ];
    return (
        <Container>
            <div className="max-w-[1500px] mx-auto mb-10">
                <div className="space-y-4 ">
                    <h2 className="leading-7 lg:leading-9 lg:text-xl font-medium">
                        Buying just one pair of vintage jeans saves
                    </h2>
                    <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 text-white gap-4 md:gap-y-12 md:gap-x-0 lg:gap-4 xl:gap-10 items-center justify-center">
                        {savingContent.map((data, index) => {
                            return <SavingGrids key={index} data={data}></SavingGrids>;
                        })}

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SaveSection;
