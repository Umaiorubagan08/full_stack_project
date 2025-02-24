import React, { useState } from "react";

export default function Documents() {
  const documents = [
    {
      title: "Employee Handbook",
      description: "A comprehensive guide to company policies, benefits, and more.",
      type: "PDF",
      date: "2024-09-15",
    },
    {
      title: "Annual Financial Report",
      description: "Detailed analysis of the company’s financial performance for the year.",
      type: "Excel",
      date: "2024-11-20",
    },
    {
      title: "Project Proposal",
      description: "Proposal for the upcoming development project including timelines, materials, and resources.",
      type: "Word",
      date: "2024-12-05",
    },
    {
      title: "Onboarding Guide",
      description: "Step-by-step guide to help new employees get started.",
      type: "PDF",
      date: "2024-10-01",
    },
    {
      title: "Sales Report Q3",
      description: "Quarterly sales performance report.",
      type: "Excel",
      date: "2024-09-30",
    },
  ];

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 2;

  const handleView = (documentTitle) => {
    alert(`Viewing document: ${documentTitle}`);
  };

  const handleDownload = (documentTitle) => {
    alert(`Downloading document: ${documentTitle}`);
  };

  const filteredDocuments = documents
    .filter(
      (doc) =>
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") return a.title.localeCompare(b.title);
      if (sortOption === "date") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const displayedDocuments = filteredDocuments.slice(
    (currentPage - 1) * documentsPerPage,
    currentPage * documentsPerPage
  );

  // CSS Styles
  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "100%",
      margin: "2px auto",
      width: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    searchBar: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxSizing: "border-box",
    },
    sortOptions: {
      marginBottom: "20px",
    },
    documentList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    },
    documentCard: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardDescription: {
      marginBottom: "10px",
    },
    cardMeta: {
      color: "#555",
      fontSize: "0.9rem",
      marginBottom: "10px",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "0 5px",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "5px",
    },
    pageButton: {
      padding: "8px 12px",
      border: "1px solid #007bff",
      backgroundColor: "#fff",
      color: "#007bff",
      borderRadius: "5px",
      cursor: "pointer",
    },
    activePageButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Documents</h1>
      <input
        style={styles.searchBar}
        type="text"
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.sortOptions}>
        <label>
          Sort by:{" "}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">None</option>
            <option value="title">Title</option>
            <option value="date">Date</option>
          </select>
        </label>
      </div>
      <div style={styles.documentList}>
        {displayedDocuments.map((doc, index) => (
          <div key={index} style={styles.documentCard}>
            <h2 style={styles.cardTitle}>{doc.title}</h2>
            <p style={styles.cardDescription}>{doc.description}</p>
            <p style={styles.cardMeta}>Type: {doc.type}</p>
            <p style={styles.cardMeta}>Date: {doc.date}</p>
            <div>
              <button style={styles.button} onClick={() => handleView(doc.title)}>
                View
              </button>
              <button
                style={styles.button}
                onClick={() => handleDownload(doc.title)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            style={{
              ...styles.pageButton,
              ...(currentPage === index + 1 ? styles.activePageButton : {}),
            }}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
