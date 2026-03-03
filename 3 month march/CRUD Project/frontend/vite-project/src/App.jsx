import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import "./style.css";
import { useState } from 'react';

function App() {
  const [Itemname, setitemname] = useState() //hook-use state hook
  console.log(Itemname, "Item Name Value")
  const handleOnChenge = (event) => {
    setitemname(event.target.value)
    console.log("typing on input field")
  };
   function SubmitFrom(e) {
    e.preventDefault();
    console.log("Form submitted")
    toast.success(' Form Submitted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className='text-danger text-center my-5'>CRUD - MERN Stack Project Start</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='border text-center'>Create Item</h3>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item name</Form.Label>
                  <Form.Control type="Text" placeholder="Enter Item Name " onChange={() => handleOnChenge(event)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Discriptions</Form.Label>
                  <Form.Control type="text" placeholder=' Enter Discription' />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Purchase Price"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter selling price" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="Numer" placeholder='Enter Quantity ' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose Unit</option>
                    <option>Pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Litter</option>

                  </Form.Select>
                </Form.Group>
              </Row>
              <div className='text-center'>
                <Button variant="primary" type="submit" className='w-50'
                  onClick={SubmitFrom}
                >
                  submit
                </Button>
              </div>

            </Form>
          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'>Get Items</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item Name</th>
                  <th>Discriptions</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pen</td>
                  <td>jel pen</td>
                  <td>10</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Box</td>
                  <td className='d-flex'>
                    <button className='btn btn-success'> Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Book</td>
                  <td>classment</td>
                  <td>10</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Box</td>
                  <td className='d-flex'>
                    <button className='btn btn-success'> Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App