'use client';

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Carusel from "@/app/components/sigle-components/carusel";
import Items from "@/app/components/sigle-components/item";
import Sections from "@/app/components/sigle-components/sections";

import SiteInfo from "@/app/components/sigle-components/info-main-page"
import MyHr from "@/app/components/sigle-components/myhr";
import Sidebar from "./components/side-bar";
import { useState } from "react";


export default function Home() {
  const [hamburgerStatus,setHamburgetStatus] = useState(false)

  const ToggleHamburgerMenu = () => {
     setHamburgetStatus(!hamburgerStatus)
  }



  return (
    <>
      <Header onHamburgerToggle={ToggleHamburgerMenu} />
      <Sidebar isOpen={hamburgerStatus} />
      <main className="mt-11 ">
        <Sections>
          <Carusel/>
        </Sections>

        <Sections>
          <h1 className="text-3xl m-2 ">Items from the Shop:</h1>
          <div className="flex gap-5 overflow-x-auto">
            {/* here generate items */}
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>   
          </div>
        </Sections>
        <MyHr/>
        <Sections>
          <div className="flex justify-center items-center flex-wrap">
            <SiteInfo title="Test" description="test" photoSrc="/favicon.png" />
            <SiteInfo title="Test" description="test" photoSrc="/favicon.png" />
            <SiteInfo title="Test" description="test" photoSrc="/favicon.png" />
            <SiteInfo title="Test" description="test" photoSrc="/favicon.png" />
          </div>
        </Sections>

      </main>
      <Footer/>
    </>
  );
}
