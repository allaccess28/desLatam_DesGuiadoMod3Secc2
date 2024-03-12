let radiologia = [
  {
    hora: "13:00",
    especialista: "Dr. Sandoval",
    nombre: "Jose Perez",
    rut: "6.385.432-2",
    prevision: "Isapre",
  },
  {
    hora: "17:00",
    especialista: "Dr. Argomedo",
    nombre: "Felipe Ruiz",
    rut: "11.863.345-6",
    prevision: "Fonasa",
  },
];

let traumatologia = [
  {
    hora: "14:00",
    especialista: "Dr. Pérez",
    nombre: "Carlos Calvo",
    rut: "7.234.321-4",
    prevision: "Isapre",
  },
  {
    hora: "17:30",
    especialista: "Dr. Izquierdo",
    nombre: "Juan Gomez",
    rut: "9.456.437-7",
    prevision: "Fonasa",
  },
  {
    hora: "16:00",
    especialista: "Dr. Pérez",
    nombre: "Marta Vásquez",
    rut: "6.385.432-2",
    prevision: "Isapre",
  },
];

let dental = [
  {
    hora: "12:00",
    especialista: "Dr. Stefano",
    nombre: "Pamela Estrada",
    rut: "15.345.241-3",
    prevision: "Isapre",
  },
  {
    hora: "11:00",
    especialista: "Dr. Schultz",
    nombre: "Francisca Rojas",
    rut: "9.878.782-1",
    prevision: "Fonasa",
  },
  {
    hora: "11:30",
    especialista: "Dr. Subercaseaux",
    nombre: "Armando Luna",
    rut: "16.445.345-9",
    prevision: "Isapre",
  },
  {
    hora: "16:00",
    especialista: "Dr. Godoy",
    nombre: "Manuel Godoy",
    rut: "17.666.419-0",
    prevision: "Fonasa",
  },
];

let texto = "";
for (let index = 0; index < radiologia.length; index++) {
  texto += `<tr>
                
                <td scope="row">${radiologia[index].hora}</td>
                <td>${radiologia[index].especialista}</td>
                <td>${radiologia[index].nombre}</td>
                <td>${radiologia[index].rut}</td>
                <td>${radiologia[index].prevision}</td>
            </tr>`;
}

let tabla = document.getElementById("cuerpoTabla");
tabla.innerHTML = texto;
let nota1 = document.getElementById("nota1");
nota1.innerHTML = `<p>Primera Atencion : ${radiologia[0].nombre}- ${
  radiologia[0].prevision
}   ||   Ultima Atencion : ${radiologia[radiologia.length - 1].nombre} - ${
  radiologia[radiologia.length - 1].prevision
}</p>`;

let texto2 = "";
for (let index = 0; index < traumatologia.length; index++) {
  texto2 += `<tr>
                
                <td scope="row">${traumatologia[index].hora}</td>
                <td>${traumatologia[index].especialista}</td>
                <td>${traumatologia[index].nombre}</td>
                <td>${traumatologia[index].rut}</td>
                <td>${traumatologia[index].prevision}</td>
            </tr>`;
}

let tabla2 = document.getElementById("cuerpoTabla2");
tabla2.innerHTML = texto2;
let nota2 = document.getElementById("nota2");
nota2.innerHTML = `<p>Primera Atencion : ${traumatologia[0].nombre}- ${
  traumatologia[0].prevision
}   ||   Ultima Atencion : ${
  traumatologia[traumatologia.length - 1].nombre
} - ${traumatologia[traumatologia.length - 1].prevision}</p>`;

let texto3 = "";
for (let index = 0; index < dental.length; index++) {
  texto3 += `<tr>
                
                <td scope="row">${dental[index].hora}</td>
                <td>${dental[index].especialista}</td>
                <td>${dental[index].nombre}</td>
                <td>${dental[index].rut}</td>
                <td>${dental[index].prevision}</td>
            </tr>`;
}

let tabla3 = document.getElementById("cuerpoTabla3");
tabla3.innerHTML = texto3;
let nota3 = document.getElementById("nota3");
nota3.innerHTML = `<p>Primera Atencion : ${dental[0].nombre}- ${
  dental[0].prevision
}   ||   Ultima Atencion : ${dental[dental.length - 1].nombre} - ${
  dental[dental.length - 1].prevision
}</p>`;
