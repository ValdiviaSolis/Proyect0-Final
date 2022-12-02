fetch('http://localhost:3000/api/contactos',{
    method:'GET'})
    .then(response => response.json())
    .then(datos => {
        let menu=document.getElementById('contacts');
        let opciones='';
        for(let i=0;i<datos.length;i++){
            opciones+=`<option id=${i} value=${datos[i].id}>${datos[i].nombre}</option>`;
        }
        menu.innerHTML+=opciones;
    });

const escuchar=document.getElementById('btn');
escuchar.addEventListener('click',()=>{
    let name=document.getElementById('name').value;
    let celular=document.getElementById('celular').value;
    let email=document.getElementById('email').value;
    let edad=document.getElementById('edad').value;
    let activo=document.getElementById('activo').value;
    let dependientes=document.getElementById('dependientes').value;
    let depen=[];
    for(let i=1;i<=dependientes;i++){
        let dNombre=document.getElementById(`name${i}`).value;
        let dEdad=document.getElementById(`edad${i}`).value;
        depen.push({nombre:dNombre,edad:dEdad});
    }
    let resultados={nombre:name,celular:celular,email:email,edad:edad,activo:activo,dependientes:depen}
    fetch('http://localhost:3000/api/contactos',{
        method:'POST',
        body:JSON.stringify(resultados),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(datos => {
         console.log(datos);
        let info=document.getElementById('info');
        info.innerHTML=`<h3>${datos.msg} con el ID ${datos.id}</h3>`
    });
});

const añadidos=document.getElementById('btnDep');
añadidos.addEventListener('click',()=>{
    let dependientes=document.getElementById('dependientes').value;
    let dep=document.getElementById('dep');
    dep.innerHTML='';
    for(let i=1;i<=dependientes;i++){
        dep.innerHTML+=`
        <label><b>Nombre: </b></label><br>
        <input id="name${[i]}" type="text"><br>
        <label><b>Edad: </b></label><br>
        <input id="edad${[i]}" type="text"><br><br>`;
    }
});

const menu=document.getElementById('contacts');
const btnMN=document.getElementById('btnMn');
btnMN.addEventListener('click',()=>{
    fetch(`http://localhost:3000/api/contactos/${menu.value}`)
    .then(res=>res.json())
    .then(datos=>{
        let info=document.getElementById('info2');
        info.innerHTML=`<p>Id seleccionado: ${datos[0].id}<br>Edad seleccionado: ${datos[0].edad}<br>Celular seleccionado: ${datos[0].celular}</p>`;
    })
});