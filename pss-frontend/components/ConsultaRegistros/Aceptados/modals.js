import React, { useState } from "react";
import { Input, Form } from "informed";
import { Button, Modal } from "react-bootstrap";
import { prestarioArray } from "./prestarioJSON";
import CustomDate from "./customDate";
import CustomTime from "./customTime";

const Modals = ({ show, handleClose }) => {
  const prestarioData = prestarioArray.map((field) => {
    if (field.type === "text") {
      return (
        <div>
          <Input
            name={field.name}
            field={field.field}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            className={"form-control customBotom"}
            style={{ width: "28rem" }}
          />
        </div>
      );
    } else if (field.type === "date") {
      return (
        <div>
          <CustomDate
            name={field.name}
            field={field.field}
            type={field.type}
            label={field.label}
            className={"form-control customBotom"}
          />
        </div>
      );
    } else if (field.type === "time") {
      return (
        <div>
          <CustomTime
            name={field.name}
            field={field.field}
            type={field.type}
            label={field.label}
            className={"form-control customBotom"}
          />
        </div>
      );
    }
  });

  const handleSubmit = ({ values }) => {
    console.log(values);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos de Prestario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={handleSubmit}>
              <div className="divFlex">{prestarioData}</div>
              <div className="divCenter">
                <Button variant="outline-primary" type="submit">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
