import Button from "../Button/button";
import './CoreCapabilities.css';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';


export default function CoreCapabilitiesCard({icon=null, data={}}) {
  return (
    <div className="core-card-wrapper">
      <span>{icon}</span>
      <h6 className="heading"><b>{data.title}</b></h6>
      <p className="content">{data.content}</p>
      <Button title="Learn More" hasIcon={true} type="secondary" size="small" icon={<ArrowUpRightIcon width={16} height={16}/>}/>
    </div>
  )
}
