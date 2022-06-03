import React from "react";
import { Button } from "react-bootstrap";
import { Input, Form } from "informed";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
  inputsArray,
  inputsArrayAddress,
  inputsArrayContact,
  inputsArrayAcademics,
} from "./arrayInputs";
import axios from "axios";

const LayoutPreRegistro = () => {
  const url = "http://localhost:4200/api/pre-registered";

  const arrayDataStudent = inputsArray.map((field) => {
    return (
      <div className="pad">
        <Input
          name={field.name}
          field={field.field}
          label={field.label}
          placeholder={field.placeholder}
          className={"form-control"}
          style={{ width: "25rem" }}
        />
      </div>
    );
  });

  const arrayDataAddress = inputsArrayAddress.map((field) => {
    return (
      <div className="pad">
        <Input
          name={field.name}
          field={field.field}
          label={field.label}
          placeholder={field.placeholder}
          className={"form-control"}
          style={{ width: "25rem" }}
        />
      </div>
    );
  });

  const arrayDataContact = inputsArrayContact.map((field) => {
    return (
      <div className="pad">
        <Input
          name={field.name}
          field={field.field}
          label={field.label}
          placeholder={field.placeholder}
          className={"form-control"}
          style={{ width: "25rem" }}
        />
      </div>
    );
  });

  const arrayDataAcademics = inputsArrayAcademics.map((field) => {
    return (
      <div className="pad">
        <Input
          name={field.name}
          field={field.field}
          label={field.label}
          placeholder={field.placeholder}
          className={"form-control"}
          style={{ width: "25rem" }}
        />
      </div>
    );
  });

  const handleSubmit = ({ values }) => {

    axios
      .post(url, {
        p_lastname: values.apellidoPaterno,
        m_lastname: values.apellidoMaterno,
        firstname: values.nombre,
        curp: values.curp,
        gender: values.genero,
        street: values.calle,
        outdoor_number: values.numExterior,
        interior_number: values.numInterior,
        suburb: values.colonia,
        postal_code: values.cp,
        delegacy: values.delegacion,
        state: values.estado,
        email: values.email,
        landline_phone_number: values.telefonoFijo,
        cell_phone_number: values.telefonoCelular,
        institutional_email: values.emailInstitucional,
        unit: values.unidad,
        career: values.carrera,
        service_type: values.servicio,
        boleta: values.matricula,
      })
      .then(function (response) {
        NotificationManager.success('Información Enviada', 'Su información ha sido enviada correctamente');
      })
      .catch(function (error) {
        NotificationManager.error('Contacte con el administrador', 'Error', 5000, () => {
           
      });
    })
  };

  return (
    <>
      <div className="containerStyles">
        <div className="titleSesionPre">
          <h1>Pre-Registro</h1>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <div className="spaceTitle">
              <h2 className="subTitlePre">DATOS GENERALES</h2>
            </div>
            <div className="dispFlex">{arrayDataStudent}</div>
            <div className="spaceTitle">
              <h2 className="subTitlePre">DIRECCIÓN</h2>
            </div>
            <div className="dispFlex">{arrayDataAddress}</div>
            <div className="spaceTitle">
              <h2 className="subTitlePre">MEDIOS DE CONTACTO</h2>
            </div>
            <div className="dispFlex">{arrayDataContact}</div>
            <div className="spaceTitle">
              <h2 className="subTitlePre">DATOS ACADÉMICOS</h2>
            </div>
            <div className="dispFlex">{arrayDataAcademics}</div>
            <div className="centerButton centerButtonModules">
              <Button className="buttonIngresar" type="submit">
                GUARDAR REGISTRO
              </Button>
            </div>
          </Form>
        </div>
        <NotificationContainer />
      </div>
    </>
  );
};

export default LayoutPreRegistro;
