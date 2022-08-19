import { useState } from "react";
import './login.css'
const Login = () => {

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
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
                <form className="Auth-form">
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
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingresa tu(s) nombre(s)"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Apellido (s)</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingresa tu(s) apellido(s)"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Usuario</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingresa tu usuario"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
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