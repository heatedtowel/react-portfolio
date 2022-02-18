import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import './assets/css/popover.css'

export default function Example(props) {
  const popover = (
    <Popover className='text-center bg-secondary' id="popover-basic">
      <Popover.Header as="h3">{props.repo.projectName}</Popover.Header>
      <Popover.Body>
        <a className='pop-btn btn text-light border-light' role='button' href={props.repo.repoName}>Repository</a>
        <br></br>
        <a className='pop-btn btn text-light border-light mt-1' role='button' href={props.repo.deployed}>Deployed App</a>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className='infoBtn' variant="secondary">{props.repo.projectName}</Button>
    </OverlayTrigger>
  );
}