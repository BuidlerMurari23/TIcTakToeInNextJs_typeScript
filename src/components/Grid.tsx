'use client'

import { useState } from "react";
import Card from "./Card";
import winnerIs from "@/helperFunctions/checkWinner";



function Grid({numberOfCards}: {numberOfCards: number}){

    const[board, setBoard] = useState(Array(numberOfCards).fill(""));
    const[turn, setTurn] = useState(true);
    const[winner, setWinner] = useState<string | null>(null);

    function play(index: number): void{
        if(turn == true){
            board[index] = "O"
        }else if(turn == false){
            board[index] = "X"
        }

        const win = winnerIs(board, (turn) ? "O" : "X");

       if(win){
        setWinner(win)
       }

        setBoard([...board]);
        setTurn(!turn)
    }

    function reStart(){
        setBoard(Array(numberOfCards).fill(""));
        // (winner) ? setTurn(false) : setTurn(true)
        if( winner == "O"){
            setTurn(false)
        }else{
            setTurn(true)
        }
        
        setWinner(null)
    }

   

    return(
        <div>
            {
                winner && (<>
                
                <h1 className="text-3xl">Winner is {winner}</h1>
                <button className="text-2xl bg-[#efc104]" onClick={reStart}>
                    ReStart Game
                </button>

                </>)
            }

            <h1 className="m-5 text-3xl">Current Turn: {(turn) ? "O" : "X"} </h1>
            <div className="flex flex-wrap items-center justify-evenly h-[450px] w-[450px]">
                {
                    board.map((e, i) => <Card key={i} endGame={winner} player={e} onPlay={play} index={i} />)
                }
            </div>
        </div>
    )

}

export default Grid;