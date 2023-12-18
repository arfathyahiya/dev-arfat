import { Tooltip } from "@material-tailwind/react"
import { GithubLogo, InstagramLogo, LinkedinLogo, MailLogo, TwitterLogo } from "../assets/social-icons"


export const Socials = () => {
    return (
        <div className="flex space-x-8 justify-center">
            <Tooltip 
                content="github.com/arfathyahiya" 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <a href="https://github.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <GithubLogo/>
                </a>
            </Tooltip>
            <Tooltip 
                content="twitter.com/arfathyahiya" 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <a href="https://twitter.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <TwitterLogo/>
                </a>
            </Tooltip>

            <Tooltip 
                content="linkedin.com/in/arfathyahiya" 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <a href="https://linkedin.com/in/arfathyahiya/" target="_blank" rel="noreferrer">
                    <LinkedinLogo/>
                </a>
            </Tooltip>

            <Tooltip 
                content="instagram.com/arfathyahiya" 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <a href="https://instagram.com/arfathyahiya" target="_blank" rel="noreferrer">
                    <InstagramLogo/>
                </a>
            </Tooltip>
            
            <Tooltip 
                content="arfathyahiya@gmail.com" 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <a href="mailto:arfathyahiya@gmail.com" target="_blank" rel="noreferrer">
                    <MailLogo/>
                </a>
            </Tooltip>
        </div>
    )
}