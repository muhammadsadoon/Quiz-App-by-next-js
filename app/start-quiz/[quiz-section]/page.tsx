"use client"
import { Table } from '@mantine/core';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { shuffleArray } from '@/utils/questions/question';

const QuizPage = () => {
    const [selected, setSelected] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [questions, setQuestions] = useState<any[]>([]);
    const [isStart, setIsStart] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const [timerDisplay, setTimerDisplay] = useState<string>("00:00:00");
    const [isOver, setIsOver] = useState<boolean>(false);
    const [remainingQuestions, setRemainingQuestions] = useState<string>("");
    const [trueAnswers, setTrueAnswers] = useState<number[]>([]);
    const [falseAnswers, setFalseAnswers] = useState<number[]>([]);
    const [defaultQuestion, setDefaultQuestion] = useState<any>([]);
    const [isQuestionEnded, setIsQuestionEnded] = useState<boolean>(false);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    const navigate = useRouter();
    const questionData = useSelector((data: any) => data?.rootReducers?.quizReducer?.quizList)
    const param = useParams();
    let pageSection: any = param["quiz-section"];
    pageSection = decodeURI(pageSection).split("-").join(" ");

    const handleStartTest = () => {
        const list = questionData?.[0]?.list ?? [];
        const section = list.find((s: any) => s?.lebal?.includes(pageSection));
        setIsStart(true);
        // set timer for 5 minutes (adjust as needed)
        const durationMs = 5 * 60 * 1000;
        const deadline = Date.now() + durationMs;
        setTimer(deadline);
        setTimerDisplay(() => {
            const hrs = Math.floor(durationMs / (1000 * 60 * 60));
            const mins = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((durationMs % (1000 * 60)) / 1000);
            return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        });
        // reset/initialize question state
        setQuestions(list);
        setDefaultQuestion(section ?? null);
        setIsOver(false);
        setIsQuestionEnded(false);
        setIndex(0);
        setTrueAnswers([]);
        setFalseAnswers([]);
        // setIsOver(false);
    }

    const ResultPage = React.memo(() => {
        const sectionQuestions = defaultQuestion?.data ?? [];
        return (
            <div className='flex min-h-[50vh] items-center justify-center flex-col'>
                <div>
                    <h1>Questions Ended!</h1>
                    <Table.ScrollContainer minWidth={320} maxHeight={300}>
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
                                    sectionQuestions?.map((element: any, i: number) => (
                                        <Table.Tr key={i}>
                                            <Table.Td>{element?.questionId ?? i + 1}</Table.Td>
                                            <Table.Td>{element.question}</Table.Td>
                                            <Table.Td>{trueAnswers.includes(element.questionId) ? "✅" : "-"}</Table.Td>
                                            <Table.Td>{falseAnswers.includes(element.questionId) ? "✅" : "-"}</Table.Td>
                                        </Table.Tr>
                                    ))
                                }
                            </Table.Tbody>
                        </Table>
                    </Table.ScrollContainer>
                </div>
                <button className='p-2 font-bold bg-green-800 my-3 rounded-md cursor-pointer active:translate-y-0.5' onClick={() => navigate.push("/start-quiz")}>More Quiz</button>
            </div>
        );
    });

    /** Checking Options during submitting question */
    const checkQuestions = (option: string | undefined, answer: string, questionId: number, questionText?: string) => {
        // record the selected answer
        if (option === answer) setTrueAnswers(ans => [...ans, questionId]);
        else setFalseAnswers(ans => [...ans, questionId]);


        // Determine total and advance index atomically; mark end when we reach last question
        const filtered = questions.find((item: any) => item?.lebal == pageSection);
        const total = filtered?.data?.length ?? questions.length ?? 0;
        setIndex(prev => {
            const next = prev + 1;
            if (next >= total && total > 0) setIsQuestionEnded(true);
            return next;
        });

        // reset selected for next question
        setSelected("");
    }

    const HandlerWhileQuestion = () => {
        const filteredData = questions.find((item: any) => item?.lebal == pageSection);
        const total = filteredData?.data?.length ?? 0;

        if (!filteredData || !filteredData.data || filteredData.data.length === 0) {
            return <div className='text-white'>No questions available for this section.</div>;
        }

        const current = filteredData.data[index];
        if (!current) return <div className='text-white'>testing</div>;

        return (
            <div className='h-full w-full' key={index}>
                <h1 className='text-2xl my-6 text-center text-white'>{current?.question}</h1>
                <div className='flex flex-col gap-2 w-full'>
                    <div onClick={() => setSelected(shuffledOptions[0])} className={`cursor-pointer border p-2 font-semibold ${selected == shuffledOptions[0] ? "border-green-700 text-white" : "border-gray-300"}`}>
                        {shuffledOptions[0]}
                    </div>
                    <div onClick={() => setSelected(shuffledOptions[1])} className={`cursor-pointer border p-2 font-semibold ${selected == shuffledOptions[1] ? "border-green-700 text-white" : "border-gray-300"}`}>
                        {shuffledOptions[1]}
                    </div>
                    <div onClick={() => setSelected(shuffledOptions[2])} className={`cursor-pointer border p-2 font-semibold ${selected == shuffledOptions[2] ? "border-green-700 text-white" : "border-gray-300"}`}>
                        {shuffledOptions[2]}
                    </div>
                    <div onClick={() => setSelected(shuffledOptions[3])} className={`cursor-pointer border p-2 font-semibold ${selected == shuffledOptions[3] ? "border-green-700 text-white" : "border-gray-300"}`}>
                        {shuffledOptions[3]}
                    </div>
                    <div className='flex items-center justify-end'>
                        <button onClick={() => checkQuestions(selected, current?.answer, current?.questionId, current?.question)} className={`disabled:opacity-60 p-2 bg-green-500 text-white active:translate-y-0.5 rounded-md text-2xl font-bold ${selected == "" ? "" : "cursor-pointer"}`} disabled={selected == ""}>Next</button>
                    </div>
                </div>
            </div>
        )
    }

    /** Timer: update display every second and end quiz when time runs out or when quiz finishes */
    useEffect(() => {
        // If not started or no timer set, show 00:00:00 and do nothing
        if (!isStart || !timer) {
            setTimerDisplay("00:00:00");
            return;
        }

        // If quiz ended (manually by completing questions) or already over, freeze the display
        if (isQuestionEnded || isOver) {
            const now = Date.now();
            const remaining = Math.max(timer - now, 0);
            if (remaining <= 0) {
                setTimerDisplay("00:00:00");
                setIsOver(true);
            } else {
                const hrs = Math.floor(remaining / (1000 * 60 * 60));
                const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((remaining % (1000 * 60)) / 1000);
                setTimerDisplay(`${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
            }
            return;
        }

        // Otherwise start interval to update timer every second
        const id = setInterval(() => {
            const now = Date.now();
            const remaining = timer - now;

            if (remaining <= 0) {
                setTimerDisplay("00:00:00");
                setIsOver(true);
                setIsQuestionEnded(true);
                clearInterval(id);
                return;
            }

            const hrs = Math.floor(remaining / (1000 * 60 * 60));
            const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((remaining % (1000 * 60)) / 1000);
            setTimerDisplay(`${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
        }, 1000);

        return () => clearInterval(id);
    }, [timer, isStart, isQuestionEnded, isOver]);

    /** Update remaining questions display when index or questions change */
    useEffect(() => {
        const filteredData = questions.find((item: any) => item?.lebal == pageSection);
        const total = filteredData?.data?.length ?? 0;
        setRemainingQuestions(`${Math.min(index + 1, Math.max(total, 1))} / ${total}`);
    }, [index, questions, pageSection]);

    /** Shuffle options when the current question changes */
    useEffect(() => {
        const filteredData = questions.find((item: any) => item?.lebal == pageSection);
        const current = filteredData?.data?.[index];
        if (current?.options) {
            setShuffledOptions(shuffleArray(current.options));
        }
    }, [index, questions, pageSection]);

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
                    <h2 >{remainingQuestions}</h2>
                    <h1 id='timer'>{timerDisplay}</h1>
                </div>
                {
                    !isQuestionEnded && <HandlerWhileQuestion />
                }
                {
                    isQuestionEnded && <ResultPage />
                }
            </section>}
        </div >
    )
}

export default QuizPage;