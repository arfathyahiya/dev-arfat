export const AboutMe = () => {
    return (
        <section id="about-me" className="m-auto py-10">
            <div className="">
                <img
                 src="https://cdn.discordapp.com/avatars/597664623780691978/a146987a9ec9ac678e9083dde51d311c.webp?size=4096"
                 alt="DevArfat" className="w-72 rounded-full m-auto border-green-500 border-x-2 border-y-2"/>
                <h2 className="text-4xl text-center pt-5 font-semibold">Hi, I'm Yaser Arfat</h2>
                <p className="m-auto px-5 py-2 text-2xl text-center md:text-justify">
                    I'm a Python Programmer: I Build websites, automate tasks, and create bots for Discord, Reddit, Twitter, etc. And web scraping too!<br/>Check out my <a href="https://www.upwork.com/freelancers/~01365c1dff864bc96e" className="underline text-green-400 italic">Upwork Profile</a> for my recently completed projects.
                </p>
            </div>
        </section>
    );
}