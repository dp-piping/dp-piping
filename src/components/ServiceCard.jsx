export default function ServiceCard({ title, description, image, alt, bullets }) {
    return (
      <div className="service-card">
        {image && (
          <div className="service-image">
            <img src={image} alt={alt || title} />
          </div>
        )}
  
        <h3>{title}</h3>
        <p>{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="service-bullets">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  