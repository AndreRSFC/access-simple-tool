import "./SwitchToggle.css";

interface SwitchToggleProps {
  handleToggle?: () => void;
}

const SwitchToggle = ({ handleToggle }: SwitchToggleProps) => {
  return (
    <label className="react-switch">
      <input
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>Sim</span>
        <span>Não</span>
      </div>
    </label>
  );
};

export default SwitchToggle;
