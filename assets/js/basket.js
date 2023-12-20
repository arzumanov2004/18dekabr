const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML= ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []    
    cart.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
           <div class="classBox">
           <img src="${item.image}" alt="">
           <h5>${item.title}</h5>
           <p>${item.description}</p>
           <button onclick="removeFromCart(${index})">Ad To Cart</button>
           </div>
            `;
            div.appendChild(box)
    });
};
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []    
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getBasket()
};
window.onload = () =>{
    getBasket()
}