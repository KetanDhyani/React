import { useState, useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Sample search data - in a real app this would come from an API
const allContent = [
    { id: 1, title: "Hanuman Ansh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBB7tvdT2-FgK-c9IPwW6BiVyhjJyK01oAXkzWTH1Jw&s=10", genre: "Mythology", year: "2024", language: "Hindi", badge: "NEW" },
    { id: 2, title: "Vibe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tDmoZHzlcDu7CiHMBx5g1EtgeD2DRStsICyc59vbjg&s=10", genre: "Drama", year: "2024", language: "Hindi", badge: "NEW" },
    { id: 3, title: "SpiderMan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_-XePk9kJ8jikbpk-LcHon0kltLM6k15qxAMkng7Xg&s=10", genre: "Action", year: "2024", language: "English", badge: "NEW" },
    { id: 4, title: "24 HRS Channel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNY_KT3iZNATY6dTzNeo5iPfq68AUaD1hoYhLrQcoowQ&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "LIVE" },
    { id: 5, title: "Episode 08", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "NEW EPISODES FRI" },
    { id: 6, title: "Episode 07", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1awUUes65z9pyq7OAXXDxMbiIewg3tVv2ddTFyhogw&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "" },
    { id: 7, title: "Episode 06", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwD8wVak3k3KIxaHVIx61z6kmYPzjX3oy_F2vFt0prQ&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "" },
    { id: 8, title: "Episode 05", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "" },
    { id: 9, title: "Episode 04", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIG1QRejuiw63wCb8I-5vkRh3dvK0zCJ_URLRhzHKwg&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "" },
    { id: 10, title: "Khatron Ke Khiladi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", genre: "Reality", year: "2024", language: "Hindi", badge: "NEW" },
    { id: 11, title: "Anupamaa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Th-BKs4ztLYV9iZMbowFB92KhUloNSAw81GAU3PFxw&s=10", genre: "Drama", year: "2024", language: "Hindi", badge: "NEW EPISODE DAILY" },
    { id: 12, title: "Yeh Rishta Kya Kehlata Hai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOyhDE9jUirzJjQd9eWgd8SFjIQFWJjE0GC6ZWDrT1A&s=10", genre: "Drama", year: "2024", language: "Hindi", badge: "NEW EPISODE DAILY" },
    { id: 13, title: "Ghum Hai Kisikey Pyaar Meiin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzHgcWZziB7KUn2p1rDWI8xgf7VU1dZ3gPnqne1Dfeg&s=10", genre: "Drama", year: "2024", language: "Hindi", badge: "NEW EPISODE DAILY" },
    { id: 14, title: "Kundali Bhagya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", genre: "Drama", year: "2024", language: "Hindi", badge: "NEW EPISODE DAILY" },
    { id: 15, title: "Naagin 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7zlRs9WINB_oqjFx0MetR9H_XbYBjCLVJudLa7HFRg&s=10", genre: "Fantasy", year: "2024", language: "Hindi", badge: "NEW" },
  ]

const genres = ['All', 'Action', 'Drama', 'Thriller', 'Sci-Fi', 'Reality', 'Mythology', 'Fantasy']
const years = ['All', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2013']
const languages = ['All', 'Hindi', 'English', 'Tamil', 'Telugu', 'Malayalam', 'Kannada']

const ContentCard = memo(({ item }) => (
  <Link to={`/about?title=${encodeURIComponent(item.title)}`} className="ott-content-card">
    <div className="ott-card-image-container">
      <img src={item.image} alt={item.title} className="ott-card-image" />
      {item.badge && <span className={`ott-badge ${item.badge === 'LIVE' ? 'ott-badge-live' : ''}`}>{item.badge}</span>}
      <div className="ott-play-overlay">
        <div className="ott-play-icon">▶</div>
      </div>
    </div>
    <div className="ott-card-info">
      <h3 className="ott-card-title">{item.title}</h3>
      <p className="ott-card-subtitle">{item.genre} • {item.year} • {item.language}</p>
    </div>
  </Link>
))

function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  // Filter content based on search query and filters - memoized to prevent recalculation
  const filteredContent = useMemo(() => {
    return allContent.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre
      const matchesYear = selectedYear === 'All' || item.year === selectedYear
      const matchesLanguage = selectedLanguage === 'All' || item.language === selectedLanguage

      return matchesSearch && matchesGenre && matchesYear && matchesLanguage
    })
  }, [searchQuery, selectedGenre, selectedYear, selectedLanguage])

  return (
    <div className="ott-container">
      <div className="ott-sidebar">
        <div className="ott-sidebar-logo">OTT</div>
        <nav className="ott-sidebar-nav">
          <Link to="/" className="ott-nav-item">
            <span className="ott-nav-icon">🏠</span>
            <span className="ott-nav-text">Home</span>
          </Link>
          <Link to="/search" className="ott-nav-item ott-nav-active">
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
        <div className="ott-search-header">
          <h1 className="ott-search-title">Search</h1>
          <div className="ott-search-bar">
            <input
              type="text"
              placeholder="Search for movies, TV shows, genres..."
              className="ott-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="ott-search-button">🔍</button>
          </div>
        </div>

        <div className="ott-filters">
          <div className="ott-filter-group">
            <label className="ott-filter-label">Genre:</label>
            <select 
              className="ott-filter-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div className="ott-filter-group">
            <label className="ott-filter-label">Year:</label>
            <select 
              className="ott-filter-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="ott-filter-group">
            <label className="ott-filter-label">Language:</label>
            <select 
              className="ott-filter-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>

          <button 
            className="ott-clear-filters"
            onClick={() => {
              setSelectedGenre('All')
              setSelectedYear('All')
              setSelectedLanguage('All')
              setSearchQuery('')
            }}
          >
            Clear Filters
          </button>
        </div>

        <div className="ott-search-results">
          <h2 className="ott-results-count">
            {filteredContent.length} {filteredContent.length === 1 ? 'result' : 'results'} found
          </h2>
          
          {filteredContent.length > 0 ? (
            <div className="ott-search-grid">
              {filteredContent.map(item => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="ott-no-results">
              <div className="ott-no-results-icon">🔍</div>
              <h3>No results found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Search