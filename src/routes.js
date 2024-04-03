import Dashboard from "layouts/dashboard";
import Crypto from "layouts/crypto"; // Assuming you have a Crypto layout/component
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Groups3Icon from '@mui/icons-material/Groups3';
import Wallet from "layouts/wallet"
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Popullation Chart",
    key: "dashboard",
    icon: <Icon fontSize="small"><Groups3Icon /></Icon>,
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
  {
    type: "collapse",
    name: "Wallet", // Name of the route
    key: "wallet", // Unique key for the route
    icon: <Icon fontSize="small"><AccountBalanceWalletIcon /></Icon>, // Icon for the route (adjust as needed)
    route: "/wallet", // Path for the route
    component: <Wallet />, // Component for the route
  },
];

export default routes;
