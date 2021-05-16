import React,{useState} from 'react'
import './SearchDates.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom";

function SearchDates() {
   const history = useHistory();
   const [startDate,setStartDate]  = useState(new Date());
   const [endDate,setEndDate] = useState(new Date());

   const selectionRange ={
       startDate :startDate,
       endDate : endDate,
       key :"selection",

   };

   function handleSelect(ranges){
       setStartDate(ranges.selection.startDate);
       setEndDate(ranges.selection.endDate);
   }

    return (
        <div className='searchDate'>
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect}/>
            <h2>
                Number of Guests
                <PeopleIcon/>
                
            </h2>
            <input min={0}
            defaultValue={2}
            type="number" />
 
            <Button onClick={() => history.push('/search')}>
                Search TravelBrat
            </Button>
            
        </div>
    )
}

export default SearchDates
