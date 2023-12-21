import React from 'react';
import { MDBContainer,MDBRow,MDBModal,MDBModalDialog,MDBModalContent,MDBBtn } from 'mdb-react-ui-kit';

export default function EquiryApp() {
  return (
    <div>
    <MDBModal role="dialog" id='enq' className='modal fade'>
    <MDBModalDialog style={{maxWidth:"70%"}}>
    <MDBModalContent className='p-5'>
    <MDBContainer className='p-4'>
    <MDBRow>
    
    <div className='col-md-4'>
    <img src='https://www.rgmcc.in/img/01.gif' className='img-fluid'  style={{Width:"100%"}} />
    </div>
    <div className='col-md-8'>
    <h2>Enquiry Forms</h2>
    <MDBRow>
    <div className='form-group col-md-6 mt-3'>
    <input type='text' placeholder='FirstName *' className='form-control' />
    </div>
    
    <div className='form-group col-md-6 mt-3'>
    <input type='text' placeholder='LastName *' className='form-control' />
    </div>
    </MDBRow>

    <div className='form-group mt-3'>
    <input type='text' placeholder='Email *' className='form-control' />
    </div>
    <div className='form-group mt-3'>
    <input type='text' placeholder='Phone *' className='form-control' />
    </div>

    <div className='form-group mt-3'>
    <textarea type='text' placeholder='Message *' className='form-control'></textarea>
    </div>

    <div className='form-group mt-3'>
    <input type='submit' placeholder='Email *' className='btn btn-success btn-sm border border-0' value="Send" />
    <input type='reset' placeholder='Email *' className='btn btn-danger btn-sm border border-0 ms-3' value="Reset" />
    </div>
    </div>
    
    
    </MDBRow>
    </MDBContainer>
    </MDBModalContent>
    </MDBModalDialog>
    </MDBModal>
      
    </div>
  )
}
