import React from 'react'
import { useFormContext } from 'react-hook-form'

const CheckBox = () => {

    const { register } = useFormContext();

  return (
    <input type="checkbox" {...register('remember')} />
  )
}

export default CheckBox