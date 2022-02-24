import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { BiUserCircle } from "react-icons/bi";

function Register() {
  const { handleSubmit, reset, register } = useForm();

  const submit = async (data) => {
    // console.log(userData);

    const response = await axios.post("https://tax-inc.herokuapp.com/register", data);

    swal({
      title: `${response.data.message}`,
      icon: `success`,
      button: "Okay!!",
    }).then(function () {
      window.location = "/login";
    });
  };

  return (
    <Container fluid className="bg-dark h-screen">
      <div className="flex justify-center items-center h-100">
        <div
          style={{
            background:
              "linear-gradient(to right, rgb(152, 243, 255), rgb(0, 102, 255))",
          }}
          className="w-1/3 rounded-lg"
        >
          <div className="mt-4 text-9xl flex justify-center items-center mb-4">
            <BiUserCircle />
          </div>
          <Container className="formContainer">
            <Form onSubmit={handleSubmit(submit)}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="ml-10">Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="rounded-md border-2 border-solid h-12 ml-10"
                      style={{ width: "80%", borderColor: "black" }}
                      {...register("name", { required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="mr-10">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-md border-2 border-solid h-12 mr-10"
                      style={{ width: "80%", borderColor: "black" }}
                      {...register("email", { required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="ml-10">Phone No.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your number"
                      className="rounded-md border-2 border-solid h-12 ml-10"
                      style={{ width: "80%", borderColor: "black" }}
                      {...register("number", { required: true })}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="mr-10">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      className="rounded-md border-2 border-solid h-12 mr-10"
                      style={{ width: "80%", borderColor: "black" }}
                      {...register("password", { required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="dark"
                  className="mt-4 p-2"
                  style={{
                    borderRadius: "10px",
                    width: "200px",
                    fontSize: "18px",
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
            </Form>
            <hr />

            <h5 className="text-center mb-5 text-black">
              Already a user?
              <a href="/login" className="no-underline text-yellow-300 ml-2">
                LOGIN NOW
              </a>
            </h5>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Register;
