'use client'
import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui'
import { cn } from '@/shared/lib/utils'
import { useClickAway, useDebounce } from 'react-use'
import Link from 'next/link'
import { Api } from '@/shared/services/api-client'
import { log } from 'console'
import { Product } from '@prisma/client'

type Props = {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [products, setProducts] = React.useState<Product[]>([])
    const [focused, setFocused] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>(null)
    useClickAway(ref, () => {
        setFocused(false);
    });
    useDebounce(async () => { // useDebounce умеет работать с async, а useEffect нет
        try {
            Api.products.search(searchQuery)
                .then(products => setProducts(products))
        } catch (error) {
            console.log(error);
        }
    },
        300,
        [searchQuery])
    const onClickProduct = () => {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    }

    return (<>
        {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

        <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
            <Search className='absolute left-3 top-2 text-gray-400' />
            <Input
                className='rounded-2xl outline-none w-full bg-gray-100 pl-11 focus:'
                type='text'
                placeholder='Найти пиццу...'
                onFocus={() => setFocused(true)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className={cn('absolute w-full rounded-2xl py-2 top-14 shadow-md invisible bg-white z-30 transition-all opacity-0',
                focused && 'visible opacity-100 top-12')} >

                {
                    products.length === 0
                        ? <div className='flex items-center px-3'>Ничего не найдено</div>
                        : products.map(product => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                onClick={onClickProduct}
                                className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'>
                                <img
                                    className='rounded w-8 h-8'
                                    src={product.imageUrl}
                                    alt={product.name} />
                                <span>{product.name}</span>
                            </Link>
                        ))
                }
            </div>
        </div>
    </>
    )
}