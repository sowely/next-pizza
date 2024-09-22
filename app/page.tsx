import {Container, Filters, ProductCard, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
    return (<>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold'/>
            </Container>

            <TopBar/>

            <Container className='pb-14 mt-9'>
                <div className='flex gap-[80px]'>
                    {/*    Фильтрация   */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>
                    {/*    Список товаров   */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList
                                title="Пиццы"
                                categoryId={1}
                                items={[
                                    {
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },
                                ]}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                categoryId={2}
                                items={[
                                    {
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },{
                                        id: 1,
                                        name: 'Песто',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                                        price: 550,
                                        items: [{ price: 650 }]
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}
