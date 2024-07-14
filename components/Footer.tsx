import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { PiXLogoBold } from "react-icons/pi";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className='m-4 '>
            <div className='w-fit bg-[#1F2025] flex flex-col gap-1 items-center p-4 border border-[#FE6043] rounded-xl'>
                <Link href={"https://x.com/_devmayank"} className='flex flex-row gap-1'>
                    <PiXLogoBold />
                    <h1 className='text-sm'>_devmayank</h1>
                    <GoArrowUpRight />
                </Link>
                <Link className='text-[9px] text-gray-400' href={"https://earn.superteam.fun/listings/hackathon/oracle-aggregator-st-talent-olympics/"}>Submittion for talent-olympics </Link>
            </div>
        </div>
    )
}

export default Footer
