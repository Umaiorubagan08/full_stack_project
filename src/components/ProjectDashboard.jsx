import React from "react";

const projects = [
    { id: 1, name: "Keerthi Iyer", status: "Complete", projectName: "Website Redesign" },
    { id: 2, name: "Iniya Nair", status: "Pending", projectName: "Mobile App Development" },
    { id: 3, name: "Govind Verma", status: "Upcoming", projectName: "Database Migration" },
    { id: 4, name: "Nisha Patel", status: "Complete", projectName: "Cloud Integration" },
    { id: 5, name: "Karan Menon", status: "Pending", projectName: "E-commerce Platform" },
];

export default function ProjectDashboard() {
    const handleButtonClick = (project) => {
        alert(`Project "${project.projectName}" is currently: ${project.status}`);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            padding: "10px",
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "white",
            color: "black",
            margin: "auto",
        }}>
            <h1 style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.5rem",
                color: "black",
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: "bold",
            }}>
                Project Dashboard
            </h1>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "5px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#555", color: "black" }}>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center", color: "black" }}> Team </th>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center", color: "black" }}> Project Name </th>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center", color: "black" }}> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{project.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{project.projectName}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
                                <button
                                    style={{
                                        padding: "5px 15px",
                                        backgroundColor:
                                            project.status === "Complete"
                                                ? "green"
                                                : project.status === "Pending"
                                                    ? "orange"
                                                    : "blue",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                    }}
                                    onClick={() => handleButtonClick(project)}
                                >
                                    {project.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer style={{
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#1560bd",
                color: "white",
                borderTop: "1px solid #ddd",
            }}>
                <p>&copy; 2025 EmpHub | All rights reserved</p>
            </footer>
        </div>
    );
}
