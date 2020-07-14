import React from 'react';

const JobBoardComponent = ({ job }) => (
    
    <div>
        <div>
            <img src={job.logo} alt={job.company} />
        </div>
        <div></div>
            <h3>{job.company}</h3>
            <h2>{job.position}</h2>
            <p>
               {job.postedAt} * {job.contract} * {job.location}
            </p>
        <div>
            {job.languages ? job.languages.map((language) => 
            <span>{language}</span>) :  ''}

            {job.tools ? job.tools.map((tool) => 
            <span>{tool}</span>) :  ''}
        </div>
    </div>
);

export default JobBoardComponent;