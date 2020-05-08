import React from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Zak from '../../SVGs/ZAK.svg';
import { Home as Abstract, Headline } from '../../SVGs/SVG';
import Glow from '../../SVGs/HomeGlow.svg';
import './Home.scss';

class Home extends React.Component {
  componentDidMount () {
    const homeTimeline = gsap.timeline({ repeatDelay: 0.5 });
    const abstractTween = gsap.to('.Home__path', {
      strokeDashoffset: 239,
      opacity: 0,
      ease: 'power3.inOut',
      // duration: 0.8,
      stagger: {
        each: 0.01,
        from: 'edges'
      }
    });
    homeTimeline.add(abstractTween);

    const headlineTween = gsap.to('.Home__headline', {
      strokeDashoffset: 130,
      ease: 'power3.inOut',
      duration: 0.5,
    });
    homeTimeline.add(headlineTween, 0);

    const abstractTrigger = document.querySelector('#Home__trigger');
    const scrollScene = new ScrollScene({
      triggerElement: abstractTrigger,
      triggerHook: 0,
      // offset: 150,
      gsap: {
        timeline: homeTimeline
      },
      duration: 900
    })
    scrollScene.Scene.setPin('.Home__wrapper');
    scrollScene.Scene.addIndicators({ name: 'home scene', colorEnd: '#FFFFFF' })

  }

  componentWillUnmount () {
    // clean up ScrollScene here
  }
  
  render () {
    return (
      <div className="Home">
        <div id="Home__trigger"></div>
          <div className="Home__wrapper">
            <div className="Home__art">
              {/* <img className="Home__glow Home__glow--back" src={Glow} alt="abstract art glow"/> */}
              <Abstract className="Home__abstract Home__abstract--back" />
              <img className="Home__zak" src={Zak} alt="Zak"/>
              <Abstract className="Home__abstract Home__abstract--front" />
              {/* <img className="Home__glow Home__glow--front" src={Glow} alt="abstract art glow"/> */}
            </div>

            <Headline className="Home__headline" />
          </div>
      </div>
    );
  }
}

export default Home;