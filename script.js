 const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector(".nav-menu");

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("open");
        });


        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("open");
            });

        });


        window.addEventListener("scroll", () => {

            const header = document.querySelector(".header");

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
