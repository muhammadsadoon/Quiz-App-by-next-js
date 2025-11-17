"use client"
import { useParams } from 'next/navigation'
import { Activity, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const QuizPage = () => {
    const [slected, setSlected] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [questions, setQuestions] = useState<any[]>([]);
    const [isStart, setIsStart] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [remainingQuetions, setRemainingQuetions] = useState<string>("");

    const questionData = useSelector((data: any) => data?.rootReducers?.quizReducer?.quizList)
    const param = useParams();
    let pageSection: any = param["quiz-section"];
    pageSection = decodeURI(pageSection).split("-").join(" ");

    const handleStartTest = () => {
        setIsStart(true);
        setTimer(new Date().getTime() + (1000 * 60));
        setQuestions(questionData[0]?.list);
        setIsOver(false)
    }

    const ResultPage = () => {
        setIsOver(false)
        return (<h1>Questions Ended!</h1>);
    }
    const checkQuestions = (option: string | undefined, answer: string) => {
        setIndex(index + 1);
        setSlected("");
    }
    const HandlerWhileQuestion = () => {
        const fitlurData = questions.find((item, i: number) => {
            return item.lebal == pageSection;
        })
        setRemainingQuetions(`${index} / ${fitlurData.data.length}`)
        if (fitlurData.length - 1 == index) return <ResultPage />;
        else {
            return fitlurData.data?.map((item: any, i: number) => {
                if (i == index) {
                    return (
                        <div className='h-full w-full' key={i}>
                            <h1 className='text-2xl my-6 text-center text-white'>{item?.question}</h1>
                            <div className='flex flex-col gap-2 w-full'>
                                <div onClick={() => setSlected(item.options[0])} className={`cursor-pointer border p-2 font-semibold ${slected == item.options[0] ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                                    {item.options[0]}
                                </div>
                                <div onClick={() => setSlected(item.options[1])} className={`cursor-pointer border p-2 font-semibold ${slected == item.options[1] ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                                    {item.options[1]}
                                </div>
                                <div onClick={() => setSlected(item.options[2])} className={`cursor-pointer border p-2 font-semibold ${slected == item.options[2] ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                                    {item.options[2]}
                                </div>
                                <div onClick={() => setSlected(item.options[3])} className={`cursor-pointer border p-2 font-semibold ${slected  == item.options[3] ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                                    {item.options[3]}
                                </div>
                                <div className='flex items-center justify-end'>
                                    <button onClick={() => checkQuestions(slected, item?.answer)} className={`disabled:opacity-60 p-2 bg-green-500 text-white active:translate-y-0.5 rounded-md text-2xl font-bold ${slected == "" ? "" : "cursor-pointer"}`} disabled={slected == ""}>Next</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            )
        }

    }

    /**Timer Handler useEffect function...! */
    useEffect(() => {
        setTimeout(() => {
            const timerEl = document.getElementById("timer") as HTMLHeadingElement;
            let currentTimer = new Date().getTime();
            const remaining = timer - currentTimer;
            // If timer not set yet, show 00:00:00
            if (!timer || timer <= 0) {
                if (timerEl) timerEl.innerHTML = "00:00:00";
                return;
            }

            if (remaining <= 0) {
                if (timerEl) timerEl.innerHTML = "00:00:00";
                if (!isOver) setIsOver(true);
                return;
            }

            const hrs = Math.floor(remaining / (1000 * 60 * 60));
            const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((remaining % (1000 * 60)) / 1000);

            const hh = String(hrs).padStart(2, "0");
            const mm = String(mins).padStart(2, "0");
            const ss = String(secs).padStart(2, "0");
            if (timerEl) timerEl.innerHTML = `${hh}:${mm}:${ss}`;
            // if (!isOver) setIsOver(true);
            if (currentTimer !== timer) setIsOver(isOver ? false : true);
        }, 1000);
    }, [isOver]);

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
                        <h2 >{remainingQuetions}</h2>
                        <h1 id='timer'>00:00:00</h1>
                    </div>
                    <HandlerWhileQuestion />
                </section>
            </Activity>
        </div >
    )
}

export default QuizPage
