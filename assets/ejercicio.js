let infoPacientes = document.querySelector('#infoPacientes')


function Consultorio( consultorio, paciente ){
    
    let _consultorio = consultorio;
    this._paciente = paciente || [];

    Object.defineProperty(this, '_getConsultorio', {
        get: function () {
            return _consultorio
        }
    });

    Object.defineProperty(this, '_setConsultorio', {
        set: function ( consultorio ) {
            _consultorio = consultorio
        }
    });

}

Consultorio.prototype.getConsultorio = function(){
    return this._getConsultorio;
}

Consultorio.prototype.setConsultorio = function( consultorio ){
    this._setConsultorio = consultorio;
}

Consultorio.prototype.agregarPaciente = function(paciente){
    this._paciente.push( paciente );
}

Consultorio.prototype.getPacientes = function(){
    let arr = this._paciente
    console.log('Salida de arr', arr )
    arr.forEach( (element) => {

        infoPacientes.innerHTML+=`<div class="col-md-4">
        <div class="card">
          <div class="card-header">
            Paciente Nº ${element.getNumero()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: ${element.getNombre()}</li>
            <li class="list-group-item">Edad: ${element.getEdad()}</li>
            <li class="list-group-item">Rut: ${element.getRut()}</li>
            <li class="list-group-item">Diagnostico: ${element.getDiagnostico()}</li>
          </ul>
        </div>
      </div>`
        console.log( '==============================' )
        console.log(`Paciente Nº ${element.getNumero()}`)
        console.log(`Nombre ${element.getNombre()}`)
        console.log(`Edad ${element.getEdad()}`)
        console.log(`Rut ${element.getRut()}`)
        console.log(`Diagnostico: ${element.getDiagnostico()}`)
    });
}

Consultorio.prototype.getPacientePorNombre = function(nombre){
    
    let arr = this._paciente
    
    let busqueda = arr.find(  element => element.getNombre() == nombre  )
    const { _getNombre, _getNumero, _getEdad, _getRut, _getDiagnostico } = busqueda
    console.log( '==============================' )
    console.log(`El Paciente Nº ${_getNumero}`)
    console.log(`Nombre ${_getNombre}`)
    console.log(`Edad ${_getEdad}`)
    console.log(`Rut ${_getRut}`)
    console.log(`Diagnostico ${_getDiagnostico}`)
}


function Paciente ( nombre, edad, numero, rut ,diagnostico ){
   
    let _nombre = nombre;
    let _numero = numero;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico

    Object.defineProperty(this, '_getNombre', {
        get: function () {
            return _nombre
        }
    });

    Object.defineProperty(this, '_setNombre', {
        set: function ( nombre ) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, '_getNumero', {
        get: function () {
            return _numero
        }
    });

    Object.defineProperty(this, '_setNumero', {
        set: function ( numero ) {
            _numero = numero
        }
    });

    Object.defineProperty(this, '_getEdad', {
        get: function () {
            return _edad
        }
    });

    Object.defineProperty(this, '_setEdad', {
        set: function ( edad ) {
            _edad = edad
        }
    });

    Object.defineProperty(this, '_getRut', {
        get: function () {
            return _rut
        }
    });

    Object.defineProperty(this, '_setRut', {
        set: function ( rut ) {
            _rut = rut
        }
    });

    Object.defineProperty(this, '_getDiagnostico', {
        get: function () {
            return _diagnostico
        }
    });

    Object.defineProperty(this, '_setDiagnostico', {
        set: function ( diagnostico ) {
            _diagnostico = diagnostico
        }
    });


}

Paciente.prototype.getNombre = function(){
    return this._getNombre
}

Paciente.prototype.setNombre = function( nombre ){
    this._setNombre = nombre
}

Paciente.prototype.getNumero = function(){
    return this._getNumero
}

Paciente.prototype.setNumero = function( numero ){
    this._setNumero = numero
}

Paciente.prototype.getEdad = function(){
    return this._getEdad
}

Paciente.prototype.setEdad = function( edad ){
    this._setEdad = edad
}

Paciente.prototype.getRut = function(){
    return this._getRut
}

Paciente.prototype.setRut = function( rut ){
    this._setRut = rut
}

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico
}

Paciente.prototype.setDiagnostico = function( diagnostico ){
    this._setDiagnpstico = diagnostico
}

let p1 = new Paciente('Juan', 45, '01', '12.445.678-5', 'Dolor de estomago')
let p2 = new Paciente('Fernanda', 36, '02', '12.445.678-5', 'Dolor de estomago')
let p3 = new Paciente('Juanita', 28, '03', '12.445.678-5', 'Dolor de estomago')

// console.log('ddddd',p1.getNumero())

let xyz = new Consultorio('XYZ',[p1,p2])
xyz.agregarPaciente(p3)
// p1.setNombre('Fabian')
console.log(p1.getNombre())
xyz.getPacientes()
xyz.getPacientePorNombre('Juan')