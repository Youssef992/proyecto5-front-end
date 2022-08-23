import { useContext, useState } from "react";
import './login.css'
import { useForm } from 'react-hook-form'
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { Alert } from "react-bootstrap";
const Login = () => {

    let [authMode, setAuthMode] = useState("signin")
    const { user, setUser } = useContext(UserContext);
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const { register, handleSubmit } = useForm();
    // const onSubmitLogin = data => {
    //     console.log(data)
    //     axios.post(url, data).then(res => {
    //         console.log(res.data);
    //         setUser(res.data);
    //     })
    // }


    const onSubmitSignUp = async data => {
        const url = 'https://proyecto5-backend.herokuapp.com/api/v1/register';
        console.log(data)
        axios.post(url, data).then(res => {
            console.log(res.data);
            setUser(res.data);
        })




        // const url = 'http://localhost:4000/api/v1/register';
        // console.log(data)
        // console.log('-----------------Entrando Axios-----------------');
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] ='*';
        // await axios.post(url, data).then(res => {
        //     console.log(res.data);
        //     setUser(res.data);
        // }).catch(error => {
        //     console.log("Error ========>", error);
        // })
        // console.log('-----------------Saliendo Axios-----------------');
    }
    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log in</h3>
                        <div className="text-center">
                            Aún no te registras?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Regístrate
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Usuario</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingresa Usuario"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Ingresar
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            {/* Olvidaste <a href="#">contraseña?</a> */}
                        </p>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" >
                    {user ? (<Alert variant="success">
                        Te registraste exitosamente.
                    </Alert>
                    ) : (<Alert variant="danger">
                        Aún no estás registrado.
                    </Alert>)}
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Registro</h3>
                        <div className="text-center">
                            Ya estás registrado?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Ingresa
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Nombre (s)</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Ingresa tu(s) nombre(s)"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Apellido (s)</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Ingresa tu(s) apellido(s)"
                                {...register("lastname", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Usuario</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Ingresa tu usuario"
                                {...register("username", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Ingresa tu contraseña"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Correo de Usuario</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingresa tu contraseña"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" onClick={handleSubmit(onSubmitSignUp)} className="btn btn-primary">
                                Registrar
                            </button>
                        </div>

                        <p className="text-center mt-2">
                            {/* Olvidaste <a href="#">contraseña?</a> */}
                        </p>
                    </div>
                </form>
            </div>
        </>)
}

export default Login