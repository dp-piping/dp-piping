export default function StickyContactButton() {
    const handleClick = (e) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start", // scrolls to the top of the section
        });
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className="sticky-contact"
        aria-label="Contact Us"
      >
        Contact Us
      </button>
    );
  }
  