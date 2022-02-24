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

export default function Login() {
  const { handleSubmit, reset, register } = useForm();

  const submit = (data) => {
    const response = axios.post("https://tax-inc.herokuapp.com/register", data);

    console.log(response);

    swal({
      title: `Welcome`,
      icon: `success`,
      button: "Okay!",
    }).then(() => {
      window.location = "/tax";
    });
  };

  return (
    <Container fluid className="bg-dark h-screen">
      <div className="d-flex justify-center items-center h-100">
        <div
          style={{
            background:
              "linear-gradient(to right, rgb(152, 243, 255), rgb(0, 102, 255))",
          }}
          className="w-1/4 rounded-lg"
        >
          <div className="mt-4 text-8xl flex justify-center items-center mb-4">
            <BiUserCircle />
          </div>
          <Container>
            <Form onSubmit={handleSubmit(submit)}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="ml-10">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-md border-2 border-solid h-12 ml-10"
                      style={{ width: "80%", borderColor: "black" }}
                      {...register("email", { required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="ml-10">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      className="rounded-md border-2 border-solid h-12 ml-10"
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
                    width: "25%",
                    fontSize: "20px",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>

            <hr />

            <h5 className="text-center mb-4 text-black">
              Didn't have an account?
              <a href="/" className="no-underline text-yellow-300 ml-2">
                REGISTER
              </a>
            </h5>
          </Container>
        </div>
      </div>
    </Container>
  );
}
