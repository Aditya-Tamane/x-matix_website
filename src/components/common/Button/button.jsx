import './button.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Button({title = 'Title', type = 'primary', size = 'medium', hasIcon = false, icon=<ArrowLongRightIcon className="h-6 w-6" />, onClick=()=>{}} ) {
  const getButtonStyles = (type) => {
    if(type == 'primary') {
      return 'primary-button'
    } else if(type == 'secondary') {
      return 'secondary-button'
    }
  }
  const getButtonSize = (size) => {
    if(size == 'small') return 'button-small'
    else if(size == 'medium') return 'button-medium'
    else if(size == 'large') return 'button-large'
  }
  return (
      <button className={`button default-button ${getButtonStyles(type)} ${getButtonSize(size)}`}>
        {title} 
        {hasIcon && icon}
      </button>
  );
}