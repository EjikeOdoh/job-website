        // JavaScript to toggle the menu on mobile
        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });

        window.addEventListener('click', (e)=>{
            const mobileMenuOpen = mobileMenu.classList.contains('active')
            console.log(mobileMenuOpen)
            if (!e.target.matches('.menu-toggle')) {
                if (mobileMenu) {
                    mobileMenu.classList.remove("active")
                }
            }

        })

        window.addEventListener('resize', ()=>{
            mobileMenu.classList.remove("active")
        })