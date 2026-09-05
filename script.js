/* ==========================================================================
   STEP 'N' STYLE LOGIC ENGINE: RESPONSIVE INTERACTION PACK
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Frost Navbar Scale Controls ---
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // --- 2. Responsive Mobile Hamburger Open Controller ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });
    }

    // --- 3. Kinetic Fade-in Intersection Scroll Observer ---
    const animatedElements = document.querySelectorAll(
        '.overview-section, .about-container, .contact-container, .dashboard-container'
    );
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-live');
                observer.unobserve(entry.target); // Stops computing tracking once visible
            }
        });
    }, {
        threshold: 0.15, // Triggers layout switch when 15% visible on frame viewport
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(element => revealObserver.observe(element));

    // --- 4. Interactive Showcase Dynamic Template Engine ---
    // (Only runs if elements are detected directly on the live document layer path)
    const playlistContainer = document.getElementById('playlistDynamicContainer');
    const categoryTabs = document.querySelectorAll('.category-tab');

    // Local variable multi-video mapping playlist object schema arrays
    const playlistDatabase = {
        weddings: [
            {
                title: "Grand Bridal Couple Waltz",
                desc: "An elegant, classic romantic ballroom entryway waltz map.",
                videoSrc: "videos/video1.mp4",
                poster: "images/soni1.jpg",
                fullDetails: "Turn your introductory moment into a timeless stage masterpiece. Our standard wedding waltz packages manage micro-timing edits and rhythm patterns built perfectly for non-professional couples."
            },
            {
                title: "Family Sangeet Fusion Mashup",
                desc: "High-octane block-rocking group performance synchronization routines.",
                videoSrc: "videos/wedding-2.mp4",
                poster: "images/wedding-thumb-2.jpg",
                fullDetails: "Get the cousins, aunts, and grandparents dancing in perfect lockstep. Features highly intuitive group spacing transitions that clean up effortlessly on high-def party cameras."
            }
        ],
        birthdays: [
            {
                title: "Sweet 16 Urban Showcase",
                desc: "Slick, cutting-edge commercial hip-hop street routines.",
                videoSrc: "videos/birthday-1.mp4",
                poster: "images/birthday-thumb-1.jpg",
                fullDetails: "Turn up the bass energy with intense, modern rhythmic loops matching chart-topping audio clips. Ideal for teens and dynamic youth birthday events."
            }
        ],
        corporate: [
            {
                title: "Gala Keynote Flashmob Opening",
                desc: "morales-boosting hidden choreography launch tracking blocks.",
                videoSrc: "videos/corporate-gala.mp4",
                poster: "images/corporate-thumb.jpg",
                fullDetails: "Surprise corporate attendees, push client metrics, and build company value using energetic routines choreographed directly for teams and executive leadership panels."
            }
        ]
    };

    if (playlistContainer && categoryTabs.length > 0) {
        const mainPlayer = document.getElementById('mainVideoPlayer');
        const mainSource = document.getElementById('mainVideoSource');
        const activeTitle = document.getElementById('activeTitle');
        const activeDescription = document.getElementById('activeDescription');
        
        function loadSidebarCategoryPlaylist(categoryKey) {
            playlistContainer.innerHTML = ''; // Wipe panel container inputs out cleanly
            const dynamicList = playlistDatabase[categoryKey];
            
            dynamicList.forEach((showreel, index) => {
                const card = document.createElement('div');
                card.className = `video-card ${index === 0 ? 'active' : ''}`;
                card.innerHTML = `
                    <div class="card-thumb">
                        <img src="${showreel.poster}" alt="${showreel.title}">
                        <span class="duration-badge">Showreel</span>
                    </div>
                    <div class="card-info">
                        <h4>${showreel.title}</h4>
                        <p>${showreel.desc}</p>
                    </div>
                `;
                
                // Clicking triggers reactive data update pipeline variables execution mapping
                card.addEventListener('click', () => {
                    document.querySelectorAll('.video-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    
                    mainPlayer.setAttribute('poster', showreel.poster);
                    mainSource.setAttribute('src', showreel.videoSrc);
                    mainPlayer.load();
                    mainPlayer.play().catch(() => console.log('Autoplay deferred until active client trigger event matches'));
                    
                    activeTitle.textContent = showreel.title;
                    activeDescription.textContent = showreel.fullDetails;
                });
                
                playlistContainer.appendChild(card);
            });

            // Populate active default index 0 state inside primary display theater panel cards natively
            if (dynamicList[0]) {
                mainPlayer.setAttribute('poster', dynamicList[0].poster);
                mainSource.setAttribute('src', dynamicList[0].videoSrc);
                mainPlayer.load();
                activeTitle.textContent = dynamicList[0].title;
                activeDescription.textContent = dynamicList[0].fullDetails;
            }
        }

        // Tab menu click switcher logic blocks
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                loadSidebarCategoryPlaylist(this.getAttribute('data-category'));
            });
        });

        // Initialize display configuration using default category targets
        loadSidebarCategoryPlaylist('weddings');
    }

        // --- 5. Contact Consultation Form Submissions Pipeline ---
    const contactForm = document.getElementById('mainContactForm');
    const modalOverlay = document.getElementById('bookingModalOverlay');
    const modalMessage = document.getElementById('modalDynamicMessage');
    const closeModalElements = [
        document.getElementById('closeModalBtn'),
        document.getElementById('modalActionBtn'),
        modalOverlay
    ];

    if (contactForm && modalOverlay && modalMessage) {
        // Handle standard form submission mapping
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('fullName').value;
            
            // Inject structural user tracking metrics data dynamically into modal content path
            modalMessage.innerHTML = `Brilliant choice, <span class="highlight" style="font-weight:800;">${clientName}</span>!<br><br>Step 'n' Style has safely received your performance roadmap profile requests. Check your email shortly for choreography coordination tracking loops!`;
            
            // Pop the dynamic canvas box layer visual wrapper open
            modalOverlay.classList.add('modal-visible');
            contactForm.reset();
        });

        // Loop through close mechanics triggers safely (X button, CTA button, overlay click)
        closeModalElements.forEach(element => {
            if (element) {
                element.addEventListener('click', (e) => {
                    // If clicking the overlay background wrapper itself, ensure it's not a bubbled child event click
                    if (element === modalOverlay && e.target !== modalOverlay) return;
                    modalOverlay.classList.remove('modal-visible');
                });
            }
        });

        // Keydown listener tracking to clean up display layer panel states via Escape keyboard entry mapping
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('modal-visible')) {
                modalOverlay.classList.remove('modal-visible');
            }
        });
    }

});
