import './my-label.css';

export interface MyLabelProps {
  /**
    * This is the text that is shown in the label
    */
  label: string;
  /**
    * You can select the size of the label here
    */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
    * You can set the CAPS here
    */
  allCaps?: boolean;
   /**
    * You can select color of the label
    */
  color?: 'primary'|'secondary'|'tertiary';
    /**
    * You can select color of the label
    */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No text',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}:MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`} 
      style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
