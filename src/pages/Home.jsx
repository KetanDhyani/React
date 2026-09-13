import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  const contentData = {
    newOnOTT: [
      { title: "Hanuman Ansh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBB7tvdT2-FgK-c9IPwW6BiVyhjJyK01oAXkzWTH1Jw&s=10", badge: "NEW " },
      { title: "Vibe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tDmoZHzlcDu7CiHMBx5g1EtgeD2DRStsICyc59vbjg&s=10", badge: "NEW" },
      { title: "SpiderMan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_-XePk9kJ8jikbpk-LcHon0kltLM6k15qxAMkng7Xg&s=10", badge: "NEW" },
      { title: "Hanuman Ansh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBB7tvdT2-FgK-c9IPwW6BiVyhjJyK01oAXkzWTH1Jw&s=10", badge: "NEW " },
      { title: "Vibe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tDmoZHzlcDu7CiHMBx5g1EtgeD2DRStsICyc59vbjg&s=10", badge: "NEW" },
      { title: "SpiderMan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_-XePk9kJ8jikbpk-LcHon0kltLM6k15qxAMkng7Xg&s=10", badge: "NEW" },
    ],
    biggBoss: [
      { title: "24 HRS Channel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNY_KT3iZNATY6dTzNeo5iPfq68AUaD1hoYhLrQcoowQ&s=10", subtitle: "Streaming 24x7" },
      { title: "Episode 08", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", badge: "NEW EPISODES FRI", subtitle: "1h 9m" },
      { title: "Episode 07", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1awUUes65z9pyq7OAXXDxMbiIewg3tVv2ddTFyhogw&s=10", badge: "", subtitle: "1h 8m" },
      { title: "Episode 06", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwD8wVak3k3KIxaHVIx61z6kmYPzjX3oy_F2vFt0prQ&s=10", badge: "", subtitle: "1h 12m" },
      { title: "Episode 05", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", badge: "", subtitle: "1h 5m" },
      { title: "Episode 04", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", badge: "", subtitle: "1h 10m" },
    ],
    top10Hindi: [
      { title: "Khatron Ke Khiladi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", badge: "NEW" },
      { title: "Anupamaa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Th-BKs4ztLYV9iZMbowFB92KhUloNSAw81GAU3PFxw&s=10", badge: "NEW EPISODE DAILY" },
      { title: "Yeh Rishta Kya Kehlata Hai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOyhDE9jUirzJjQd9eWgd8SFjIQFWJjE0GC6ZWDrT1A&s=10", badge: "NEW EPISODE DAILY" },
      { title: "Ghum Hai Kisikey Pyaar Meiin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzHgcWZziB7KUn2p1rDWI8xgf7VU1dZ3gPnqne1Dfeg&s=10", badge: "NEW EPISODE DAILY" },
      { title: "Kundali Bhagya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", badge: "NEW EPISODE DAILY" },
      { title: "Naagin 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", badge: "NEW" },
    ]
  }

  const ContentCard = ({ item }) => (
    <div className="ott-content-card">
      <Link to={`/about?title=${encodeURIComponent(item.title)}`} className="ott-archive-button">
         <div className="ott-card-image-container">
        <img src={item.image} alt={item.title} className="ott-card-image" />
        {item.badge && <span className={`ott-badge ${item.badge === 'LIVE' ? 'ott-badge-live' : ''}`}>{item.badge}</span>}
        <div className="ott-play-overlay">
          <div className="ott-play-icon">▶</div>
        </div>
      </div>
        </Link>
      
      <div className="ott-card-info">
        <h3 className="ott-card-title">{item.title}</h3>
        {item.subtitle && <p className="ott-card-subtitle">{item.subtitle}</p>}
        
      </div>
    </div>
  )

  const ContentRail = ({ title, items }) => (
    <div className="ott-content-rail">
      <h2 className="ott-rail-title">{title}</h2>
      <div className="ott-rail-container">
        {items.map((item, index) => (
          <ContentCard key={index} item={item} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="ott-container">
      <div className="ott-sidebar">
        <div className="ott-sidebar-logo">OTT</div>
        <nav className="ott-sidebar-nav">
          <Link to="/" className="ott-nav-item ott-nav-active">
            <span className="ott-nav-icon">🏠</span>
            <span className="ott-nav-text">Home</span>
          </Link>
          <Link to="/search" className="ott-nav-item">
            <span className="ott-nav-icon">🔍</span>
            <span className="ott-nav-text">Search</span>
          </Link>
          <Link to="/about" className="ott-nav-item">
            <span className="ott-nav-icon">📺</span>
            <span className="ott-nav-text">TV</span>
          </Link>
          <Link to="/features" className="ott-nav-item">
            <span className="ott-nav-icon">🎬</span>
            <span className="ott-nav-text">Movies</span>
          </Link>
          <Link to="/contact" className="ott-nav-item">
            <span className="ott-nav-icon">⚽</span>
            <span className="ott-nav-text">Sports</span>
          </Link>
          <Link to="/about" className="ott-nav-item">
            <span className="ott-nav-icon">📅</span>
            <span className="ott-nav-text">My List</span>
          </Link>
        </nav>
      </div>
      
      <div className="ott-main-content">
        <ContentRail title="New on OTT" items={contentData.newOnOTT} />
        <ContentRail title="Top Reality Shows" items={contentData.biggBoss} />
        <ContentRail title="Top 10 in India Today - Hindi" items={contentData.top10Hindi} />
      </div>
    </div>
  )
}

export default Home