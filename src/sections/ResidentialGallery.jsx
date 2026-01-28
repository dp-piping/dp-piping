import Gallery from '../components/Gallery'

const residentialImages = [
  { src: '/images/residential1.jpg', alt: 'Residential Heating Installation' },
  { src: '/images/residential2.jpg', alt: 'Hot Water Tank Installation' },
  { src: '/images/residential3.jpg', alt: 'Residential Plumbing Work' },
]

export default function ResidentialGallery() {
  return <Gallery images={residentialImages} />
}
