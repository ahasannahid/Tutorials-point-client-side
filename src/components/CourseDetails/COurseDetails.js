import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const COurseDetails = () => {
    const course = useLoaderData();
    const ref = React.createRef();

    const {_id, course_title, image_url, course_details, instructor, total_view, rating } = course;
    return (

        <div>
            <Card ref={ref} className='me-5  mb-4 bg-secondary text-white shadow-lg rounded'>

                <Card.Title className='text-center'>{course_title}</Card.Title>
                <Card.Img className='w-25 m-auto' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        {course_details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between ">
                        <div>
                            <span>Instructor: {instructor?.name}</span>
                        </div>
                        <div>
                            <span>Published Date: {instructor?.published_date}</span>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p>Rating: {rating.number}</p>
                        <p>Total View: {total_view}</p>
                    </div>
                </Card.Footer>

            </Card>

            <div className='text-center'>
                <Pdf targetRef={ref} filename="course-details.pdf">
                    {({ toPdf }) => <Button onClick={toPdf} className='bg-light text-dark fw-bold'><FaDownload></FaDownload> Download PDF</Button>}
                </Pdf>

                <Link to={`/checkout/${_id}`} className='text-center'><Button className='bg-warning fw-bold' variant='outline-primary'>Get Premium Access</Button></Link>
            </div>
        </div>

    );
};

export default COurseDetails;