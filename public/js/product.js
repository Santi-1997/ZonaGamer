
// let prodContenedor = document.querySelectorAll('.prod-contenedor')


// for (const unProd of prodContenedor) {       
//  unProd.style.backgroundColor = 'red';
//         console.log(unProd);
// }

let confirmaCambios = confirm('Cambiar el color de titulo?');

if (confirmaCambios){
        let titulo = document.querySelector('h1')
        titulo.style.color = 'red'
        titulo.style.fontSize = '80px'

}

 
