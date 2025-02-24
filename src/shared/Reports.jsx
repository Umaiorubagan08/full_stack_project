// import React, { useState, useEffect } from "react";

// export default function Reports() {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchReports = () => {
//       setReports([
//         "Report 1 - Generated at " + new Date().toLocaleTimeString(),
//         "Report 2 - Generated at " + new Date().toLocaleTimeString(),
//       ]);
//     };

//     const interval = setInterval(fetchReports, 5000); // Update reports every 5 seconds
//     fetchReports();

//     return () => clearInterval(interval); // Clean up on component unmount
//   }, []);

//   return (
//     <div>
//       <h1>My Reports</h1>
//       <ul>
//         {reports.map((report, index) => (
//           <li key={index}>{report}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
