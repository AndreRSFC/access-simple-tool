import "./CounterInput.css";
import {
  useFeatures,
  useFeaturesDispatch,
} from "../../context/FeaturesContext";

interface CounterInputProps {
  handleClik: (item: number) => void;
  featureKey: string;
}

const CounterInput = ({ handleClik, featureKey }: CounterInputProps) => {
  const dispatch = useFeaturesDispatch();
  const features = useFeatures();

  const handleIncrement = () => {
    handleClik(1);
    if (features && dispatch) {
      dispatch({
        type: featureKey,
        value: features[featureKey] as number + 1,
      });
    }
  };

  const handleDecrement = () => {
    handleClik(-1);
    if (features && dispatch) {
      dispatch({
        type: featureKey,
        value: features[featureKey] as number - 1,
      });
    }
  };

  return (
    <div className="counterInput">
      <button
        onClick={handleDecrement}
        disabled={features?.[featureKey] === 0}
        className="counterInput-button"
      >
        -
      </button>
      <div className="counterInput-display">{features?.[featureKey]} %</div>
      <button
        onClick={handleIncrement}
        className="counterInput-button"
        disabled={features?.[featureKey] === 70}
      >
        +
      </button>
    </div>
  );
};

export default CounterInput;
