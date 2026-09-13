import '../App.css'
import Video from '../components/Video'
import { useSearchParams } from 'react-router-dom'

function About() {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title') || 'Archive'

  return (
    <section id="center">
      <div>
        <h1>{title}</h1>
        <p>
          Relieve the Nanda Devi Raaj Jaat 1968 recorded by the India Films,Govt Of India
        </p>
        <Video 
          src="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_hevc.mp4" 
          title="Nanda Devi Raaj Jaat 1968" 
        />
      </div>
    </section>
  )
}

export default About