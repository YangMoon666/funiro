window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
    // Клик на поиск

    document.addEventListener('click', documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('header__body_box_search_form_btn')) {
            document.querySelector('.header__body_box_search_form').classList.toggle('_active');
            document.querySelector('.grey_background').classList.toggle('_active');
            document.querySelector('.header').classList.toggle('_scroll_off');
        }else if (targetElement.classList.contains('form_color_box')) {
            document.querySelector('.header__body_box_search_form').classList.toggle('_active');
            document.querySelector('.grey_background').classList.toggle('_active');
            document.querySelector('.header').classList.toggle('_scroll_off');
        }else if (targetElement.classList.contains('form_color')) {
            document.querySelector('.header__body_box_search_form').classList.toggle('_active');
            document.querySelector('.grey_background').classList.toggle('_active');
            document.querySelector('.header').classList.toggle('_scroll_off');
        }else if (!targetElement.closest('.header__body_box_search_form') && document.querySelector('.header__body_box_search_form._active')) {
            document.querySelector('.header__body_box_search_form').classList.remove('_active');
            document.querySelector('.grey_background').classList.remove('_active');
            document.querySelector('.header').classList.remove('_scroll_off');
        }
        if (targetElement.classList.contains('cart__body_show_more_btn') && !document.querySelector('.b4._active')) {
            var key;
            var showBlocks = document.querySelectorAll('.b4');
            for (key of showBlocks) {
                key.classList.toggle('_active');
            }
            var btn = document.querySelector('.cart__body_show_more_btn')
            btn.innerHTML = "Hide More";
            btn.classList.toggle('_active');
        }else if (targetElement.classList.contains('cart__body_show_more_btn') && document.querySelector('.b4._active')) {
            var key2;
            var showBlocks2 = document.querySelectorAll('.b4');
            for (key2 of showBlocks2) {
                key2.classList.toggle('_active');
            }
            showBlocks2[0].classList.remove('_active');
            showBlocks2[1].classList.remove('_active');
            var btn2 = document.querySelector('.cart__body_show_more_btn')
            btn2.innerHTML = "Show More";
            btn2.classList.remove('_active');
        }
        if (targetElement.classList.contains('cart_block__hover_box_btn')) {
            const productId = targetElement.closest('.cart_block').dataset.pid;
            addToCart(targetElement, productId);
        }
        if (targetElement.classList.contains('header__body_box_btn_2') || targetElement.closest('.header__body_box_btn_2')) {
            if (document.querySelector('.btn_2_body_ul_list').children.length > 0) {
                document.querySelector('.header__body_box_btn_2_body').classList.toggle('_active');
                document.querySelector('.header__body_box_btns').classList.toggle('_active_2');
            }
        } else if (!targetElement.closest('.header__body_box_btn_2_body') && !targetElement.classList.contains('cart_block__hover_box_btn')) {
            document.querySelector('.header__body_box_btn_2_body').classList.remove('_active');
            document.querySelector('.header__body_box_btns').classList.remove('_active_2');
        }
        if (targetElement.classList.contains('cart_list__del')) {
            const productId = targetElement.closest('.cart_list__block').dataset.cartPid;
            updateCart(targetElement, productId, false);
        }
        // console.log(e.target.classList[0])
        // if (targetElement.classList.contains('cart_block__hover_box_btn')) {
        //     const productId = targetElement.closest('.cart_block').dataset.pid;
        //     addToCart(targetElement, productId);
        // }
    }
    function addToCart(productButton, productId) {
        if (!productButton.classList.contains('_hold')){
            productButton.classList.contains('_hold');
            productButton.classList.contains('_fly');

        //     const cart = document.querySelector('.header__body_box_btn_2');
        //     const product = document.querySelector(`[data-pid="${productId}"]`);
        //     const productImage = product.querySelector('.cart_block__img');
        //     console.log(productImage);

        //     const productImageFly = productImage.cloneNode(true);
        //     console.log(productImageFly);

        //     const productImageFlyWidth = productImage.offsetWidth;
        //     const productImageFlyHeight = productImage.offsetHeight;
        //     console.log(productImageFlyWidth, productImageFlyHeight);
        //     const productImageFlyTop = productImage.getBoundingClientRect().top;
        //     const productImageFlyLeft = productImage.getBoundingClientRect().left;

        //     productImageFly.setAttribute('class', 'flyImage');
        //     productImageFly.style.cssText = 
        //     `left: ${productImageFlyLeft}px;
        //     top: ${productImageFlyTop}px;
        //     width: ${productImageFlyWidth}px;
        //     height: ${productImageFlyHeight}px;
        //     `;
            
        //     document.body.append(productImageFly);

        //     const cartFlyLeft = cart.getBoundingClientRect().left;
        //     const cartFlyTop = cart.getBoundingClientRect().top;

        //     productImageFly.style.cssText = 
        //         `
        //     left: ${cartFlyLeft}px;
        //     top: ${cartFlyTop}px;
        //     width: 0px;
        //     height: 0px;
        //     opacity: 0;
        // `;
            
        //     productImageFly.addEventListener('transitionend', function () {
        //         if (productButton.classList.contains('_fly')) {
        //             productImageFly.remove();
                    updateCart(productButton, productId);
                    productButton.classList.remove('_fly');
        //         }
        //     });


        }
    }

    function updateCart(productButton, productId, productAdd = true) {
        const cart = document.querySelector('.header__body_box_btn_2_body');
        const cartIcon = document.querySelector('.header__body_box_btn_2');
        const cartQuantity = cartIcon.querySelector('span');
        const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
        const cartList = document.querySelector('.btn_2_body_ul_list');

        if (productAdd) {
            if (cartQuantity) {
                cartQuantity.innerHTML = ++cartQuantity.innerHTML;
            } else {
                cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
            }
            if (!cartProduct) {
                const product = document.querySelector(`[data-pid="${productId}"]`);
                const cartProductImage = product.querySelector('.cart_block__img').innerHTML;
                const cartProductTitle = product.querySelector('.cart_block__contant_title').innerHTML;
                const cartProductContent = `
                <a href="#" onclick="event.preventDefault()" class="cart_list__img _ibg">${cartProductImage}</a>
                <div class="cart_list__box">
                    <a href="#" onclick="event.preventDefault()" class="cart_list__title">${cartProductTitle}</a>
                    <div class="cart_list__q">Quantity: <span>1</span></div>
                    <a href="#" onclick="event.preventDefault()" class="cart_list__del">Delete</a>
                </div>`;
                cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart_list__block">${cartProductContent}</li>`);
            } else {
                const cartProductQuantity = cartProduct.querySelector('.cart_list__q span');
                cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
            }
            productButton.classList.remove('_hold');
        } else {
            console.log('error')
            const cartProductQuantity = cartProduct.querySelector('.cart_list__q span');
            cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
            if (!parseInt(cartProductQuantity.innerHTML)) {
                cartProduct.remove()
            }
            const cartQuantityValue = --cartQuantity.innerHTML;
            if (cartQuantityValue) {
                cartQuantity.innerHTML = cartQuantityValue;
            } else {
                cartQuantity.remove();
                cart.classList.remove('_active');
            }
        }

    }

    // Попап
    let menuArrows = document.querySelectorAll('.page__popup_title_img');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }


    // Меню
    const iconMenu = document.querySelector('.header__burger');
    const menuBody = document.querySelector('.navbar');
    const favBody = document.querySelector('.header__body_box_btns');
    const head = document.querySelector('.header');
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            favBody.classList.toggle('_active');
            head.classList.toggle('_scroll_off_2');
        });
    }

    // шапка фиксация
    const headerElement = document.querySelector('.header');

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    }
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);

    // Слайдер
    const owl = $('.owl-carousel.owl-carousel_page');
    owl.owlCarousel({
            center: true,
            loop: true,
            startPosition: 1,
            margin: 32,
            items: 1,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
    });
    
    $('.prev.owl-carousel_page').click(function() {
        $('.owl-carousel.owl-carousel_page').trigger('prev.owl.carousel');
    })
    
    $('.next.owl-carousel_page').click(function() {
        $('.owl-carousel.owl-carousel_page').trigger('next.owl.carousel');
    })

    const owl2 = $('.owl-carousel.owl-carousel_inspiration');
    owl2.owlCarousel({
            center: true,
            loop: false,
            startPosition: 0,
            margin: 24,
            items: 3,
            autoWidth: true,
    });
    $('.next.owl-carousel_inspiration').click(function() {
        $('.owl-carousel.owl-carousel_inspiration').trigger('next.owl.carousel');
    })
}

function ChangeUpActive(e) {
    var val = document.querySelectorAll("." + e);
    var key;
    for (key of val) {
        key.classList.toggle("_active");
    }
}



function ChangeOver(e) {
    var a = document.querySelectorAll('.' + e);
    var key;
    for (key of a) {
        key.classList.add('_hover');
    }
}
    
function ChangeOut(e) {   
    var a = document.querySelectorAll('.' + e);
    var key;
    for (key of a) {
        key.classList.remove('_hover');
    }
}





new Swiper('.inspiration__body_box_slider', {
    observer: true,
    loop: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 800,
    watchOverflow: false,
    autoplay: true,
    preLoadImage: false,
    parallax: true,
    grabCursor: true,

    pagination: {
        el: '.inspiration_dotts',
        clickable: true,
    },

    navigation: {
        nextEl: '.inspiration_btns .inspiration_next_btn.swiper-button-next',
        prevEl: '.inspiration_btns .inspiration_prev_btn.swiper-button-prev'
    }
});




new Swiper('.tips__body_box_slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 800,
    loop: true,
    watchOverflow: false,

    pagination: {
        el: '.tips_dotts',
        clickable: true,
    },

    navigation: {
        nextEl: '.tips_btns .tips_next_btn.swiper-button-next',
        prevEl: '.tips_btns .tips_prev_btn.swiper-button-prev'
    },
    breakpoints: {
        480: {
            spaceBetween: 16,
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 24,
            slidesPerView: 3,
        },
        992: {
            spaceBetween: 32,
            slidesPerView: 3,

        }
    }
});