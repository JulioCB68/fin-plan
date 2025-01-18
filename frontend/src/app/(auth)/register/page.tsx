'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { singIn as singInFn } from '@/services/users'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { registerFormSchema } from '../form-schema'

type FormSchema = z.infer<typeof registerFormSchema>

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const { mutateAsync: singIn, isPending } = useMutation({
    mutationFn: singInFn,
    onSuccess: () => {
      toast.success('Cadastro feito com sucesso.')
      redirect('/login')
    },
  })

  function onSubmit(data: FormSchema) {
    singIn({ ...data })
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-medium text-zinc-900">
        Crie sua conta
      </h1>

      <p className="mb-6 text-sm text-zinc-700">
        Já possui uma conta?{' '}
        <Link href="/login" className="text-emerald-600 hover:underline">
          Fazer Login
        </Link>
      </p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Label htmlFor="name" className="flex items-start justify-start">
            Nome Completo
          </Label>
          <Input
            type="name"
            id="name"
            {...register('name')}
            className="h-12 rounded-lg border-zinc-300 px-3 focus:border-emerald-600 focus:ring-emerald-600"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="flex items-start justify-start">
            E-mail
          </Label>
          <Input
            type="email"
            id="email"
            {...register('email')}
            className="h-12 rounded-lg border-zinc-300 px-3 focus:border-emerald-600 focus:ring-emerald-600"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="flex items-start justify-start">
            Senha
          </Label>
          <Input
            type="password"
            id="password"
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
            <p>Criar conta</p>
          ) : (
            <Loader className="animate-spin transition-all" />
          )}
        </Button>
      </form>
    </div>
  )
}
