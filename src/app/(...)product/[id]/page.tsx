"use client";

import {useEffect, useState} from 'react';
import {Dialog} from "@headlessui/react";
import {useParams, useRouter} from "next/navigation";
import {Button, ProductImage} from "@/components";
import {StarIcon as StarIconOutline} from "@heroicons/react/24/outline";
import {StarIcon} from "@heroicons/react/24/solid";

const Modal = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [product, setProduct] = useState<ProductType>(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    const router = useRouter();

    const handleOnClose = () => {
        setIsOpen(false);
        router.back();
    }

    const getProduct = async (signal: AbortSignal) => {
        try {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`, {signal});
            const product: ProductType = await res.json();
            setProduct(product);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        getProduct(controller.signal);

        return () => controller.abort("The user abort the request.");
    }, [id])

    return (
        <Dialog
            open={isOpen}
            onClose={handleOnClose}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 overflow-y-auto">
                {/* Container to center the panel */}
                <div className="flex min-h-full items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
                        {!loading ? (
                            <>
                                {product ? (
                                    <div className="flex gap-x-8 h-96">
                                        <div className="relative w-72 h-full hidden md:inline">
                                            <ProductImage title={product.title} image={product.image}/>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex-1">
                                                <h4 className="font-semibold">{product.title}</h4>
                                                <p className="font-medium text-sm">${product.price}</p>
                                                <div className="flex items-center text-sm my-4">
                                                    <p className="">{product.rating.rate}</p>
                                                    {product.rating.rate && (
                                                        <div className="flex items-center ml-2 mr-6">
                                                            {/* Display 5 stars but display the rate ones as StarIcon */}
                                                            {Array.from({length: Math.floor(product.rating.rate)}, (_, i) => (
                                                                <StarIcon key={i} className="h-4 w-4 text-yellow-500"/>
                                                            ))}
                                                            {/* Display the rest of the stars as StarIconOutline */}
                                                            {Array.from({length: 5 - Math.floor(product.rating.rate)}, (_, i) => (
                                                                <StarIconOutline key={i}
                                                                                 className="h-4 w-4 text-yellow-500"/>
                                                            ))}
                                                        </div>
                                                    )}
                                                    <p className="text-blue-600 hover:underline cursor-pointer text-sm">
                                                        See all {product.rating.count} reviews
                                                    </p>
                                                </div>
                                                <p className="line-clamp-5 text-sm">{product.description}</p>
                                            </div>
                                            <div className="space-y-3 text-sm">
                                                <Button
                                                    title="Add to bag"
                                                    className="w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"/>
                                                <button onClick={() => window.location.reload()}
                                                        className="button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">View
                                                    full details
                                                </button>
                                                {/*<Button*/}
                                                {/*    onClick={() => router.push(`/product/${product.id}`)}*/}
                                                {/*    title="View full details"*/}
                                                {/*    className="w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"/>*/}
                                            </div>
                                        </div>
                                    </div>
                                ) : <h2>There is no such data.</h2>}
                            </>
                        ) : (
                            <div
                                className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin"/>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
