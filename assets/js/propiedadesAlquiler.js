const propiedadesAlquiler = [
{
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.000,
    smoke: false,
    pets: true
},
{
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2.500,
    smoke: true,
    pets: true
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.200,
    smoke: false,
    pets: false
},
{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5.000,
    smoke: false,
    pets: true
}
];


//Propiedad en alquiler
    let alquiler = '';
    const cardsAlquiler = document.querySelector('#cardsAlquiler');

    for (const propiedadAlquiler of propiedadesAlquiler) {
        alquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedadAlquiler.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${propiedadAlquiler.nombre}
                    </h5>
                    <p class="card-text">
                    ${propiedadAlquiler.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedadAlquiler.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}</p>
                    <p class="${propiedadAlquiler.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedadAlquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedadAlquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedadAlquiler.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedadAlquiler.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedadAlquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
                </div>
            </div>
        </div>
        `;
    }

    cardsAlquiler.innerHTML = alquiler;