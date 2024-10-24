import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Discover iOS, Android, and Web Apps | Mobbin",
    description: "Generated by create next app",
  };

export default function HomeLayout({ children } : { children: React.ReactNode }) {
    return (

        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}