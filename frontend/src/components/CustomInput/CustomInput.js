import React from 'react'

const CustomInput = (props) => {
    const { type, label, i_id, i_class, name , value, onchange, onblur} = props;
    return (
        <div className="flex flex-col justify-center my-2 form-floating mt-3">
        <label  className="my-1" htmlFor={label}>{label}</label>
        <input
          type={type}
          className={`form-control ${i_class} ` }
          id={i_id}
          name={name}
          placeholder={label}
          value={value}
          onChange={onchange}
          onBlur={onblur}
        />
        
      </div>
    );
};


export default CustomInput;