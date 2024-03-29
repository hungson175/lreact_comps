import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';
const Dropdown = ({ options, onChange, value}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);        
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded p-1 cursor-pointer' key={option.value} onClick={() => handleSelect(option)}>
                {option.label}
            </div>
        );
    });
    return (
        <div className='w-48 relative'>
            <Panel className="flex justify-between items-center cursor-pointer " onClick={() => setIsOpen((currentIsOpen) => ! currentIsOpen)}>
                {value ? value.label : "Select ..."}
                {<GoChevronDown className='text-2xl'/>}
            </Panel>
            { isOpen ? (<Panel className='absolute top-full'> {renderedOptions} </Panel>) : false}
        </div>
    );
};

export default Dropdown;