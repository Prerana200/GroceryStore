let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

let cart = [];

function addToCart(name, price, imageUrl) {
    
    const item = {
        name: name,
        price: price,
        quantity: 1,
        imageUrl: imageUrl
    };

    const existingItem = cart.find(cartItem => cartItem.name === name);
    if (existingItem) {

        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

   
    updateCartDisplay();
    showNotification();
}


function updateCartDisplay() {
    const cartContainer = document.querySelector('.shopping-cart');
    cartContainer.innerHTML = ''; 

    let total = 0;


    cart.forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('box');
        itemBox.innerHTML = `
            <i class="fa fa-trash" onclick="removeFromCart('${item.name}')"></i>
            <img src="${item.imageUrl}" alt="${item.name}"> 
            <div class="content">
                <h3>${item.name}</h3>
                <span class="price">Rs.${item.price}/-</span>
                <span class="quantity">Qty: ${item.quantity}</span>
            </div>
        `;
        cartContainer.appendChild(itemBox);
        total += item.price * item.quantity;
    });

    const totalBox = document.createElement('div');
    totalBox.classList.add('total');
    totalBox.innerText = `Total: Rs.${total}/-`;
    cartContainer.appendChild(totalBox);

  
    const checkoutButton = document.createElement('a');
    checkoutButton.href = '#';
    checkoutButton.classList.add('btn');
    checkoutButton.innerText = 'Checkout';
    cartContainer.appendChild(checkoutButton);

}




document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        const imageUrl = this.getAttribute('data-image');
        addToCart(name, price, imageUrl);
    });
});


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
	loginForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
}



window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


  var swiper = new Swiper(".product-slider", {
    loop: true, 
    spaceBetween: 20, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });


var swiper = new Swiper(".review-slider", {
    loop: true, // Enable infinite scrolling
    spaceBetween: 20, // Spacing between slides
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

