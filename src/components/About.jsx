import { Image } from "@nextui-org/react";
import { Waypoint } from "react-waypoint";

import PropTypes from "prop-types";

function About(props) {
    return (
        <div className="h-dvh flex flex-col justify-center items-center snap-start snap-always">
            <Image
                src="avatar.png"
                alt="John Doe"
                className="m-5 scale-50 md:scale-80"
            />
            <Waypoint onEnter={() => props.waypointCallback("1")} />
            <h1 className="text-4xl font-bold">John Doe</h1>
        </div>
    );
}

About.propTypes = {
    waypointCallback: PropTypes.func.isRequired,
};

export default About;
