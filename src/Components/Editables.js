import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

function Editables(props) {
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState(" ")
  const [inputValue2, setInputValue2] = useState(" ")
  const [inputValue3, setInputValue3] = useState(null)



  const onChangeDo = (e) => {
    setInputValue(
      e.target.value
    )
  }

  const onChangeDo2 = (e) => {
    setInputValue2(
      e.target.value
    )
  }
  const onChangeDo3 = (dates) => {
    // const formattedDate = format(dates, 'yyyy-MM-dd HH:mm:ss');
    setInputValue3(dates);
  }
  const onSubmitDo = (e) => {
    console.log(inputValue + inputValue2 + inputValue3)
    setShow(false)

    if (props.onSubmit) props.onSubmit(inputValue, inputValue2, inputValue3);


  }

  return (
    <div>
      <div className='editable' >

        {show ?

          <form className='editable_edit' style={{ boxShadow: 15, padding: "10px", backgroundColor: '#EEE9DA', borderRadius: 8 }} >

            <TextField
              sx={{
                width: { md: 200 },
                background: "beige",
                borderRadius: 1,

                "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#CE5959",
                },

                "& .MuiFormLabel-root": {
                  color: '#B99B6B'
                },
              }}
              className='textStyle'
              label={props.lable || "Add Title"}
              onChange={onChangeDo}
              value={inputValue}
            ></TextField>
            <br />
            <br />

            <TextField
              sx={{
                width: { md: 200 },
                background: "beige",
                borderRadius: 1,

                "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#CE5959",
                },
                "& .MuiFormLabel-root": {
                  color: '#B99B6B'
                },

              }}
              className='textStyle'
              label="Add Description"
              onChange={onChangeDo2}
              value={inputValue2}
            ></TextField>

            <br /><br />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              format="MM-DD-YYYY"
                onChange={onChangeDo3}
                value={inputValue3}
                // onChange={(newValue) => setInputValue3(newValue)}
                label='Enter Date'
                sx={{
                  width: { md: 200 },
                  background: "beige",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#CE5959",
                  },
                  "& .MuiFormLabel-root": {
                    color: '#B99B6B'
                  },
                }} />
            </LocalizationProvider>

            <CloseRoundedIcon
              fontSize='small'
              sx={{ color: '#B99B6B' }}
              onClick={() => setShow(false)} />

            <Button
              color='error'
              sx={{ ml: 3, mt: 1, mr: 1, backgroundColor: '#B99B6B', }}
              variant='contained'
              onClick={() => onSubmitDo(inputValue)} >
              Add Title
            </Button>


          </form>
          :
          // <p onClick={() => setShow(true)} >{props.title || 'Add Title'}</p>
          <Button color='error'

            variant='contained'
            onClick={() => setShow(true)}
            sx={{ backgroundColor: '#B99B6B', m: 1, boxShadow: 5 }} > Add Card </Button>
        }



      </div>



    </div>
  )
}

export default Editables;