import { ProjectCard } from "./ProjectCard";
import { ClientsFeedback }from "../assets/clients_feedback";


export const Projects = () => {
    return(
        <div>
            <h2 className="text-4xl text-center pt-5 font-semibold">Clients Feedback</h2>
            <div className="flex flex-wrap justify-center md:mb-4">
                {ClientsFeedback.map(job => (
                    <ProjectCard title={job.title} feedback={job.feedback} ratings={job.rating} client_name={job.client_name}/>
                ))}
            </div>
        </div>
    );
}