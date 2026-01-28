export default function Gallery({ images }) {
    return (
        <div className="gallery-wrapper">
            <div className="gallery-scroll">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item">
                        <img src={img.src} alt={img.alt}
                            style={img.rotate ? { transform: `rotate(${img.rotate}deg)` } : {}} />
                    </div>
                ))}
            </div>
        </div>
    )
}
