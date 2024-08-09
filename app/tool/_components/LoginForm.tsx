'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { login } from '@/app/tool/action'
import { setCookie } from 'cookies-next'

const loginFormSchema = z.object({
  username: z.string().min(1, 'Tên đăng nhập không được để trống'),
  password: z.string().min(1, 'Mật khẩu không được để trống'),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

const LoginForm = ({
  className
}: HTMLAttributes<HTMLFormElement>) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = async (values: LoginFormValues) => {
    const { username, password } = values
    const response = await login(username, password)

    if (response.isSuccess) {
      setCookie('token', response.access_token, {
        maxAge: 60 * 30, // 30 minutes
      })
      console.log('Login success')
    } else {
      console.log('Login failed')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-8', className)}>
        <div className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Tên đăng nhập
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Mật khẩu
                </FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
export default LoginForm
