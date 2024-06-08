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
    margin: "auto",
  },
}
  export default Portfolio;
  