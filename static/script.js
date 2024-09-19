document.addEventListener("DOMContentLoaded", function() {
let URL = 'http://127.0.0.1:8000/mostrar_libros';

fetch(URL)
    .then(res => res.json())
    .then(data => {
       // dataTable.innerHTML = '';  // Limpiar el contenido anterior
        data.forEach(item => {
            // Crear una nueva fila
            const row = document.createElement('tr');
            
            // Crear las celdas
            const isbnCell = document.createElement('td');
            isbnCell.textContent = item.isbn;

            const tituloCell = document.createElement('td');
            tituloCell.textContent = item.titulo;
            const autorCell = document.createElement('td');
            autorCell.textContent = item.autor;

            const fechaCell = document.createElement('td');
            fechaCell.textContent = item.fecha;//

            const editorialCell = document.createElement('td');
            editorialCell.textContent = item.editorial;
            
            const precioCell = document.createElement('td');
            precioCell.textContent = item.precio;


            // Agregar las celdas a la fila
            row.appendChild(isbnCell);
            row.appendChild(tituloCell);
            row.appendChild(autorCell);
            row.appendChild(fechaCell);
            row.appendChild(editorialCell);
            row.appendChild(precioCell);

            // Agregar la fila al cuerpo de la tabla
            dataTable.appendChild(row);
        });
    });
     });
    
