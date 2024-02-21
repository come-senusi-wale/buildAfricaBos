import { Header } from "@/components/header";
import { Crafted } from "@/components/crafted";
import { Partner } from "@/components/partner";
import { Faq } from "@/components/faq";
import { HomePage } from "@/components/homePage";
import  "../style/home.css";


export default function Home() {
  return (
     <main id='home-body'>
     {/* <Header></Header>
     <Crafted></Crafted>
     <Partner></Partner> */}
     <HomePage></HomePage>
     <Faq></Faq>
     </main>
    
  );
}
