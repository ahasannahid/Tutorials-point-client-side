import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    
    const { course_title, image_url, course_details,_id } = course;
    return (
        <Card className=' mb-4 bg-dark text-white shadow-lg rounded'>
            <Card.Img className='w-25 m-auto' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <Card.Text>
                    {course_details}
                </Card.Text>
                <div className='text-center'>   

                <Link to={`/courses/${_id}`}><Button  variant="primary">Course Details</Button></Link>

                </div>
            </Card.Body>
        </Card>
    );
};

export default Course;