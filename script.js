// ============================================
// DATA STRUCTURE - EASILY CUSTOMIZABLE
// ============================================

// HARDCODED CREDENTIALS - EDIT THESE TO CHANGE LOGIN
const VALID_CREDENTIALS = {
    username: 'a',
    password: 'a'
};

const galleryData = {
    us: {
        name: 'A journey of love and laughter',
        emoji: '💑',
        video: 'videosUs/memories.mp4',
        videoTitle: 'Gundu and Teddy',
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
                title: 'Birthday Celebrations',
                id: 'birthday',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Your Birthday Surprise' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Cake Cutting' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Party with Friends' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Birthday Hug' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Candles' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Celebration Moment' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Happy Smile' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Party Night' },
                ]
            },
            {
                title: 'Anniversaries',
                id: 'anniversaries',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: '1st Anniversary' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: '100 Days Together' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Special Dinner' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Rose Petals' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Champagne Toast' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Romantic Evening' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Dancing Together' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Forever Moment' },
                ]
            },
            {
                title: 'Holidays',
                id: 'holidays',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Christmas Celebration' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'New Year Party' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Diwali Lights' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Holiday Dinner' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Festive Wear' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Decorations' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Holiday Spirit' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Celebration' },
                ]
            },
            {
                title: 'Trips & Adventures',
                id: 'trips',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Mountain Trek' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Beach Getaway' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'City Exploration' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Roadtrip' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Waterfall Discovery' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Sunset View' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Adventure Selfie' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Travel Memories' },
                ]
            },
            {
                title: 'Dinner Dates',
                id: 'dinners',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Fine Dining' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Italian Restaurant' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Street Food Adventure' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Rooftop Dinner' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Candlelight Dinner' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Wine Tasting' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Dessert Time' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'After Dinner Walk' },
                ]
            },
            {
                title: 'Movie Nights',
                id: 'movies',
                items: [
                    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'Cinema Date' },
                    { id: 2, src: 'imagesUs/memories2.jpeg', title: 'Popcorn Time' },
                    { id: 3, src: 'imagesUs/memories3.jpeg', title: 'Cozy Night In' },
                    { id: 4, src: 'imagesUs/memories4.jpeg', title: 'Movie Theater' },
                    { id: 5, src: 'imagesUs/memories1.jpeg', title: 'Home Cinema Setup' },
                    { id: 6, src: 'imagesUs/memories2.jpeg', title: 'Blanket Cuddles' },
                    { id: 7, src: 'imagesUs/memories3.jpeg', title: 'Late Night Movies' },
                    { id: 8, src: 'imagesUs/memories4.jpeg', title: 'Movie Night Snacks' },
                ]
            }
        ]
    },
    me: {
        name: 'Me',
        emoji: '👤',
        video: 'videosMe/memories.mp4',
        videoTitle: 'Me',
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
const mainVideo = document.getElementById('mainVideo');
const videoProgress = document.getElementById('videoProgress');
const videoTitle = document.getElementById('videoTitle');
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
let currentView = 'date';  // 'date' or 'events'
let allItemsFlat = [];  // Flat array of all items for viewer navigation
let currentViewerIndex = -1;
let currentViewerSectionId = null;
const itemsPerPage = 4;  // Items to show before "More+" button
const sectionPaginationState = {};  // Track pagination for each section

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

// Video visibility control based on scroll position
let videoScrollObserver = null;

function setupVideoPlaybackObserver() {
    const videoSection = document.querySelector('.video-section');
    if (!videoSection) return;

    // Use Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
        videoScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Video section is visible in viewport
                    mainVideo.play().catch(err => {
                        // Autoplay might be blocked or video unavailable
                        console.log('Video autoplay not available');
                    });
                } else {
                    // Video section is not visible
                    mainVideo.pause();
                }
            });
        }, { threshold: 0.2 });

        videoScrollObserver.observe(videoSection);
    }
}

// Call observer setup after page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupVideoPlaybackObserver, 500);
});

// Also setup if called later (for profile switching)
setTimeout(setupVideoPlaybackObserver, 1000);

// Video Progress Slider
mainVideo.addEventListener('timeupdate', () => {
    const progress = (mainVideo.currentTime / mainVideo.duration) * 100;
    videoProgress.value = progress || 0;
});

videoProgress.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * mainVideo.duration;
    mainVideo.currentTime = time;
    // Resume playing after seeking
    mainVideo.play().catch(err => {
        console.log('Play after seek not available');
    });
});

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

    // Hide profile screen and show main content with animation
    profileScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    
    setTimeout(() => {
        profileScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        loadProfile(profileKey);
        updateProfileSelectorImage(profileKey);
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
    mainVideo.src = profile.video;
    mainVideo.muted = false;
    mainVideo.volume = 0.5;
    videoTitle.textContent = profile.videoTitle;

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

    // Setup video playback observer
    setTimeout(setupVideoPlaybackObserver, 200);
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
}

/**
 * Update viewer image
 */
function updateViewerImage() {
    const item = allItemsFlat[currentViewerIndex];
    viewerImage.src = item.src;
    viewerCaption.textContent = item.title;
    viewerCounter.textContent = `${currentViewerIndex + 1} / ${allItemsFlat.length}`;
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
}

/**
 * Folder Modal Functions
 */

/**
 * Switch between Date and Events views
 */
function switchView(view) {
    if (view === currentView) return; // Already on this view
    
    currentView = view;
    
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
    currentView = 'date';  // Reset to default view
    allItemsFlat = [];
    currentViewerIndex = -1;
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {
    console.log('🎬 Premium Netflix-style Gallery loaded successfully!');
});
