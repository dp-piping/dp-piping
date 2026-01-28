import Gallery from '../components/Gallery';

// Import commercial images
import com1 from '../assets/images/commercial/commercial1.png';
import com2 from '../assets/images/commercial/commercial2.png';
import com3 from '../assets/images/commercial/commercial3.jpg';
import com4 from '../assets/images/commercial/commercial4.png';

const commercialImages = [
    { src: com2, alt: 'Commercial Plumbing Work'  },
    { src: com3, alt: 'Mechanical System Upgrade' },
    { src: com4, alt: 'Mechanical System Upgrade' },
    { src: com1, alt: 'Commercial HVAC Installation' },
];

export default function CommercialGallery() {
    return <Gallery images={commercialImages} />;
}
