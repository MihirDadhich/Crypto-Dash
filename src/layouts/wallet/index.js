import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, Link } from '@mui/material';
import Web3 from 'web3';
import MDBox from "components/MDBox";

// Crypto Dash React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const WalletIntegration = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log('MetaMask is not installed.');
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (!web3) {
        // MetaMask is not installed, redirect user to download it
        window.open('https://metamask.io/download.html', '_blank');
        return;
      }

      // Request account access from MetaMask
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      
      // Get account balance
      const balance = await web3.eth.getBalance(accounts[0]);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
  <Grid item>
    <Typography variant="h5">Wallet Integration</Typography>
  </Grid>
  <Grid item>
    <Grid container direction="column" alignItems="center"> {/* Use a container with column direction */}
      {!web3 && (
        <Typography variant="body1" color="red">
           <Link href="https://metamask.io/download.html" target="_blank"> MetaMask is not installed. Download Now</Link>
        </Typography>
      )}
      {web3 && !account && (
        <Button variant="contained" color="primary" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
      {account && (
        <div>
          <Typography variant="body1">Connected Account: {account}</Typography>
          <Typography variant="body1">Balance: {balance} ETH</Typography>
        </div>
      )}
    </Grid>
  </Grid>
</Grid>


      </MDBox>
    </DashboardLayout>
  );
};

export default WalletIntegration;
