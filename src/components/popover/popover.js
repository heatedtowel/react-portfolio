import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

export default function Example(props) {


  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{props.repo.projectName}</Popover.Header>
      <Popover.Body>
        <a href={props.repo.repoName}>Repo</a>
        <br></br>
        <a href={props.repo.deployed}>Deployed App</a>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="secondary">More Info</Button>
    </OverlayTrigger>
  );
}