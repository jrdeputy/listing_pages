import React from 'react';

const BusinessPage = ({ job }) => (
    <div>
        <h4>Menu will go along the top</h4>
        <div className='title'>
            <h3>{ job.company }</h3>
        </div>
        <div>
            <img src ={job.logo} className='image-1'/>
            <img src ={job.logo} className='image-2'/>
            <img src ={job.logo} className='image-3'/>
        </div>
        <div className='ratings'>
            <p>
                Our Rating: {job.postedAt}
            </p>
            <p>
                Yelp Rating: {job.contract}
            </p>
            <p>
                Yelp Categories: {job.location}
            </p>
            <p>
                Price: {job.languages}
            </p>
            <p>
                Phone/Address: {job.tools}
            </p>
        </div>
    </div>
);

export default BusinessPage;