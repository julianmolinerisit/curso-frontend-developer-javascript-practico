const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



//Ver si acomodo este con el de abajo como para que se cierren los demas divs cuando abro el carrito.


// function togsleCarritoaside() {
//     const isMobileMenuClosed = mobileMenu.classList.contains('menudesactivar');
//     const isMyOrderClosed = desktopMenu.classList.contains('menudesactivar');
//     if (!isMobileMenuClosed || !isMyorderClosed){ 
//     mobileMenu.classList.toggle(' inactive");
//     desktoplenu.classList.toggle('inactive');
    
//     }
//     aside.classList.toggle('inactive');
//     }







function toggleDesktopMenu() {
    console.log('Click')
    desktopMenu.classList.toggle('menudesactivar');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('menudesactivar');
 
    if (!isAsideClosed){
        aside.classList.add('menudesactivar');
    }

  mobileMenu.classList.toggle('menudesactivar');
}

function toggleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('menudesactivar');
   if (!isMobileMenuClosed){
    mobileMenu.classList.add('menudesactivar');
   }
    aside.classList.toggle('menudesactivar');
}
