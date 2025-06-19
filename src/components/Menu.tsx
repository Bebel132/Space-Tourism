import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
  type ButtonProps,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/shared/logo.svg";
import theme from "../config/theme";
import { useWebViewContext } from "../contexts/WebViewContext";

const MenuButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ButtonProps & { active?: boolean }>(({ theme, active }) => ({
  color: theme.palette.primary.contrastText,
  height: "96px",
  borderRadius: "0",
  borderBottom: active ? "5px solid #ffffff" : "5px solid transparent",
  transition: "border-bottom 0.3s ease",
  alignItems: "center",
  "&:hover": {
    borderBottom: "5px solid #d8d8d8",
    backgroundColor: "transparent",
  },
}));

export const Menu = () => {
  const { isMobile, isPhone } = useWebViewContext();
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "DESTINATION", path: "/destination" },
    { label: "CREW", path: "/crew" },
    { label: "TECHNOLOGY", path: "/technology" },
  ];
  return isPhone ? (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        p: "24px 24px",
      }}
    >
      <img src={Logo} alt="logo" width="40px" height="40px" />
      <MenuIcon sx={{color: theme.palette.primary.contrastText, width: "40px", height: "40px"}}/>
    </Stack>
    ) : (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        mt: "40px",
        pl: "64px",
      }}
    >
      <img src={Logo} alt="logo" width="48px" height="48px" />
      <Box
        sx={{
          background: "#97979725",
          width: "100%",
          height: "2px",
          zIndex: "2",
          m: "0 -25px 0 64px",
        }}
      />
      <Stack
        sx={{
          zIndex: "1",
          backdropFilter: "blur(80px)",
          display: "flex",
          flexDirection: "row",
          gap: "48px",
          p: isMobile ? undefined : "0 64px",
          justifyContent: "right",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {menuItems.map((item, i) => (
          <MenuButton
            key={item.path}
            onClick={() => {}}
            active={location.pathname === item.path}
          >
            <Typography
              sx={{
                fontFamily: theme.typography.h2,
                fontSize: "14px",
                mr: "12px",
              }}
            >
              {"0" + i}
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.h2,
                fontSize: "14px",
                fontWeight: "400",
                letterSpacing: "2px",
              }}
            >
              {" " + item.label}
            </Typography>
          </MenuButton>
        ))}
      </Stack>
    </Stack>
  );
};
