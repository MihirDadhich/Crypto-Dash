import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function OrdersOverview() {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = response.data.data;
        console.log(data)
        setPopulationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Population Overview
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        {populationData.map((item, index) => (
          <MDBox key={index} mb={1}>
            <MDTypography variant="body1">{item.Year}: {item.Population}</MDTypography>
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
