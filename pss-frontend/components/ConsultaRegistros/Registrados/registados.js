import React, { useEffect, useState, useContext, useCallback } from "react";
import { Table, Button } from "react-bootstrap";
import Modals from "./modals";
import { UserContext } from '../../Context/UserContext'
import axios from "axios";
import { selectedUserInitialState } from "../../../constants/state";
import { sections } from "../../../constants/sections";

const Registrados = () => {

  const { token, usersList, setUsersList, setSelectedUser } = useContext(UserContext);

  const baseUrl = 'http://localhost:4200/api';
  
  const getUsers = useCallback(async () => {
    if (token) {
      axios
      .get(baseUrl + '/admin/?section=' + sections.PRE_REGISTERED, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(function (response) {
          console.log(response, "RESPONSEEEEE");
          if(response.data) {
            setUsersList(response.data);
          } else {
            setUsersList([])
          }
        })
        .catch(function (error) {
          console.log(error.message, "ERRRRORRRR");
        });
    }
  }, [setUsersList, token]);

  const getPDF = (id) => {
    axios.get(baseUrl + '/file/' + id, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      responseType: 'blob'
    }).then((blob) => {
      var _url = window.URL.createObjectURL(blob.data);
      window.open(_url, "_blank").focus(); // window.open + focus
    }).catch((err) => {
      console.log(err);
    });
  }

  const [show, setShow] = useState(false);
  const [idUser, setIdUser] = useState();

  const handleClose = () => {
    setShow(false)
    setSelectedUser(selectedUserInitialState)
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (usersList) {
      getUsers()
    }
  }, [getUsers])



  return (
    <>
      <Table striped bordered hover className="">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Tipo de Servicio</th>
            <th>Institución Educativa</th>
            <th>PDF</th>
            <th>Documentos</th>
          </tr>
        </thead>
        <tbody>
          {usersList.length &&
            usersList.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.p_lastname} ${user.m_lastname} ${user.firstname}`}</td>
                <td>{user.preregister_date}</td>
                <td>{user.academic_data.service_type}</td>
                <td>{user.academic_data.unit}</td>
                <td><a href="#" onClick={() => { getPDF(user.id, user.curp) }}>Ver</a></td>
                <td>
                  <Button variant="outline-danger" onClick={() => {
                    setIdUser(user.id);
                    setSelectedUser(user)
                    handleShow();
                  }}>
                    Actualizar Documentos
                  </Button>
                  <Modals show={show} handleClose={handleClose} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

    </>
  );
};

export default Registrados;
