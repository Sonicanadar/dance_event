/* ==========================================================================
   STEP 'N' STYLE LOGIC ENGINE: RESPONSIVE INTERACTION PACK - PART 1
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
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    animatedElements.forEach(element => revealObserver.observe(element));

    // --- 4. Interactive Showcase Dynamic Template Engine ---
    const playlistContainer = document.getElementById('playlistDynamicContainer');
    const categoryTabs = document.querySelectorAll('.category-tab');

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
                videoSrc: "videos/video1.mp4",
                poster: "images/soni1.jpg",
                fullDetails: "Get the cousins, aunts, and grandparents dancing in perfect lockstep. Features highly intuitive group spacing transitions that clean up effortlessly on high-def party cameras."
            }
        ],
        birthdays: [
            {
                title: "Sweet 16 Urban Showcase",
                desc: "Slick, cutting-edge commercial hip-hop street routines.",
                videoSrc: "videos/video1.mp4",
                poster: "images/soni1.jpg",
                fullDetails: "Turn up the bass energy with intense, modern rhythmic loops matching chart-topping audio clips. Ideal for teens and dynamic youth birthday events."
            },
            {
                title: "Sweet 1 Urban Showcase",
                desc: "Slick, cutting-edge commercial hip-hop street routines.",
                videoSrc: "videos/video1.mp4",
                poster: "images/soni1.jpg",
                fullDetails: "Turn up the bass energy with intense, modern rhythmic loops matching chart-topping audio clips. Ideal for teens and dynamic youth birthday events."
            }
        ],
        corporate: [
            {
                title: "Gala Keynote Flashmob Opening",
                desc: "morales-boosting hidden choreography launch tracking blocks.",
                videoSrc: "videos/video1.mp4",
                poster: "images/soni1.jpg",
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
            playlistContainer.innerHTML = ''; 
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
                
                card.addEventListener('click', () => {
                    document.querySelectorAll('.video-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    
                    mainPlayer.setAttribute('poster', showreel.poster);
                    mainSource.setAttribute('src', showreel.videoSrc);
                    mainPlayer.load();
                    mainPlayer.play().catch(() => console.log('Autoplay deferred until client trigger'));
                    
                    activeTitle.textContent = showreel.title;
                    activeDescription.textContent = showreel.fullDetails;
                });
                
                playlistContainer.appendChild(card);
            });

            if (dynamicList && dynamicList[0]) {
                mainPlayer.setAttribute('poster', dynamicList[0].poster);
                mainSource.setAttribute('src', dynamicList[0].videoSrc);
                mainPlayer.load();
                activeTitle.textContent = dynamicList[0].title;
                activeDescription.textContent = dynamicList[0].fullDetails;
            }
        }

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                loadSidebarCategoryPlaylist(this.getAttribute('data-category'));
            });
        });

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
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 1. Gather all form inputs dynamically
            const clientName = document.getElementById('fullName').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const eventType = document.getElementById('eventType').value;
            const dancerCount = document.getElementById('dancerCount').value;
            const budgetBracket = document.getElementById('budgetBracket').value;
            const visionDetails = document.getElementById('visionDetails').value || "None provided";

            // 2. Format the message text string for WhatsApp with clear spacing and bold headers
            let waMessage = `✨ *Step 'n' Style Booking Request* ✨\n\n`;
            waMessage += `👤 *Name:* ${clientName}\n`;
            waMessage += `✉️ *Email:* ${emailAddress}\n`;
            waMessage += `📞 *Phone:* ${phoneNumber}\n`;
            waMessage += `💍 *Event Type:* ${eventType}\n`;
            waMessage += `👥 *Dancers:* ${dancerCount}\n`;
            waMessage += `💰 *Budget Package:* ${budgetBracket}\n`;
            waMessage += `📝 *Vision Details:* ${visionDetails}`;

            // 3. Encode the text string so it works safely inside a browser URL path
            const encodedMessage = encodeURIComponent(waMessage);

            // 4. Set target WhatsApp Phone Number (Format: CountryCode + Number, no spaces or + symbols)
            // UPDATE THIS: Replace 919876543210 with your real corporate WhatsApp number
            const whatsappNumber = "918976029973"; 
            const whatsappURL = `https://wa.me/{whatsappNumber}?text=${encodedMessage}`;

            // 5. Inject confirmation copy into the interactive frosted glass layer overlay popup box
            modalMessage.innerHTML = `Brilliant choice, <span class="highlight" style="font-weight:800;">${clientName}</span>!<br><br>Step 'n' Style has generated your performance roadmap profile. Click below to send your details directly via WhatsApp!`;
            
            // 6. Reveal the confirmation layout modal wrapper open on the UI viewport surface layer
            modalOverlay.classList.add('modal-visible');

            // 7. Reconfigure the modal action CTA click target button dynamically to execute redirection routing
            const modalActionBtn = document.getElementById('modalActionBtn');
            if (modalActionBtn) {
                const newActionBtn = modalActionBtn.cloneNode(true);
                newActionBtn.textContent = "Send to WhatsApp 🚀";
                modalActionBtn.parentNode.replaceChild(newActionBtn, modalActionBtn);
                
                newActionBtn.addEventListener('click', () => {
                    window.open(whatsappURL, '_blank');
                    modalOverlay.classList.remove('modal-visible');
                    contactForm.reset();
                });
            }
        });

        // Loop through standard closing canvas click coordinates mechanics (X button, modal overlay background clicks)
        closeModalElements.forEach(element => {
            if (element && element.id !== 'modalActionBtn') {
                element.addEventListener('click', (e) => {
                    if (element === modalOverlay && e.target !== modalOverlay) return;
                    modalOverlay.classList.remove('modal-visible');
                });
            }
        });

        // Keydown listener tracking to wipe display canvas layer panels via Escape keyboard entries natively
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('modal-visible')) {
                modalOverlay.classList.remove('modal-visible');
            }
        });
    }
});
