// Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
       
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
           
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
       
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
            });
        });

        // Form Submission
        // document.getElementById('contactForm').addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you for your message! I will get back to you soon.');
        //     this.reset();
        // });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
               
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
               
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'var(--header-bg)';
            } else {
                header.style.backgroundColor = 'var(--header-bg)';
            }
        });

        // enter by itself
          const elements = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add('show');
                }
            });
            }, {
            threshold: 0.15,
            });

            elements.forEach((element) => {
            observer.observe(element);
            });

        // chat with me with whatsapp
        const YOUR_WHATSAPP_NUMBER = "2348061428633";
       
        document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
           
            const whatsappMessage = `Hello! I'm interested in connecting with you.%0A%0A` +
                                   `*Name:* ${name}%0A` +
                                   `*My Phone:* ${phone}%0A` +
                                   `*Message:*%0A${message}%0A%0A` +
                                   `_Sent from your portfolio website_`;

            const whatsappURL = `https://wa.me/${+2348061428633}?text=${whatsappMessage}`;
          
            window.open(whatsappURL, '_blank');
           
            alert("Thank you for your message! I will get back to you soon.");
            // alert("WhatsApp is opening... Please click the green send button in WhatsApp to complete your message.");
        });

        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0 && !value.startsWith('+')) {
                e.target.value = '+' + value;
            }
        });

          function showImage(img) {
            var modal = document.getElementById("image-modal");
            var modalImg = document.getElementById("modal-image");
            var captionText = document.getElementById("caption");
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;

            var span = document.getElementsByClassName("close")[0];

            span.onclick = function() {
                modal.style.display = "none";
            }
            }