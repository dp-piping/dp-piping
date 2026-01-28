import Gallery from '../components/Gallery';

// Import the images from your assets folder
import res1 from '../assets/images/residential/residential1.png';
import res2 from '../assets/images/residential/residential2.png';
import res3 from '../assets/images/residential/residential3.png';
import res4 from '../assets/images/residential/residential4.png';

const residentialImages = [
    { src: res2, alt: 'Hot Water Tank Installation' },
    { src: res3, alt: 'Residential Plumbing Work' },
    { src: res4, alt: 'Residential Plumbing Work' },
    { src: res1, alt: 'Residential Heating Installation' },
];

export default function ResidentialGallery() {
  return <Gallery images={residentialImages} />;
}
