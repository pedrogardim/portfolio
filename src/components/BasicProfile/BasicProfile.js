import Image from 'react-bootstrap/Image';

import profilePic from '../../assets/images/profile_pic.jpg';
import styles from './BasicProfile.module.css';

const BasicProfile = ({ scrollToSection }) => {
  //const title = useMemo(generateText, []);

  return (
    <div className={styles.introContainer}>
      <Image
        src={profilePic}
        roundedCircle
        className={styles.profilePic}
      />
      <h1
        className={styles.nameTitle}
        onClick={() => scrollToSection(0)}
      >
        PEDRO GARDIM
      </h1>
      <h3 className={styles.nameSubtitle}>WEB DEVELOPER</h3>
    </div>
  );
};

export default BasicProfile;
