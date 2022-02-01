export default function Project(props) {

  return (
    <div className="card bg-dark text-white p-1 m-2">
      <img src="https://via.placeholder.com/850" class="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">{props.project.projectName}</h5>
        <a href="https://github.com/heatedtowel/moviecritix"><p className="card-text">GitHub</p></a>
        <p className="card-text">Deployed Application</p>
      </div>
    </div>
  )
}