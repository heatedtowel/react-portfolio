export default function Project(props) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.project.projectName}</h5>
        <p className="card-text">{props.project.repoName}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}