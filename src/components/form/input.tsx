import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';

type setStateProps<T> = React.Dispatch<React.SetStateAction<T>>

type EditInputProps = {
  types?: String
}

type EditFormProps = {
  state?: String,
  label?: String,
  placeholder?: String,
  setState?: setStateProps<String>
}
type FormInputProps = EditFormProps & EditInputProps

const FormInput: React.FC<FormInputProps> = ({ types, state, setState, label,placeholder }) => {
  const [name, setName] = useState('')

  console.log(name)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setName(e.target.value)
    }
  }

  return (
    <LabelContainer
      // htmlFor={label}
    >
      <div className="labelspan Capitalize">{label}</div>
      <input type="text"
        // id={label}
        value={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </LabelContainer>
  );
};

export default FormInput;


const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 13px;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;

  .labelspan {

  }
  input {
    height: 55px;
    border-radius: 8px;
    background: transparent;
    padding: 0 18px;
    width: 100%;
    outline: none;
    font-size: 14px;
    font-weight: normal;
    font-family: inherit;
    border: 1px solid rgba(255, 255, 255, 0.6);

    color: #fff;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);

    }
    
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }

  span {
    font-size: 1.1rem;
    color: #c61212;
    font-weight: normal;
    display: none;
  }
`;