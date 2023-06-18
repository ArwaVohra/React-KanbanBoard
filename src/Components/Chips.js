import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './Chip.css'


function Chips(props) {
    return (
        <div className='chip' style={{color:'white', background: "#B0A4A4" }} >
            {props.title}
            {/* {props.close && <CloseRoundedIcon fontSize='20px' color='secondary'/>} */}

        </div>
    )
}

export default Chips