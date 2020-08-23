import { MIN_DESKTOP_WIDTH } from '../Utils/variables.scss';

const isMobile = () => {
  return window.innerWidth < MIN_DESKTOP_WIDTH;
}

export default isMobile;