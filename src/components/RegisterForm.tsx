// ZOD schema for form validation
// React Hook Form with ZOD resolver for form validation

import {z} from 'zod';
import {useForm, type SubmitHandler} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const registerSchema = z.object({
    username: z
        .string()
        .min(3, {message: 'Username must be at least 3 characters long'})
        .max(20, {message: 'Username must not exceed 20 characters'}),
    email: z
        .email({message: 'Invalid email address'})
        .max(50, {message: 'Email must not exceed 50 characters'}),
    password: z
        .string()
        .min(6, {message: 'Password must be at least 6 characters long'})
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        })
        .max(100, {message: 'Password must not exceed 100 characters'}),
    confirmPassword: z
        .string(),
})
.refine((data)=> data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], })

export type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
    const {register,handleSubmit, formState: {errors}} = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: 'onBlur',
    })
    console.log(errors);

    const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data);

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <div>
                    <label htmlFor='fullName'>Full Name: </label>
                    <input id='fullName' {...register('username')}/>
                    {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                </div>
                <div>
                    <label htmlFor='email'>email: </label>
                    <input id='email' {...register('email')}/>
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' {...register('password')}/>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div>
                    <label htmlFor='confirmpwd'>Confirm Password: </label>
                    <input id='confirmpwd' {...register('confirmPassword')}/>
                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )

}