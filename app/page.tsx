import {Container, Filters, Title, TopBar} from "@/components/shared";

export default function Home() {
    return (<>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold'/>
            </Container>
            <TopBar/>
            {/*<div style={{height: 3000}}></div>*/}
            <Container className='pb-14'>
                <div className='flex gap-[60px]'>
                    {/*    Фильтрация   */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>
                    {/*    Список товаров   */}
                    <div className=''>
                        Список товаров
                    </div>
                </div>

            </Container>
        </>
    );
}
