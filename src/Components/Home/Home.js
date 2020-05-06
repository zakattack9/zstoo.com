import React from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Zak from '../../SVGs/ZAK.svg';
import { Home as Abstract } from '../../SVGs/SVG';
import Glow from '../../SVGs/HomeGlow.svg';
import './Home.scss';

class Home extends React.Component {
  componentDidMount () {
    const abstractTimeline = gsap.timeline({ repeatDelay: 0.5 });
    const abstractTween = gsap.from('.Home__path', {
      strokeDashoffset: 239,
      ease: 'power3.inOut',
      // duration: 1.5,
      stagger: {
        each: 0.01,
        from: 'center' // 'random' works great also
      }
    });
    abstractTimeline.add(abstractTween);

    console.log(this.props.duration);
    const abstractTrigger = document.querySelector('#Home__trigger--abstract');
    const abstract = document.querySelector('.Home__zak');

    const scrollScene = new ScrollScene({
      triggerElement: abstractTrigger,
      // toggle: {
      //   element: abstract,
      //   className: 'fadeOut',
      //   reverse: true
      // },
      triggerHook: 0.5,
      offset: 400,
      // duration: this.props.duration + '%'
      gsap: {
        timeline: abstractTimeline
      },
      duration: 400
    })
    scrollScene.Scene.setPin('.Home__wrapper');
    scrollScene.Scene.addIndicators({ name: 'home scene', colorEnd: '#FFFFFF' })

  }

  // clean up ScrollScene with componentWillUnmount
  
  render () {
    return (
      <div className="Home">
        <div id="Home__trigger--abstract"></div>
        <div className="Home__wrapper">
          <div className="Home__art">
            {/* <img className="Home__glow Home__glow--back" src={Glow} alt="abstract art glow"/> */}
            <Abstract className="Home__abstract Home__abstract--back" />
            <img className="Home__zak" src={Zak} alt="Zak"/>
            <Abstract className="Home__abstract Home__abstract--front" />
            {/* <img className="Home__glow Home__glow--front" src={Glow} alt="abstract art glow"/> */}
          </div>

          <div className="Home__headline">
            I design and develop websites and applications.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;