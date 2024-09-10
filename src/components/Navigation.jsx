import PropTypes from "prop-types";
import {
    Button,
    Navbar,
    NavbarMenuToggle,
    NavbarContent,
    Spacer,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import React from "react";

function Navigation(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const NavigationItems = [
        "John Doe",
        "Research",
        "Market Comments",
        "Projects",
        "Contact",
    ];

    const handleMenuClick = (index) => {
        props.handleSelection(index);
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            isBlurred={false}
            isBordered
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarContent
                justify="around"
                className="hidden sm:flex md:gap-12 lg:gap-32"
            >
                <NavbarItem>
                    <Button
                        size="md"
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                            props.active === "1"
                                ? "font-bold border-b-2 border-black"
                                : ""
                        }`}
                        radius="none"
                        variant="light"
                        onClick={() => props.handleSelection("1")}
                    >
                        John Doe
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        size="md"
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                            props.active === "2"
                                ? "font-bold border-b-2 border-black"
                                : ""
                        }`}
                        radius="none"
                        variant="light"
                        onClick={() => props.handleSelection("2")}
                    >
                        Research
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        size="md"
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                            props.active === "3"
                                ? "font-bold border-b-2 border-black"
                                : ""
                        }`}
                        radius="none"
                        variant="light"
                        onClick={() => props.handleSelection("3")}
                    >
                        Market Comments
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        size="md"
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                            props.active === "4"
                                ? "font-bold border-b-2 border-black"
                                : ""
                        }`}
                        radius="none"
                        variant="light"
                        onClick={() => props.handleSelection("4")}
                    >
                        Projects
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        size="md"
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                            props.active === "5"
                                ? "font-bold border-b-2 border-black"
                                : ""
                        }`}
                        radius="none"
                        variant="light"
                        onClick={() => props.handleSelection("5")}
                    >
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="">
                <Spacer />
            </NavbarContent>
            <NavbarMenu>
                {NavigationItems.map((item, index) => (
                    <NavbarMenuItem key={index + 1}>
                        <Button
                            size="md"
                            disableRipple
                            className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:scale-105 ${
                                props.active === `${index + 1}`
                                    ? "font-bold border-b-2 border-black"
                                    : ""
                            }`}
                            radius="none"
                            variant="light"
                            onClick={() => handleMenuClick(`${index + 1}`)}
                        >
                            {item}
                        </Button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

Navigation.propTypes = {
    active: PropTypes.string,
    handleSelection: PropTypes.func.isRequired,
};

export default Navigation;
