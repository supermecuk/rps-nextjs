'use client'
import { playGame } from '../lib/playGame';
import { pickCompMove } from '../lib/pickCompMove';


export async function GetRPSResults(request: { body: any; }, response: any) {
  let body = await fetch('http://localhost:3000/api/paperGame' || 'http://localhost:3000/api/paperGame' || 'http://localhost:3000/api/paperGame');
  let compMove = pickCompMove();
  let result = playGame(body.toString(), compMove);
  
 

      

      return { jsonBody: result };  
}
