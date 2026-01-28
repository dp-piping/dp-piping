export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container about-content">
                <h2 className="section-title">About Us</h2>

                <p>
                    D.P. Piping is a fully licensed and insured contractor
                    proudly serving residential, commercial, and industrial clients
                    throughout Rhode Island. We specialize in the installation, servicing,
                    and inspections of heating and cooling systems, as well as compressed air solutions.
                </p>

                <p>
                    With years of hands-on experience, we take pride in delivering quality
                    workmanship, honest advice, and reliable results—<strong>built strong, done right.</strong>
                </p>

                <div className="about-trust">
                    <div className="trust-item">
                        <span className="trust-icon">🛡️</span> Licensed & Insured
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">🛠️</span> Experienced Professionals
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">⚓</span> Rhode Island Service Area
                    </div>
                </div>
            </div>
        </section>
    );
}
