import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'components/Fields';

const Control = () => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name="firstName"
            defaultValue={""}
            rules={{
                required: "required",
                maxLength: {
                    value: 5,
                    message: 'Value must be at least 3 words'
                }
            }}
            render={({ field, formState }) => <Input {...{ field, formState }} />}
        />
    )
}

export default Control;