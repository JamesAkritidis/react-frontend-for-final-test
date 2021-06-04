// import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import axios from "axios"
import Data from './TestData.json'
import CardList from "./components/Cards/CardList"
import MainNavBar from './components/MainNavBar'



// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/daygrid'
// import { formatDate } from '@fullcalendar/react';
// import timeGridPlugin from '@fullcalendar/daygrid'


// const str = formatDate(new Date(), {
//   month: 'long',
//   year: 'numeric',
//   day: 'numeric'
// });

function App()
{


  const [selectedMentor, setSelectedMentor] = useState('');
  const [mentors, setMentors] = useState(Data);


  const onSearch = (text) =>
  {
    const selecting = mentors.filter(i =>
    {
      if (i.mentor.toLowerCase() === text) {
        return i.mentor
      }
    })
    console.log(selecting)
    setSelectedMentor(selecting)
  }
  console.log(selectedMentor)

  return (
    <>
      <div className="App">
        <MainNavBar />
        <SearchBar onSearch={onSearch} />
        <CardList selectedMentor={selectedMentor} />   
        
        
        
      </div>

    </>

  );
}

export default App;
// // <FullCalendar
// plugins={[ dayGridPlugin,  dayGridPlugin, interactionPlugin, timeGridPlugin ]}
// initialView="dayGridMonth"
// weekends={true}
// editable={true}
// events={[
//   { title: 'event 1', date: '2019-04-01' },
//   { title: 'event 2', date: '2021-06-02' }
// ]}
// />