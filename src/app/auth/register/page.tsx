'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır").max(100, "İsim en fazla 100 karakter olmalıdır"),
    email: z.string().email("Geçerli bir email girin"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır").max(100, "Şifre en fazla 100 karakter olmalıdır"),
    confirmPassword: z.string().min(6, "Şifre en az 6 karakter olmalıdır").max(100, "Şifre en fazla 100 karakter olmalıdır"),
}).refine((data) => data.password === data.confirmPassword, { message: "Şifreler eşleşmiyor", path: ["confirmPassword"] })

const page = () => {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data: z.infer<typeof schema>) => {
        console.log(data)
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-2'>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 p-8 border rounded-lg shadow-lg w-full max-w-md bg-accent/50'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Kayıt Ol</h2>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='name' className='mb-2 font-medium'>İsim</label>
                        {form.formState.errors.name && <span className='text-sm text-red-500'>{form.formState.errors.name.message}</span>}
                    </div>
                    <Input type='text' id='name' className='p-2 border-border rounded' {...form.register('name')} />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='email' className='mb-2 font-medium'>Email</label>
                        {form.formState.errors.email && <span className='text-sm text-red-500'>{form.formState.errors.email.message}</span>}
                    </div>
                    <Input type='email' id='email' className='p-2 border-border rounded' {...form.register('email')} />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='password' className='mb-2 font-medium'>Şifre</label>
                        {form.formState.errors.password && <span className='text-sm text-red-500'>{form.formState.errors.password.message}</span>}
                    </div>
                    <Input type='password' id='password' className='p-2 border-border rounded' {...form.register('password')} />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='confirmPassword' className='mb-2 font-medium'>Şifre Tekrar</label>
                        {form.formState.errors.confirmPassword && <span className='text-sm text-red-500'>{form.formState.errors.confirmPassword.message}</span>}
                    </div>
                    <Input type='password' id='confirmPassword' className='p-2 border-border rounded' {...form.register('confirmPassword')} />
                </div>
                <Button type='submit'>Kayıt Ol</Button>
                <div className='flex items-center justify-between gap-2 text-sm text-muted-foreground'>
                    <div className='w-full bg-border h-1'></div>
                    <p>veya</p>
                    <div className='w-full bg-border h-1'></div>
                </div>
                <Link href="/auth/login" className='text-center text-primary hover:underline'>Zaten bir hesabın var mı? Giriş yap</Link>
            </form>
        </div>
    )
}

export default page