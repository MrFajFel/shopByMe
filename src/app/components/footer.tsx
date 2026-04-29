import MyLinks from "./sigle-components/my-links";
import Image from "next/image";
import Socials from "@/app/components/sigle-components/socials"


export default function Footer(){
    return(
        <footer className="bg-[#302B27] text-white p-8 flex justify-between">
            <div>
                <span> Made By Fifi </span>
            </div>
            <div className="flex flex-col">
                <Socials Namesocial="Facebook" url="https://facebook.com" photo="/facebook.svg"/>
                <Socials Namesocial="Instagram" url="https://instagram.com" photo="/Instagram.svg"/>
                <Socials Namesocial="Twitter" url="https://x.com" photo="/x.svg"/>

            </div>
            
        </footer>
    );
}