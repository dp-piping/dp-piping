import Gallery from '../components/Gallery';

// Import industrial images
import ind1 from '../assets/images/industrial/industrial1.png';
import ind2 from '../assets/images/industrial/industrial2.png';
import ind3 from '../assets/images/industrial/industrial3.png';
import ind4 from '../assets/images/industrial/industrial4.png';

const industrialImages = [
    { src: ind2, alt: 'Compressed Air System Installation'  },
    { src: ind3, alt: 'Industrial Mechanical Services'  },
    { src: ind4, alt: 'Industrial Mechanical Services'  },
    { src: ind1, alt: 'Industrial Pipefitting Installation' },
];

export default function IndustrialGallery() {
    return <Gallery images={industrialImages} />;
}
