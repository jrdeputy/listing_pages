import React from 'react';
import './Listing-page.css';

const JobBoardComponent = ({ job }) => (
    
    <div className='flex'>
        <div className='logo'>
            <img src={job.logo} alt={job.company} />
        </div>
        <div>
            <h3>{job.company}</h3>
            <h2>{job.position}</h2>
            <p>
               {job.postedAt} * {job.contract} * {job.location}
            </p>
            <p>
                {job.languages ? job.languages.map((language) => 
                <span>| {language} | </span>) :  ''}

                {job.tools ? job.tools.map((tool) => 
                <span>| {tool} |</span>) :  ''}
            </p>
        </div>
    </div>
);

export default JobBoardComponent;