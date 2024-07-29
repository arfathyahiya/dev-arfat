import { Tooltip } from "@material-tailwind/react"
import { GithubLogo, InstagramLogo, LinkedinLogo, MailLogo, TwitterLogo, YouTubeLogo } from "../assets/social-icons"


export const Socials = () => {
    const animate = {
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
    }
    const socials = [
        {
            content: "github.com/arfathyahiya",
            link: "https://github.com/arfathyahiya",
            logo: <GithubLogo/>
        },
        {
            content: "linkedin.com/in/arfathyahiya",
            link: "https://linkedin.com/in/arfathyahiya",
            logo: <LinkedinLogo/>
        },
        {
            content: "youtube.com/@devarfat/",
            link: "https://www.youtube.com/@devarfat/",
            logo: <YouTubeLogo/>
        },
        {
            content: "twitter.com/arfathyahiya",
            link: "https://twitter.com/arfathyahiya",
            logo: <TwitterLogo/>
        },
        {
            content: "instagram.com/arfathyahiya",
            link: "https://instagram.com/arfathyahiya",
            logo: <InstagramLogo/>
        },
        {
            content: "arfathyahiya@gmail.com",
            link: "mailto:arfathyahiya@gmail.com",
            logo: <MailLogo/>
        }
    ]
    return (
        <div className="flex space-x-8 justify-center">
            {socials.map(social => (
                    <Tooltip content={social.content} animate={animate}>
                        <a href={social.link} target="_blank" rel="noreferrer">
                    {social.logo}
                </a>
                    </Tooltip>
                ))}
            {/* <Tooltip 
                content="github.com/arfathyahiya" 
                animate={animate}>
                <a href="https://github.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <GithubLogo/>
                </a>
            </Tooltip>
            <Tooltip 
                content="twitter.com/arfathyahiya" 
                animate={animate}>
                <a href="https://twitter.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <TwitterLogo/>
                </a>
            </Tooltip>

            <Tooltip 
                content="linkedin.com/in/arfathyahiya" 
                animate={animate}>
                <a href="https://linkedin.com/in/arfathyahiya/" target="_blank" rel="noreferrer">
                    <LinkedinLogo/>
                </a>
            </Tooltip>

            <Tooltip 
                content="instagram.com/arfathyahiya" 
                animate={animate}>
                <a href="https://instagram.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <InstagramLogo/>
                </a>
            </Tooltip>
            
            <Tooltip 
                content="arfathyahiya@gmail.com" 
                animate={animate}>
                <a href="mailto:arfathyahiya@gmail.com" target="_blank" rel="noreferrer">
                    <MailLogo/>
                </a>
            </Tooltip> */}
        </div>
    )
}