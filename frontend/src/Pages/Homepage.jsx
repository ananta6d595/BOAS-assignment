import { useQuery } from "@tanstack/react-query";
import Hero from "../Components/HomePageSections/Hero";
import FeaturedProduct from "../Components/HomePageSections/FeaturedProduct";
import LevisSection from "../Components/HomePageSections/LevisSection";
import ShopByFitProducts from "../Components/HomePageSections/ShopByFitProducts";
import DownloadAppSection from "../Components/HomePageSections/DownloadAppSection";
import ShopByBrand from "../Components/HomePageSections/ShopByBrand";
import CustomerSaySection from "../Components/HomePageSections/CustomerSaySection";
import MissionSection from "../Components/HomePageSections/MissionSection";

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
            <CustomerSaySection></CustomerSaySection>
            <MissionSection></MissionSection>
        </div>
    );
};

export default Homepage;