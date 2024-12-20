'use client';
import React from 'react';
import Chart from 'react-apexcharts';

interface LineChartProps {
  options: ApexCharts.ApexOptions; // Type for the options
  series: ApexAxisChartSeries; // Type for the series
  width?: string | number; // Optional width
  height?: string | number; // Optional height
}

const LineChart: React.FC<LineChartProps> = ({
  options,
  series,
  width = '500',
  height = '400',
}) => {
  return (
    <div className="line-chart">
      <Chart options={options} series={series} type="line" width={width} height={height} />
    </div>
  );
};

export default LineChart;
