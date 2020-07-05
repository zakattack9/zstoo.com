import React from 'react';
import './Skim.scss'

// component used for adding skims over text or media
const Skim = props => {
  const styles = {
    width: `${props.width}%`,
    height: `${props.height}%`
  };
  return (
    <div className={`${props.className} Skim`} style={styles}></div>
  );
}

export default Skim;