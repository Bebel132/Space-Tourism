import { Button, Stack, styled, Typography, type ButtonProps } from "@mui/material"
import theme from "../config/theme"

interface MainProps {
    title: string,
    subtitle: string,
    text: string
}

const MainButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  height: "272px",
  width: "272px",
  borderRadius: "100%",
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: "32px",
  color: theme.palette.primary.dark,
  '&::before': {
    content: '""',
    position: "absolute",
    height: "408px",
    width: "408px",
    borderRadius: "100%",
    transition: ".5s",
  },
  '&:hover&::before': {
    background: "#ffffff40",
  }
}));

export const Main = ({ title, subtitle, text } : MainProps) => {
    return (
        <Stack sx={{
            maxWidth: "1110px",
            width: "100%",
            margin: "0 auto",
            height: "632px",
            justifyContent: "flex-end",
            color: theme.palette.primary.contrastText,
            padding: "clamp(80px, 7vw, 128px) 0"
        }}>
            <Stack sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Stack sx={{
                    width: "540px",
                    gap: "24px"
                }}>
                    <Typography sx={{
                        fontFamily: theme.typography.h2,
                        fontSize: "28px",
                        letterSpacing: "4px",
                        color: theme.palette.primary.light
                    }}>
                        {subtitle.toUpperCase()}
                    </Typography>
                    <Typography sx={{
                        fontFamily: theme.typography.h1,
                        fontSize: "144px"
                    }}>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography sx={{
                        fontFamily: theme.typography.h2,
                        fontSize: "18px",
                        color: theme.palette.primary.light
                    }}>
                        {text}
                    </Typography>
                </Stack>
                <MainButton>EXPLORE</MainButton>
            </Stack>
        </Stack>
    )
}