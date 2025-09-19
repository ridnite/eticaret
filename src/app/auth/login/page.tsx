'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    email: z.string().email("Geçerli bir email girin"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır").max(100, "Şifre en fazla 100 karakter olmalıdır"),
})

const page = () => {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data: z.infer<typeof schema>) => {
        console.log(data)
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-2'>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 p-8 border rounded-lg shadow-lg w-full max-w-md bg-accent/50'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Giriş Yap</h2>
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
                <Button type='submit'>Giriş Yap</Button>
                <div className='flex items-center justify-between gap-2 text-sm text-muted-foreground'>
                    <div className='w-full bg-border h-1'></div>
                    <p>veya</p>
                    <div className='w-full bg-border h-1'></div>
                </div>
                <Link href="/auth/register" className='text-center text-primary hover:underline'>Hesabın yok mu? Kayıt ol</Link>
            </form>
        </div>
    )
}

export default page