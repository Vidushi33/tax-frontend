import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

export default function Tax() {
  const { register, handleSubmit, reset } = useForm();
  const [modalShow, setModalShow] = useState(false);

  const submit = (data) => {
    if (
      data.Bas < 0 ||
      data.HRA < 0 ||
      data.LTA < 0 ||
      data.FA < 0 ||
      data.Inv < 0 ||
      data.Rent < 0 ||
      data.Med < 0
    ) {
      alert("Negative Value is not allowed");
    } else {
      Swal.fire({
        showDenyButton: true,

        confirmButtonText: "Confirm",
        denyButtonText: `Edit Details`,
        html: `<div class = "row w-96 mx-auto"><p class = "col-md-6">Basic Salery: ${data.Bas}</p> <br> <p class = "col-md-6">HRA: ${data.HRA}</p> <br> <p class = "col-md-6">LTA: ${data.LTA}</p> <br> <p class = "col-md-6">FA: ${data.FA}</p> <br> <p class = "col-md-6">Inc: ${data.Inv}</p> <br> <p class = "col-md-6">Rent: ${data.Rent}</p> <br> <p class = "col-md-6">City Type: ${data.City}</p> <br> <p class = "col-md-6">Med: ${data.Med}</p></div>`,
        button: "Confirm!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success").then(async () => {
            const response = await axios.post(
              "https://tax-inc.herokuapp.com/tax",
              data
            );
            console.log(response.data);
            reset();
            Swal.fire({
              html : `<p class = "font-bold" >AppHRA is : ${response.data.AppHRA}</p><br><p class = "font-bold">TaxIncome is : ${response.data.TaxInc}</p>`,
              button: "Done!"
            });
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <Container
      fluid
      className="h-screen "
      style={{ background: "linear-gradient(to right, #ee9ca7, #ffdde1)" }}
    >
      <h1 className="text-center mb-5">TAX CALCULATION</h1>
      <Form
        onSubmit={handleSubmit(submit)}
        className="bg-light w-2/4 p-16 h-fit border-solid border-red-600 border-8 rounded-lg m-auto"
      >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Basic</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Basic Salery"
                {...register("Bas", { required: true })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>LTA</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your LTA"
                {...register("LTA", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>HRA</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your HRA"
                {...register("HRA", { required: true })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>FA</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your FA"
                {...register("FA", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Inv</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Investments under section 80C"
                {...register("Inv", { required: true })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Rent</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Actual Rent paid by user "
                {...register("Rent", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>City Type</b>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("City", { required: true })}
              >
                <option value="Metro City">Metro city</option>
                <option value="Non-metro City">Non-metro city</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Med</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mediclaim policy premium paid by user"
                {...register("Med", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="flex justify-center items-center mt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
