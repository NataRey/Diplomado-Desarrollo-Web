const ADMIN_USER = "admin";
const ADMIN_PASS = "administrador";

let products = JSON.parse(localStorage.getItem('products')) || [];

let isAdmin = false;

/**Elementos del DOM */
const loginSection = document.getElementById('login-section');
const adminSection = document.getElementById('admin-section');
const productsGrid = document.getElementById('products-grid');
const productForm = document.getElementById('product-form');
const btnShowLogin = document.getElementById('btn-show-login');
const btnLogout = document.getElementById('btn-logout');


// funcion de autenticacion 

btnShowLogin.addEventListener('click', () => loginSection.classList.toggle('hidden'));

// Lógica para validar el usuario y la contraseña
document.getElementById('btn-login').addEventListener('click', () => {
    const user = document.getElementById('user-input').value;
    const pass = document.getElementById('pass-input').value;

    
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        isAdmin = true; 
        loginSection.classList.add('hidden');    
        adminSection.classList.remove('hidden'); 
        btnShowLogin.classList.add('hidden');    
        btnLogout.classList.remove('hidden');   
        renderProducts(); 
    } else {
        
        document.getElementById('login-error').classList.remove('hidden');
    }
});

    btnLogout.addEventListener('click', ()=>{
        isAdmin = false;
        adminSection.classList.add('hidden');
        btnLogout.classList.add('hidden');
        btnShowLogin.classList.remove('hidden');
        renderProducts();
    });

    // CRUD PRODUCTOS//

    productForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    
    const name = document.getElementById('prod-name').value;
    const price = document.getElementById('prod-price').value;
    const img = document.getElementById('prod-img').value;
    const editIndex = document.getElementById('edit-index').value;

    if (editIndex === "") {
        
        products.push(
            { 
                name, 
                price,
                img 
            });
    } else {
        
        products[editIndex] = { name, price, img };
        document.getElementById('edit-index').value = ""; 
    }

        saveAndRender(); 
    productForm.reset();
});


   
function deleteProduct(index) {
    if(confirm("¿Estás seguro de eliminar este producto?")) {
        products.splice(index, 1); // Borra 1 elemento en la posición 'index'
        saveAndRender();
    }
}


function editProduct(index) {
    const prod = products[index];
    document.getElementById('prod-name').value = prod.name;
    document.getElementById('prod-price').value = prod.price;
    document.getElementById('prod-img').value = prod.img;
    document.getElementById('edit-index').value = index; 
    window.scrollTo(0, 0); 
}


function saveAndRender() {
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
}
    
// renderizado del DOM

function renderProducts(){
    productsGrid.innerHTML = '';

    products.forEach((prod, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" 
        style = width: 100%;
        height:150px;
        object-fit: cover;
        border-radius:5px;
        >
        <h3>${prod.name}</h3>
        <p><strong>Precio: </strong>$${prod.price}</p>
        ${isAdmin ?`
            <button class ="btn-edit" onclick= "editProduct(${index})">Editar</button>
            <button class ="btn-delete" onclick= "deleteProduct(${index})">Delete</button>`:''
            }
            `;

            productsGrid.appendChild(card);

    });
}

// carga inicial al abrir la pagina 
renderProducts();

















