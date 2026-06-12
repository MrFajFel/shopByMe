export default function Carusel(){

    const images = ["golab.jpg","","",""]


    return(
        <div className="flex justify-between bg-red-300">
            <div className="p-60 pr-12 pl-12"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-black hover:text-gray-500 hover:cursor-pointer transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
            </div>
            <div className="p-60 pr-12 pl-12"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-black hover:text-gray-500 hover:cursor-pointer transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    );
}