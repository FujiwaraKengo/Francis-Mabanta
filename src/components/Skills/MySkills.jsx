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


function MySkills() {
    // const reactIcon = theme === 'light' ? reactLight : reactDark
    return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillContainer}>
            <SkillCards
            img={htmlDark}
            skill='HTML'/>
            <SkillCards
            img={cssDark}
            skill='CSS'/>
            <SkillCards
            img={javascriptDark}
            skill='JAVASCRIPT'/>
            <SkillCards
            img={pythonDark}
            skill='PYTHON'/>
        </div>
        <hr />
        <div className={styles.skillContainer}>
            <SkillCards
            img={flutterDark}
            skill='FLUTTER'/>
            <SkillCards
            img={dartDark}
            skill='DART'/>
            <SkillCards
            img={firebaseDark}
            skill='FIREBASE'/>
            <SkillCards
            img={gitHubDark}
            skill='GITHUB'/>
        </div>
        <hr />
        <div className={styles.skillContainer}>
            <SkillCards
            img={nodeJSDark}
            skill='NodeJS'/>
            <SkillCards
            img={expressJSDark}
            skill='ExpressJS'/>
            <SkillCards
            img={reactDark}
            skill='REACT'/>
            <SkillCards
            img={bootstrapDark}
            skill='BOOTSTRAP'/>
        </div>
    </section>
    )
}

export default MySkills
