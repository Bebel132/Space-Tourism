import { Stack } from "@mui/material"
import { Menu } from "../components/Menu"
import Background from "../assets/home/background-home-desktop.jpg"
import { Main } from "../components/Main"

export const Home = () => {

    return (
        <Stack sx={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            minHeight: "100vh"
        }}>
            <Menu />
            <Main 
                subtitle="so, you want to travel to" 
                title="space" 
                text="Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
            />
        </Stack>
    )
}