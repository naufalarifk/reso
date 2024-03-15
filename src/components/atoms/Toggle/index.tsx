import React, { useState } from 'react';

interface ToggleProps {
    label: string;
    onChange: (checked: boolean) => void;
    checked?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ label, onChange, checked }) => {
    const [isChecked, setIsChecked] = useState(checked);

    console.log('checked', checked)

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        onChange(isChecked);
        console.log('isChecked', isChecked)
    };

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggleChange}
            />
            <label
                className={`relative flex items-center cursor-pointer ${isChecked ? 'bg-indigo-600' : 'bg-gray-200'
                    } rounded-full w-12 h-6 transition-colors duration-300`}
            >
                <span
                    className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform ${isChecked ? 'translate-x-full' : 'translate-x-0'
                        }`}
                />
            </label>
            <span className="ml-2">{label}</span>
        </div>
    );
};
