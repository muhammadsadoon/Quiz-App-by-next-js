"use client"
import { Table } from '@mantine/core';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const QuizPage = () => {
    const [slected, setSlected] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [questions, setQuestions] = useState<any[]>([]);
    const [isStart, setIsStart] = useState<boolean>(false);
    // const [timer, setTimer] = useState<number>(0);
    // const [isOver, setIsOver] = useState<boolean>(false);
    const [remainingQuetions, setRemainingQuetions] = useState<string>("");
    const [trueAnswers, setTrueAnswers] = useState<string[]>([]);
    const [falseAnswers, setFalseAnswers] = useState<string[]>([]);
    const [questionState, setQuestionState] = useState<string[]>([]);
    const [defualtQuestion, setQefualtQuestion] = useState<any>([]);

    const navigate = useRouter();
    const questionData = useSelector((data: any) => data?.rootReducers?.quizReducer?.quizList)
    const param = useParams();
    let pageSection: any = param["quiz-section"];
    pageSection = decodeURI(pageSection).split("-").join(" ");

    const handleStartTest = () => {
        const filterData = questionData?.filter((item: any) => item?.lebal?.includes(pageSection));
        setIsStart(true);
        // setTimer(new Date().getTime() + (1000 * 60));
        setQuestions(questionData[0]?.list);
        setQefualtQuestion(filterData);
        // setIsOver(false);
    }

    const ResultPage = React.memo(() => {
        console.log(defualtQuestion)
        return (
            <div className='flex min-h-[50vh] items-center justify-center flex-col'>
                <div>
                    <h1>Questions Ended!</h1>
                    <Table.ScrollContainer minWidth={330} maxHeight={300}>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Question No</Table.Th>
                                    <Table.Th>Question</Table.Th>
                                    <Table.Th>True Answer</Table.Th>
                                    <Table.Th>Worng Aswer</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {
                                    questionState?.map((element: any) => (
                                        <Table.Tr key={element.id}>
                                            <Table.Td>{element.questionId}</Table.Td>
                                            <Table.Td>{element.question}</Table.Td>
                                            <Table.Td>{trueAnswers.includes(element.answer) ? "✅" : "-"}</Table.Td>
                                            <Table.Td>{falseAnswers.includes(element.answer) ? "✅" : "-"}</Table.Td>
                                        </Table.Tr>
                                    ))
                                }
                            </Table.Tbody>
                        </Table>
                    </Table.ScrollContainer>
                </div>
                <button className='p-2 font-bold' onClick={() => navigate.push("/start-quiz")}>More Quiz</button>
            </div>
        );
    });

    /** Checking Options in during submitting question...! */
    const checkQuestions = (option: string | undefined, answer: string, question: string) => {
        setIndex(prev => prev + 1);
        setSlected("");
        setQuestionState(val => [...val, question]);
        if (option === answer) setTrueAnswers(ans => [...ans, answer]);
        else setFalseAnswers(ans => [...ans, answer]);
    }
    const HandlerWhileQuestion = () => {
        const fitlurData = questions.find((item: any) => {
            return item.lebal == pageSection;
        });
        console.log(fitlurData)
        setRemainingQuetions(`${index + 1} / ${fitlurData?.data?.length}`);
        if (fitlurData?.length != index + 1) {
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
                                <div onClick={() => setSlected(item.options[3])} className={`cursor-pointer border p-2 font-semibold ${slected == item.options[3] ? "border-green-700 text-white" : "border-b-gray-300"}`}>
                                    {item.options[3]}
                                </div>
                                <div className='flex items-center justify-end'>
                                    <button onClick={() => checkQuestions(slected, item?.answer, item?.question)} className={`disabled:opacity-60 p-2 bg-green-500 text-white active:translate-y-0.5 rounded-md text-2xl font-bold ${slected == "" ? "" : "cursor-pointer"}`} disabled={slected == ""}>Next</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            )
        }
        return <>testing</>

    }

    /**Timer Handler useEffect function...! */
    // useEffect(() => {
    //     setTimeout(() => {
    //         const timerEl = document.getElementById("timer") as HTMLHeadingElement;
    //         let currentTimer = new Date().getTime();
    //         const remaining = timer - currentTimer;
    //         // If timer not set yet, show 00:00:00
    //         if (!timer || timer <= 0) {
    //             if (timerEl) timerEl.innerHTML = "00:00:00";
    //             return;
    //         }

    //         if (remaining <= 0) {
    //             if (timerEl) timerEl.innerHTML = "00:00:00";
    //             if (!isOver) setIsOver(true);
    //             return;
    //         }

    //         const hrs = Math.floor(remaining / (1000 * 60 * 60));
    //         const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    //         const secs = Math.floor((remaining % (1000 * 60)) / 1000);

    //         const hh = String(hrs).padStart(2, "0");
    //         const mm = String(mins).padStart(2, "0");
    //         const ss = String(secs).padStart(2, "0");
    //         if (timerEl) timerEl.innerHTML = `${hh}:${mm}:${ss}`;
    //         // if (!isOver) setIsOver(true);
    //         if (currentTimer !== timer) setIsOver(isOver ? false : true);
    //     }, 1000);
    // }, [isOver]);

    useEffect(() => {

    }, [])
    return (
        <div className='p-6'>
            <h1 className='text-white font-bold text-3xl'>{pageSection}</h1>
            {
                !isStart && (
                    <>
                        <p className='my-2'>Note: if you change will you change the tab during <b>text</b>, your test will not eligiable not submissions.</p>
                        <p className='text-xl'>Click button to Start. </p>
                        <button onClick={handleStartTest} className='p-2 bg-sky-500 text-white my-2 cursor-pointer active:translate-y-0.5 font-bold rounded-md'>Start now</button>
                    </>
                )
            }

            {isStart && <section className='flex flex-col h-[70vh] items-center justify-center w-full'>
                <div className='flex text-white w-full h-1/5 items-center p-2 text-3xl justify-between'>
                    <h2 >{remainingQuetions}</h2>
                    <h1 id='timer'>00:00:00</h1>
                </div>
                {
                    (defualtQuestion?.data?.length != index) ? <HandlerWhileQuestion /> : <ResultPage />
                }
            </section>}
        </div >
    )
}

export default QuizPage
