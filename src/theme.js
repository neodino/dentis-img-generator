import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
    fonts: {
        heading: "Open Sans",
        body: "Open Sans",
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("white", "gray.800")(props),
                minW: '370px'
            },
        }),
    }
});
export default theme;