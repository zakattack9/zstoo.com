import React from 'react';
import './Skim.scss'

// component used for adding skims over text or media
const Skim = props => {
  const types = ['toRight', 'toLeft', 'toTop', 'project'];
  const styles = {
    width: `${props.width}%`,
    height: `${props.height}%`
  };

  return types.includes(props.type) ? (
    <div className={`${props.className} Skim--${props.type}`} style={styles}></div>
  ) : (
    <div className={`${props.className} Skim`} style={styles}></div>
  );


}

export default Skim;