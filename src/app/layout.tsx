import {ReactNode} from "react";
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import {Footer, Header} from "@/components";

export const metadata = {
  title: 'E-Commerce',
  description: 'A small digital shop',
};

// const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap"
})

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body
          className={`min-h-screen flex flex-col justify-between ${montserrat.className}`}
          // suppressHydrationWarning={true} //? to get rid of error in console for browser extension
      >
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
