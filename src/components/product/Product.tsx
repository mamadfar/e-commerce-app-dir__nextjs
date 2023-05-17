import {FC} from "react";
import Link from "next/link";
import {ProductImage} from "@/components";

interface IProductProps {
    product: ProductType
}

const ProductPage: FC<IProductProps> = ({product}) => {
    const {id, title, image, description, price, rating, category} = product;
    return (
        //? prefetch = false to prevent to fetch the date of each product in the background
        <Link prefetch={false} href={`/products/${id}`} className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
            <div className="relative max-h-72 flex-1">
                <ProductImage image={image} title={title}/>
            </div>
            <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                <p className="w-44 truncate">{title}</p>
                <p>${price}</p>
            </div>
            <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{description}</p>
        </Link>
    );
};

export default ProductPage;
