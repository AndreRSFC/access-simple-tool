import { useState } from "react";
import "./SwitchToggle.css";

interface SwitchToggleProps {
  handleToggle: (checked: boolean) => void;
}

const SwitchToggle = ({ handleToggle }: SwitchToggleProps) => {
  const [, setIsChecked] = useState(false);
  return (
    <label className="react-switch">
      <input
        onChange={() => {
          setIsChecked((checked) => {
            handleToggle(!checked);
            return !checked
          });
        }}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>Não</span>
        <span>Sim</span>
      </div>
    </label>
  );
};

export default SwitchToggle;
