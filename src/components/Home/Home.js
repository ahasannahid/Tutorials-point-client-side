import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../../pages/Shared/Course/Course';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='text-center'>All courses from tutorial point</h2>
            {
                courses.map(course => <Course
                   key={course._id}
                   course= {course}
                ></Course>)
            }

        </div>
    );
};

export default Home;