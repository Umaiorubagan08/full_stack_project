import React from "react";

export default function Drive() {
  const documents = [
    {
      title: "Employee Handbook",
      description: "A comprehensive guide to company policies, benefits, and more.",
      type: "PDF",
      date: "2024-01-10"
    },
    {
      title: "Annual Report 2024",
      description: "A detailed report of the company’s performance and statistics.",
      type: "Google Sheets",
      date: "2024-02-15"
    },
    {
      title: "Project Proposal: Q2",
      description: "Proposal for upcoming projects and timelines.",
      type: "Google Docs",
      date: "2024-03-01"
    },
    {
      title: "Employee Training Materials",
      description: "Training documents for new employees, including onboarding guides.",
      type: "Word",
      date: "2024-03-10"
    },
    {
      title: "Marketing Strategy 2024",
      description: "Marketing strategies for the upcoming year.",
      type: "Excel",
      date: "2024-04-05"
    },
    {
      title: "Quarterly Financial Summary",
      description: "Summary of the company’s finances for the last quarter.",
      type: "PDF",
      date: "2024-04-20"
    },
    {
      title: "Team Meeting Notes - March",
      description: "Notes from the March 2024 team meeting.",
      type: "Google Docs",
      date: "2024-03-25"
    },
    {
      title: "Client Contract - ABC Corp",
      description: "Contract with ABC Corporation regarding the new project.",
      type: "Word",
      date: "2024-05-02"
    },
    {
      title: "Budget Allocation 2024",
      description: "Detailed breakdown of the company’s budget for 2024.",
      type: "Google Sheets",
      date: "2024-05-10"
    }
  ];

  const handleView = (docTitle) => {
    alert(`Viewing document: ${docTitle}`);
  };

  const handleDownload = (docTitle) => {
    alert(`Downloading document: ${docTitle}`);
  };

  // Styles
  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "90%",
      margin: "auto",
      maxWidth: "1200px",
      height: "80vh",
      overflowY: "auto"
    },
    title: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "30px",
      textAlign: "center"
    },
    documentList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "20px"
    },
    documentCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    documentTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333"
    },
    documentDescription: {
      fontSize: "1rem",
      color: "#555",
      margin: "10px 0"
    },
    documentMeta: {
      fontSize: "0.9rem",
      color: "#777"
    },
    documentActions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px"
    },
    actionBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s"
    },
    actionBtnHover: "#0056b3"
  };

  const Button = ({ label, onClick }) => (
    <button
      style={styles.actionBtn}
      onMouseOver={(e) => (e.target.style.backgroundColor = styles.actionBtnHover)}
      onMouseOut={(e) => (e.target.style.backgroundColor = styles.actionBtn.backgroundColor)}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Drive</h1>
      <div style={styles.documentList}>
        {documents.map((doc, index) => (
          <div
            key={index}
            style={styles.documentCard}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h2 style={styles.documentTitle}>{doc.title}</h2>
            <p style={styles.documentDescription}>{doc.description}</p>
            <p style={styles.documentMeta}>Type: {doc.type}</p>
            <p style={styles.documentMeta}>Date: {doc.date}</p>
            <div style={styles.documentActions}>
              <Button label="View" onClick={() => handleView(doc.title)} />
              <Button label="Download" onClick={() => handleDownload(doc.title)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
