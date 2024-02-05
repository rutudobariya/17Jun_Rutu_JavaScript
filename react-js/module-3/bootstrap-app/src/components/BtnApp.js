import React from 'react';
import { Container,Button,ButtonGroup,Card,CardBody,CardFooter,CardHeader,Row } from 'react-bootstrap';

export default function BtnApp() {
  return (
    <div>

    <Container className='p-5 mt-5'>
   
       <Button className='btn btn-sm w-25 p-3 btn-danger text-white border border-0'>Create Account</Button>

       <ButtonGroup className='btn btn-sm ms-5 p-3 btn-success text-white border border-0'>Login | Register</ButtonGroup>

       <ButtonGroup className='btn btn-sm ms-5 p-3 btn-warning text-white border border-0'>Login | Register</ButtonGroup>


       <Row>
       <div className='col-md-4 mt-4'>
       <Card>
       <CardHeader className='bg-success text-white'>Employee Attendance</CardHeader>
       <CardBody className='p-5'>
       <p>Lorem ipsum</p>
       </CardBody>
       <CardFooter>
       <p>copyright@2023</p>
       </CardFooter>
       </Card>
       
       </div>

       <div className='col-md-7 ms-5 mt-4'>
       <Card>
       <CardHeader className='bg-danger text-white'>Employee Attendance</CardHeader>
       <CardBody className='p-5'>
       <p>Lorem ipsum</p>
       </CardBody>
       <CardFooter>
       <p>copyright@2023</p>
       </CardFooter>
       </Card>
       
       </div>
       
       </Row>


    </Container>
      
    </div>
  )
}
