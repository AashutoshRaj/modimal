import React from 'react'

export const Input = ({label, type, onChange, className, name, value, labelClass, registerProps, errorMessage , validation, placeholder  }) => {
  return (
    <div  className='relative'>
      <label  className={labelClass}>{label}</label>
      <input 
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        {...registerProps}  
        validation={validation}  
        placeholder={placeholder}  
        />
       {errorMessage && <p className={'errorValidation'
      } >
          {errorMessage}
          </p>
          }
    </div>
  )
}


export const Select = React.forwardRef(({onChange,arr, value,  label, className,selectClass, ...rest }, ref)=>{


    return(
        <div className={className}>
        <label>{label}</label>
            <select 
             ref={ref}
              onChange={onChange}
              name={name}
              value={value} 
              className={selectClass}
              // {...rest}           
             >
                <option value={value} disabled selected>Select City</option>

                {arr.map((item)=>{
                  return <option value={item} >{item}</option>
                })}
                {/* <option value={value} >Solan</option> */}
             
            </select>
        </div>
    )
})


export const RadioButton = React.forwardRef(
  ({ onChange, value, label, className, name, checked, ...rest }, ref) => {
    return (
      <div className={className}>
      
          <input
            type="radio"
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            // {...rest}
          />
          {label}
        
      </div>
    );
  }
);
