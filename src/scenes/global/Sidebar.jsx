import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
/* import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"; */
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { GiDoubleNecklace } from "react-icons/gi";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EmailIcon from '@mui/icons-material/Email';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ListIcon from '@mui/icons-material/List';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import anu from "../../assets/anu.jpg"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
  console.log(signedInUser, "signedInUser")
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>



          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={anu}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Esamayak
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Dashboard
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Ecommerce"
              to="/ecommerce" // Make sure this points to the correct route
              icon={<ShoppingCartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Product Detail"
              to="/productdetail" // Make sure this points to the correct route
              icon={<ShoppingCartIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {signedInUser === 'Auc' || signedInUser === 'Admin' || signedInUser === 'Superadmin' || signedInUser === null ? <div>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Utility
              </Typography>
              <Item
                title="Email Utility"
                to="/emailutility"
                icon={<EmailIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="SMS Utility"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="File Upload Utility"
                to="/insert"
                icon={<FileUploadIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Report Utility"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div> : null}

            {signedInUser === 'Bid' || signedInUser === 'Admin' || signedInUser === 'Superadmin' || signedInUser === null ? <div>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Registration Form"
                to="/registration"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Login Form"
                to="/login"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="View Data of Jewellery"
                to="/jewellery"
                icon={<GiDoubleNecklace size={25} />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="View Data of Diamond"
                to="/diamond"
                icon={<DiamondOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div> : null}

            {signedInUser === 'Admin' || signedInUser === 'Superadmin' || signedInUser === null ? <div>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div> : null}

            {signedInUser === 'Superadmin' || signedInUser === null ? <div>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Admin
              </Typography>
              <Item
                title="Menu Items"
                to="/MenuItemForm"
                icon={<ListIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Admin Panel"
                to="/adminpanel"
                icon={< AdminPanelSettingsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div> : null}
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  );
};

export default Sidebar;