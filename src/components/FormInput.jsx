import React from 'react'

export const FormInput = (props) => {
  return (
    <div className='intro__form-container'>
      <input
        type={props.inputType}
        className={
          props.errorInput ? 'intro__form-input error' : 'intro__form-input'
        }
        autoComplete='off'
        placeholder={
          props.errorInput ? props.placeholderError : props.placeholder
        }
        name={props.inputName}
        onChange={props.onChange}
        value={props.inputValue}
      />
      <img
        className={
          props.errorInput ? 'intro__form-icon show' : 'intro__form-icon hide'
        }
        src={props.icon}
        alt='Icon error'
      />
      <p
        className={
          props.errorInput
            ? 'intro__form-message show'
            : 'intro__form-message hide'
        }
      >
        {props.message}
      </p>
    </div>
  )
}
