import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";

export const Home = () => {
    return (
        <div className="px-5 md:px-20 lg:px-40 bg-[#0f0f00] text-white">
            <AboutMe />
            <Socials />
            <Projects />
        </div>
    )
}