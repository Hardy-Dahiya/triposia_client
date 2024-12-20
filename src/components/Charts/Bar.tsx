'use client';
import React from 'react';
import Chart from 'react-apexcharts';

interface BarChartProps {
  options: ApexCharts.ApexOptions; // Type for the options
  series: ApexAxisChartSeries; // Type for the series
  width?: string | number; // Optional width
  height?: string | number; // Optional height
}

const BarChart: React.FC<BarChartProps> = ({ options, series, width = '500', height = '400' }) => {
  return (
    <div className="bar-chart">
      <Chart options={options} series={series} type="bar" width={width} height={height} />
    </div>
  );
};

export default BarChart;
