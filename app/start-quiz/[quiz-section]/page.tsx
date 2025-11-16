"use client"
import { useParams } from 'next/navigation'
import { Activity, useEffect, useState } from 'react'

const QuizPage = () => {
    const [slected, setSlected] = useState<string>("");
    const [isStart, setIsStart] = useState<boolean>(false);
    const param = useParams();
    let pageSection: any = param["quiz-section"];
    pageSection = decodeURI(pageSection).split("-").join(" ");
    console.log(pageSection);

    const handleStartTest = () => {
        setIsStart(true);
    }
    useEffect(() => {

    }, [])
    return (
        <div className='p-6'>
            <h1 className='text-white font-bold text-3xl'>{pageSection}</h1>
            <Activity mode={!isStart ? "visible" : "hidden"}>
                <p className='my-2'>Note: if you change will you change the tab during <b>text</b>, your test will not eligiable not submissions.</p>
                <p className='text-xl'>Click button to Start. </p>
                <button onClick={handleStartTest} className='p-2 bg-sky-500 text-white my-2 cursor-pointer active:translate-y-0.5 font-bold rounded-md'>Start now</button>
            </Activity>

            <Activity mode={isStart ? "visible" : "hidden"}>
                <section className='flex flex-col h-[70vh] items-center justify-center w-full'>
                    <div className='flex text-white w-full h-1/5 items-center p-2 text-3xl justify-between'>
                        <h2>10/10</h2>
                        <h1>00:00:00</h1>
                    </div>
                    <h1 className='text-2xl my-3 text-white'>This is Questions</h1>
                    <div className='flex flex-col gap-2 w-full'>
                        <div onClick={() => setSlected("option1")} className={` border p-2 font-semibold ${slected == "option1" ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                            Option 1
                        </div>
                        <div onClick={() => setSlected("option2")} className={` border p-2 font-semibold ${slected == "option2" ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                            Option 2
                        </div>
                        <div onClick={() => setSlected("option3")} className={` border p-2 font-semibold ${slected == "option3" ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                            Option 3
                        </div>
                        <div onClick={() => setSlected("option4")} className={` border p-2 font-semibold ${slected == "option4" ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                            Option 4
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className={`disabled:opacity-80 p-2 bg-green-800 rounded-md text-2xl font-bold ${slected == "" ? "" : "cursor-pointer"}`} disabled={slected == ""}>Next</button>
                        </div>
                    </div>
                </section>
            </Activity>
        </div >
    )
}

export default QuizPage
