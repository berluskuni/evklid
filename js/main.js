(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const btnHamburger = document.querySelector('.hamburger');
        const btnClose = document.querySelector('.x-icon');
        const btnSearchOpen = document.querySelector('.btn-search__open');
        const btnSearchLarge = document.querySelector('.btn-search__large');
        const BtnSearchClose = document.querySelector('.close-search');
        const BtnSearchCloseLarge = document.querySelector('.close-large');
        let formSearch = document.querySelector('.form__search');
        let formSearchLarge = document.querySelector('#large');
        let menuMobile = document.querySelector('.mobile');

        function closeForm(e) {
            e.currentTarget.closest('form').classList.remove('form__search--show');
        }
        BtnSearchCloseLarge.addEventListener('click', (e) => {
            e.preventDefault();
            // e.currentTarget.closest('form').classList.remove('form__search--show');
            closeForm(e);
        });
        btnSearchLarge.addEventListener('click', () => {
            formSearchLarge.classList.add('form__search--show');
        })
        btnSearchOpen.addEventListener('click', () => {
            formSearch.classList.add('form__search--show');
        });
        BtnSearchClose.addEventListener('click', (e) => {
            e.preventDefault();
            // e.currentTarget.closest('form').classList.remove('form__search--show');
            closeForm(e);
        })
        btnHamburger.addEventListener('click', () => {
            menuMobile.classList.add('menu__show');
        });
        btnClose.addEventListener('click', () => {
            menuMobile.classList.remove('menu__show');
        })
        const swiper = new Swiper('.swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },

        });
        document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(e) {
                const path = e.currentTarget.dataset.path;
                document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
                    tabsBtn.classList.remove('tabs__btn--active');
                })
                e.currentTarget.classList.add('tabs__btn--active');
                document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
                    tabContent.classList.remove('tab-content-active');

                })
                document.querySelector(`[data-target="${path}"`).classList.add('tab-content-active');
            })
        });
        $('#accordion').accordion({
            heightStyle: "content",
            collapsible: true,
            active: 'none'
        });
        document.querySelectorAll('.ui-accordion-header').forEach(function(svgBtn) {
            svgBtn.addEventListener('click', (e) => {
                document.activeElement.blur();
                e.currentTarget.nextSibling.nextSibling.classList.remove('ui-widget-content');
                const state = e.currentTarget.getAttribute('aria-selected');
                document.querySelectorAll('.ui-accordion-header').forEach(function(elAccordion) {
                    elAccordion.classList.remove('border-none');
                    elAccordion.lastElementChild.classList.remove('btn__svg--transform');
                    elAccordion.classList.remove('border-top');
                })
                if (state === 'true') {
                    e.currentTarget.classList.add('border-none');
                    e.currentTarget.lastElementChild.classList.add('btn__svg--transform');
                    e.currentTarget.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('border-top');
                }
                // console.log(e.currentTarget.nextSibling.nextSibling.nextSibling.nextSibling)
            })
        })
    })

})();
