'use client'
import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui'
import { cn } from '@/lib/utils'
import { useClickAway } from 'react-use'
import Link from 'next/link'

type Props = {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [focused, setFocused] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>(null)
    useClickAway(ref, () => {
        setFocused(false);
    });

    return (<>
        {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

        <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
            <Search className='absolute left-3 top-2 text-gray-400' />
            <Input
                className   = 'rounded-2xl outline-none w-full bg-gray-100 pl-11 focus:'
                type        = 'text'
                placeholder = 'Найти пиццу...'
                onFocus     = {() => setFocused(true)}
            />
            <div className  = {cn('absolute w-full rounded-2xl py-2 top-14 shadow-md invisible bg-white z-30 transition-all opacity-0',
                focused && 'visible opacity-100 top-12')} >
                <Link 
                    href  = {''} 
                    className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'>
                        <img 
                            className ='rounded w-8 h-8'    
                            src ="https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif"    
                            alt ='pizza' />
                        <span>Pizza</span>
                </Link>
                
            </div>
        </div>
    </>
    )
}