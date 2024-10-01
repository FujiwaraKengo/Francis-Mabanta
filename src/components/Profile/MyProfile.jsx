import profileImg from '../../assets/MyPhoto.jpg'
import styles from './ProfileStyles.module.css'
import sun from '../../assets/Sun.svg'
import moon from '../../assets/Moon.svg'
import linkedInLight from '../../assets/linkedIn-Light.svg'
import linkedInDark from '../../assets/linkedIn-Dark.svg'
import gitHubDark from '../../assets/GitHub-Dark.svg'
import gitHubLight from '../../assets/GitHub-Light.svg'
import facebookLight from '../../assets/Facebook-Light.svg'
import facebookDark from '../../assets/Facebook-Dark.svg'
import CV from '../../assets/Francis Mabanta - Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function MyProfile() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon
  const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark
  const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark

  return (
    <section id="profile" className={styles.container}>
        <div className={styles.bgColorContainer}>
          <img 
            className={styles.profileImg}
            src={profileImg} alt="MyProfile" />
          <img
            className={styles.colorMode} 
            src={themeIcon} alt="ColorModeIcon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
          <h1>
            Francis Kenneth
          </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://www.linkedin.com/in/francis-mabanta/" target='_blank'>
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/FujiwaraKengo" target='_blank'>
              <img src={gitHubIcon} alt="GitHub" />
            </a>
            <a href="https://www.facebook.com/Kent.558/" target='_blank'>
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </span>
          <p className={styles.description}>
            A Fresh IT Graduate Student and an Aspiring Web Developer. Currently Job Seeking.
          </p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
        </div>
    </section>
  )
}

export default MyProfile
