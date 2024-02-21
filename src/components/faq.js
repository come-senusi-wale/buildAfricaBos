import React, {  } from "react";
import '../style/faq.css';
import { FaqCard } from "./../card/faqCard";
import { faq } from "../data/faqData";


export const Faq = () => {

    return(
     <>
        <section id="faq">
            <div id="fag-container">
                <div id="faq-head">
                    <h1>F.A.Q.</h1>
                </div>
                <div id="faq-text">
                    <p>Discover more about BuildAfrica.</p>
                </div>
                <div id="faq-question">
                    {
                       faq.data.map((data, index)=>{
                        return(
                         <FaqCard
                           title={data.title}
                           description={data.description}
                         />
                        )
                       })
                    }
                </div>
            </div>
        </section>
     </>
    )
}