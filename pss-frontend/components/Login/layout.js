import React, { useContext, useEffect } from "react";
import { Form, Input } from "informed";
import { useRouter } from "next/router";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const Layout = () => {
  const { setUser, setIsNotGloria, setToken } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    setUser(null);
  }, []);

  const urlAPI = `http://localhost:4200/api/auth/login`;

  const handleSubmit = ({ values }) => {
    if (values.user === "prestadorSS") {
      setIsNotGloria(true);
      setUser(values.user);
      router.push("/controlSS");
    } else {
      axios
        .post(urlAPI, {
          email: values.user,
          password: values.password,
        })
        .then(function (response) {
          console.log(response, 'REEESPONSEEE');
          setUser(values.user);
          localStorage.setItem('user', values.user);
          localStorage.setItem('token', response.data.token);
          setToken(localStorage.getItem('token'))
          router.push("/controlSS");
        })
        .catch(function (error) {
          console.log(error, 'ERRRRRRRRRROR');
        });
    }
  };

  return (
    <>
      <div className="containerLogin">
        <div className="containerCardLogin">
          <div className="halfJPG">
            <img src="./img/luzr.jpg" className="imgAngel" />
          </div>
          <div className="halfWhite">
            <div className="titleSesion">
              <h1>Inicio de Sesión</h1>
            </div>
            <div className="form">
              <div>
                <Form onSubmit={handleSubmit}>
                  <div className="divInputs">
                    <Input
                      name="user"
                      type="text"
                      placeholder="Usuario"
                      className="form-control"
                    />
                  </div>
                  <div className="divInputs">
                    <Input
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                      className="form-control"
                    />
                  </div>
                  <div className="divInputs">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="divContra">
      <h3>Para poder iniciar sesión y realizar el registro usa las siguientes claves</h3>
            <h3>Usuario: prestadorSS</h3>
            <h3>Contraseña: 123456</h3>
      </div>
      </div>
    </>
  );
};

export default Layout;
