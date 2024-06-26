import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// Crypto Dash React components
import MDBox from "components/MDBox";

// Crypto Dash React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  const [cryptoData, setCryptoData] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const decodeHTML = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container justifyContent="flex-end">
          <Typography style={{ color: 'orange', fontWeight: 'bold', paddingRight: '8px' }}>
            Currency:
          </Typography>
          <Grid item>
            <Select
              value={selectedCurrency}
              onChange={handleChange}
              style={{ color: 'white', border: 'orange', borderRadius: 4 }}
            >
              {cryptoData && Object.keys(cryptoData.bpi).map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {decodeHTML(cryptoData.bpi[currency].symbol)} {currency}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {cryptoData && (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="warning"
                  icon={<CurrencyBitcoinIcon />}
                  title={cryptoData.bpi[selectedCurrency].description}
                  count={`${decodeHTML(cryptoData.bpi[selectedCurrency].symbol)} ${cryptoData.bpi[selectedCurrency].rate}`}
                  percentage={{
                    color: "primary",
                    amount: "",
                    label: "Bitcoin",
                  }}
                />
              </MDBox>
            </Grid>
          )}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
