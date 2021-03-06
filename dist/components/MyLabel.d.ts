/// <reference types="react" />
import "./myLabel.css";
export interface LabelProps {
    /**
     * Content of the label
     */
    label: string;
    /**
     * Text size of label
     */
    size?: "h1" | "h2" | "h3" | "normal";
    /**
     * Is all label uppercase?
     */
    allCaps?: boolean;
    /**
     * Text color type
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Font color control
     */
    fontColor?: string;
    /**
     * background color control
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: LabelProps) => JSX.Element;
