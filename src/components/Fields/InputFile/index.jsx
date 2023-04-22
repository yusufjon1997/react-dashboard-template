import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputFile = ({ multiple= false , options = {} , accept = "image/*,.pdf,.doc" }) => {

  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <input type="file" accept={accept} multiple={multiple} {...register("productPictures", options)} />
      {errors["productPictures"]?.message}
    </>
  )
}

export default InputFile