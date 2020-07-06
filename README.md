## ZakSakata.com v2.0 coming soon...

### Tech Stack
- [GreenSock (GSAP)](https://greensock.com/docs/v3)
  - animation optimization
  - binding tween to user scrol
  - draw svg animations
  - [ScrollTrigger?](https://www.williamrchase.com/scroll_trigger_demo/index.html)
  - [ScrolTrigger Example](https://www.williamrchase.com/post/scrollytelling-with-gsap-scrolltrigger/)
- [React](https://reactjs.org/docs/getting-started.html)
  - DOM rendering
  - `react-transition-group` library for page transitions
- [Sass](https://sass-lang.com/documentation)
  - CSS variables, functions, mixins
  - using CSS grid for layout
- [AWS](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
  - DynamoDB for storing contact page form details
  - SNS for pushing contact notifications to email and phone
- [ScrollMagic.js](https://scrollmagic.io/docs/index.html)*
  - scroll triggered animations
  - pinning elements
- [ScrollScene](https://github.com/jonkwheeler/ScrollScene)*
  - temporary replacement for ScrollMagic until it gets updated to support GSAP v3
- [Vivus](https://maxwellito.github.io/vivus/)*
  - testing and building svg line animations
**no longer using due to inactive development and the flexibility GSAP*

### Optimization Issues
- ScrollMagic lags exponentially when using more abstract glow SVGs/images
  - This consequently causes laggy GSAP tweens/timelines
  - *Potentially consider exporting abstract glow graphics as pngs?*

### TODO
- implement cleanup for gsap timelines and scrollscene objects
- remove all `addIndicators` from scrollscene imports before prod deploy
- design desktop views and compatibility
- create mixins for css properties with vendor prefixes
- create pipeline for deployment
- move and host zaksakata.com/photogrpahy in a seperate s3 bucket
- link zaksakata.com/photogrpahy under subdomain (photos.zaksakata.com)

### Stretch Goals
- preload packages with loading screen
- easter eggs
- rebuild with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) if ScrollMagic gets depreciated
- UI testing
