import { Tab, Tabs, Link, Slider } from "@nextui-org/react";
import { Waypoint } from "react-waypoint";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

function Research(props) {
    const [selected, setSelected] = useState("1");
    const [sliderValue, setSliderValue] = useState([3, 4]);

    const publications = useRef(null);
    const presentations = useRef(null);
    const leadership = useRef(null);
    const education = useRef(null);

    const sectionChanged = (section) => {
        setSelected(section);
        switch (section) {
            case "1":
                setSliderValue([3, 4]);
                break;
            case "2":
                setSliderValue([2, 3]);
                break;
            case "3":
                setSliderValue([1, 2]);
                break;
            case "4":
                setSliderValue([0, 1]);
                break;
            default:
                break;
        }
    };

    const handleSelection = (key) => {
        //setSelected(key);
        switch (key) {
            case "1":
                publications.current.scrollIntoView();
                break;
            case "2":
                presentations.current.scrollIntoView();
                break;
            case "3":
                leadership.current.scrollIntoView();
                break;
            case "4":
                education.current.scrollIntoView();
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex flex-row mt-40 snap-center snap-always noScrollbar scroll-smooth">
            <div className="hidden md:sticky md:top-16 md:h-screen md:flex md:flex-col md:justify-center">
                <Tabs
                    isVertical
                    size="lg"
                    className="md:px-10 lg:px-20 font-bold"
                    color="primary"
                    variant="underlined"
                    selectedKey={selected}
                    onSelectionChange={(key) => handleSelection(key)}
                >
                    <Tab key={"1"} title="Selected Publications"></Tab>
                    <Tab key={"2"} title="Selected Presentations"></Tab>
                    <Tab key={"3"} title="Professional Leadership"></Tab>
                    <Tab key={"4"} title="Education"></Tab>
                </Tabs>
            </div>
            <div className="md:hidden h-screen sticky top-16 flex justify-center items-center">
                <Slider
                    orientation="vertical"
                    className="h-1/3 transition-all ease-in-out"
                    aria-label="slider"
                    minValue={0}
                    maxValue={4}
                    step={1}
                    value={sliderValue}
                    size="sm"
                    hideThumb
                    renderThumb={(props) => <div {...props}></div>}
                ></Slider>
            </div>
            <div className="h-screen">
                <Waypoint onEnter={() => props.waypointCallback("2")} />
            </div>
            <div className="w-full px-5 md:px-0 md:w-2/3 text-pretty overflow-scroll snap-y snap-mandatory h-screen noScrollbar scroll-smooth">
                <section
                    ref={publications}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("1")}
                    />
                    <h1 className="md:hidden">Research</h1>
                    <h1 className="text-3xl font-bold">
                        Selected Publications
                    </h1>
                    <div className="hidden md:block">
                        <h2 className="text-xl font-semibold mt-4">Books</h2>
                        <ul className="list-disc list-inside">
                            <li className="pt-3">
                                <span className="font-bold">
                                    “Eu sit sint laboris dolore”
                                </span>{" "}
                                textbook, Out Soon
                            </li>
                            <li className="pt-3">
                                <Link
                                    className="font-bold underline"
                                    href="https://example.com"
                                    isExternal
                                    showAnchorIcon
                                >
                                    “Excepteur nostrud adipisicing”
                                </Link>{" "}
                                textbook, September 2020
                            </li>
                            <li className="pt-3">
                                <Link
                                    className="font-bold underline"
                                    href="https://example.com"
                                    isExternal
                                    showAnchorIcon
                                >
                                    “Veniam velit laboris aliquip est et
                                    voluptate”
                                </Link>{" "}
                                textbook, June 2019
                            </li>
                            <li className="pt-3">
                                <Link
                                    className="font-bold underline"
                                    href="https://example.com"
                                    isExternal
                                    showAnchorIcon
                                >
                                    “Veniam incididunt sit fugiat”
                                </Link>{" "}
                                textbook, March 2013
                            </li>
                        </ul>
                        <h2 className="text-xl font-semibold mt-4">Papers</h2>
                        <ul className="list-disc list-inside">
                            <li className="pt-3">
                                <span className="font-bold">
                                    “Non ad exercitation minim sint sit enim
                                    occaecat tempor pariatur commodo?”
                                </span>{" "}
                                Ullamco do dolor ut et pariatur, Spring 2022.
                            </li>
                            <li className="pt-3">
                                <span className="font-bold">
                                    “Lorem exercitation nulla nulla ullamco ex
                                    veniam fugiat sit officia magna labore
                                    nostrud.”
                                </span>{" "}
                                Journal, August 2021
                            </li>
                            <li className="pt-3">
                                <span className="font-bold">
                                    “Reprehenderit magna sint tempor nostrud
                                    sint dolor est aliquip dolore nostrud
                                    cupidatat ea laborum.”
                                </span>{" "}
                                The Journal, Spring, 2013
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex flex-col">
                        <Tabs placement="top" variant="underlined">
                            <Tab key="1" title="Books">
                                <ul className="list-disc list-inside text-sm">
                                    <li className="pt-3">
                                        <span className="font-bold">
                                            “Eu sit sint laboris dolore”
                                        </span>{" "}
                                        textbook, Out Soon
                                    </li>
                                    <li className="pt-3">
                                        <Link
                                            className="font-bold underline text-sm"
                                            href="https://example.com"
                                            isExternal
                                            showAnchorIcon
                                        >
                                            “Excepteur nostrud adipisicing”
                                        </Link>{" "}
                                        textbook, September 2020
                                    </li>
                                    <li className="pt-3">
                                        <Link
                                            className="font-bold underline text-sm"
                                            href="https://example.com"
                                            isExternal
                                            showAnchorIcon
                                        >
                                            “Veniam velit laboris aliquip est et
                                            voluptate”
                                        </Link>{" "}
                                        textbook, June 2019
                                    </li>
                                    <li className="pt-3">
                                        <Link
                                            className="font-bold underline text-sm"
                                            href="https://example.com"
                                            isExternal
                                            showAnchorIcon
                                        >
                                            “Veniam incididunt sit fugiat”
                                        </Link>{" "}
                                        textbook, March 2013
                                    </li>
                                </ul>
                            </Tab>
                            <Tab key="2" title="Papers">
                                <ul className="list-disc list-inside text-sm">
                                    <li className="pt-3">
                                        <span className="font-bold">
                                            “Non ad exercitation minim sint sit
                                            enim occaecat tempor pariatur
                                            commodo?”
                                        </span>{" "}
                                        Ullamco do dolor ut et pariatur, Spring
                                        2022.
                                    </li>
                                    <li className="pt-3">
                                        <span className="font-bold">
                                            “Lorem exercitation nulla nulla
                                            ullamco ex veniam fugiat sit officia
                                            magna labore nostrud.”
                                        </span>{" "}
                                        Journal, August 2021
                                    </li>
                                    <li className="pt-3">
                                        <span className="font-bold">
                                            “Reprehenderit magna sint tempor
                                            nostrud sint dolor est aliquip
                                            dolore nostrud cupidatat ea
                                            laborum.”
                                        </span>{" "}
                                        The Journal, Spring, 2013
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                </section>
                <section
                    ref={presentations}
                    className="snap-start snap-always min-h-screen flex flex-col justify-center"
                >
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("2")}
                    />
                    <h1 className="md:hidden">Research</h1>
                    <h1 className="text-3xl font-bold">
                        Selected Presentations
                    </h1>
                    <ul className="list-disc list-inside text-sm md:text-medium">
                        <li className="pt-3">
                            <span className="font-bold">
                                Incredible College
                            </span>
                            , University of Universities, 2021
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Chicago Show</span>:
                            Annual Conference, 2014, 2015, 2016
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Big Society</span>:
                            Boston, 2012, 2013, 2014
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">
                                International Conference
                            </span>
                            , Rome, 2013{" "}
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Finance Meeting</span>,
                            Chicago, 2015-2019{" "}
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">World Congress</span>,
                            London, 2008{" "}
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">
                                American University
                            </span>
                            , Las Vegas, 2003{" "}
                        </li>
                    </ul>
                </section>
                <section
                    ref={leadership}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("3")}
                    />
                    <h1 className="md:hidden">Research</h1>
                    <h1 className="text-3xl font-bold">
                        Professional Leadership
                    </h1>
                    <ul className="list-disc list-inside text-sm md:text-medium">
                        <li className="pt-3">
                            <span className="font-bold">Director</span>, Big
                            Company, 2020-2024
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Head of Research</span>,
                            Second Company, 2015-2020
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Senior Analyst</span>,
                            Third Company, 2006-2015
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">Junior Analyst</span>,
                            Fourth Company, 2003-2006
                        </li>
                    </ul>
                </section>
                <section
                    ref={education}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("4")}
                    />
                    <h1 className="md:hidden">Research</h1>
                    <h1 className="text-3xl font-bold">Education</h1>
                    <ul className="list-disc list-inside text-sm md:text-medium">
                        <li className="pt-3">
                            <span className="font-bold">Ph.D., Economics</span>,
                            University of Universities, 2005
                        </li>
                        <li className="pt-3">
                            <span className="font-bold">M.S., Economics</span>,
                            University of Universities, 2003
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

Research.propTypes = {
    waypointCallback: PropTypes.func.isRequired,
};

export default Research;
