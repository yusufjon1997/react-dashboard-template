import { useMutate } from "hooks";
import { FormProvider, useForm } from "react-hook-form";


export default function Form({ name, method, endpoint, children, onSuccess, onError = () => {} , defaultValues , sendAsFormData }) {
    
    
    const methods = useForm({ defaultValues });

    const { isLoading, mutate, status, data, error } = useMutate({ name, method, endpoint });
    const formdata = new FormData();


    const onSubmit = (data) => {
        if(sendAsFormData){
            const formArr = Object.keys(data);
            
            for (let i = 0; i < formArr.length; i++) {
                if(formArr[i] === 'productPictures'){
                    const files = Array.from(data['productPictures']);
                    files.forEach((file) => formdata.append("productPictures", file));
                }else {
                    formdata.append(formArr[i] , data[formArr[i]]);
                }
            }

            for (const a of formdata) {
                console.log(a);
            }
            mutate(formdata);
        } else {
            mutate(data);
        }
        methods.reset();
    };

    if (status === 'success') {
        onSuccess(data.data);
    }

    if (status === 'error') {
        onError(error)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children({ isSubmitting: isLoading })}
            </form>
        </FormProvider>
    );
}
