
const Profile = () => {

    return (<>
        <div class="container my-4">
            <form class="col-md-12 mb-12">
                <div class="col text-center">
                    <div class="col-md-12 mb-12">
                        <img class="rounded-circle" alt="100x100" src="https://freesvg.org/img/abstract-user-flat-4.png"
                            data-holder-rendered="true" style={{ width: '300px', height: '300px' }} />
                    </div>
                    <div class="col text-center">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Nombre Completo</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="nombre" disabled="true" placeholder="Nombre Completo" value="General de Productos SA de CV" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Rol</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="nombre" disabled="true" placeholder="Nombre Completo" value="Administrador" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="nombre" disabled="true" placeholder="Nombre Completo" value="generalproductos@gmail.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-3">
                                <input type="password" class="form-control" id="nombre" disabled="true" placeholder="Nombre Completo" value="12345" />
                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    </>
    );

}

export default Profile