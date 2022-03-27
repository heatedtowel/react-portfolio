import { Popover, OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import './assets/css/popover.css'

export default function Overlay(props) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.repo.description}
    </Tooltip>
  );

  const popover = (
    <Popover className='text-center bg-secondary' id="popover-basic">
      <OverlayTrigger
        placement="right-start"
        delay={{ show: 250, hide: 600 }}
        overlay={renderTooltip(props)}
      >
        <Popover.Header as="h3">{props.repo.projectName}</Popover.Header>
      </OverlayTrigger>
      <Popover.Body>
        <a target="_blank" rel="noopener noreferrer" className='pop-btn btn text-light border-light' role='button' href={props.repo.repoName}>Repository</a>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" className='pop-btn btn text-light border-light mt-1' role='button' href={props.repo.deployed}>Deployed App</a>
      </Popover.Body>
    </Popover>
  );


  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className='infoBtn' variant="secondary">{props.repo.projectName}</Button>
    </OverlayTrigger>
  );
}