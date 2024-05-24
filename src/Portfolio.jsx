import { projectsData } from "./constans";
import CardsGrid from './components/CardsGrid';

const Portfolio = () => {
    return (
      <div style={styles.gallery}>
        <CardsGrid projectsData ={projectsData}/>
      </div>
    );
  };
  


const styles = {
  gallery: {
    width: '85%',
    margin: "auto",
    marginBottom: '80px',

  },
}
  export default Portfolio;
  