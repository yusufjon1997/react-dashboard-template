import React from 'react'
import { useFormContext } from 'react-hook-form'

const DatePicker = () => {
  const { register } = useFormContext();

    return (
    <input type="date" {...register('date')} />
  )
}

export default DatePicker