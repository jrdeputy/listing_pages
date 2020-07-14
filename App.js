import React, { useState, useEffect } from 'react';
import JobBoardComponent from './components/JobBoardComponent';
import data from './assets/data.json';

console.log(data);

function App() {
  const [jobs, setJobs ] = useState([]);

  // How to fetch data from an API
  //useEffect(() => {
    //fetch('API_URL').then(res => res.json()).then(data => {
      //setJobs(data);
    //});

    useEffect(() => setJobs(data), []);

    console.log(jobs);

  return (
    <div className="App">
      <h1 className='text-4xl'>Hello World!</h1>
      {
       jobs.length === 0 ? (
         <p>Jobs are fetching...</p>
       ) : (
         jobs.map( job => (
           <JobBoardComponent job={job} key={job.id} />
         ))
       )
      }
    </div>
  );
}

export default App;

// TODOS
// 1. study the design & apis
// 2. create the job board component
// 3. get the data from the json
// 4. pass down the data to the JBC
// 5. style it
// 6. filter component
// 7. filter the data