import React from 'react';
import clsx from 'clsx';
import { InputWithLabelProps } from '@/types/commonComponentsTypes';

const InputWithLabel: React.FC<InputWithLabelProps> = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    placeholder = '',
    required = false,
    error,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col w-full mb-4">
            <label
                htmlFor={name}
                className={clsx(
                    'mb-2 font-medium text-gray-700',
                    { 'text-red-600': error } // Show red label if there's an error
                )}
            >
                {label} {required && <span className="text-red-600">*</span>}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={clsx(
                    'p-2 border rounded-md outline-none transition-colors duration-200 focus:ring-2',
                    {
                        'border-gray-300 focus:ring-primary': !error, // Default border color
                        'border-red-600 focus:ring-red-600': error, // Red border if there's an error
                        'bg-gray-100 cursor-not-allowed': disabled, // Disabled styles
                    }
                )}
            />

            {error && (
                <span className="mt-1 text-sm text-red-600">{error}</span>
            )}
        </div>
    );
};

export default InputWithLabel;
