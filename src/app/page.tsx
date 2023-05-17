import {Product} from "@/components";

const Home = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: ReadonlyArray<ProductType> = await res.json();

    return (
        <main className="">
            <section className="flex flex-col space-y-12 pb-44">
                <h1 className="uppercase text-5xl font-bold text-center">Deals of the Day</h1>
                    {products.map(product => (
                        <Product key={product.id} product={product}/>
                    ))}
            </section>
        </main>
    )
}

export default Home;
