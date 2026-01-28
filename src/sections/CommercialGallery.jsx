import Gallery from '../components/Gallery'

const commercialImages = [
  { src: '/images/commercial1.jpg', alt: 'Commercial Mechanical System' },
  { src: '/images/commercial2.jpg', alt: 'Office HVAC Installation' },
  { src: '/images/commercial3.jpg', alt: 'Business Heating Upgrade' },
]

export default function CommercialGallery() {
  return <Gallery images={commercialImages} />
}
