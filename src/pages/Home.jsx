import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import homeImg from '../assets/HomeImage.png'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor:'#f0f0f0',flex:1}}>
        <div style={{display:'flex',alignItems:'center',}}>
        <div style={{  justifyContent: 'center',alignItems: 'flex-start',width:'60%' }}>
          <h1 style={{textAlign:'left',color:'#000000',marginInline:'30px',marginTop:'30px',fontSize:'2rem'}}>Nanda Devi Raj Jat Yatra</h1>
          <p style={{textAlign:'left',marginInline:'30px',color:'#000000'}}> The Nanda Devi Raj Jat is one of the most important religious and cultural pilgrimages of Uttarakhand. It is traditionally described as a 12-year pilgrimage, dedicated to Goddess Nanda, who is revered as the daughter of the Himalayas. The journey symbolically represents Nanda being escorted from her maternal home in the mountains to her husband’s home, associated with Mount Kailash.
The pilgrimage begins at Nauti village in Chamoli and passes through challenging Himalayan terrain before reaching Homkund. The complete route is around 280 kilometres and takes several days, with most of the journey undertaken on foot. A distinctive feature of the pilgrimage is the four-horned Chhausingya Khadu, which traditionally leads the procession.
The Raj Jat is often called the “Himalayan Kumbh” because devotees and deity processions from different parts of Uttarakhand come together for this large pilgrimage. It is also regarded as a symbol of the shared religious and cultural traditions of Garhwal and Kumaon.
However, it is important to distinguish tradition from historical records. Although the pilgrimage is popularly associated with a 12-year cycle, historical records show that it has never consistently occurred every 12 years. Recorded editions include 1843, 1863, 1886, 1905, 1925, 1951, 1968, 1987, 2000 and 2014, with significant variations between some editions.Thus, the 12-year cycle is best described as a traditional religious convention rather than a strictly followed historical schedule.
          </p>

           <p style={{textAlign:'left',marginTop:'30px',marginInline:'30px',color:'#000000'}}> Another important aspect of the Raj Jat is the role of Nauti and Kanswa. Nauti is considered the starting point of the main pilgrimage, while the Rajvanshi Kunwar family of Kanswa has a traditional role in initiating the journey. A special Chhantoli, traditionally made from ringal, is also brought from Kanswa to Nauti. During the journey, different deity processions come together at Wan village, including those from Garhwal, Kumaon, Dasoli and Kurud. This coming together of different regions, communities and traditions is one of the reasons why the Raj Jat is considered much more than just a religious pilgrimage.
          </p>
        </div>
        <img src={homeImg} style={{width:'600px',height:'400px',alignItems:'center'}} />
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </div>

      <div className="ticks"></div>

      <section style={{backgroundColor:'#f0f0f0'}} id="next-steps">
     
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Home