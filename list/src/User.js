import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown,Form}from 'react-bootstrap'

const User = ({user}) => {
    return (
        <div style={{width:"220px",marginTop:"30px"}} >
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"100%"}}>
   {user.name}
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Form style={{width:"100%"}}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label><b>User Name:</b> {user.username}</Form.Label>
    
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label><b>City:</b>{user.address.city} </Form.Label>
  
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label><b>Phone:</b>{user.phone}</Form.Label>
    
  </Form.Group>

 

</Form>
    
    
  </Dropdown.Menu>
</Dropdown>
            
        </div>
    )
}

export default User
