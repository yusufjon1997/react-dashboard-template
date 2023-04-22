import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'


const Input = ({ name , placeholder , value = null , options = {}, type = "text"}) => {

    const { register , setValue, formState : { errors  } } = useFormContext();

    useEffect(() => {
        if(value !== null) {
            setValue(name, value , { shouldValidate :  true});
        }
    },[value])

    return (
        <>
            <input type={type} {...register(`${name}`, options)} placeholder={placeholder} />
            {errors[`${name}`]?.message}
        </>
    )
}

export default Input