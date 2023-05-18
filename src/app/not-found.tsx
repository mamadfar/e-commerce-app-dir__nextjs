import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="m-auto text-center">
            <h2 className="text-5xl font-bold mb-3">Not Found</h2>
            <p className="text-xl mb-4">Could not find requested resource.</p>
            <Link
                prefetch={false}
                replace
                href="/"
                className="border border-2 border-black hover:border-white hover:bg-black hover:text-white transition-colors duration-150 rounded-md py-3 px-4"
            >Home</Link>
        </div>
    );
};

export default NotFound;
