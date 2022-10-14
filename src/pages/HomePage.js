import Navigation from "../components/Navigation.js";
import About from "../components/About.js";
import FitnessPlan from "../components/FitnessPlan.js";
import Kurse from "../components/Kurse.js";
import Footer from "../components/Footer.js";
import Tools from "../components/Tools.js"

export const HomePage = () => {
    return (
        <>
            <Navigation />
            <About />
            <Tools />
            <FitnessPlan />
            <Kurse />
            <Footer />
        </>
    );
}