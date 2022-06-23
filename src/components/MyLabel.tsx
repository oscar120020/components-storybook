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
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor
}: LabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{color: fontColor}}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
