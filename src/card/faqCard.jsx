"use client"
import React,{useState} from 'react'
import { FaAngleDown , FaAngleUp } from "react-icons/fa";

export const FaqCard = ({title,description}) => {
    let [open, setOpen] = useState(false)
  return (
    <div 
      onClick={() => setOpen((current) => !current) }
      className="question">
        <div className="quetion-answer">
            <h2>{title}</h2>
            <div>
              {
                open 
                ?  
                <span><FaAngleDown></FaAngleDown></span>
                :
                <span><FaAngleUp></FaAngleUp></span>
               }
            </div>
        </div>
        <div
        className="answer answer_1 ">
            <p className={`${open ? 'block': 'd-none'}`}>{description}</p>
        </div>
    </div>
  )
}
