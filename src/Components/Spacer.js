import React from 'react';

// component used for adding scroll space into animation scenes
const Spacer = props => {
  const styles = {
    height: `${props.height}vh`,
    backgroundColor: props.color || ''
  };
  return <div className="Spacer" style={styles}></div>;
}

export default Spacer;