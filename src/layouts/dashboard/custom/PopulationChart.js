import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultLineChart from '../../../examples/Charts/LineCharts/DefaultLineChart/index'; // Adjust the import path as per your project structure
import { Grid } from '@mui/material';
import Groups3Icon from '@mui/icons-material/Groups3';
const PopulationChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const populationData = response.data.data;
        // Process populationData to fit the format expected by the DefaultLineChart component
        const formattedData = {
          labels: populationData.map(item => item.Year).reverse(),
          datasets: [
            {
              label: 'Population',
              data: populationData.map(item => item.Population).reverse(),
              color: 'primary', // Specify the color of the icon
            },
          ],
        };
              
        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Grid>
      {chartData && (
        <DefaultLineChart
          icon={{ color: 'primary', component: <Groups3Icon />}} // Adjust icon props as needed
          title="Population Chart"
          description="This chart displays the population of the United States over time."
          height="400px" // Adjust the height of the chart as needed
          chart={chartData}
        />
      )}
      </Grid>
    </div>
  );
};

export default PopulationChart;
