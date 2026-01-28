import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
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
    </section>
  );
}
