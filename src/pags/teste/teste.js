/*import { DatePicker } from '@mui/lab';
import React, {useState} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useForm , Controller} from "react-hook-form";


function Teste() {
    const [date, setDate] = React.useState(new Date());

    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <Controller
                        name='dataSelecionada'
                        control={control}
                        render={({field: {onChange, value} }) =>(
                            <DatePicker
                                label="Data da ida"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={date}
                                
                                renderInput={(params) => <TextField {...params} />} 
                                onChange={(newValue) => {
                                    setDate(newValue);
                                    onChange(newValue);
                                    return newValue;

                                } }
                                
                            />
                        )}
                        
                    />
                </Stack>
            </LocalizationProvider>

            <button type='submit'>submit</button>
        </form>
    )
}

export default Teste;*/