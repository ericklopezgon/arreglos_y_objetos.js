// Declaracion de arrays
// Array propiedades en venta
const sale_properties = [
    {
        name: "Apartamento de lujo en zona exclusiva", 
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", 
        description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        location: "123 Luxury Lane, Prestige Suburb, CA 45678",
        rooms: " 4 Habitaciones |",
        bathrooms: " 4 Baños",
        price: "5,000",
        smoke: false,
        pets: false,
    },
    {
        name: "Apartamento acogedor en la montaña", 
        src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        location: "789 Mountain Road, Summit Peaks, CA 23456",
        rooms: " 2 Habitaciones |",
        bathrooms: " 1 Baños",
        price: "1,200",
        smoke: true,
        pets: true,
    },
    {
        name: "Penthouse de lujo con terraza panorámica", 
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        location: "567 Skyline Avenue, Skyview City, CA 56789",
        rooms: " 3 Habitaciones |",
        bathrooms: " 3 Baños",
        price: "4,500",
        smoke: false,
        pets: true,
    },
    {
        name: "Villa toscana con piscina privada", 
        src: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        description: "Villa exclusiva inmersa a los pies de una montaña privada, amplios espacios al aire libre y una increible piscina privada",
        location: "Luxury Hill 256, Hill st., Hill Town, CA 68564",
        rooms: " 6 Habitaciones |",
        bathrooms: " 3 baños",
        price: "3,000",
        smoke: true,
        pets: true,
    }
]

//Array propiedades en arriento
const rental_propeties = [
    {
        name: "Apartamento en el centro de la ciudad", 
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        description: "Este apartamento de 2 habitaciones está ubicado en el corazón  de la ciudad, cerca de todo.",
        location: "123 Main Street, Anytown, CA 91234",
        rooms: " 2 Habitaciones |",
        bathrooms: " 2 Baños",
        price: "2,000",
        smoke: false,
        pets: true,
    },
    {
        name: "Apartamento torres del marr", 
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Este hermoso apartamento ofrece una vista impresionante al mar",
        location: "456 Ocean Avenue, Seaside Town, CA 56789",
        rooms: " 3 Habitaciones |",
        bathrooms: " 3 Baños",
        price: "2,500",
        smoke: true,
        pets: true,
    },
    {
        name: "Condominio moderno en zona residencial", 
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial ",
        location: "123 Main Street, Anytown, CA 91234",
        rooms: " 2 Habitaciones |",
        bathrooms: " 2 Baños",
        price: "2,200",
        smoke: false,
        pets: false,
    },
    {
        name: "Studio ejecutivo duplex", 
        src: "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg", 
        description: "Espacioso studio ideal para trabajo cowork, con dos pisos, separando los dormitorios del area principal",
        location: "589 Bussines avenue, Cashtown, CA 15846",
        rooms: " 3 Habitaciones |",
        bathrooms: " 3 baños",
        price: "3,000",
        smoke: true,
        pets: false,
    },
]

//Declaracion de variables
const sale_section = document.querySelector("#for_sale")
const rent_section = document.querySelector("#for_rent")
const rent_page = document.querySelector("#rent_main") //propiedades_alquiles.html

let htmlMainSale = ""
let htmlMainRent = ""

//Iteracion de los array
//Seccion ventas index con max 3 items, partiendo desde el objeto index 1 del array
for(let i = 1; i <= 3 && i < sale_properties.length; i++) {
    let sale = sale_properties[i];
    htmlMainSale += `
        <div class="col-md-4 mb-4"> 
            <div class="card">
                <img src="${sale.src}" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${sale.name}</h5>
                    <p class="card-text">${sale.description}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>${sale.location}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i>${sale.rooms}
                        <i class="fas fa-bath"></i>${sale.bathrooms}
                    </p>
                    <p>
                        <i class="fas fa-dollar-sign"></i>${sale.price}
                    </p>
                    <p class="${sale.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas ${sale.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${sale.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${sale.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas ${sale.pets ? 'fa-paw' : 'fa-ban'}"></i> ${sale.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `
}
sale_section.innerHTML = htmlMainSale;

//Seccion alquiler index con max 3 items, partiendo desde el objeto index 1 del array
for(let i = 1; i <= 3 && i < rental_propeties.length; i++) {
    let rent = rental_propeties[i];
    htmlMainRent += `
        <div class="col-md-4 mb-4"> 
            <div class="card">
                <img src="${rent.src}" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${rent.name}</h5>
                    <p class="card-text">${rent.description}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>${rent.location}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i>${rent.rooms}
                        <i class="fas fa-bath"></i>${rent.bathrooms}
                    </p>
                    <p>
                        <i class="fas fa-dollar-sign"></i>${rent.price}
                    </p>
                    <p class="${rent.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas ${rent.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${rent.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${rent.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas ${rent.pets ? 'fa-paw' : 'fa-ban'}"></i> ${rent.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `
}
rent_section.innerHTML = htmlMainRent;


