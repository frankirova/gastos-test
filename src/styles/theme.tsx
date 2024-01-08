import { extendTheme } from "@chakra-ui/react";

export const MyNewTheme = extendTheme({
    colors: {
        primary: "#353634",
        // secondary: "#ecf2f6",
        secondary: "#4d648d",
    },
    fonts: {
        body: "roboto",
    },
    components: {
        Button: {
            variants: {
                solid: {
                    bg: "secondary",
                    color: "white",
                    _hover: { bg: "secondary", color: "white" },
                },
                ghost: {
                    color: "primary",
                    _hover: { bg: "secondary", color: "white" },
                },
                // Agrega más variantes según tus necesidades
            },
        },
    },
    styles: {
        global: {
            body: {
                fontFamily: "body",
                fontWeight: "normal",
                letterSpacing: "0.06em",
            },
        },
    },
});