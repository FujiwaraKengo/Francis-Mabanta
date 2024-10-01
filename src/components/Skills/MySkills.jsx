import SkillCards from '../../common/cards/SkillCards'
import styles from './SkillStyles.module.css'
import checkMarkDark from '../../assets/CheckMark-Dark.svg'
import checkMarkLight from '../../assets/CheckMark-Light.svg'
import htmlDark from '../../assets/HTML-Dark.svg'
import htmlLight from '../../assets/HTML-Light.svg'
import cssDark from '../../assets/CSS-Dark.svg'
import cssLight from '../../assets/CSS-Light.svg'
import javascriptDark from '../../assets/JavaScript-Dark.svg'
import javascriptLight from '../../assets/JavaScript-Light.svg'
import pythonDark from '../../assets/Python-Dark.svg'
import pythonLight from '../../assets/Python-Light.svg'
import flutterDark from '../../assets/Flutter-Dark.svg'
import flutterLight from '../../assets/Flutter-Light.svg'
import dartDark from '../../assets/Dart-Dark.svg'
import dartLight from '../../assets/Dart-Light.svg'
import reactDark from '../../assets/ReactDark.svg'
import reactLight from '../../assets/ReactLight.svg'
import bootstrapDark from '../../assets/Bootstrap-Dark.svg'
import bootstrapLight from '../../assets/Bootstrap-Light.svg'
import nodeJSDark from '../../assets/NodeJS-Dark.svg'
import nodeJSLight from '../../assets/NodeJS-Light.svg'
import expressJSDark from '../../assets/ExpressJS-Dark.svg'
import expressJSLight from '../../assets/ExpressJS-Light.svg'
import firebaseDark from '../../assets/Firebase-Dark.svg'
import firebaseLight from '../../assets/Facebook-Light.svg'
import gitHubDark from '../../assets/GitHub-Dark.svg'
import gitHubLight from '../../assets/GitHub-Light.svg'
import { useTheme } from '../../common/ThemeContext'


function MySkills() {
    const { theme } = useTheme();
    const htmlIcon = theme === 'light' ? htmlLight : htmlDark;
    const cssIcon = theme === 'light' ? cssLight : cssDark;
    const javascriptIcon = theme === 'light' ? javascriptLight : javascriptDark;
    const pythonIcon = theme === 'light' ? pythonLight : pythonDark;
    const flutterIcon = theme === 'light' ? flutterLight : flutterDark;
    const dartIcon = theme === 'light' ? dartLight : dartDark;
    const firebaseIcon = theme === 'light' ? firebaseLight : firebaseDark;
    const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark;
    const nodeJSIcon = theme === 'light' ? nodeJSLight : nodeJSDark;
    const expressJSIcon = theme === 'light' ? expressJSLight : expressJSDark;
    const reactIcon = theme === 'light' ? reactLight : reactDark;
    const bootstrapIcon = theme === 'light' ? bootstrapLight : bootstrapDark;
    return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillContainer}>
            <SkillCards
            img={htmlIcon}
            skill='HTML'/>
            <SkillCards
            img={cssIcon}
            skill='CSS'/>
            <SkillCards
            img={javascriptIcon}
            skill='JAVASCRIPT'/>
            <SkillCards
            img={pythonIcon}
            skill='PYTHON'/>
        </div>
        <hr />
        <div className={styles.skillContainer}>
            <SkillCards
            img={flutterIcon}
            skill='FLUTTER'/>
            <SkillCards
            img={dartIcon}
            skill='DART'/>
            <SkillCards
            img={firebaseIcon}
            skill='FIREBASE'/>
            <SkillCards
            img={gitHubIcon}
            skill='GITHUB'/>
        </div>
        <hr />
        <div className={styles.skillContainer}>
            <SkillCards
            img={nodeJSIcon}
            skill='NodeJS'/>
            <SkillCards
            img={expressJSIcon}
            skill='ExpressJS'/>
            <SkillCards
            img={reactIcon}
            skill='REACT'/>
            <SkillCards
            img={bootstrapIcon}
            skill='BOOTSTRAP'/>
        </div>
    </section>
    )
}

export default MySkills
