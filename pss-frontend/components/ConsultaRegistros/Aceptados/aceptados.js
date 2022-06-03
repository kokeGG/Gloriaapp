import React, { useEffect, useState, useContext, useCallback } from "react";
import { Table, Button } from "react-bootstrap";
import Modals from "./modals";
import { UserContext } from '../../Context/UserContext'
import axios from "axios";
import { sections } from "../../../constants/sections";


const Aceptados = () => {

  const { token, usersList, setUsersList, setSelectedUser } = useContext(UserContext);
  const baseUrl = 'http://localhost:4200/api';

  const getUsers = useCallback(async () => {
    if (token) {
      axios
        .get(baseUrl + '/admin/?section=' + sections.ACCEPTED, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(function (response) {
          console.log(response, "RESPONSEEEEE");
          setUsersList(response.data);
        })
        .catch(function (error) {
          console.log(error.message, "ERRRRORRRR");
        });
    }
  }, [setUsersList, token]);

  useEffect(() => {
    if (usersList) {
      getUsers()
    }
  }, [getUsers])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const format = `${day}/${month}/${year}`;

  return (
    <>
      <Table striped bordered hover className="tableTop">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Tipo de Servicio</th>
            <th>Institución Educativa</th>
            <th>PDF</th>
            <th>Datos de Prestario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lupita</td>
            <td>{format}</td>
            <td>Servicio Social</td>
            <td>UPIICSA</td>
            <td>None</td>
            <td>
              <Button variant="outline-danger" onClick={handleShow}>
                Actualizar Documentos
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modals show={show} handleClose={handleClose} />
    </>
  );
};

export default Aceptados;
