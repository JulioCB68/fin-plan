import Image from 'next/image'

import Illustration from '@/assets/images/login-form.svg'
import { Logo } from '@/components/logo'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="w-full max-w-[450px] xl:max-w-[600px]">
          <div className="mb-6 flex items-center justify-center">
            <Logo classname="text-[#ADB5BD]" />
            <p className="ml-1 font-gilroy text-[#ADB5BD]">finplan</p>
          </div>

          {children}
        </div>
      </div>

      <div className="relative hidden w-1/2 items-center justify-center lg:flex">
        <Image
          src={Illustration}
          alt="FinPlan Illustration"
          className="h-full max-h-[960px] w-full max-w-[656px] select-none rounded-[32px] object-cover"
          priority
        />
        <div className="absolute bottom-0 w-full max-w-[656px] rounded-b-[32px] bg-white p-10 text-lg">
          <div className="mb-6 flex items-center justify-center">
            <Logo classname="text-[#087F5B]" />
            <p className="ml-1 font-gilroy text-[#087F5B]">finplan</p>
          </div>
          <p>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  )
}
