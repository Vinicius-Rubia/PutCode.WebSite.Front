import { Menu } from 'lucide-react';
import React from 'react';
import LogoIcon from "../assets/icons/iconLogo.svg";
import Logo from "../assets/icons/logo.svg";
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center h-20 px-6'>
      <div>
        <div className='flex items-center space-x-4'>
          <Menu className='sm:hidden' />
          <img src={LogoIcon} alt="Logo Icon" className='w-14' />
          <img src={Logo} alt="Logo" className='hidden sm:block' />
        </div>
      </div>

      <nav className='hidden lg:block'>
        <ul className='flex items-center space-x-4 text-[#77798F]'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Affiliates</li>
        </ul>
      </nav>

      <div className='flex items-center space-x-4'>
        <Button variant="outline" className='hidden min-[435px]:block rounded-[40px] bg-zinc-950 h-12 text-white px-10'>Sign In</Button>
        <Button className="rounded-[40px] bg-zinc-950 border border-[#4467FF] h-12 text-white px-10">Sign Up</Button>
      </div>
    </div>
  )
}
