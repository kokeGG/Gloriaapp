import React from 'react';
import { Form, useField } from 'informed';

const CustomDate = (props) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value, error, showError } = fieldState;

  const { setValue, setTouched } = fieldApi;

  const { label, id, ...rest } = userProps;

    
      return (
        <>
          <label htmlFor={id} style={{ width: "28rem" }}>{label}</label>
          <input
            {...rest}
            id={id}
            ref={ref}
            value={!value && value !== 0 ? "" : value}
            onChange={(e) => {
              setValue(e.target.value, e);
            }}
            onBlur={(e) => {
              setTouched(true, e);
            }}
            style={{ width: "28rem" }}
          />
        </>
      );
}
 
export default CustomDate;