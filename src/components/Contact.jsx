import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faEnvelope,
    faGlobe,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@nextui-org/react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

function Contact(props) {
    return (
        <div className="flex flex-row justify-center items-center p-10 md:justify-start md:items-start snap-end snap-always md:pl-28 md:py-20 bg-primary">
            <div className="flex flex-col">
                <h1 className="font-bold text-4xl md:text-6xl text-white mb-10">
                    Contact
                </h1>
                <Waypoint onEnter={() => props.waypointCallback("5")} />
                <ul className="font-normal text-white text-md md:text-xl">
                    <li className="mt-5">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span className="font-semibold">
                            {" "}
                            Building & Room:
                        </span>{" "}
                        AB 1234
                    </li>
                    <li className="mt-5">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className="font-semibold"> Address:</span> 221B Baker St., London
                    </li>
                    <li className="mt-5">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="font-semibold">
                            {" "}
                            Office Phone:
                        </span>{" "}
                        (111) 222-3333
                    </li>
                    <li className="mt-5">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="font-semibold"> Email:</span>{" "}
                        <Link
                            href="mailto:mail@example.com"
                            className="text-white underline md:text-xl"
                        >
                            mail@example.com
                        </Link>
                    </li>
                    <li className="mt-5">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span className="font-semibold">
                            {" "}
                            Related Sites:
                        </span>{" "}
                        <Link
                            href="https://example.com"
                            className="text-white underline md:text-xl"
                            isExternal
                            showAnchorIcon
                        >
                            Research Website Here
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Contact.propTypes = {
    waypointCallback: PropTypes.func.isRequired,
};

export default Contact;
