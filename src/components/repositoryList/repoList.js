import Repo from "../repository/repo";

export default function Repos() {

  const projects = [
    {
      'projectName': 'Presidential Gallary',
      'repoName': 'test',
    },
    {
      'projectName': 'MovieCritix',
      'repoName': 'test2',
    },
    {
      'projectName': 'Password Generator',
      'repoName': 'test2',
    },
    {
      'projectName': 'Presidential Gallary',
      'repoName': 'test',
    },
    {
      'projectName': 'MovieCritix',
      'repoName': 'test2',
    },
    {
      'projectName': 'Password Generator',
      'repoName': 'test2',
    }
  ];

  return (
    <div className='d-flex justify-content-between'>
      {projects.map((project, i) => {
        return <Repo project={project} key={i} />
      })}
    </div>
  )
}