import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

export default function Example(props) {


  const popover = (
    <Popover className='text-center bg-dark' id="popover-basic">
      <Popover.Header className='bg-info' as="h3">{props.repo.projectName}</Popover.Header>
      <Popover.Body>
        <a className='btn bg-info text-dark border-dark' href={props.repo.repoName}>Repo</a>
        <br></br>
        <a className='btn bg-info text-dark border-dark mt-1' href={props.repo.deployed}>Deployed App</a>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="secondary">{props.repo.projectName}</Button>
    </OverlayTrigger>
  );
}