const propiedadesVenta = [
{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5.000,
    smoke: false,
    pets: false
},
{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1.200,
    smoke: true,
    pets: true
},
{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4.500,
    smoke: false,
    pets: true
},
{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5.000,
    smoke: true,
    pets: false
}
];


//Propiedad en venta
    let venta = '';
    const cardsVenta = document.querySelector('#cardsVenta');

    for (const propiedadVenta of propiedadesVenta) {
        venta += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedadVenta.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${propiedadVenta.nombre}
                    </h5>
                    <p class="card-text">
                    ${propiedadVenta.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedadVenta.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedadVenta.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
                    <p class="${propiedadVenta.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedadVenta.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedadVenta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedadVenta.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedadVenta.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedadVenta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
                </div>
            </div>
        </div>
        `;
    }

    cardsVenta.innerHTML = venta;