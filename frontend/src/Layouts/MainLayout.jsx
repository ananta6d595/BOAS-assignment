import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import SideNavBar from "../Components/SideNavBar";
import { useEffect, useState } from "react";

const MainLayout = () => {
    const [nav, setNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        if (width > 768) {
            setNav(false); // setNav(state change) can't be used without event handler or side Effect.
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);


    const navLinks = [
        {
            link: "https://shop.boas.co/collections/vintage-jeans-women",
            label: "Vintage Women",
        },
        {
            link: "https://shop.boas.co/collections/vintage-jeans-men",
            label: "Vintage Men",
        },
        {
            link: "https://shop.boas.co/collections/vintage-jeans-under-30-euro",
            label: "Jeans under €30 / £30",
        },
        {
            link: "https://shop.boas.co/collections/vintage-levis-jeans",
            label: "Levi's Jeans",
        },
    ];

    return (
        <div className="!scroll-smooth">
            <SideNavBar
                navLinks={navLinks}
                handleNav={handleNav}
                nav={nav}></SideNavBar>
            <NavBar
                navLinks={navLinks}
                handleNav={handleNav}
                nav={nav}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
