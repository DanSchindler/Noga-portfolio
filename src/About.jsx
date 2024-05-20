import React from "react";
import nogaHeadShot from './assets/nogaHeadShot.png';  // Ensure the path is correct
// import { ReactComponent as InstaGramIcon} from './assets/icons/instagramLogo.svg';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h1 style={styles.headLine}>Hi</h1>
        <p>
          I'm Noga, I'm 25 y/o based in Tel Aviv.
          <br/>A Visual Communication Student at Shenkar College of
          Engineering, Design<br/>  and Art.<br/> <br/> 
        </p>
        <p>
          I truly believe in the importance of design and its ability to make a <br/>
          difference. Every project is a chance for me to improve and express myself.<br/>
          I'm excited to show how design can have a real impact, and I
          hope to <br/>
          inspire others along the way.
        </p>
        <br/> 
        <br/> 

        <p>{'>'} Illustrator, Photoshop, After Affects, Indesign, Premier, Light room, Figma.</p>
        <span style={styles.socialIcons}>
          {/* <InstaGramIcon/> */}
        </span>
      </div>
      <div style={styles.imageContainer}>
        <img src={nogaHeadShot} alt="noga-headshot-image" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "start",
    width: '85%',
    margin: "auto",
    marginTop: '78px',

  },
  text: {
    width: '60%',
    height: '100%',
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    flex: '1',
    fontWeight: '300',
    lineHeight: 'normal',
    margin: '0',
  },
  imageContainer: {
    width: '40%',
    height: '50%',
    flexShrink: '0',
  },
  headLine: {
    margin: '0',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  skills:{

  },
  socialIcons:{

  },
};

export default About;
