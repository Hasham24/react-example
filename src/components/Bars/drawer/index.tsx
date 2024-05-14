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
import { SlLock } from "react-icons/sl";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Avatar } from "../../Images";
interface Props {
  window?: () => Window;
}
const drawerWidth = 260;
const DrawerComponent = (props: Props, ref: any) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  // local states
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // methods handling
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  useImperativeHandle(ref, () => ({
    handleDrawerToggle: function () {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    },
  }));
  // list data variable
  const drawerData = [
    {
      title: "General",
      icon: (
        <HiMiniSquare2Stack
          size={28}
          color={selectedIndex === 0 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Security",
      icon: (
        <SlLock size={28} color={selectedIndex === 1 ? "#FFFFFF" : "62618F"} />
      ),
    },
    {
      title: "Notifications",
      icon: (
        <MdOutlineEmail
          size={28}
          color={selectedIndex === 2 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Billing",
      icon: (
        <FaRegMoneyBillAlt
          size={28}
          color={selectedIndex === 3 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
    {
      title: "Analytics",
      icon: (
        <MdOutlineAnalytics
          size={28}
          color={selectedIndex === 4 ? "#FFFFFF" : "62618F"}
        />
      ),
    },
  ];

  // drawer jsx
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
            onClick={() => setSelectedIndex(index)}
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
