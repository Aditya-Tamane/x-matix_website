import Button from "../Button/button";
import './CoreCapabilities.css';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';


export default function CoreCapabilitiesCard({icon=null}) {
  return (
    <div className="core-card-wrapper">
      <span>{icon}</span>
      <h6 className="heading"><b>Workflow orchestration & approvals</b></h6>
      <p className="content">Model and execute end-to-end processes with human, system, and agent participation.</p>
      <Button title="Learn More" hasIcon={true} type="secondary" size="small" icon={<ArrowUpRightIcon width={16} height={16}/>}/>
    </div>
  )
}
