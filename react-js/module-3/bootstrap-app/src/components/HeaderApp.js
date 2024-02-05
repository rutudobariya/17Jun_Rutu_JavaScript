import React from 'react';
import {Container,Row,Form,Button} from 'react-bootstrap';

export default function HeaderApp() {
  return (
    <div>
    <Container fluid className='bg-light p-3 shadow header-app'>
    <Row>
        
    <div className='col-md-3'>
    <span className='bi bi-telephone-x-fill fs-3'></span> <b className='ms-1'>(+91)-9998003879</b>
    </div>
      
    <div className='col-md-6'>
     <Form>
     <div className='input-group'>
     <input type='text' placeholder='search anywhere here' className='form-control' />
     </div>
     </Form>
    </div>
      
    
    <div className='col-md-3'>
    <span className='bi bi-facebook fs-3 ms-1'></span>
    <span className='bi bi-twitter fs-3 ms-1'></span>
    <span className='bi bi-linkedin fs-3 ms-1'></span>
    <span className='bi bi-instagram fs-3 ms-1'></span>

    <Button className='btn btn-dark text-white ms-3 btn-sm'>Create Account</Button>
    </div>
    </Row>
    </Container>
      
    </div>
  )
}
