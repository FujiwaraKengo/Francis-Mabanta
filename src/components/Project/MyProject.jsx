import styles from './ProjectStyles.module.css'
import ProjectCards from '../../common/cards/ProjectCards'
import IoT from '../../assets/IoTPrepaid Chibi.jpg'
import IMS from '../../assets/IMS Logo.png'


function MyProject() {
  return (
    <section id="project" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCards
            img={IoT}
            link="https://github.com/FujiwaraKengo/iPecs-RPI4"
            h3="Electricity Consumption IoT"
            p="Prepaid Electricity IoT"/>
            <ProjectCards
            img={IMS}
            link="https://github.com/FujiwaraKengo/Inventory-Management-System"
            h3="Inventory Management System"
            p="A Basic School Project"/>
        </div>
    </section>
  )
}

export default MyProject
