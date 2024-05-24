import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../constans';
import { DotLoader } from 'react-spinners';

const layouts = {
  StackedImageLayout: lazy(() => import('./Layouts/StackedImageLayout')),
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div style={style.notFound}>Project not found</div>;
  }

  const LayoutComponent = layouts[project.layout];

  return (
    <div>
      <p style={style.title}>{project.description}</p>
      <Suspense fallback={<div style={style.spinner}>Loading...</div>}>
        {LayoutComponent ? <LayoutComponent project={project} /> : <div style={style.spinner}>Could not load images :( <br/> Download offline version</div>}
      </Suspense>
    </div>
  );
};

const style = {
  title: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '149.805%',
    width: '85%',
    margin: 'auto',
    marginBottom: '50px',
    whiteSpace: 'pre-wrap'
  },
  notFound: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '149.805%',
    width: '85%',
    margin: 'auto',
    marginBottom: '50px',
    whiteSpace: 'pre-wrap',
    textAlign: 'center'
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default ProjectDetail;
