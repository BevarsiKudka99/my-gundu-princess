// ============================================
// DATA STRUCTURE - EASILY CUSTOMIZABLE
// ============================================

// HARDCODED CREDENTIALS - EDIT THESE TO CHANGE LOGIN
const VALID_CREDENTIALS = {
    username: 'aa',
    password: 'aa'
};

const galleryData = {
    us: {
        name: 'A journey of love and laughter',
        emoji: '💑',
        video: 'videosUs/memories.mp4',
        videoPoster: 'videosUs/poster.png',
        videoTitle: '',
        description: 'A journey of love, laughter, and unforgettable memories. Every moment we share together tells a story worth remembering forever.',
        rating: 'U/A 18+',
        rank: '#1 in Memories Today',
        year: '2025',
        duration: 'Ongoing',
        warnings: 'love, laughter, lots of hugs',
        cast: 'Gundu, Teddy, and every moment in between',
        genres: 'Romance, Adventure, Heartwarming',
        tags: 'Romantic, Beautiful, Unforgettable',
        sections: [
            {
                title: 'First 3 Months',
                id: '3',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'At the Coffee Shop' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Getting to Know You' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Beautiful Smile' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'First Photo Together' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Sunset Walk' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Dinner Together' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Candid Shot' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Dancing' },
                ]
            },
            {
                title: 'First 6 Months',
                id: '6',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Beach Day' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Sunset' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Beach Walk' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Restaurant Night' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Cozy Dinner' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Anniversary' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Party Night' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Home Date' },
                ]
            },
            {
                title: 'First 9 Months',
                id: '9',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Peak View' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Hiking Together' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Breathtaking' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'City Lights' },
                    { id: 5, src: 'imagesUs/memories2.jpeg', title: 'Street Photography' },
                    { id: 6, src: 'imagesUs/memories3.jpeg', title: 'Festival Fun' },
                    { id: 7, src: 'imagesUs/memories1.jpeg', title: 'Celebration' },
                    { id: 8, src: 'imagesUs/memories2.jpeg', title: 'Morning Coffee' },
                ]
            },
            {
                title: 'First Year',
                id: '12',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'First Year' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Anniversary' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Special Day' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Foreign Land' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Adventure' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Exploration' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Formal Portrait' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Candid Shot' },
                ]
            }
        ],
        eventSections: [
            {
                title: 'OIA',
                id: 'oia',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'OIA Memory 1' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'OIA Memory 2' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'OIA Memory 3' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'OIA Memory 4' },
                ]
            },
            {
                title: 'Cute Date',
                id: 'cute_date',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Cute Date 1' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Cute Date 2' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Cute Date 3' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Cute Date 4' },
                ]
            },
            {
                title: 'Sensitive',
                id: 'sensitive',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Sensitive 1' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Sensitive 2' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Sensitive 3' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Sensitive 4' },
                ]
            },
            {
                title: 'Birthday',
                id: 'birthday',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Birthday 1' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Birthday 2' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Birthday 3' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Birthday 4' },
                ]
            }
        ]
    },
    me: {
        name: 'Me',
        emoji: '👤',
        video: 'videosMe/memories.mp4',
        videoPoster: 'videosMe/poster.png',
        videoTitle: '',
        description: 'A personal collection of cherished memories, adventures, and the moments that define who I am.',
        rating: 'U/A 18+',
        rank: '#1 in My World',
        year: '2005',
        duration: 'A Lifetime',
        warnings: 'joy, adventure, good vibes',
        cast: 'Me, myself, and the ones I love',
        genres: 'Biography, Adventure, Feel-Good',
        tags: 'Inspiring, Joyful, Personal',
        sections: [
            {
                title: 'Me',
                id: 'me',
                items: [
                    { id: 1, src: 'imagesMe/memories1.jpeg', title: 'Solo Shot 1' },
                    { id: 2, src: 'imagesMe/memories2.jpeg', title: 'Solo Shot 2' },
                    { id: 3, src: 'imagesMe/memories3.jpeg', title: 'Solo Shot 3' },
                    { id: 4, src: 'imagesMe/memories4.jpeg', title: 'Solo Shot 4' },
                ]
            },
            {
                title: 'Familia',
                id: 'familia',
                items: [
                    { id: 1, src: 'imagesMe/memories1.jpeg', title: 'Family 1' },
                    { id: 2, src: 'imagesMe/memories2.jpeg', title: 'Family 2' },
                    { id: 3, src: 'imagesMe/memories3.jpeg', title: 'Family 3' },
                    { id: 4, src: 'imagesMe/memories4.jpeg', title: 'Family 4' },
                ]
            },
            {
                title: 'Teddy',
                id: 'teddy',
                items: [
                    { id: 1, src: '', title: 'Gundu and Teddy', isRedirect: true, redirectProfile: 'us', redirectSection: 'teddy' }
                ]
            }
        ]
    }
};

// ============================================
// DOM ELEMENTS
// ============================================
const loadingScreen = document.getElementById('loadingScreen');
const authScreen = document.getElementById('authScreen');
const loadingSignInBtn = document.getElementById('loadingSignInBtn');
const profileScreen = document.getElementById('profileScreen');
const mainContent = document.getElementById('mainContent');
const profileCards = document.querySelectorAll('.profile-card');
const heroBgImage = document.getElementById('heroBgImage');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroRank = document.getElementById('heroRank');
const heroRating = document.getElementById('heroRating');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');
const contentArea = document.getElementById('contentArea');
const sectionButtons = document.getElementById('sectionButtons');
const imageViewer = document.getElementById('imageModal');
const viewerImage = document.getElementById('viewerImage');
const viewerCaption = document.getElementById('viewerCaption');
const viewerCounter = document.getElementById('viewerCounter');
const viewerBackBtn = document.querySelector('.viewer-back-btn');
const viewerPrevBtn = document.querySelector('.viewer-prev-btn');
const viewerNextBtn = document.querySelector('.viewer-next-btn');
const profilesBtn = document.getElementById('profilesBtn');
const profileDropdown = document.getElementById('profileDropdown');
const profileDropdownItems = document.querySelectorAll('.profile-dropdown-item');
const profileSelectorImg = document.getElementById('profileSelectorImg');
const viewToggleBtns = document.querySelectorAll('.view-btn');

// Auth elements
const authForm = document.getElementById('authForm');
const usernameInput = document.getElementById('username');
const authError = document.getElementById('authError');

// ============================================
// STATE MANAGEMENT
// ============================================
let currentProfile = null;
let currentView = 'events';  // 'date' or 'events' - DEFAULT SET TO EVENTS
let currentVideoSrc = '';    // Tracks the video src for the current profile
let allItemsFlat = [];  // Flat array of all items for viewer navigation
let currentViewerIndex = -1;
let currentViewerSectionId = null;
const itemsPerPage = 4;  // Items to show before "More+" button
const sectionPaginationState = {};  // Track pagination for each section

// ============================================
// SESSION MANAGEMENT (localStorage)
// ============================================
const SESSION_KEY = 'gallery_session';

function saveSession() {
    const session = {
        isAuthenticated: true,
        profile: currentProfile,
        view: currentView,
        timestamp: Date.now()
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function loadSession() {
    const sessionData = sessionStorage.getItem(SESSION_KEY);
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            return session;
        } catch (e) {
            console.log('Session data corrupted, starting fresh');
            return null;
        }
    }
    return null;
}

function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
}

function restoreSession() {
    try {
        const session = loadSession();
        console.log('📦 Loaded session data:', session);
        
        if (session && session.isAuthenticated && session.profile) {
            console.log('🔄 Attempting to restore session...');
            
            // Skip the loading and auth screens, go straight to profile
            loadingScreen.classList.add('hidden');
            authScreen.classList.add('hidden');
            profileScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Restore profile and view
            currentProfile = session.profile;
            currentView = session.view || 'events';
            
            // Load the profile content
            console.log('📂 Loading profile:', session.profile);
            loadProfile(session.profile);
            updateProfileSelectorImage(session.profile);
            setupNavbarScroll();
            
            console.log('✅ Session restored successfully! Profile =', session.profile, 'View =', session.view);
            return true;
        }
        console.log('⚠️ No valid session found. Showing login screen.');
        return false;
    } catch (error) {
        console.error('❌ Error restoring session:', error);
        return false;
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Loading Screen Sign In Button
loadingSignInBtn.addEventListener('click', () => {
    loadingScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        authScreen.classList.remove('hidden');
    }, 300);
});

// Auth Form Submission
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAuthentication();
});

// Profile Card Selection
profileCards.forEach(card => {
    card.addEventListener('click', () => {
        const profile = card.getAttribute('data-profile');
        selectProfile(profile);
    });
});

// View Toggle (Date vs Events)
viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        switchView(view);
    });
});

// Hero Play button — open fullscreen modal
heroPlayBtn.addEventListener('click', () => {
    openFullscreenVideo();
});

// Hero Info button — open More Info modal
heroInfoBtn.addEventListener('click', () => {
    openMoreInfoModal();
});

// More Info Modal
const moreInfoModal = document.getElementById('moreInfoModal');
const moreInfoCloseBtn = document.getElementById('moreInfoCloseBtn');
const moreInfoPlayBtn = document.getElementById('moreInfoPlayBtn');

moreInfoCloseBtn.addEventListener('click', closeMoreInfoModal);
moreInfoModal.addEventListener('click', (e) => {
    if (e.target === moreInfoModal) closeMoreInfoModal();
});
moreInfoPlayBtn.addEventListener('click', () => {
    closeMoreInfoModal();
    openFullscreenVideo();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !moreInfoModal.classList.contains('hidden')) {
        closeMoreInfoModal();
    }
});

function openMoreInfoModal() {
    const profile = galleryData[currentProfile];
    if (!profile) return;
    document.getElementById('moreInfoHeroImg').style.backgroundImage = profile.videoPoster ? `url('${profile.videoPoster}')` : 'none';
    document.getElementById('moreInfoTitle').textContent = profile.videoTitle;
    document.getElementById('moreInfoYear').textContent = profile.year || '';
    document.getElementById('moreInfoDuration').textContent = profile.duration || '';
    document.getElementById('moreInfoRating').textContent = profile.rating || '';
    document.getElementById('moreInfoWarnings').textContent = profile.warnings || '';
    document.getElementById('moreInfoRank').textContent = profile.rank || '';
    document.getElementById('moreInfoDescription').textContent = profile.description || '';
    document.getElementById('moreInfoCast').textContent = profile.cast || '';
    document.getElementById('moreInfoGenres').textContent = profile.genres || '';
    document.getElementById('moreInfoTags').textContent = profile.tags || '';
    moreInfoModal.classList.remove('hidden');
    updateBodyOverflow();
}

function closeMoreInfoModal() {
    moreInfoModal.classList.add('hidden');
    updateBodyOverflow();
}

// Profiles Button - Toggle Profile Dropdown
profilesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('hidden');
});

// Profile Dropdown Item Selection
profileDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const profileKey = item.dataset.profile;
        selectProfile(profileKey);
        profileDropdown.classList.add('hidden');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.profile-selector-wrapper')) {
        profileDropdown.classList.add('hidden');
    }
});

// Navbar scroll effect - make gradient appear on scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    function updateNavbarOnScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    updateNavbarOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', updateNavbarOnScroll);
}

// Image Viewer Navigation
viewerBackBtn.addEventListener('click', closeImageViewer);
viewerPrevBtn.addEventListener('click', showPrevImage);
viewerNextBtn.addEventListener('click', showNextImage);

// Close viewer with Escape key / Arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!imageViewer.classList.contains('hidden')) {
            closeImageViewer();
        }
    }
    if (e.key === 'ArrowLeft') {
        if (!imageViewer.classList.contains('hidden')) {
            showPrevImage();
        }
    }
    if (e.key === 'ArrowRight') {
        if (!imageViewer.classList.contains('hidden')) {
            showNextImage();
        }
    }
});

// ============================================
// FUNCTIONS
// ============================================

/**
 * Handle authentication
 */
function handleAuthentication() {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = document.getElementById('password').value.trim();
    
    // Validate both username AND password
    if (enteredUsername === VALID_CREDENTIALS.username && 
        enteredPassword === VALID_CREDENTIALS.password) {
        // Credentials correct - proceed to profile screen
        authError.textContent = '';
        // Save auth state to localStorage
        saveSession();
        proceedToProfiles();
    } else {
        // Credentials incorrect - show error
        authError.textContent = 'Invalid username or password';
        usernameInput.value = '';
        document.getElementById('password').value = '';
        usernameInput.focus();
    }
}

/**
 * Transition from auth screen to profile screen
 */
function proceedToProfiles() {
    // Hide auth screen and show profile screen
    authScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    
    setTimeout(() => {
        authScreen.classList.add('hidden');
        profileScreen.classList.remove('hidden');
    }, 300);
}

/**
 * Select a profile and load its content
 */
function selectProfile(profileKey) {
    currentProfile = profileKey;
    // Save profile selection to localStorage
    saveSession();

    // Hide profile screen and show main content with animation
    profileScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    
    setTimeout(() => {
        profileScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        loadProfile(profileKey);
        updateProfileSelectorImage(profileKey);
        setupNavbarScroll();
    }, 300);
}

/**
 * Update the profile image in the navbar selector
 */
function updateProfileSelectorImage(profileKey) {
    const profileImages = {
        'me': 'Logos/profileMe.jpg',
        'us': 'Logos/profileUs.jpg'
    };
    profileSelectorImg.src = profileImages[profileKey];
}

/**
 * Load profile content
 */
function loadProfile(profileKey) {
    const profile = galleryData[profileKey];

    // Update hero banner
    currentVideoSrc = profile.video;
    heroBgImage.style.backgroundImage = profile.videoPoster ? `url('${profile.videoPoster}')` : 'none';
    heroTitle.textContent = profile.videoTitle;
    heroDescription.textContent = profile.description || '';
    heroRank.textContent = profile.rank || '#1 in Memories Today';
    heroRating.textContent = profile.rating || 'U/A 18+';

    // Scroll to top
    window.scrollTo(0, 0);

    // Determine which sections to use based on currentView
    let sectionsToUse = profile.sections;
    if (currentView === 'events' && profile.eventSections) {
        sectionsToUse = profile.eventSections;
    }

    // Build flat array for image viewer navigation (only for item-based sections)
    allItemsFlat = [];
    sectionsToUse.forEach(section => {
        // Handle item-based sections (Me profile)
        if (section.items && Array.isArray(section.items)) {
            section.items.forEach(item => {
                // Skip redirect items (they don't have images)
                if (!item.isRedirect) {
                    allItemsFlat.push({
                        ...item,
                        sectionId: section.id,
                        sectionTitle: section.title
                    });
                }
            });
        }
        // Handle folder-based sections (Us profile)
        else if (section.folders && Array.isArray(section.folders)) {
            section.folders.forEach(folder => {
                folder.images.forEach(image => {
                    allItemsFlat.push({
                        ...image,
                        folderId: folder.id,
                        folderTitle: folder.title,
                        sectionId: section.id,
                        sectionTitle: section.title
                    });
                });
            });
        }
    });

    // Show/hide view toggle section - only show for Us profile
    const viewToggleSection = document.querySelector('.view-toggle-section');
    if (viewToggleSection) {
        if (profileKey === 'us') {
            viewToggleSection.style.display = 'flex';
        } else {
            viewToggleSection.style.display = 'none';
        }
    }

    // Render all sections
    renderSections(profile);
}

/**
 * Render all sections for the profile
 */
function renderSections(profile) {
    // Determine which sections to use based on currentView
    let sectionsToRender = profile.sections;
    if (currentView === 'events' && profile.eventSections) {
        sectionsToRender = profile.eventSections;
    }

    // Clear and render section buttons in navbar
    sectionButtons.innerHTML = '';
    sectionsToRender.forEach((section) => {
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        btn.textContent = section.title;
        btn.setAttribute('data-section-id', section.id);
        
        btn.addEventListener('click', () => {
            scrollToSection(section.id);
        });
        
        sectionButtons.appendChild(btn);
    });
    
    // Clear content area
    contentArea.innerHTML = '';
    
    // Initialize pagination state
    sectionsToRender.forEach(section => {
        sectionPaginationState[section.id] = 0;  // Start at page 0
    });

    // Render sections with pagination
    sectionsToRender.forEach((section, sectionIndex) => {
        renderSection(section, sectionIndex);
    });
}

/**
 * Render a single section with pagination
 */
function renderSection(section, sectionIndex) {
    const contentRow = document.createElement('div');
    contentRow.className = 'content-row';
    contentRow.setAttribute('data-section-id', section.id);
    contentRow.innerHTML = `
        <div class="row-title">${section.title}</div>
        <div class="scroll-nav-container">
            <button class="nav-arrow nav-arrow-left hidden" data-section-id="${section.id}">❮</button>
            <div class="scroll-container" data-section-id="${section.id}"></div>
            <button class="nav-arrow nav-arrow-right hidden" data-section-id="${section.id}">❯</button>
        </div>
    `;

    const scrollContainer = contentRow.querySelector('.scroll-container');
    const navArrowLeft = contentRow.querySelector('.nav-arrow-left');
    const navArrowRight = contentRow.querySelector('.nav-arrow-right');
    
    // Render items (now all sections use items)
    const pageIndex = sectionPaginationState[section.id] || 0;
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', section.id);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        // Check if this is a redirect button item
        if (item.isRedirect) {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper" style="display: flex; align-items: center; justify-content: center; background: rgba(229, 9, 20, 0.2); border: 2px solid #e50914; cursor: pointer;">
                    <button class="redirect-button" style="background: #e50914; color: white; border: none; padding: 20px 30px; font-size: 16px; font-weight: bold; border-radius: 4px; cursor: pointer; transition: all 0.3s ease;">
                        Click here to go to Gundu and Teddy section
                    </button>
                </div>
                <div class="gallery-item-title" style="text-align: center; margin-top: 10px;">Gundu and Teddy</div>
            `;
            
            galleryItem.addEventListener('click', () => {
                selectProfile(item.redirectProfile);
            });
        } else {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${item.src}" alt="${item.title}">
                    ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">→</div>' : ''}
                </div>
                <div class="gallery-item-title">${item.title}</div>
            `;

            galleryItem.addEventListener('click', () => {
                // If last item and has more items - load more
                if (isLastItem && hasMoreItems) {
                    loadMoreItems(section.id);
                } else {
                    // Otherwise open image viewer
                    openImageViewer(flatIndex);
                }
            });
        }

        scrollContainer.appendChild(galleryItem);
    });

    // Setup left/right navigation arrow click handlers
    navArrowLeft.addEventListener('click', () => {
        scrollPaginationLeft(section.id);
    });
    
    navArrowRight.addEventListener('click', () => {
        scrollPaginationRight(section.id);
    });

    contentArea.appendChild(contentRow);
}

/**
 * Load more items for a section (pagination)
 */
function loadMoreItems(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Increment page
    sectionPaginationState[sectionId]++;
    
    // Get the scroll container
    const scrollContainer = document.querySelector(`.scroll-container[data-section-id="${sectionId}"]`);
    const navArrowLeft = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-left`);
    const navArrowRight = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-right`);
    if (!scrollContainer) return;
    
    // Get next batch of items
    const pageIndex = sectionPaginationState[sectionId];
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    // Remove old items (to replace with new batch)
    scrollContainer.querySelectorAll('.gallery-item').forEach(item => item.remove());
    
    // Add new items with slide animation
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', sectionId);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        galleryItem.innerHTML = `
            <div class="gallery-image-wrapper">
                <img src="${item.src}" alt="${item.title}">
                ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">→</div>' : ''}
            </div>
            <div class="gallery-item-title">${item.title}</div>
        `;

        galleryItem.addEventListener('click', () => {
            // If last item and has more items, and clicking the arrow area - load more
            if (isLastItem && hasMoreItems) {
                loadMoreItems(sectionId);
            } else {
                // Otherwise open image viewer
                openImageViewer(flatIndex);
            }
        });

        scrollContainer.appendChild(galleryItem);
    });
    
    // Show navigation arrows if we've paginated (not on page 0)
    if (pageIndex > 0) {
        navArrowLeft.classList.remove('hidden');
        navArrowRight.classList.remove('hidden');
    }
    
    // Scroll to show new items smoothly
    setTimeout(() => {
        scrollContainer.scrollLeft = 0;  // Reset scroll to show from beginning
    }, 50);
}

/**
 * Scroll pagination left (previous batch)
 */
function scrollPaginationLeft(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Decrement page if not at first page
    if (sectionPaginationState[sectionId] > 0) {
        sectionPaginationState[sectionId]--;
        renderPaginationBatch(sectionId);
        
        // Hide arrows if we're back at page 0
        if (sectionPaginationState[sectionId] === 0) {
            const navArrowLeft = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-left`);
            const navArrowRight = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-right`);
            navArrowLeft.classList.add('hidden');
            navArrowRight.classList.add('hidden');
        }
    }
}

/**
 * Scroll pagination right (next batch)
 */
function scrollPaginationRight(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Increment page if there are more items
    const pageIndex = sectionPaginationState[sectionId];
    const endIndex = (pageIndex + 1) * itemsPerPage;
    
    if (endIndex < section.items.length) {
        sectionPaginationState[sectionId]++;
        renderPaginationBatch(sectionId);
    }
}

/**
 * Render a pagination batch of items
 */
function renderPaginationBatch(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    const scrollContainer = document.querySelector(`.scroll-container[data-section-id="${sectionId}"]`);
    if (!scrollContainer) return;
    
    // Get items for current page
    const pageIndex = sectionPaginationState[sectionId];
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    // Clear and render new batch
    scrollContainer.innerHTML = '';
    
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', sectionId);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        // Check if this is a redirect button item
        if (item.isRedirect) {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper" style="display: flex; align-items: center; justify-content: center; background: rgba(229, 9, 20, 0.2); border: 2px solid #e50914; cursor: pointer;">
                    <button class="redirect-button" style="background: #e50914; color: white; border: none; padding: 20px 30px; font-size: 16px; font-weight: bold; border-radius: 4px; cursor: pointer; transition: all 0.3s ease;">
                        Click here to go to Gundu and Teddy section
                    </button>
                </div>
                <div class="gallery-item-title" style="text-align: center; margin-top: 10px;">Gundu and Teddy</div>
            `;
            
            galleryItem.addEventListener('click', () => {
                selectProfile(item.redirectProfile);
            });
        } else {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${item.src}" alt="${item.title}">
                    ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">→</div>' : ''}
                </div>
                <div class="gallery-item-title">${item.title}</div>
            `;

            galleryItem.addEventListener('click', () => {
                // If last item and has more items - load more
                if (isLastItem && hasMoreItems) {
                    loadMoreItems(sectionId);
                } else {
                    // Otherwise open image viewer
                    openImageViewer(flatIndex);
                }
            });
        }

        scrollContainer.appendChild(galleryItem);
    });
}

/**
 * Scroll to a specific section
 */
function scrollToSection(sectionId) {
    const contentRow = document.querySelector(`.content-row[data-section-id="${sectionId}"]`);
    if (contentRow) {
        contentRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Open image viewer
 */
function openImageViewer(index) {
    currentViewerIndex = index;
    const item = allItemsFlat[index];
    currentViewerSectionId = item.sectionId;
    updateViewerImage();
    imageViewer.classList.remove('hidden');
    updateBodyOverflow();
}

/**
 * Update viewer image
 */
function updateViewerImage() {
    const item = allItemsFlat[currentViewerIndex];
    viewerImage.src = item.src;
    viewerCaption.textContent = item.title;
    viewerCounter.textContent = `${currentViewerIndex + 1} / ${allItemsFlat.length}`;
    // Update cinematic blurred background
    const bgBlur = document.getElementById('viewerBgBlur');
    if (bgBlur) bgBlur.style.backgroundImage = `url('${item.src}')`;
}

/**
 * Show next image
 */
function showNextImage() {
    if (currentViewerIndex < allItemsFlat.length - 1) {
        currentViewerIndex++;
        updateViewerImage();
    }
}

/**
 * Show previous image
 */
function showPrevImage() {
    if (currentViewerIndex > 0) {
        currentViewerIndex--;
        updateViewerImage();
    }
}

/**
 * Close image viewer
 */
function closeImageViewer() {
    imageViewer.classList.add('hidden');
    currentViewerIndex = -1;
    currentViewerSectionId = null;
    updateBodyOverflow();
}

/**
 * Folder Modal Functions
 */

/**
 * Manage body overflow based on open modals
 * Prevents scrollbar from appearing/disappearing which causes layout shift and flicker
 * Uses requestAnimationFrame to prevent layout thrashing
 */
function updateBodyOverflow() {
    requestAnimationFrame(() => {
        const hasOpenModals = 
            !imageViewer.classList.contains('hidden') ||
            !moreInfoModal.classList.contains('hidden') ||
            !fullscreenModal.classList.contains('hidden');
        
        if (hasOpenModals) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

/**
 * Switch between Date and Events views
 */
function switchView(view) {
    if (view === currentView) return; // Already on this view
    
    currentView = view;
    
    // Save view preference to localStorage
    saveSession();
    
    // Update button states
    viewToggleBtns.forEach(btn => {
        if (btn.getAttribute('data-view') === view) {
            btn.classList.add('view-btn-active');
        } else {
            btn.classList.remove('view-btn-active');
        }
    });
    
    // Reload profile with new view
    if (currentProfile) {
        loadProfile(currentProfile);
    }
}

/**
 * Back to profiles
 */
function backToProfiles() {
    mainContent.classList.add('hidden');
    profileScreen.classList.remove('hidden');
    profileScreen.style.animation = 'none';
    currentProfile = null;
    currentView = 'events';  // Reset to default view (EVENTS)
    allItemsFlat = [];
    currentViewerIndex = -1;
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {
    try {
        console.log('🎬 Premium Netflix-style Gallery loaded successfully!');
        console.log('💾 Checking for saved session in localStorage...');
        
        // Try to restore session from localStorage
        const sessionRestored = restoreSession();
        
        if (!sessionRestored) {
            // No valid session, show loading screen
            console.log('👤 No session found - showing login screen');
            loadingScreen.classList.remove('hidden');
        }
    } catch (error) {
        console.error('❌ Error during initialization:', error);
        loadingScreen.classList.remove('hidden');
    }
});

// Add logout functionality (optional - call clearSession() when user signs out)
function logout() {
    clearSession();
    location.reload();
}

// ============================================
// FULLSCREEN VIDEO FUNCTIONALITY
// ============================================
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenVideo = document.getElementById('fullscreenVideo');
const fullscreenProgress = document.getElementById('fullscreenProgress');
const playPauseBtn = document.getElementById('playPauseBtn');
const fullscreenExitBtn = document.getElementById('fullscreenExitBtn');
const fullscreenBackBtn = document.getElementById('fullscreenBackBtn');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function closeFullscreenVideo() {
    fullscreenModal.classList.add('hidden');
    fullscreenVideo.pause();
    fullscreenVideo.src = '';
    updateBodyOverflow();
}

// Open fullscreen video
function openFullscreenVideo() {
    fullscreenModal.classList.remove('hidden');
    fullscreenVideo.src = currentVideoSrc;
    fullscreenVideo.currentTime = 0;
    updateBodyOverflow();

    fullscreenVideo.play().catch(err => {
        console.log('Play error:', err);
    });

    setTimeout(() => {
        updatePlayPauseIcon();
        updateTimeDisplay();
    }, 100);
}

// Back button (top-left)
fullscreenBackBtn.addEventListener('click', closeFullscreenVideo);

// Exit fullscreen (bottom-right icon)
fullscreenExitBtn.addEventListener('click', closeFullscreenVideo);

// Play/Pause button in fullscreen
playPauseBtn.addEventListener('click', () => {
    if (fullscreenVideo.paused) {
        fullscreenVideo.play();
        updatePlayPauseIcon();
    } else {
        fullscreenVideo.pause();
        updatePlayPauseIcon();
    }
});

// Update play/pause icon
function updatePlayPauseIcon() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon1 = document.getElementById('pauseIcon-1');
    const pauseIcon2 = document.getElementById('pauseIcon-2');
    
    if (fullscreenVideo.paused) {
        playIcon.style.display = 'block';
        pauseIcon1.style.display = 'none';
        pauseIcon2.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon1.style.display = 'block';
        pauseIcon2.style.display = 'block';
    }
}

// Update fullscreen progress bar
fullscreenVideo.addEventListener('timeupdate', () => {
    const progress = (fullscreenVideo.currentTime / fullscreenVideo.duration) * 100;
    fullscreenProgress.value = progress || 0;
    updateTimeDisplay();
});

// Fullscreen progress bar input
fullscreenProgress.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * fullscreenVideo.duration;
    fullscreenVideo.currentTime = time;
    fullscreenVideo.play().catch(err => {
        console.log('Play after seek not available');
    });
});

// Update time display
function updateTimeDisplay() {
    const current = formatTime(fullscreenVideo.currentTime);
    const duration = formatTime(fullscreenVideo.duration);
    currentTimeDisplay.textContent = current;
    durationDisplay.textContent = duration;
}

// Update duration display when video loads
function updateDurationDisplay() {
    fullscreenVideo.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(fullscreenVideo.duration);
    }, { once: true });
}

// Format time to MM:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update play/pause icon on video play/pause
fullscreenVideo.addEventListener('play', updatePlayPauseIcon);
fullscreenVideo.addEventListener('pause', updatePlayPauseIcon);

// Also update duration when metadata loads
fullscreenVideo.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(fullscreenVideo.duration);
});

// Close fullscreen with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !fullscreenModal.classList.contains('hidden')) {
        closeFullscreenVideo();
    }
});


// ============================================
// ✦ FUTURISTIC ENHANCEMENTS
// ============================================

// --- Cursor Spotlight ---
const cursorSpotlight = document.getElementById('cursorSpotlight');
let rafPending = false;
document.addEventListener('mousemove', (e) => {
    if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
            cursorSpotlight.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            rafPending = false;
        });
    }
});

// --- Vanilla Tilt — 3D card effect ---
function initTiltOnElement(el) {
    if (typeof VanillaTilt === 'undefined' || !el || el._tiltInitialized) return;
    VanillaTilt.init(el, {
        max: 7,
        speed: 450,
        glare: true,
        'max-glare': 0.10,
        perspective: 1000,
        scale: 1.03,
        gyroscope: false,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    });
    el._tiltInitialized = true;
}

// Watch contentArea for new .gallery-item nodes and apply tilt
if (typeof contentArea !== 'undefined' && contentArea) {
    const tiltObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return;
                if (node.classList && node.classList.contains('gallery-item')) {
                    initTiltOnElement(node);
                }
                if (node.querySelectorAll) {
                    node.querySelectorAll('.gallery-item').forEach(initTiltOnElement);
                }
            });
        });
    });
    tiltObserver.observe(contentArea, { childList: true, subtree: true });
}

// --- GSAP Scroll Reveal ---
function initGSAPScrollReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Kill previous triggers before re-init
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Batch layout measurements to avoid thrashing
    requestAnimationFrame(() => {
        const rows = gsap.utils.toArray('.content-row');
        const visibilityMap = [];
        
        // Single pass: measure all at once
        rows.forEach((row) => {
            const rect = row.getBoundingClientRect();
            visibilityMap.push(rect.top < window.innerHeight);
        });

        // Second pass: apply animations without forcing reflow
        rows.forEach((row, index) => {
            const alreadyVisible = visibilityMap[index];
            if (alreadyVisible) {
                // Already in view on load — animate in immediately
                gsap.fromTo(row, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
            } else {
                gsap.fromTo(
                    row,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: row,
                            start: 'top 92%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
        
        ScrollTrigger.refresh();
    });
}

// Re-run GSAP + tilt whenever content area is rebuilt
if (typeof contentArea !== 'undefined' && contentArea) {
    let _gsapRebuildTimer = null;
    const gsapRebuildObserver = new MutationObserver(() => {
        clearTimeout(_gsapRebuildTimer);
        _gsapRebuildTimer = setTimeout(() => {
            initGSAPScrollReveal();
            document.querySelectorAll('.gallery-item').forEach(initTiltOnElement);
        }, 120);
    });
    gsapRebuildObserver.observe(contentArea, { childList: true });
}

