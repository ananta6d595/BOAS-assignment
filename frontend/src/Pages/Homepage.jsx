import { useQuery } from "@tanstack/react-query";
import Hero from "../Components/Hero";
import FeaturedProduct from "../Components/FeaturedProduct";
import LevisSection from "../Components/LevisSection";
import ShopByFitProducts from "../Components/ShopByFitProducts";
import DownloadAppSection from "../Components/DownloadAppSection";
import ShopByBrand from "../Components/ShopByBrand";

const Homepage = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('https://api.github.com/repos/TanStack/query').then(
    //             (res) => res.json(),
    //         ),
    // })

    // if (isPending) return 'Loading...'

    // if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Hero></Hero>
            <FeaturedProduct></FeaturedProduct>
            <LevisSection></LevisSection>
            <ShopByFitProducts></ShopByFitProducts>
            <DownloadAppSection></DownloadAppSection>
            <ShopByBrand></ShopByBrand>
        </div>
    );
};

export default Homepage;