import Repo from "../repository/repo";

export default function Repos() {

  const projects = [
    {
      'projectName': 'Presidential Gallary',
      'repoName': 'test',
    },
    {
      'projectName': 'MovieCritix',
      'repoName': 'https://github.com/heatedtowel/moviecritix',
    },
    {
      'projectName': 'Password Generator',
      'repoName': 'test2',
    },
    {
      'projectName': 'Presidential Gallary',
      'repoName': 'test',
    }
  ];

  return (
    <div className='d-flex justify-content-between p-2'>
      {projects.map((project, i) => {
        return <Repo project={project} key={i} />
      })}
    </div>
  )
}