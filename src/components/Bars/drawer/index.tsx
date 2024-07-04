import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { MdOutlineAnalytics, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SlLock } from "react-icons/sl";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {Avatar} from "../../Images"; // Adjust the import according to your project structure

interface Props {
  window?: () => Window;
}

const drawerWidth = 260;

const DrawerComponent = (props: Props, ref: any) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  // Local states
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // List data
  const drawerData = [
    {
      title: "General",
      route: "/settings",
      icon: (
        <HiMiniSquare2Stack
          size={28}
          color={selectedIndex === 0 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Security",
      route: "/settings/security",
      icon: (
        <SlLock size={28} color={selectedIndex === 1 ? "#FFFFFF" : "62618F"} />
      ),
    },
    {
      title: "Notifications",
      route: "/settings/notifications",
      icon: (
        <MdOutlineEmail
          size={28}
          color={selectedIndex === 2 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Billing",
      route: "/settings/billing",
      icon: (
        <FaRegMoneyBillAlt
          size={28}
          color={selectedIndex === 3 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Analytics",
      route: "/settings/analytics",
      icon: (
        <MdOutlineAnalytics
          size={28}
          color={selectedIndex === 4 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
  ];

  // Method handling
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  useImperativeHandle(ref, () => ({
    handleDrawerToggle: () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    },
  }));

  const drawerItemHandler = (index: number, route: string) => {
    setSelectedIndex(index);
    console.log(route)
    navigate(`${route}`);
  };

  // Drawer JSX
  const drawer = (
    <Box sx={{ margin: "10px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Avatar />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            sx={{ color: "#1A194D", fontSize: "16px", fontFamily: "InterBold" }}
          >
            Ildiko Gaspar
          </Typography>
          <Typography
            sx={{
              color: "#62618F",
              fontSize: "14px",
              fontFamily: "InterLight",
            }}
          >
            @igaspar
          </Typography>
        </Box>
      </Box>
      <List>
        {drawerData.map((item, index) => (
          <ListItem
            key={String(index)}
            disablePadding
            onClick={() => drawerItemHandler(index, item?.route)}
            sx={{
              backgroundColor:
                selectedIndex === index ? "#1565D8" : "transparent",
              marginTop: "20px",
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  color: selectedIndex === index ? "#FFFFFF" : "#62618F",
                  fontSize: "14px",
                  fontFamily: "interLight",
                }}
                primary={item?.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      {/* Temporary drawer for mobile/tablet */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* Permanent drawer for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F5F9FF",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default forwardRef(DrawerComponent);
