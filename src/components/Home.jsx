import React, { useState } from "react";
import "./Home.css"; 

export default function Home() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Muthukumar S.H",
            position: "Founder and CEO",
            tasks: [
                { taskId: 1, task: "(1) Strategize Q1 Goals", status: "Incomplete", deadline: "2025-01-15" },
                { taskId: 2, task: "(2) Conduct Meeting with Partners", status: "Complete", deadline: "2025-01-20" },
            ],
        },
        {
            id: 2,
            name: "Ganesan",
            position: "Full Stack Developer",
            tasks: [
                { taskId: 3, task: "(1) Develop Backend API", status: "Incomplete", deadline: "2025-02-10" },
                { taskId: 4, task: "(2) Integrate Payment Gateway", status: "Incomplete", deadline: "2025-02-25" },
            ],
        },
        {
            id: 3,
            name: "Balaji",
            position: "Junior Front-end Developer",
            tasks: [
                { taskId: 5, task: "(1) Develop UI for Dashboard", status: "Incomplete", deadline: "2025-02-05" },
                { taskId: 6, task: "(2) Fix UI Bugs", status: "Complete", deadline: "2025-01-10" },
            ],
        },
        {
            id: 4,
            name: "Prakash Raj",
            position: "HR Manager",
            tasks: [
                { taskId: 7, task: "(1) Schedule Interviews", status: "Incomplete", deadline: "2025-01-12" },
                { taskId: 8, task: "(2) Review Employee Benefits", status: "Incomplete", deadline: "2025-01-18" },
            ],
        },
        {
            id: 5,
            name: "Manoj",
            position: "Python Developer",
            tasks: [
                { taskId: 9, task: "(1) Maintaing the code", status: "Incomplete", deadline: "2025-01-30" },
                { taskId: 10, task: "(2) Coordinate with backend developer", status: "Complete", deadline: "2025-01-22" },
            ],
        },
        {
            id: 6,
            name: "Ramkumar",
            position: "Manager",
            tasks: [
                { taskId: 11, task: "(1) Schedule Interviews", status: "Incomplete", deadline: "2025-01-12" },
                { taskId: 12, task: "(2) Review Employee Benefits", status: "Incomplete", deadline: "2025-01-18" },
            ],
        },
        {
            id: 7,
            name: "Kumar",
            position: "IT Support",
            tasks: [
                { taskId: 11, task: "(1) Schedule Interviews for Fresher Candidates", status: "Incomplete", deadline: "2025-01-12" },
                { taskId: 12, task: "(2) Review The Documents", status: "Incomplete", deadline: "2025-01-18" },
            ],
        },
        {
            id: 8,
            name: "Divya R.",
            position: "Marketing Manager",
            tasks: [
                { taskId: 13, task: "(1) Create Marketing Campaign", status: "Incomplete", deadline: "2025-02-15" },
                { taskId: 14, task: "(2) Analyze Customer Feedback", status: "Incomplete", deadline: "2025-02-20" },
            ],
        },
        {
            id: 9,
            name: "Harish Kumar",
            position: "Product Manager",
            tasks: [
                { taskId: 15, task: "(1) Define Product Roadmap", status: "Incomplete", deadline: "2025-02-10" },
                { taskId: 16, task: "(2) Coordinate with Design Team", status: "Complete", deadline: "2025-01-25" },
            ],
        },
        {
            id: 10,
            name: "Swetha",
            position: "UI/UX Designer",
            tasks: [
                { taskId: 17, task: "(1) Design Wireframes for New Feature", status: "Incomplete", deadline: "2025-02-05" },
                { taskId: 18, task: "(2) Create UI Mockups", status: "Incomplete", deadline: "2025-02-12" },
            ],
        },
        {
            id: 11,
            name: "Vishnu",
            position: "Data Scientist",
            tasks: [
                { taskId: 19, task: "(1) Analyze Data Trends", status: "Incomplete", deadline: "2025-02-25" },
                { taskId: 20, task: "(2) Build Predictive Model", status: "Incomplete", deadline: "2025-03-05" },
            ],
        },
        {
            id: 12,
            name: "Ravi Kumar",
            position: "DevOps Engineer",
            tasks: [
                { taskId: 21, task: "(1) Set up Continuous Integration Pipeline", status: "Incomplete", deadline: "2025-02-18" },
                { taskId: 22, task: "(2) Manage Cloud Infrastructure", status: "Complete", deadline: "2025-01-30" },
            ],
        },
        {
            id: 13,
            name: "Sangeetha",
            position: "Quality Assurance Engineer",
            tasks: [
                { taskId: 23, task: "(1) Write Test Cases", status: "Incomplete", deadline: "2025-02-20" },
                { taskId: 24, task: "(2) Perform Regression Testing", status: "Incomplete", deadline: "2025-03-01" },
            ],
        },
        {
            id: 14,
            name: "Anjali",
            position: "Business Analyst",
            tasks: [
                { taskId: 25, task: "(1) Gather Business Requirements", status: "Incomplete", deadline: "2025-02-10" },
                { taskId: 26, task: "(2) Prepare Requirement Document", status: "Incomplete", deadline: "2025-02-15" },
            ],
        },
        {
            id: 15,
            name: "Rajesh",
            position: "Software Engineer",
            tasks: [
                { taskId: 27, task: "(1) Develop Authentication System", status: "Incomplete", deadline: "2025-02-20" },
                { taskId: 28, task: "(2) Fix Security Vulnerabilities", status: "Incomplete", deadline: "2025-02-25" },
            ],
        },
        {
            id: 16,
            name: "Aarthi",
            position: "Content Writer",
            tasks: [
                { taskId: 29, task: "(1) Write Technical Blog Post", status: "Incomplete", deadline: "2025-01-25" },
                { taskId: 30, task: "(2) Create Product Descriptions", status: "Incomplete", deadline: "2025-02-05" },
            ],
        },
        {
            id: 17,
            name: "Nithya",
            position: "SEO Specialist",
            tasks: [
                { taskId: 31, task: "(1) Optimize Website Content", status: "Incomplete", deadline: "2025-02-10" },
                { taskId: 32, task: "(2) Track Keyword Performance", status: "Incomplete", deadline: "2025-02-15" },
            ],
        },
        {
            id: 18,
            name: "Deepak",
            position: "System Administrator",
            tasks: [
                { taskId: 33, task: "(1) Maintain Server Uptime", status: "Incomplete", deadline: "2025-01-30" },
                { taskId: 34, task: "(2) Install System Updates", status: "Incomplete", deadline: "2025-02-05" },
            ],
        },
        {
            id: 19,
            name: "Saranya",
            position: "Customer Support",
            tasks: [
                { taskId: 35, task: "(1) Assist Customers with Inquiries", status: "Incomplete", deadline: "2025-01-15" },
                { taskId: 36, task: "(2) Resolve Customer Issues", status: "Incomplete", deadline: "2025-01-25" },
            ],
        },
        {
            id: 20,
            name: "Praveen",
            position: "Sales Executive",
            tasks: [
                { taskId: 37, task: "(1) Reach Out to Potential Clients", status: "Incomplete", deadline: "2025-02-10" },
                { taskId: 38, task: "(2) Prepare Sales Presentations", status: "Incomplete", deadline: "2025-02-20" },
            ],
        },
        
        
    ]);

    const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });
    const [newTask, setNewTask] = useState({ employeeId: "", task: "", deadline: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name" || name === "position") {
            setNewEmployee({ ...newEmployee, [name]: value });
        } else {
            setNewTask({ ...newTask, [name]: value });
        }
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        if (newEmployee.name && newEmployee.position) {
            setEmployees([
                ...employees,
                { id: employees.length + 1, ...newEmployee, tasks: [] },
            ]);
            setNewEmployee({ name: "", position: "" });
        }
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.employeeId && newTask.task && newTask.deadline) {
            setEmployees((prevState) =>
                prevState.map((employee) =>
                    employee.id === parseInt(newTask.employeeId)
                        ? {
                              ...employee,
                              tasks: [
                                  ...employee.tasks,
                                  {
                                      taskId: employee.tasks.length + 1,
                                      task: newTask.task,
                                      status: "Incomplete",
                                      deadline: newTask.deadline,
                                  },
                              ],
                          }
                        : employee
                )
            );
            setNewTask({ employeeId: "", task: "", deadline: "" });
        }
    };

    const handleMarkTaskComplete = (employeeId, taskId) => {
        setEmployees((prevState) =>
            prevState.map((employee) =>
                employee.id === employeeId
                    ? {
                          ...employee,
                          tasks: employee.tasks.map((task) =>
                              task.taskId === taskId
                                  ? { ...task, status: task.status === "Incomplete" ? "Complete" : "Incomplete" }
                                  : task
                          ),
                      }
                    : employee
            )
        );
    };

    // Main Content for home-container

    return (
        <div className="home-container">
            <header className="header">
                <div className="header-content">
                    <h1 className="header-title"> Employee Management </h1>
                    <button className="profile-button"> View Profile </button>
                </div>
            </header>

            <main className="main-content">
                <div className="welcome-section">
                    <h2 className="welcome-title">Welcome to the Employee Management System</h2>
                    <p className="welcome-text">Manage employee details, view tasks, and more!</p>
                </div>

                <div className="stats-section">
                    <div className="stat-card">
                        <h3>Total Employees</h3>
                        <p className="stat-value">{employees.length}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Active Tasks</h3>
                        <p className="stat-value">
                            {employees.reduce((acc, employee) => acc + employee.tasks.length, 0)}
                        </p>
                    </div>
                </div>

                <div className="manage-employees">
                    {/* <h3>Manage Employees</h3> */}
                    <button
                        className="add-employee-button"
                        onClick={() => document.getElementById("addEmployeeModal").showModal()}
                    >
                        Add New Employee
                    </button>
                    <button
                        className="add-task-button"
                        onClick={() => document.getElementById("addTaskModal").showModal()}
                    >
                        Add Task to Employee
                    </button>
                </div>

                <div className="employee-list">
    <h3>Employee List</h3>
    <div className="employee-list-container">
        <table className="employee-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Assigned Tasks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>
                            <ul>
                                {employee.tasks.map((task) => (
                                    <li key={task.taskId}>
                                        {task.task} -{" "}
                                        <span className={task.status === "Complete" ? "task-complete" : "task-incomplete"}>
                                            {task.status}
                                        </span>{" "} <br />
                                        <span className="task-deadline">Deadline: {task.deadline}</span> 
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            {employee.tasks.map((task) => (
                                <button
                                    key={task.taskId}
                                    className="mark-task-btn"
                                    onClick={() => handleMarkTaskComplete(employee.id, task.taskId)}
                                >
                                    {task.status === "Complete" ? "Undo" : "Complete"}
                                </button>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

            </main>


            <dialog id="addEmployeeModal" className="modal">
                <h3 className="modal-title">Add New Employee</h3>
                <form onSubmit={handleAddEmployee}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newEmployee.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Position</label>
                        <input
                            type="text"
                            name="position"
                            value={newEmployee.position}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => document.getElementById("addEmployeeModal").close()}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Add Employee
                        </button>
                    </div>
                </form>
            </dialog>

            <dialog id="addTaskModal" className="modal">
                <h3 className="modal-title">Add Task to Employee</h3>
                <form onSubmit={handleAddTask}>
                    <div className="input-group">
                        <label>Select Employee</label>
                        <select
                            name="employeeId"
                            value={newTask.employeeId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Employee</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Task</label>
                        <input
                            type="text"
                            name="task"
                            value={newTask.task}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={newTask.deadline}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => document.getElementById("addTaskModal").close()}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="submit-button">
                            Add Task
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}
