import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    return (<>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold'/>
            </Container>

            <TopBar categories={categories}/>

            <Container className='pb-14 mt-9'>
                <div className='flex gap-[80px]'>
                    {/*    Фильтрация   */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>
                    {/*    Список товаров   */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            {categories.map((category) => (
                                <ProductsGroupList
                                    title={category.name}
                                    categoryId={category.id}
                                    items={category.products}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}
