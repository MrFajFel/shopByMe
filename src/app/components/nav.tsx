import Link from "next/link";
import MyLinks from "@/app/components/sigle-components/my-links"

export default function Nav(){
    return(
        <nav className=" space-x-6 items-center mr-10 hidden md:flex lg:flex">
            <MyLinks name="New"  url="/New" />
            <MyLinks name="Men"  url="/" />
            <MyLinks name="Women"  url="/" />
            <MyLinks name="Sport"  url="/" />
        </nav>
    );
}