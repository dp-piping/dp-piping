import Gallery from '../components/Gallery'

const industrialImages = [
  { src: '/images/industrial1.jpg', alt: 'Industrial Pipefitting' },
  { src: '/images/industrial2.jpg', alt: 'Compressed Air System Installation' },
  { src: '/images/industrial3.jpg', alt: 'Factory Mechanical Upgrade' },
]

export default function IndustrialGallery() {
  return <Gallery images={industrialImages} />
}
