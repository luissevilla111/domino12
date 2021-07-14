import classes from './Hero.module.css'
import WelcomeMessage from './WelcomeMessage';
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.triangle1}>
          
      </div>
      <WelcomeMessage/>
      
    </div>
  );
};

export default Hero;
