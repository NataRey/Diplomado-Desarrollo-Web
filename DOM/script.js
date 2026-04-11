const ADMIN_USER = "admin";
const ADMIN_PASS = "administrador";

let products = JSON.parse(localStorage.getItem('products')) || [];

/**Elementos del DOM */
const loginSection = document.getElementById('login-section');
const adminSection = document.getElementById('admin-section');
const productsGrid = document.getElementById('products-grid');
const productsForm = document.getElementById('product-form');
const btnShowLogin = document.getElementById('btn-show-login');
const btnLogout = document.getElementById('btn-logout');


// funcion de autenticacion 

btnShowLogin.addEventListener('click', ()=> loginSection.classList.toggle('hidden'));

document.getElementById('btn-login').addEventListener('click', () => {
    const user = document.getElementById('user-input').value;
    const pass = document.getElementById('pass-input').value;
    
    user = "";
    user = abc123

    if(user === ADMIN_USER && pass === ADMIN_PASS ){
        isAdmin = true;
        loginSection.classList.add('hidden');
        adminSection.classList.remove('hidden');
        btnShowLogin.classList.add('hidden');
        btnLogout.classList.remove('hidden');
        renderProducts();
    } else {
        document.getElementById('login-error').classList.remove('hidden');
    }

    btnLogout.addEventListener('click', ()=>{
        isAdmin = false;
        adminSection.classList.add('hidden');
        btnLogout.classList.add('hidden');
        btnShowLogin.classList.remove('hidden');
        renderProducts();
    });

    // CRUD PRODUCTOS//

    productsForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const name = document.getElementById('prod-name').value;
        const price = document.getElementById('prod-price').value;
        const img = document.getElementById('prod-img').value;
        const editIndex = document.getElementById('edit-index').value;
        // CREAR   
        if(editIndex === ""){
            products.push(
                {
                    name,
                    price,
                    img
                }
            );
        }else {
            //editar
            products[editIndex]={name, price, img};
            document.getElementById('edit-index').value = "";
        }

        saveAndRender();
        productsForm.reset();
    });

    function deleteProduct(index){
        products.splice(index , 1);
        saveAndRender();
    }

    function editProduct(index){
        const prod = products[index];
        document.getElementById('prod-name').value = prod.name;
        document.getElementById('prod-price').value = prod.price;
        document.getElementById('prod-img').value = prod.img;
        document.getElementById('edit-index').value = index; 
        window.scrollTo(0, 0);
    }

    function saveAndRender(){
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    }

    



});












