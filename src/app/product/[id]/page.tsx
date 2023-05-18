import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";
import {ProductImage} from "@/components";


interface IProductPageProps {
    params: {
        id: number;
    };
}

const ProductPage = async ({params: {id}}): Promise<IProductPageProps & ReturnType<JSXElement>> => {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const {image, title, price, description}: ProductType = await res.json();

    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
            <ProductImage title={title} image={image}/>
            <div className="divide-y">
                <div className="space-y-2 pb-8">
                    <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                    <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${price}</h2>
                </div>
                <div className="pt-8">
                    <p className="text-xs md:text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
