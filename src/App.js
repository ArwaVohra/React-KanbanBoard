import React, { useEffect, useState } from 'react';
import './kabanStyle.css';
import Boards from './Components/Boards.js';

function App() {



  const [board, setBoard] = useState(JSON.parse(localStorage.getItem('kanban'))||[
    {
      id: 1,
      title: 'ToDo',
      bgcolor: 'yellow',
      cards: [

        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          desc: "111 i am description from array",
          dates: "/33/",
          task: [],
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          desc: "222 i am description from array",
          dates: "231",
          task: [],

        },
      

      ]
    },
    {
      id: 2,
      title: 'Progress',
      bgcolor: 'grey',

      cards: [

        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 1",
        //   desc: "111 i am description from array",
        //   date: "/33/",
        //   task: [],
        // },
        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 2",
        //   desc: "222 i am description from array",
        //   date: "231",
        //   task: [],

        // },
        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 3",
        //   desc: "333 i am description from array",
        //   date: "23sq1",
        //   task: [],
        // }

      ]

    },
    {
      id: 3,
      title: 'Done',
      bgcolor: 'blue',

      cards: [

        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 1",
        //   desc: "111 i am description from array",
        //   date: "/33/",
        //   task: [],
        // },
        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 2",
        //   desc: "222 i am description from array",
        //   date: "231",
        //   task: [],

        // },
        // {
        //   id: Date.now() + Math.random(),
        //   title: "Card 3",
        //   desc: "333 i am description from array",
        //   date: "23sq1",
        //   task: [],
        // }

      ]

    }

  ])

 

const [target,setTarget]=useState({ 
  bid:"",
  cid:""
})

useEffect(() => {
  localStorage.setItem("kanban", JSON.stringify(board));
},[board]);

  const addCard=(title,desc,{dates},bid)=>{
    const card = {
      id: Date.now() + Math.random() * 2,
      title,
      desc,
      dates,
      task: [],
    };
    const index = board.findIndex((item) => item.id == bid)
    if (index <0) return;
  
    const temperBoard = [...board];
    temperBoard[index].cards.push(card);
    setBoard(temperBoard);
  }

  const removeCard=(cid,bid)=>{
    const Bindex = board.findIndex((item) => item.id == bid)
    if (Bindex <0) return;

    const Cindex = board[Bindex].cards.findIndex((item) =>item.id == cid);
    if (Cindex <0 ) return ;

    const temperBoard = [...board];
    temperBoard[Bindex].cards.splice(Cindex,1);
    setBoard(temperBoard);
  };

const handleOnDragEnter=(cid,bid)=>{
setTarget({  
  cid,
  bid,
});
}
const handleOnDragEnd=(cid,bid)=>{
  let s_bIndex,s_cIndex,t_bIndex,t_cIndex;

  s_bIndex = board.findIndex(item=>item.id == bid)
  if (s_bIndex < 0) return;

  s_cIndex = board[s_bIndex].cards?.findIndex(item=>item.id==cid)
  if (s_cIndex < 0) return;

  t_bIndex = board.findIndex(item=>item.id == target.bid)
  if(t_bIndex<0) return;

  t_cIndex = board[t_bIndex].cards?.findIndex(item=>item.id==target.cid)
  if(t_cIndex<0) return;

  const temperBoard = [...board]
  const temperCards = temperBoard[s_bIndex].cards[s_cIndex]

  temperBoard[s_bIndex].cards.splice(s_cIndex,1);
  temperBoard[t_bIndex].cards.splice(t_cIndex,0,temperCards)

  setBoard(temperBoard)


}

  return (
    <div className="mainDiv">
      <div className='kaban-head'>
        <h1  >  KABAN Board  </h1>
      </div>

      <div className='kaban-board-outerbg' >
        <div className='kaban-board-bg' >
          {board.map((item) => (
            <Boards
              key={item.id}
                board={item}
                addCard={addCard}
                removeCard={removeCard}
                handleOnDragEnter={handleOnDragEnter}
                handleOnDragEnd={handleOnDragEnd}
            />
          ))}
          

        </div>

      </div>



    </div>
  );
}

export default App;
