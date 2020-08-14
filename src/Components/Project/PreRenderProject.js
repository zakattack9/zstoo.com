import React from 'react';
import ProjectGlow from '../ProjectGlow';

// use this component to render all static assets of the next project
const PreRenderProject = props => {
  const { project = null } = props;
  const styles = {
    width: '0%',
    height: '0%',
    overflow: 'hidden',
    pointerEvents: 'none',
    opacity: 0,
    position: 'absolute',
    zIndex: -100,
  }

  return project ? (
    <div className="PreRenderProject" style={styles}>
      {project.imageUrls.map((imgUrl, i) => {
        return <img key={i} src={`${process.env.PUBLIC_URL}/${imgUrl}`} alt="sample project" />
      })}
      <ProjectGlow projectId={project.id} />
    </div>
  ) : (<></>);
}

export default PreRenderProject;