import ServiceCard from '../components/ServiceCard'
import residential1 from '../assets/images/residential/residential1.png'
import commercial1 from '../assets/images/commercial/commercial1.png'
import industrial1 from '../assets/images/industrial/industrial1.png'
import ResidentialGallery from './ResidentialGallery';
import CommercialGallery from './CommercialGallery';
import IndustrialGallery from './IndustrialGallery';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          <ServiceCard
            title="Residential"
            description="Heating and mechanical installations for homes."
            image={residential1}
            alt="Residential heating system installation"
            bullets={[
              'Gas heating systems',
              'Propane heating systems',
              'Oil-fired heating systems',
              'Forced hot water (hydronic) systems',
              'Forced air heating systems',
              'Hot water tanks',
            ]}
          />
          <ResidentialGallery />
          <ServiceCard
            title="Commercial"
            description="Mechanical systems and installation for businesses."
            image={commercial1}
            alt="Commercial mechanical systems"
            bullets={[
              'Gas heating systems',
              'Propane heating systems',
              'Oil-fired heating systems',
              'Forced hot water (hydronic) systems',
              'Forced air heating systems',
              'Hot water tanks',
              'System installation & replacement',
              'Equipment upgrades',
              'Maintenance & service',
              'New construction & retrofits',
            ]}
          />
          <CommercialGallery />
          <ServiceCard
            title="Industrial"
            description="Industrial pipefitting, compressed air systems, and mechanical services."
            image={industrial1}
            alt="Industrial pipefitting and compressed air systems"
            bullets={[
              'Aluminum compressed air piping',
              'Steel & copper air lines',
              'Air compressor installation',
              'System redesigns & expansions',
              'Pressure drop reduction',
              'Energy-saving upgrades',
              'Equipment replacement',
            ]}
          />
          <IndustrialGallery />
        </div>
      </div>
    </section>
  );
}
