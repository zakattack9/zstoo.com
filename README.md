## ZakSakata.com v2.0 coming soon...

### Tech Stack
- [GreenSock (GSAP)](https://greensock.com/docs/v3)
  - animation optimization and browser compatibility
  - create tweens and timelines
  - draw svg animations
  - [ScrollTrigger](https://www.williamrchase.com/scroll_trigger_demo/index.html) for scroll binded animations
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
- [Vivus](https://maxwellito.github.io/vivus/)
  - testing and building svg line animations
- [ScrollMagic.js](https://scrollmagic.io/docs/index.html)*
  - scroll triggered animations
  - pinning elements
- [ScrollScene](https://github.com/jonkwheeler/ScrollScene)*
  - temporary replacement for ScrollMagic until it gets updated to support GSAP v3

**no longer using partly due to inactive development and the migration to GSAP ScrollTrigger*

### Optimization Issues
- Find a better way to target browser specific animations instead of user-agent
- When scrolling past about section and then navigating to `/about` using the overlay, the layout may imporperly load
- ~Pause animations when playing overlay animation~
  - **Solved: used React context to create a global variable that determines whether the overlay is open or closed from any component**
- ~Fix spacing between Skills title and first skill section title~
  - **Soved: used a function for the _start_ property of the Skills component ScrollTrigger pin that grabs the `clientHeight` of `.About__wrapper` and sets this to the second parameter of the _start_ property**
- ~Clicking on a form input on mobile will cause the page to scroll up when the keyboard opens due to the viewport height resizing; consequently, this will cause ScrollTrigger to reverse any animatons up to that point~
  - **Solved: separated contact form to a seperate page without any scroll binded animations**
- ~Weird animation and layout behavior on Safari~
  - **Solved: fixed by using `stroke-dasharray: ___ ___` with two identical numerical values when using `stroke-dashoffset` with a negative value; Safari does not work nicely with negative values** 
- ~Laggy/stuttering animations on Firefox (mobile)~
  - **Solved: fixed by removing `filter: saturate(___%)` from SVGs due to high GPU resources; may also need `rotation: 0.01` on elements as suggested by [GSAP](https://greensock.com/forums/topic/12760-animation-slowjerky-not-smooth-in-firefox/)**
- ~When an unmounted component mounts with a GSAP animation, the component may "flash" if the animation is set to animate elements into view on the screen; this is due to the slight delay between the component being rendered and the GSAP animation not being fully created upon mounting the component~
  - **Solved: added a `hide` class with `opacity: 0; pointer-events: none;` to component (class is removed upon mount after GSAP animation has been created)**
- ~Improve `scrollTo` functinoality for `Main` component upon resizing viewport~
  - **Solved: added a timeout to the `calculateScrollPos` function that waits untill ScrollTrigger finishes recalculating the positioning of elements (ScrollTrigger [waits](https://greensock.com/docs/v3/Plugins/ScrollTrigger) 200ms after a window resize occurs before recalculation)**
- ~About section abstract glow stays pinned and visible when scrolling too fast~
  - **Solved: used `filter: opacity(0%)` to prevent animation of the same `opacity` property**
- ~Jumping pins on page refresh (can be reset by switching tabs)~
  - Consider sequencing all big animations under one timeline and using labels
  - **Solved: ensure pinned elements are in a wrapper div that gets pinned with `ScrollTrigger.create()`, animated elements should not use this wrapper div as a trigger; additionally, animating pinned elements out of visbility before/after pinning helps minimize the noticeability of this side-effect**
- ~ScrollMagic lags exponentially when using more abstract glow SVGs~
  - Consequently causes laggy GSAP tweens/timelines
  - **Solved: exported abstract glow graphics as web PNGs**

### TODO
- optimize laggy animations
- design desktop views and compatibility
- UI testing with Enzyme and Jest
- refactor AWS lambdas with TypeScript
- pull reusable hooks into their own custom hooks
- ensure all GSAP animations have necessary `refs` to their respective components
- figure out a better way to render mobile and desktop views to prevent memory leaks
- split mobile SVGs into separate file (keep `SVG.js` for shared SVGs)
- ~clean up CSS with Sass at-rules and vars~
- ~create mixins for css properties with vendor prefixes~
  - not needed, webpack takes care of this already with `create-react-app`
- ~move and host zaksakata.com/photogrpahy in a seperate s3 bucket~
  - hosted from GitHub repository instead
- ~test if keeping project images in public folder slows down load time~
  - does not slow down initial load time but is preloaded when switching to the next project using `PreRenderProject` component
- ~add loading screen while preloading packages (used React Suspense)~
- ~code split and implement lazy loading~
- ~convert project id's on home page to use `ProjectId` SVG~
  - ~remove `HelveticaBoldOutline.woff` font once converted~
- ~link zaksakata.com/photogrpahy under subdomain (photos.zaksakata.com)~
- ~implement cleanup for gsap timelines and scrollscene objects~
  - **Solved: use React hook to destroy scrollscene**
  - *N/A since migration to GSAP ScrollTrigger*
- ~remove all `addIndicators` from scrollscene imports before prod~ deploy
  - *N/A since migration to GSAP ScrollTrigger*

### Stretch Goals
- create pipeline for deployment
- easter eggs
  - mode that can be enabled at the end of website
- eject app from CRA and customize webpack config
- ~rebuild with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) if ScrollMagic gets depreciated~
