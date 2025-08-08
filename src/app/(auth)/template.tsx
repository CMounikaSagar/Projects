"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"



const navLinks = [
  {name: 'Login', href: '/login'},
  {name: 'Register', href: '/register'},
  {name: 'ForgotPassword', href: '/forgot-password'},
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-screen w-full transform scale-[1.3] transition-all duration-500 ease-in-out">
      <input type="text" placeholder="enter text" className="border-2 outline-orange-400 px-6 py-4 rounded-md"/>
      {navLinks.map((link)=>{
        const isActive = link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/')
        return(
          <Link className={isActive ? 'font-bold bg-amber-200' : ''} key={link.name} href={link.href}>{link.name}</Link>
        )
      })}
      {children}
    </div>
  )
}
