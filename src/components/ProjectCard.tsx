import { Rating, Typography, Card, CardBody, CardFooter } from "@material-tailwind/react"

type ProjectCardProps = {
    title: string
    feedback?: string
    ratings: number
    client_name: string
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card className="m-5 w-full md:w-1/2 lg:my-4 lg:w-1/3 bg-[#111] border-green-900 border-2">
            <CardBody>
                <Typography variant="h3" color="white" className="font-bold text-xl mb-1">{props.title}</Typography>
                <Rating value={props.ratings} ratedColor="green" unratedColor="green" readonly/>
                <Typography variant="paragraph" color="white">{props.feedback}</Typography>
            </CardBody>
            <CardFooter className="">
                <Typography variant="lead" className="text-blue-gray-300 absolute bottom-6 right-6">
                    ~ {props.client_name}
                </Typography>
            </CardFooter>
        </Card>
    )
}