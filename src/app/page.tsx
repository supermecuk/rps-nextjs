'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { GetRPSResults } from '../../lib/getRPSResult'





export default function Home() {
  const [answer, setAnswer] = useState('Click a Hand to play the game')
  const playGame = async (playerMove: string) => {
    
    const result = await fetch('http://localhost:3000/api/play-game', {
      method: 'POST', // HTTP method (GET, POST, PUT, DELETE, etc.)
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the data being sent
      },
      body: JSON.stringify({ playerMove }) // Convert data to JSON format and send in the request body
    })
    const data = await result.json()
    console.log(data)
    setAnswer(data.result)
  } 

  // const paperGame = async (playerMove: string) => {
  //   const result = await fetch('http://localhost:3000/api/paperGame')
  //   const data = await result.json()
  //   console.log(data)
  // } 

 
 
  return (
    <main>
    <h1>Home Page</h1>
    <p>
      Play Game
    </p>
      <button id="paper" onClick={() => playGame('paper')}>
        <Image
          src={'/paper-emoji.png'}
          alt="."
          width={200}
          height={200}
          priority
        />
      </button>
      <button id="rock" onClick={() => playGame('rock')}>
        <Image
          src={'/rock-emoji.png'}
          alt="."
          width={200}
          height={200}
          priority
        />
      </button>
      <button id="scissors" onClick={() => playGame('scissors')}>
        <Image
          src={'/scissors-emoji.png'}
          alt="."
          width={200}
          height={200}
          priority
        />
      </button>
      <div className="h-12 text-center">{answer}</div>
      </main>
  )

  };
