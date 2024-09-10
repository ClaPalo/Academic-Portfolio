import { Tab, Tabs, Slider } from "@nextui-org/react";
import { Waypoint } from "react-waypoint";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

function Market(props) {
    const [selected, setSelected] = useState("1");
    const [sliderValue, setSliderValue] = useState([2, 3]);

    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);

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
                section1.current.scrollIntoView();
                break;
            case "2":
                section2.current.scrollIntoView();
                break;
            case "3":
                section3.current.scrollIntoView();
                break;
            case "4":
                section4.current.scrollIntoView();
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
                    className="px-5 md:px-10 lg:px-20 font-bold"
                    color="primary"
                    variant="underlined"
                    selectedKey={selected}
                    onSelectionChange={(key) => handleSelection(key)}
                >
                    <Tab key={"1"} title="Section 1"></Tab>
                    <Tab key={"2"} title="Section 2"></Tab>
                    <Tab key={"3"} title="Section 3"></Tab>
                    <Tab key={"4"} title="Section 4"></Tab>
                </Tabs>
            </div>
            <div className="md:hidden h-screen sticky top-16 flex justify-center items-center">
                <Slider
                    orientation="vertical"
                    className="h-1/3 transition-all ease-in-out"
                    minValue={0}
                    maxValue={4}
                    step={1}
                    value={sliderValue}
                    size="sm"
                    hideThumb
                    aria-label="slider"
                    renderThumb={(props) => <div {...props}></div>}
                ></Slider>
            </div>
            <div className="h-screen">
                <Waypoint onEnter={() => props.waypointCallback("3")} />
            </div>
            <div className="w-full px-5 md:px-0 md:w-2/3 text-pretty overflow-scroll snap-y snap-mandatory h-screen noScrollbar scroll-smooth">
                <section
                    ref={section1}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <h1 className="md:hidden">Market Comments</h1>
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("1")}
                    />
                    <h1 className="text-3xl font-bold">Section1</h1>

                    <h2 className="text-xl font-semibold mt-4">
                        Minim deserunt consequat mollit nulla sint est ad ullamco nostrud amet irure reprehenderit.
                    </h2>
                    <p>
                        Officia excepteur adipisicing mollit non enim. Fugiat eu
                        amet consequat. Anim reprehenderit pariatur non quis
                        reprehenderit sunt ad et incididunt excepteur occaecat
                        deserunt. Eu eu sunt cupidatat magna nostrud nulla qui
                        nulla veniam qui officia ad officia est laboris. Et ea
                        velit laborum sint sint Lorem pariatur consectetur aute
                        velit dolore nisi incididunt.
                    </p>
                </section>
                <section
                    ref={section2}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <h1 className="md:hidden">Market Comments</h1>
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("2")}
                    />
                    <h1 className="text-3xl font-bold">Section2</h1>
                    <h2 className="text-xl font-semibold mt-4">
                        Sit est nostrud et id magna nostrud sit.
                    </h2>
                    <p>
                        Eiusmod esse laboris ad consequat officia voluptate
                        officia dolor tempor non cupidatat magna. Proident culpa
                        in duis velit. Tempor ut labore id non ea. Deserunt
                        veniam sint excepteur sint incididunt. Amet sit
                        excepteur cupidatat magna id aliqua.
                    </p>
                </section>
                <section
                    ref={section3}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <h1 className="md:hidden">Market Comments</h1>
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("3")}
                    />
                    <h1 className="text-3xl font-bold">Section3</h1>
                    <h2 className="text-xl font-semibold mt-4">Ipsum ut pariatur mollit sint cupidatat do ipsum irure laborum proident.</h2>
                    <p>
                        Officia consectetur adipisicing voluptate ea in eu
                        cillum laborum id pariatur deserunt est in eiusmod enim.
                        Excepteur ullamco ad occaecat ex nulla. Dolore voluptate
                        enim qui elit nostrud cillum elit commodo quis amet ea.
                        Ipsum officia mollit deserunt cillum id. Deserunt in
                        pariatur fugiat sunt commodo velit in. Ullamco Lorem
                        ipsum irure. Laborum reprehenderit aliqua exercitation
                        amet occaecat commodo consectetur ex fugiat aute esse.
                        Fugiat sit adipisicing ipsum duis ullamco in esse culpa
                        cillum incididunt.
                    </p>
                </section>
                <section
                    ref={section4}
                    className="snap-center snap-always min-h-screen flex flex-col justify-center"
                >
                    <h1 className="md:hidden">Market Comments</h1>
                    <Waypoint
                        fireOnRapidScroll={false}
                        key="key"
                        onEnter={() => sectionChanged("4")}
                    />
                    <h1 className="text-3xl font-bold">Section4</h1>
                    <h2 className="text-xl font-semibold mt-4">Nostrud ullamco elit reprehenderit eu in proident nulla consectetur anim incididunt reprehenderit enim in veniam.</h2>
                    <p>
                        Officia consectetur adipisicing voluptate ea in eu
                        cillum laborum id pariatur deserunt est in eiusmod enim.
                        Excepteur ullamco ad occaecat ex nulla. Dolore voluptate
                        enim qui elit nostrud cillum elit commodo quis amet ea.
                        Ipsum officia mollit deserunt cillum id. Deserunt in
                        pariatur fugiat sunt commodo velit in. Ullamco Lorem
                        ipsum irure. Laborum reprehenderit aliqua exercitation
                        amet occaecat commodo consectetur ex fugiat aute esse.
                        Fugiat sit adipisicing ipsum duis ullamco in esse culpa
                        cillum incididunt.
                    </p>
                </section>
            </div>
        </div>
    );
}

Market.propTypes = {
    waypointCallback: PropTypes.func.isRequired,
};

export default Market;
