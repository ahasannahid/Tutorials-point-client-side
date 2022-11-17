import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { course_title, image_url, course_details, instructor, total_view, rating } = course;
    
    return (
        <div className='text-center'>
            <h3>You got premium access for {course_title} course</h3>
            <p>Your instructor is {instructor.name}</p>
            <p className='text-success'>COngratulations!! Successfully You got premium access</p>
        </div>
    );
};

export default Checkout;