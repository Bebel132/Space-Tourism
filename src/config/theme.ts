import { createTheme } from "@mui/material"

export const colors = {
    bluePrimary: "#0b0d17",
    blueSecondary: "#d0d6f9",
    white: "#ffffff"
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#0b0d17",
            light: "#d0d6f9",
            contrastText: "#ffffff"
        }
    },
    typography: {
        h1: {
            fontFamily: "Bellefair, serif",
        },
        h2: {
            fontFamily: "Barlow, sans-serif",
        },
    }
})

export default theme