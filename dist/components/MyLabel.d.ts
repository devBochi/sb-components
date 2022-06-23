/// <reference types="react" />
import './my-label.css';
export interface MyLabelProps {
    /**
      * This is the text that is shown in the label
      */
    label: string;
    /**
      * You can select the size of the label here
      */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
      * You can set the CAPS here
      */
    allCaps?: boolean;
    /**
     * You can select color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * You can select color of the label text
    */
    fontColor?: string;
    /**
    * You can select color of the background
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, backgroundColor, fontColor }: MyLabelProps) => JSX.Element;
