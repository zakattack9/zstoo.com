## ZakSakata.com v2.0 coming soon...

### Tech Stack
- [GreenSock (GSAP)](https://greensock.com/docs/v3)
  - animation optimization
  - binding tween to user scrol
  - draw svg animations
- [ScrollMagic.js](https://scrollmagic.io/docs/index.html)
  - scroll triggered animations
  - pinning elements
- [ScrollScene](https://github.com/jonkwheeler/ScrollScene)
  - temporary replacement for ScrollMagic until it gets updated to support GSAP v3
- [Vivus](https://maxwellito.github.io/vivus/)
  - testing and building svg line animations
- [React](https://reactjs.org/docs/getting-started.html)
  - DOM rendering
  - `react-transition-group` library for page transitions
- [Sass](https://sass-lang.com/documentation)
  - CSS variables, functions, mixins
  - using CSS grid for layout
- [AWS](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
  - DynamoDB for storing contact page form details
  - SNS for pushing contact notifications to email and phone

### TODO
- design desktop views and compatibility
- create pipeline for deployment
- move and host zaksakata.com/photogrpahy in a seperate s3 bucket
- link zaksakata.com/photogrpahy under subdomain (photopgraphy.zaksakata.com)

### Stretch Goals
- preload packages with loading screen
- rebuild with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) if ScrollMagic gets depreciated
- UI testing