import React from 'react';

// component used for adding scroll space into ScrollMagic scenes
const Spacer = props => {
  let styles = {
    height: props.height + 'vh'
  };
  return <div className="Spacer" style={ styles }></div>;
}

export default Spacer;