'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login as loginFn } from '@/services/users'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginFormSchema } from '../form-schema'
import { Loader } from 'lucide-react'

type FormSchema = z.infer<typeof loginFormSchema>

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: loginFn,
    onSuccess: () => redirect('/'),
  })

  function onSubmit(data: FormSchema) {
    login({ ...data })
  }

  return (
    <>
      <h1 className="mb-6 text-2xl font-medium text-zinc-900">
        Entre em sua conta
      </h1>

      <p className="mb-6 text-sm text-zinc-700">
        Novo por aqui?{' '}
        <Link href="/register" className="text-emerald-600 hover:underline">
          Crie uma conta
        </Link>
      </p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Label htmlFor="email" className="flex items-start justify-start">
            E-mail
          </Label>
          <Input
            type="email"
            placeholder=" "
            {...register('email')}
            className="peer h-12 rounded-lg border-zinc-300 px-3 focus:border-emerald-600 focus:ring-emerald-600"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="flex items-start justify-start">
            Senha
          </Label>
          <Input
            type="password"
            placeholder=" "
            {...register('password')}
            className="h-12 rounded-lg border-zinc-300 px-3 focus:border-emerald-600 focus:ring-emerald-600"
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className={`h-12 w-full rounded-lg bg-emerald-600 font-medium text-white hover:bg-emerald-700 ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {!isPending ? (
            <p>Entrar</p>
          ) : (
            <Loader className="animate-spin transition-all" />
          )}
        </Button>
      </form>
    </>
  )
}
