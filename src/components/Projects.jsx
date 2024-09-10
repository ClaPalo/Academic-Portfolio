import { Waypoint } from "react-waypoint";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Tabs,
    Tab,
    Image,
} from "@nextui-org/react";

function Projects(props) {
    return (
        <div className="flex flex-col h-screen md:pt-0 snap-start pt-32 snap-always noScrollbar scroll-smooth justify-center md:items-center p-10">
            <Waypoint onEnter={() => props.waypointCallback("4")} />
            <h1 className="text-5xl md:text-6xl font-bold mb-10 mt-0">
                Projects
            </h1>
            <div className="hidden md:flex md:flex-row overflow-auto gap-10">
                <Card className="h-96 flex-1 hover:opacity-80 hover:scale-105 m-5">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-black/60 uppercase font-bold">
                            Project 1
                        </p>
                        <h4 className="text-black font-medium text-large">
                            Beautiful Project
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.imghippo.com/files/WyFCP1725987155.jpg"
                    />
                </Card>
                <Card className="h-96 flex-1 hover:opacity-80 hover:scale-105 m-5">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-black/60 uppercase font-bold">
                            Project 2
                        </p>
                        <h4 className="text-black font-medium text-large">
                            Interesting Project
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.imghippo.com/files/mEInL1725987277.jpg"
                    />
                </Card>
                <Card className="h-96 flex-1 hover:opacity-80 hover:scale-105 m-5">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-black/60 uppercase font-bold">
                            Project 3
                        </p>
                        <h4 className="text-black font-medium text-large">
                            Exciting Project
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.imghippo.com/files/4Ziwb1725987306.jpg"
                    />
                </Card>
            </div>
            <div className="md:hidden flex flex-col w-full h-screen">
                <Tabs variant="" placement="top">
                    <Tab key="1" title="Project 1">
                        <Card className="flex-1">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-black/60 uppercase font-bold">
                                    Project 1
                                </p>
                                <h4 className="text-black font-medium text-large">
                                    Beautiful Project
                                </h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://i.imghippo.com/files/WyFCP1725987155.jpg"
                            />
                        </Card>
                    </Tab>
                    <Tab key="2" title="Project 2">
                        <Card className="flex-1">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-black/60 uppercase font-bold">
                                    Project 2
                                </p>
                                <h4 className="text-black font-medium text-large">
                                    Interesting Project
                                </h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://i.imghippo.com/files/mEInL1725987277.jpg"
                            />
                        </Card>
                    </Tab>
                    <Tab key="3" title="Project 3">
                        <Card className="flex-1">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-black/60 uppercase font-bold">
                                    Project 3
                                </p>
                                <h4 className="text-black font-medium text-large">
                                    Exciting Project
                                </h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://i.imghippo.com/files/4Ziwb1725987306.jpg"
                            />
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

Projects.propTypes = {
    waypointCallback: PropTypes.func.isRequired,
};

export default Projects;
