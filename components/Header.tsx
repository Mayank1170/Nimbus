import React from 'react'
import Logo from "../public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div className='m-4 flex flex-col gap-[30px]'>
            <div className='flex flex-row justify-between gap-2 items-center'>
                <div className='flex flex-row items-center gap-1'>
                    <Image className='w-[25px] h-[25px]' alt='Nimbus Logo' src={Logo} width={1000} height={1000} />
                    <h4 className='text-[#F18B76] font-semibold'>Nimbus</h4>
                </div>
                <Link href="https://github.com/Mayank1170/oracle-aggregator" className="text-[#F18B76] flex flex-row items-center gap-1 hover:text-[#fc6749] transition-colors">
                    <FaGithub />Github
                </Link>
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <h1 className='text-5xl text-[#E9C7A5] flex justify-center font-semibold'>Oracle Aggregator</h1>
                <p className='text-[#d4d4d4] text-xl flex justify-center font-semibold gap-2'>Our feeds are dynamically powered by <span className='text-[#F18B76]'> Pyth </span> and  <span className='text-[#F18B76]'> Switchboard </span> oracles.</p>
            </div>
        </div>
    )
}

export default Header
