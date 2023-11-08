const animal={
    nombre:"loky",
    tipo:"gato",
    edad:4,
    comer(){
        //console.log("el gato esta comiendo")
        //acceder a las propiedades de un objeto 
        console.log(`${animal.nombre()} esta comiendo`);
        //usando la palabra reservada this
        console.log(`${this.nombre()} esta comiendo`);
        
    }

}

//console.log(animal)
//animal.nombre();
console.log(animal.comer());