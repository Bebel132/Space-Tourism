import { Button, Stack, Typography } from "@mui/material"
import theme from "../config/theme"
import { useWebViewContext } from "../contexts/WebViewContext";

interface MainProps {
    title: string,
    subtitle: string,
    text: string
}

export const Main = ({ title, subtitle, text } : MainProps) => {
    const { isMobile, isPhone, isTablet, isNotebook } = useWebViewContext();
    return (
        <Stack sx={{
            maxWidth: "1110px",
            width: "100%",
            margin: "0 auto",
            height: isMobile ? "100%" : undefined,
            justifyContent: isMobile ? "center" : "flex-end",
            color: theme.palette.primary.contrastText,
            padding: isPhone 
                ? undefined 
                : isTablet
                ? "clamp(80px, 7vw, 128px) 0"
                : isNotebook
                ? "clamp(80px, 6vw, 128px) 0"
                : undefined
        }}>
            <Stack sx={{
                width: "100%",
                display: "flex",
                height: isTablet 
                    ? "672px" 
                    : isPhone 
                    ? "676px"
                    : isNotebook 
                    ? "100%"
                    :"632px",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-end",
                justifyContent: "space-between",
            }}>
                <Stack sx={{
                    maxWidth: isMobile ? "327px" : "540px",
                    width: "100%",
                    margin: isMobile ? "24px" : undefined, 
                    gap: "24px",
                    textAlign: isMobile ? "center" : undefined
                }}>
                    <Typography sx={{
                        fontFamily: theme.typography.h2,
                        fontSize: "clamp(12px, 2vw, 28px)",
                        letterSpacing: "4px",
                        color: theme.palette.primary.light
                    }}>
                        {subtitle.toUpperCase()}
                    </Typography>
                    <Typography sx={{
                        fontFamily: theme.typography.h1,
                        fontSize: "clamp(110px, 10vw, 144px)"
                    }}>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography sx={{
                        fontFamily: theme.typography.h2,
                        fontSize: "clamp(12px, 2vw, 18px)",
                        lineHeight: "180%",
                        color: theme.palette.primary.light
                    }}>
                        {text}
                    </Typography>
                </Stack>
                <Stack sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: isMobile ? "center" : undefined,
                    alignItems: isMobile ? "center" : "flex-end"
                }}>
                    <Button
                        sx={{
                            background: theme.palette.primary.contrastText,
                            height: isPhone ? "144px" : "272px",
                            width: isPhone ? "144px" : "272px",
                            borderRadius: "100%",
                            fontFamily: theme.typography.h1.fontFamily,
                            fontSize: isPhone ? "20px" : "32px",
                            color: theme.palette.primary.dark,
                            position: "relative",
                            '&::before': {
                            content: '""',
                            position: "absolute",
                            height: isPhone ? "216px" : "408px",
                            width: isPhone ? "216px" : "408px",
                            borderRadius: "100%",
                            transition: ".5s",
                            },
                            '&:hover::before': {
                            background: "#ffffff40",
                            }
                        }}
                        >
                            EXPLORE
                        </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}