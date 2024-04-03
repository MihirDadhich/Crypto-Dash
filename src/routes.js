import Dashboard from "layouts/dashboard";
import Crypto from "layouts/crypto"; // Assuming you have a Crypto layout/component
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Crypto", // Name of the route
    key: "crypto", // Unique key for the route
    icon: <Icon fontSize="small"><CurrencyBitcoinIcon /></Icon>, // Icon for the route (adjust as needed)
    route: "/crypto", // Path for the route
    component: <Crypto />, // Component for the route
  },
];

export default routes;
