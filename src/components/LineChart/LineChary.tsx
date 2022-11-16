import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// ChartJS.defaults.backgroundColor = '#2E2E2E';
ChartJS.defaults.borderColor = '#777777';
ChartJS.defaults.color = '#777777';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#8FE9D0'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#FFCC21'
    }
  ]
};

interface LineChartProps {
  option: Record<any, any>;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const { option } = props;
  return <Line options={option} data={data} />;
};

export default LineChart;
