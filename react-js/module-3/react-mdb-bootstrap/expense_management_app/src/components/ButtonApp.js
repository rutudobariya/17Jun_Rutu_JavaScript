import React from 'react';
import {MDBContainer,MDBRow,MDBBtn,MDBBtnGroup } from 'mdb-react-ui-kit';
import EquiryApp from './EquiryApp';
export default function ButtonApp() {
  return (
    <div>
      <>

      <MDBContainer>
      <MDBRow>
       <h3 className='mt-5'>MDB design buttons</h3>
        <div className='col-md-6'>
        <MDBBtn className='btn btn-lg btn-danger bt-white border border-0 mt-5'>click me</MDBBtn>
        <MDBBtn className='btn btn-lg btn-success bt-white border border-0 mt-5 ms-5' data-bs-toggle="modal" data-bs-target="#enq">Enquiry with Us<span className='fa fa-users'></span> </MDBBtn>
        </div> 
      </MDBRow>
      </MDBContainer>
      <EquiryApp />
      

      </>
    </div>
  )
}
