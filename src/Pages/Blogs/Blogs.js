import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='mx-auto w-75 p-4 m-4 question'>
            <Accordion> <h1 className='pb-4'>Question and Answer</h1>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question :  Difference between javascript and nodejs?</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-bold'>Answer :</span>Javascript is an object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage.
                        Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. .
                        JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language.
                        It is generally used on the client-side server.It is generally used on the server-side.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question :  When should you use nodejs and when should you use mongodb?</span>
                    </Accordion.Header>
                    <Accordion.Body><span className='fw-bold'>Answer :</span> Nodejs is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give us programmatic access to MongoDB so we can create databases and then add, query, update or delete data from the MongoDB database.the two tools both employ JavaScript and JSON.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question :  Differences between sql and nosql databases.?</span>
                    </Accordion.Header>
                    <Accordion.Body><span className='fw-bold'>Answer :</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;