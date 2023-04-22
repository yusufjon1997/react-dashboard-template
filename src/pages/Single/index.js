import React from 'react'
import { Form } from '../../modules';
import Fields from 'components/Fields';
import './style.css';
// import { Input } from 'components/Fields';
// import { CheckBox } from 'components/Fields';
// import { DatePicker } from 'components/Fields';
// import { InputFile } from 'components/Fields';

const Single = ({ isUpdate= false , values = {_id : 1}}) => {

    const { _id , ...rest} = values;

    return (
        <div>
            <Form
                method={isUpdate ? 'put' : 'post'}
                name="products"
                endpoint={isUpdate ? `/products/update/${_id}` : "/products/create"}
                sendAsFormData={true}
                onSuccess={
                    (data) => {
                        // console.log('on Sucsess', data)
                        isUpdate = false
                    }
                }
            >
                {({ isSubmitting }) => {
                    return <>
                        <div className='form'>
                            <h2>{isUpdate ? "Update" : 'Create'}</h2>
                            <Fields.Input 
                            name="name" 
                            placeholder="Name"
                            options={{
                                required : 'Ism berilishi shart',
                            }}
                            value={values.name}
                            />
                            <Fields.Input name="price" placeholder="Price" type="number" />
                            <Fields.Input name="description" placeholder="Description" />
                            <Fields.InputFile multiple={true} options={{ required : "required"}}/>
                            <button>{isSubmitting ? 'loading' : 'Save'}</button>
                        </div>
                    </>
                }}
            </Form>
        </div>
    )
}

export default Single;