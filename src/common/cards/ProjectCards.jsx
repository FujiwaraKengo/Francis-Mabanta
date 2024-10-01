

function ProjectCards({img, link, h3, p}) {
  return (
    <a href={link} target='_blank'>
        <img className="hover" src={img} alt={h3} />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCards
