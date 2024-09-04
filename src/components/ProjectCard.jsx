import  {React,useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function ProjectCard({ id,title, imageUrl, imageAlt }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card sx={style.card}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={handleCardClick}
          >
        <CardMedia
          component="img"
          image={imageUrl}   
          alt={imageAlt}   
          sx={
            style.cardImg
          }
        />
        <div style={{
          ...style.cardGrayCover,
          opacity: hover ? 1 : 0,
        }} />
        {hover && (
        <CardContent sx={style.projectContent}>
          <Typography variant="h5" component="div" fontFamily={'Poppins'}>
            {title}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}

const style = {
  card: {
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    borderRadius: '0px', 
    width: '100%',  
    boxShadow: 'none', 


  },
  cardImg: {
    height: '100%',
    width: '102%',
    transition: 'opacity 0.5s',
    boxShadow: 'none', 
  },
  cardGrayCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transition: 'opacity 0.5s'
  },
  projectContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    fontSize: '40px',
    fontWeight: '600',
  }
}


export default ProjectCard;