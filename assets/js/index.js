const div = document.getElementById("myDiv")
const btn = document.getElementById("btn")


let page = 1
let limit = 3

async function getProducts() {
    let skip = (page - 1) * limit
    try{
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
           <div class="classBox">
           <img src="${item.image}" alt="">
           <h5>${item.title}</h5>
           <p>${item.description}</p>
           <button onclick="adToBasket(${item.id})">Ad To Cart</button>
           </div>
            `;
            div.appendChild(box)

        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    };
};
btn.addEventListener('click',getProducts)

function adToBasket(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []    
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart",JSON.stringify(cart))
}

const inp = document.getElementById('inp')
const axtar = document.getElementById('axtar')
const search = document.getElementById('Search')


function getSearch() {
    div.style.display = 'none'
    // search.style.display = 'block'

    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products`)
        .then(res => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
            console.log(filteredData);
            filteredData.map(item => {
                const box = document.createElement('div')
                box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
                box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            `;
                search.appendChild(box);
            });
        });
};

axtar.addEventListener('click',getSearch)
window.onload = () => {
    getProducts()
}




// window.onload = () =>{
//     getProducts()
// }



