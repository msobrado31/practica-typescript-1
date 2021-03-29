"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const persona_1 = require("./persona");
console.log('______________Iniciamos ejecución________________');
let Direccion1 = new direccion_1.Direccion('Gran Via', 22, 4, 'B', 48006, 'Bilbao', 'Bizkaia');
let Direccion2 = new direccion_1.Direccion('Gabriel Aresti', 5, 3, 'C', 48002, 'Bilbao', 'Bizkaia');
let Direccion3 = new direccion_1.Direccion('Blas de Otero', 6, 7, 'A', 48015, 'Bilbao', 'Bizkaia');
let Direccion4 = new direccion_1.Direccion('Ramón y Cajal', 9, 5, 'B', 49015, 'Bilbao', 'Bizkaia');
let Mail1 = new mail_1.Mail('personal', 'asiergon2@gmail.com');
let Mail2 = new mail_1.Mail('personal', 'mariarda@gmail.com');
let Mail3 = new mail_1.Mail('personal', 'zurinebas@gmail.com');
let Mail4 = new mail_1.Mail('trabajo', 'agb323@gmail.com');
let Telefono1 = new telefono_1.Telefono('fijo', 942222222);
let Telefono2 = new telefono_1.Telefono('fijo', 945555555);
let Telefono3 = new telefono_1.Telefono('fijo', 943333333);
let Telefono4 = new telefono_1.Telefono('movil', 626555555);
let Asier = new persona_1.Persona('Asier', 'González Baños', 32, 25255255, '22 de mayo', 'rojo', 'hombre', Direccion1, Mail1, Telefono1, 'terminar práctica');
let Maria = new persona_1.Persona('María', 'Ruiz de Azúa', 45, 14634634, '2 de enero', 'violeta', 'mujer', Direccion2, Mail2, Telefono2, 'empezar la práctica');
let Zurine = new persona_1.Persona('Zuriñe', 'Basaguren Zuñiga', 26, 12332332, '7 de octubre', 'azul', 'mujer', Direccion3, Mail3, Telefono3, 'realizar cuestionarios');
let Personas = [Asier, Maria, Zurine];
Personas.forEach(p => {
    p.imprimirPersona();
});
// Para un DNI determinado
let dni_in = 25255255;
Personas.forEach(p => {
    if (p.dni == dni_in) {
        // Realizar modificaciones 
        p.addDireccion(Direccion4);
        p.addMail(Mail4);
        p.addTelefono(Telefono4);
    }
});
Personas.forEach(p => {
    p.imprimirPersona();
});
console.log('_________________Finalizamos ejecución_____________________');
