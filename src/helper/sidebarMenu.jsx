import { Dashboard, MedicalServices } from "@mui/icons-material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Masks } from "@mui/icons-material";

export const menu = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    path: "dashboard/",
  },
  {
    name: "All User",
    icon: <AccountCircleOutlined />,
    path: "dashboard/all-users",
  },
  {
    name: "Doctors",
    icon: <Masks />,
    path: "dashboard/doctors",
  },
  {
    name: "Services",
    icon: <MedicalServices />,
    path: "dashboard/services",
  },
];
