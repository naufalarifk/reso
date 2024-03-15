import React, { useState } from 'react';
import './index.css'; // Import the CSS file with custom styles

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    value?: number;
    onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ min, max, step = 1, value = min, onChange }) => {
    const [sliderValue, setSliderValue] = useState(value);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setSliderValue(newValue);
        onChange(newValue);
    };

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue}
            onChange={handleSliderChange}
            className="appearance-none w-full h-2 rounded-md bg-[#322d29] outline-none slider" // Apply the custom thumb class here
        />
    );
};
