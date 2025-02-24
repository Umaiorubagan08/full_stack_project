import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./BarChart.css"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const employeeTasks = [
  { name: "Muthukumar", completed: 1, incomplete: 1 },
  { name: "Ganesan", completed: 1, incomplete: 2 },
  { name: "Balaji", completed: 1, incomplete: 1 },
  { name: "Prakash Raj", completed: 0, incomplete: 2 },
  { name: "Manoj", completed: 1, incomplete: 1 },
  { name: "Ramkumar", completed: 0, incomplete: 2 },
  { name: "Divya", completed: 0, incomplete: 2 },
  { name: "Harish", completed: 1, incomplete: 1 },
  { name: "Swetha", completed: 0, incomplete: 2 },
  { name: "Ravi", completed: 1, incomplete: 1 },
  { name: "Sangeetha", completed: 0, incomplete: 2 },
  { name: "Rajesh", completed: 0, incomplete: 2 },
  { name: "Aarthi", completed: 0, incomplete: 2 },
  { name: "Praveen", completed: 0, incomplete: 2 },
];

const labels = employeeTasks.map((emp) => emp.name);
const completedData = employeeTasks.map((emp) => emp.completed);
const incompleteData = employeeTasks.map((emp) => emp.incomplete);

// Bar Chart Data
const barData = {
  labels,
  datasets: [
    {
      label: "Completed Tasks",
      data: completedData,
      backgroundColor: "rgba(75, 192, 192, 0.8)",
      borderRadius: 5,
    },
    {
      label: "Incomplete Tasks",
      data: incompleteData,
      backgroundColor: "rgba(255, 99, 132, 0.8)",
      borderRadius: 5,
    },
  ],
};

// Pie Chart Data
const totalCompleted = completedData.reduce((sum, val) => sum + val, 0);
const totalIncomplete = incompleteData.reduce((sum, val) => sum + val, 0);
const pieData = {
  labels: ["Completed", "Incomplete"],
  datasets: [
    {
      data: [totalCompleted, totalIncomplete],
      backgroundColor: ["#00c9a7", "#ff6384"],
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};

// Line Chart Data
const timeLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const lineData = {
  labels: timeLabels,
  datasets: [
    {
      label: "Completed Tasks Over Time",
      data: [5, 8, 12, 15],
      borderColor: "#00c9a7",
      backgroundColor: "rgba(0, 201, 167, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export default function EmployeeTaskDashboard() {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>
      <div className="header">
        <h2>Employee Task Dashboard</h2>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h3> Task Overview</h3>
        <Bar data={barData} />
      </div>

      {/* Pie Chart & Line Chart */}
      <div className="chart-grid">
        {/* Pie Chart */}
        <div className="chart-container">
          <h3> Task Distribution</h3>
          <Pie data={pieData} />
        </div>

        {/* Line Chart */}
        <div className="chart-container">
          <h3> Completed Tasks </h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}
