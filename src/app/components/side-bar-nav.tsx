import SideBarLinks from "@/app/components/sigle-components/sidebarlinks"

export default function SideBarNav(){
    return(
        <nav className="flex items-center flex-col">
            <SideBarLinks name="Home"  url="/" />
            <SideBarLinks name="Shop"  url="/" />
            <SideBarLinks name="Test3"  url="/" />
            <SideBarLinks name="Test4"  url="/" />
            <SideBarLinks name="Test5"  url="/" />
        </nav>
    );
}