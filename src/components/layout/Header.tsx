import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components";
import Logo from "../../../public/logo.png"

const Header = () => {
    return (
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
            <Link href="/">
                <Image src={Logo} alt="Logo" width={80} height={80}/>
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <Button title="Log in" className="bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"/>
                <Button title="Sign up" className="bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"/>
            </div>
        </header>
    );
};

export default Header;
