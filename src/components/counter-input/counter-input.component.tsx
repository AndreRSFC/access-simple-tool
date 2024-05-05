
import {
    useFeatures,
    useFeaturesDispatch,
} from "../../context/FeaturesContext";
import * as Styled from './counter-input.style'

interface CounterInputProps {
    handleClik: (item: number) => void;
    featureKey: string;
}

export const CounterInput = ({ handleClik, featureKey }: CounterInputProps) => {
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
        <Styled.CounterInput>
            <Styled.CounterInputButton
                onClick={handleDecrement}
                disabled={features?.[featureKey] === 0}
                className="counterInput-button"
            >
                -
            </Styled.CounterInputButton>
            <Styled.CounterInputDisplay className="counterInput-display">{features?.[featureKey]} %</Styled.CounterInputDisplay>
            <Styled.CounterInputButton
                onClick={handleIncrement}
                className="counterInput-button"
                disabled={features?.[featureKey] === 70}
            >
                +
            </Styled.CounterInputButton>
        </Styled.CounterInput>
    );
};

