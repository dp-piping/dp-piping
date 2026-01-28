import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          <ServiceCard
            title="Residential"
            description="Heating and mechanical installations for homes."
            targetId="residential"
          />
          <ServiceCard
            title="Commercial"
            description="Mechanical systems and installation for businesses."
            targetId="commercial"
          />
          <ServiceCard
            title="Industrial"
            description="Industrial pipefitting, compressed air systems, and mechanical services."
            targetId="industrial"
          />
        </div>
      </div>
    </section>
  );
}
