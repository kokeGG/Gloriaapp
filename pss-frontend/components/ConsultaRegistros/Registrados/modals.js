import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Button, InputGroup, Modal } from "react-bootstrap";
import { checks } from "./checkJson";
import { Input, Form, Checkbox } from "informed";
import axios from "axios";

const Modals = ({ show, handleClose }) => {
  const { token, selectedUser, usersList, setUsersList } = useContext(UserContext);

  const handleSubmit = ({ values }) => {
    const baseUrl = `http://localhost:4200/api/admin/${selectedUser.id}`;
    if (baseUrl && token && values) {
      axios.put(baseUrl, {
        ine: values.INE,
        curp: values.CURP,
        constancy: values.CONSTANCIA,
        credential: values.CREDENCIAL,
        boleta: values.BOLETA,
        voucher: values.COMPROBANTE,
        presentation_letter: values.ACEPTACION,
        photo: values.FOTO
      },
        {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(function (response) {
          const userIndexToReplace = usersList.findIndex(
            (user) => user.id === selectedUser.id
          );
          let updatedUsersList = [...usersList];
          updatedUsersList[userIndexToReplace] = response.data;
          if (Object.values(usersList).some((value) => value)) {
            updatedUsersList.splice(userIndexToReplace, 1)
          }
          setUsersList(updatedUsersList)
          handleClose()
          console.log(response, "RESPONSE CHECKBOX");
        })
        .catch(function (error) {
          console.log(error.message, "ERROR CHECKBOX");
        });
    };
  }

  const arrayData = Object.entries(checks).map(([key, value]) => {
    return (
      <div>
        {key}
        <Checkbox className="mb-2" id={value.id} name={key} initialValue={selectedUser.documents[value.name]} />
      </div>
    );
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Documentos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {arrayData}
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Form>
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
