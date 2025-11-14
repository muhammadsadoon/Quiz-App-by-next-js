"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const QuizPage = () => {
    const param = useParams();
    let pageSection: any = param["quiz-section"];
    pageSection = decodeURI(pageSection).split("-").join(" ");
    console.log(pageSection);


    useEffect(() => {
        
    },[])
    return (
        <div className='p-6'>
            <h1 className='text-white font-bold text-3xl'>{pageSection}</h1>
        </div>
    )
}

export default QuizPage
