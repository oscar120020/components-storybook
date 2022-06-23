import "./myLabel.css";

interface LabelProps {
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

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor
}: LabelProps) => {
  return (
    <span 
      className={`${size} text-${color} label`}
      style={{color: fontColor, backgroundColor}}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
