"use client";
import { questions } from '@/utils/questions/question';
import { handleDispatchQuestionState } from '@/utils/redux/store/actions/question-action/question-action';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/utils/redux/store';
import { Button, Card, Grid, Group, Text } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

const StartQuiz = () => {
    const querySelector = useMediaQuery('(max-width: 450px)')
    const [questionArr, setQuestionArr] = useState<any>([]);
    const { quizReducer }: any = useSelector((state: any) => state?.rootReducers);
    const dispatch = useDispatch<AppDispatch>()


    const refreshQuestion = () => {
        setQuestionArr(quizReducer?.quizList[0]);
    }


    useEffect(() => {
        dispatch(handleDispatchQuestionState(questions));
        refreshQuestion();
        document.title = "Quiz App Select exam options"
    }, []);
    return (
        <div>
            <div className='p-4'>
                <Group className='my-8'>
                    <h2 className='text-2xl'>Avilable Quiz Exam</h2>
                    <Button onClick={refreshQuestion} variant='gradient'><IconRefresh /></Button>
                </Group>
                <Grid >
                    {
                        questionArr?.list?.map((item: any, index: number) => {
                            return (
                                <Grid.Col key={index} span={querySelector ? 12 : 4}>
                                    <Card padding="sm" className='p-10 m-2' component={Link} href={`/start-quiz/${(item?.lebal).split(" ").join("-")}`}>
                                        <Card.Section className='p-3'>
                                            {item?.lebal}
                                        </Card.Section>
                                    </Card>
                                </Grid.Col>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default StartQuiz
