import './Video.css'

function Video({ src, title, className = '' }) {
  return (
    <div className={`video-container ${className}`}>
      {title && <h3 className="video-title">{title}</h3>}
      <video controls className="video-player">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
