import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TollIcon from '@mui/icons-material/Toll';
import './Chip.css'

import './Card.css'

function Cards(props) {

    const onClickRemove = (e) => {
        console.log("delete option clicked")
        props.removeCard(props.cards?.id, props.boardId)
    }

    return (
        <div className='card'
            draggable
            onDragEnd={() => props.handleOnDragEnd(props.cards?.id, props.boardId)}
            onDragEnter={() => props.handleOnDragEnter(props.cards?.id, props.boardId)}
        >
            <div className='card-top'>
                <div className='card-top-chip'>


                    <div className='chip' style={{ color: 'white', background: "#E9A178" }} >
                        {props.cards?.title}
                    </div>

                </div>
                <DeleteIcon onClick={onClickRemove} sx={{ ml: 27, color: "#E9A178" }} fontSize='small' />
            </div>

            <div className='card-title' style={{ color: '#191A19' }}>
                {props.cards?.desc || "I am the description"}
            </div>

            <div className='card-footer-date'>
                {/* <p style={{color:"black"}} >
                    <AccessTimeIcon sx={{color: "#E9A178"}} fontSize='small' /> {props.cards?.dates || "32/32"}
                </p>

                <p style={{color:"black"}} >
                    <CheckCircleIcon  sx={{color: "#E9A178"}}  fontSize='small' /> {props.cards?.check || "65/6"}
                </p> */}
                <center>
                    <p style={{ color: "#E9A178" }} >
                        {/* _________________________________________________________________ */}
                        <TollIcon fontSize='small' />
                    </p>
                </center>
            </div>
        </div>
    )
}

export default Cards