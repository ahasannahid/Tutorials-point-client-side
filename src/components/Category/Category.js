import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../../pages/Shared/Course/Course';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>

                    {
                        categoryCourses.map(course => <Course
                            key={course._id} course={course}></Course>)
                    }

        </div>
    );
};

export default Category;