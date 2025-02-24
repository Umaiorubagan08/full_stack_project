import React from "react";
import Table from "./Table"; 

export default function Dashboard() {  // ✅ Ensure it's exported correctly
    console.log("Rendering Dashboard component");
    return (
        <div>
            <Table /> {/* ✅ This will display the Employee Table */}
        </div>
    );
}
