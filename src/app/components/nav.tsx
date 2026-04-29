import Link from "next/link";
import MyLinks from "@/app/components/sigle-components/my-links"

export default function Nav(){
    return(
        <nav className=" space-x-4 items-center mr-10 hidden md:flex lg:flex">
            <MyLinks name="Home"  url="/" />
            <MyLinks name="Shop"  url="/" />
            <MyLinks name="Test3"  url="/" />
            <MyLinks name="Test4"  url="/" />
            <MyLinks name="Test5"  url="/" />
        </nav>
    );
}