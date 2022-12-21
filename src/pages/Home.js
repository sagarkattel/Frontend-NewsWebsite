import one from '../assets/images/image-web-3-desktop.jpg'
import two from '../assets/images/image-retro-pcs.jpg'
import three from '../assets/images/image-top-laptops.jpg'
import four from '../assets/images/image-gaming-growth.jpg'

import '../styles/home.css'
export function Home() {
  return (
    <div className="outer">
      <div className='main1'>
        <div className='first'>
          <div className='imgOne'>
            <img src={one} alt="" />
          </div>
          <div className='mtext'>
            <div className='heading1'>
              <h1><b>The Bright Future of Web 3.0 ?</b></h1>
            </div>
            <div className='paragraph1'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam quasi illum alias fugiat officia possimus deleniti non. </p>
              <br />

              <button className='button1'>Read More</button>
            </div>
          </div>
        </div>
        <div className='second'>
          <h1>New</h1>
          <br />
          <h3><a href="/" target="_blank">Hydrogen vs Electric Cars</a></h3>
          <p>Will hydogen-fuled cars ever catch up to Evs?</p>
          <br />
          <hr
            style={{
              background: "gray",
              height: ".1px",
              border: "none",
            }}
          />

          <br />
          <h3><a href="/" target="_blank">Hydrogen vs Electric Cars</a></h3>
          <p>Will hydogen-fuled cars ever catch up to Evs? akshgciauskgiusdgdsvfd</p>
          <br />
          <hr
            style={{
              background: "gray",
              height: ".1px",
              border: "none",
            }}
          />

          <br />
          <h3><a href="/" target="_blank">Hydrogen vs Electric Cars</a></h3>
          <p>Will hydogen-fuled cars ever catch up to Evs?</p>

        </div>

      </div>
      <div className="main2">

      <div className="inside2">
        <div className="img2">
          <img src={two} alt="" />
        </div>
        <div className="paragraph2">
          <h2>01</h2>
          <h3><a href="/" target="_blank">Reviving Retros</a></h3>
          <h5>What happens when old pcs are happens when old pcs</h5>
        </div>
        </div>

        <div className="inside2">
        <div className="img2">
          <img src={three} alt="" />
        </div>
        <div className="paragraph2">
          <h2>02</h2>
          <h3><a href="/" target="_blank">Top 10 laptops of 2022</a></h3>
          <h5>What happens when old pcs are happens when old pcs</h5>
        </div>
        </div>

        <div className="inside2">
        <div className="img2">
          <img src={four} alt="" />
        </div>
        <div className="paragraph2">
          <h2>03</h2>
          <h3><a href="/" target="_blank">Reviving Retros</a></h3>
          <h5>What happens when old pcs are happens when old pcs</h5>
        </div>
        </div>
        
      </div>
    </div>
  );
};