import Image from "next/image";


type SiteInfoProps = {
    title: String,
    description: String,
    photoSrc: String,
}

export default function SiteInfo(props: SiteInfoProps){
    return(
        <div className="flex flex-col justify-center items-center pt-5 pb-5 ml-10 mr-10">
            <Image src={`${props.photoSrc}`} alt="photo" height={100} width={100}/>
            <h1 className="font-bold">{props.title}</h1>
            <p className="text-gray-500">{props.description}</p>
        </div>
    );
}