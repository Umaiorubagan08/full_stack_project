import React from "react";

export default function Services() {
    return (
        <div className="services-page">
            <header className="header-section">
                <div className="header-container">
                    <div className="header-logo">Employee Management</div>
                </div>
            </header>

            <main className="main-content">
                <section className="introduction-section">
                    <h1>Our Services</h1>
                    <p>
                        We offer a comprehensive range of services designed to simplify employee management, enhance team productivity, and foster a positive workplace culture.
                    </p>
                </section>

                <section className="services-list">
                    <h2>What We Offer</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Employee Directory</h3>
                            <p>Easily manage and search employee information including roles, contact details, and status updates.</p>
                        </div>

                        <div className="service-card">
                            <h3>Attendance & Time Tracking</h3>
                            <p>Track employee attendance and work hours efficiently with real-time reporting.</p>
                        </div>

                        <div className="service-card">
                            <h3>Performance Reviews</h3>
                            <p>Conduct performance evaluations, track goals, and provide feedback to employees seamlessly.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
