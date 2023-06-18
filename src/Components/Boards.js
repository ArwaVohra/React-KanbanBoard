import React, { useState } from 'react'
import './Board.css'
import Cards from './Cards';
import Editables from './Editables';


function Boards(props) {

    return (
        <div className='boards' >
            {/* board title bar  */}
            <div className='board-title-bar' >
                {/* name of title bar like todo/progress/done */}
                <div className='board-title-name' >
                    <p>
                        {props.board?.title || "ToDo"} <span style={{ color: 'grey' }} >{` ${props.board?.cards?.length}`}   </span>
                    </p>
                </div>
            </div>

            {/* cards section  */}
            <div className='board-cards  custom-scrollbar' >


            {props.board?.cards?.map((item)=>(
                <Cards
                key={item.id}
                cards={item}
                boardId = {props.board?.id}
                removeCard={props.removeCard}
                handleOnDragEnd={props.handleOnDragEnd}
                handleOnDragEnter={props.handleOnDragEnter}


                />
            ))}


                <Editables onSubmit={(value1,value2,value3) => props.addCard(value1,value2,value3,props.board?.id)} />


            </div>

        </div>
    )
}

export default Boards