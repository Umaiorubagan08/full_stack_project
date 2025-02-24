import React from "react";

export default function About() {
    return (
        <div className="about-container">
            {/* header Section */}
            <header className="about-header">
                <div className="about-header-container">
                    <div className="about-logo">Employee Management</div>
                    <div className="about-title">About Us</div>
                </div>
            </header>

            {/* main Content */}
            <main className="about-main-content">
                {/* intro Section */}
                <section className="about-intro">
                    <h1 className="about-intro-title">About Us</h1>
                    <p className="about-intro-description">
                        We are a dedicated team working towards providing the best employee management solutions for your business. Our goal is to streamline employee management, increase productivity, and improve team collaboration.
                    </p>
                </section>

                {/* mission Section */}
                <section className="about-mission">
                    <h2 className="about-section-title">Our Mission</h2>
                    <p className="about-section-description">
                        To create seamless and efficient employee management experiences with intuitive technology that empowers businesses to manage, track, and develop their workforce effectively.
                    </p>
                </section>

                <section className="about-vision">
                    <h2 className="about-section-title">Our Vision</h2>
                    <p className="about-section-description">
                        To be the leading platform for organizations globally in fostering a productive and thriving work environment for employees.
                    </p>
                </section>

                <section className="about-values">
                    <h2 className="about-section-title">Our Values</h2>
                    <ul className="about-values-list">
                        <li>Integrity: Transparency, honesty, and doing the right thing.</li>
                        <li>Innovation: Embracing technology and constantly improving.</li>
                        <li>Collaboration: Working together to achieve shared goals.</li>
                        <li>Excellence: Delivering exceptional service and solutions every time.</li>
                    </ul>
                </section>

                <section className="about-team">
                    <h2 className="about-section-title">Meet the Team</h2>
                    <p className="about-section-description">
                        Our team consists of passionate professionals who bring together diverse expertise to offer you the best management solutions.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <p>&copy; 2024 Company Name | All rights reserved</p>
            </footer>
        </div>
    );
}
