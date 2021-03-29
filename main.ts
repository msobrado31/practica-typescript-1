import {Direccion} from"./direccion";
import {Mail} from"./mail";
import{Telefono} from"./telefono";
import {Persona} from"./persona";

console.log ('______________Iniciamos ejecución________________');

let Direccion1=new Direccion('Gran Via',22,4,'B',48006,'Bilbao','Bizkaia');
let Direccion2=new Direccion('Gabriel Aresti',5,3,'C',48002,'Bilbao','Bizkaia');
let Direccion3=new Direccion('Blas de Otero',6,7,'A',48015,'Bilbao','Bizkaia');
let Direccion4=new Direccion('Ramón y Cajal',9,5,'B',49015,'Bilbao','Bizkaia');

let Mail1=new Mail('personal','asiergon2@gmail.com');
let Mail2=new Mail('personal','mariarda@gmail.com');
let Mail3=new Mail('personal','zurinebas@gmail.com');
let Mail4=new Mail('trabajo','agb323@gmail.com');

let Telefono1=new Telefono('fijo',942222222);
let Telefono2=new Telefono('fijo',945555555);
let Telefono3=new Telefono('fijo',943333333);
let Telefono4=new Telefono('movil',626555555);

let Asier= new Persona('Asier','González Baños',32,25255255,'22 de mayo','rojo','hombre',Direccion1,Mail1,Telefono1,'terminar práctica')
let Maria= new Persona('María','Ruiz de Azúa',45,14634634,'2 de enero','violeta','mujer',Direccion2,Mail2,Telefono2,'empezar la práctica')
let Zurine= new Persona('Zuriñe','Basaguren Zuñiga',26,12332332,'7 de octubre','azul','mujer',Direccion3,Mail3,Telefono3,'realizar cuestionarios')
let Personas=[Asier,Maria,Zurine]

Personas.forEach(p => {
    p.imprimirPersona();
});

// Para un DNI determinado

let dni_in = 25255255;

Personas.forEach(p => {
    if (p.dni== dni_in) {
        // Realizar modificaciones 
        p.addDireccion(Direccion4);
        p.addMail(Mail4);
        p.addTelefono(Telefono4);
    }
});

Personas.forEach(p => {
    p.imprimirPersona();
});

console.log ('_________________Finalizamos ejecución_____________________');

