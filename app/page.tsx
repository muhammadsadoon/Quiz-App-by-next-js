"use client"
import { Card } from '@mantine/core'
import Link from 'next/link'

const Home = () => {


  return (
    <div className='flex h-[90vh] w-full items-center justify-center flex-col gap-4'>
      <h1 className='text-6xl font-semibold'>Welcome To Quiz App</h1>
        <Card padding="sm" className='p-10' component={Link} href={`/start-quiz`}>
          <Card.Section className='p-3 text-center text-indigo-300 '>
            Go Avalible Quiz
          </Card.Section>
        </Card>
    </div>
  )
}

export default Home
