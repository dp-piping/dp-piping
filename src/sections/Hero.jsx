import Button from '../components/Button';
import hero from '../assets/images/hero/hero.webp';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content-wrapper">
        {/* Text column */}
        <div className="hero-text">
          <h1>Professional Pipefitting & Mechanical Services</h1>

          <h2 className="hero-subtitle">
            Mechanical Services • Heating & Cooling • Compressed Air Systems
          </h2>

          <p className="hero-location">Serving all of Rhode Island</p>
          <p className="hero-slogan">Built strong. Done right.</p>

          <Button href="#contact">
            Request a Free Site Evaluation & Free Estimate
          </Button>
        </div>

        {/* Image column */}
        <div className="hero-image">
          <img src={hero} alt="Mechanical services and pipefitting" />
          <div className="hero-overlay"></div>
        </div>
      </div>
    </section>
  );
}
