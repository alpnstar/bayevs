import './select.scss';
import React, { useState, useRef, useEffect } from 'react';
import {SelectOption, SelectProps} from "./selectTypes";

const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
        options.find(option => option.value === value) || null
    );
    const selectRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: SelectOption) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="select-container" ref={selectRef}>
            <div className="select-header" onClick={handleToggle}>
                <span className="select-placeholder">
                    {selectedOption ? selectedOption.label : placeholder || 'Select...'}
                </span>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <ul className="select-options">
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={`select-option ${selectedOption && selectedOption.value === option.value ? 'active' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
