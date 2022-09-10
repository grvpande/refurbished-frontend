import React, { forwardRef } from 'react';

export interface TextInputProps {
    onChange: () => void;
    className?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ onChange, className='' }, ref) => {
    return <input type="text" onChange={onChange} className={`rounded form-input ${className}`} ref={ref} />;
});

export default TextInput;