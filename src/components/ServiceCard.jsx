export default function ServiceCard({ title, description, targetId }) {
    const handleClick = () => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <div className="service-card" onClick={handleClick} style={{ cursor: "pointer" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  