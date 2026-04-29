import Image from "next/image";
import Link from "next/link";



type socialProps = {
    Namesocial: String,
    url: String,
    photo: String

}

export default function Socials(props: socialProps){
    return(
        <Link href={`${props.url}`} className="flex mt-2">
            <Image src={`${props.photo}`} alt={`${props.Namesocial}`} width={20} height={20} className="mr-2"/>
            <h1>{props.Namesocial}</h1>
        </Link>
    );
}