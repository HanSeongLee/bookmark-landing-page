import React, {HTMLAttributes, useCallback} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useForm, Controller} from "react-hook-form";

const ContactContainer: React.FC<HTMLAttributes<HTMLFormElement>> = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback((data) => {
        alert('Thank you for submitting.');
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              {...props}
        >
            <Controller name={'email'}
                        control={control}
                        rules={{
                            required: 'This is required field',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Whoops, make sure it’s an email',
                            }
                        }}
                        render={({ field }) => (
                            <Input type={'email'}
                                   placeholder={'Enter your email address'}
                                   error={errors?.email?.message}
                                   {...field}
                            />
                        )}
            />


            <Button type={'submit'}
                    variants={'danger'}
            >
                Contact Us
            </Button>
        </form>
    );
};

export default ContactContainer
