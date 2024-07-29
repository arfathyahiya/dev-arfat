import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { ClientsFeedback } from "../components/ClientsFeedback";
import { Socials } from "../components/Socials";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="px-5 md:px-20 lg:px-40 bg-[#0f0f00] text-white">
            <AboutMe />
            <Socials />
            <Experience />
            <ClientsFeedback />
            <Footer />
        </div>
    )
}