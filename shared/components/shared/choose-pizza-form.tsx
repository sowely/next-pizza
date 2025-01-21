'use client';

import React, { useState } from 'react'
import { Title, PizzaImage, GroupVariants, IngredientItem } from '.'
import { cn } from '@/shared/lib/utils'
import { Button } from '../ui'
import { mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client';
import { useSet } from 'react-use';
import { calcPizzaTotalPrice } from '@/shared/lib';

type Props = {
    imageUrl: string
    name: string
    ingredients: Ingredient[]
    items: ProductItem[]
    onClickAddCart?: VoidFunction
    className?: string
}

/* pizza window */
export const ChoosePizzaForm: React.FC<Props> = ({
    imageUrl,
    name,
    ingredients,
    items,
    onClickAddCart,
    className
}) => {
    const [size, setSize] = useState<PizzaSize>(20);
    const [type, setType] = useState<PizzaType>(1);
    const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

    const totalPrice = calcPizzaTotalPrice(items, type, size, selectedIngredients, ingredients);
    const textDetails = `${size} см, ${String(mapPizzaType[type]).toLowerCase()} тесто`;

    const filteredPizzasByType = items.filter(pizza => pizza.pizzaType === type);

    const availablePizzaSizes = pizzaSizes.map(item => ({
        value: item.value,
        name: item.name,
        disabled: !filteredPizzasByType.some(pizza => Number(pizza.size) === Number(item.value))
    }))

    React.useEffect(() => {
        const isSameSize = availablePizzaSizes.find(item => size === Number(item.value) && !item.disabled)
        const availableSize = availablePizzaSizes.find(item => !item.disabled);

        !isSameSize && availableSize && setSize(Number(availableSize?.value) as PizzaSize);
    }, [type])

    const handleClickAdd = () => {
        onClickAddCart?.();
        console.log('info', {
            size,
            type,
            ingredients: selectedIngredients,
        })
    }

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetails}</p>

                {/* pizza size & type */}
                <div className='flex flex-col gap-4 mt-5'>
                    {/* сюда передать массив объектов типа {name: , value: , disabled: true} */}
                    <GroupVariants items={availablePizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />
                    <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />
                </div>

                {/* ingredients */}
                <div className='mt-5 bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
                    <div className='grid grid-cols-3 gap-3'>
                        {ingredients.map(ingredient => (
                            <IngredientItem
                                key={ingredient.id}
                                imageUrl={ingredient.image}
                                name={ingredient.name}
                                price={ingredient.price}
                                active={selectedIngredients.has(ingredient.id)}
                                onClick={() => addIngredient(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                    onClick={handleClickAdd}
                >
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>

    )
}