// Product image arrays - maps each item to its available images
const productImages = {
    item1: ['./item1-1.png', './item1-web1.png', './item1-web2.png'],
    item2: ['./item2-1.png', './item2-web1.png'],
    item3: ['./item3-1.png', './item3-web1.png'],
    item4: ['./item4-1.png', './item4-2.png', './item4-web1.png', './item4-web2.png'],
    item5: ['./item5-1.png', './item5-2.png'],
    item7: ['./item7-1.png'],
    item9: ['./item9-1.png', './item9-web1.png'],
    item10: ['./item10-1.png', './item10-web1.png'],
    item11: ['./item11-1.png', './item11-web1.png', './item11-web2.png'],
    item12: ['./item12-1.png', './item12-2.png', './item12-web1.png', './item12-web2.png'],
    item13: ['./item13-1.png'],
    item15: ['./item15-1.png', './item15-web1.png'],
    item17: ['./item17-1.png', './item17-web1.png'],
    item18: ['./item18-1.png', './item18-web1.png'],
    item20: ['./item20-1.png', './item20-web1.png'],
    item22: ['./item22-1.png', './item22-2.png', './item22-web1.png'],
    item23: ['./item23-1.png', './item23-2.png', './item23-web1.png'],
    item24: ['./item24-1.png', './item24-web1.png']
};

// Current image index for each product
let currentImageIndex = {};

// Initialize current image index for all products
Object.keys(productImages).forEach(item => {
    currentImageIndex[item] = 0;
});

// Change image function
function changeImage(productId, direction) {
    const images = productImages[productId];
    if (!images || images.length <= 1) return;
    
    currentImageIndex[productId] += direction;
    
    if (currentImageIndex[productId] >= images.length) {
        currentImageIndex[productId] = 0;
    } else if (currentImageIndex[productId] < 0) {
        currentImageIndex[productId] = images.length - 1;
    }
    
    updateImage(productId);
}

// Set current image function
function currentImage(productId, index) {
    const images = productImages[productId];
    if (!images) return;
    
    currentImageIndex[productId] = index - 1;
    updateImage(productId);
}

// Update image and dots
function updateImage(productId) {
    const productCard = document.querySelector(`[data-product="${productId}"]`);
    if (!productCard) return;
    
    const images = productImages[productId];
    const currentIndex = currentImageIndex[productId];
    
    // Update main image
    const mainImage = productCard.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = images[currentIndex];
    }
    
    // Update dots
    const dots = productCard.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Current language state
let currentLanguage = 'en';

// Translation labels
const translations = {
    en: {
        keyFeatures: "Key Features",
        specifications: "Specifications",
        warranty: "Warranty",
        viewFullDetails: "View Full Details",
        close: "Close",
        save: "Save"
    },
    hu: {
        keyFeatures: "Főbb jellemzők",
        specifications: "Műszaki adatok",
        warranty: "Garancia",
        viewFullDetails: "Teljes részletek megtekintése",
        close: "Bezárás",
        save: "Megtakarítás"
    },
    pl: {
        keyFeatures: "Główne cechy",
        specifications: "Specyfikacje",
        warranty: "Gwarancja",
        viewFullDetails: "Zobacz pełne szczegóły",
        close: "Zamknij",
        save: "Oszczędność"
    }
};

// Product detailed information
const productDetails = {
    item1: {
        title: "DreamCloud Premier Hybrid King Mattress + Bed Frame",
        price: "$999",
        originalPrice: "$1,778",
        description: "Complete bedroom set including DreamCloud Premier Hybrid King mattress and tufted headboard upholstered bed frame. Premium hybrid combines memory foam comfort with advanced innerspring support.",
        features: [
            "13-inch total height with 6-layer construction",
            "CloudQuilt™ euro top cover with cooling fibers",
            "Gel-infused memory foam for pressure relief",
            "8-inch pocketed coil system with reinforced perimeter",
            "Tufted headboard upholstered bed frame included",
            "Medium-firm feel (6/10 firmness scale)",
            "100% fiberglass-free construction"
        ],
        specifications: [
            "Size: King (76\" x 80\")",
            "Height: 13 inches",
            "Firmness: Medium-firm (6/10)",
            "Materials: Hybrid (Memory foam + Innerspring)",
            "Bed Frame: Tufted headboard upholstered",
            "Motion isolation: Excellent"
        ],
        warranty: "365-Night Home Trial & Forever Warranty™",
        link: "https://www.dreamcloudsleep.com/mattress/king?utm_source=google&utm_medium=cpc&utm_campaign=b_19640755162_151354788448_734579982447&utm_content=cpc_brand&rh_s=google&rh_m=cpc&rh_c=b_19640755162_151354788448_734579982447&rh_n=cpc_brand&gad_source=1&gad_campaignid=19640755162&gbraid=0AAAAADEI5j8d4SzFYFlp95tc2ZD3CLimo&gclid=CjwKCAjw87XBBhBIEiwAxP3_A-V1e536lG_P5z1E3jtiZvrSRfIwj-i3RyMIFwLAyyMeqNs4QoDF1BoCwmgQAvD_BwE"
    },
    item2: {
        title: "FUFU&GAGA 2-Drawer Black Wooden Nightstands (Set of 2)",
        price: "$89",
        originalPrice: "$152",
        description: "Modern black wooden nightstands with clean lines and functional storage. Perfect for contemporary bedroom decor.",
        features: [
            "Set of 2 matching nightstands",
            "2 spacious drawers per unit",
            "Durable wooden construction",
            "4 sturdy metal legs for stability",
            "Modern black finish",
            "Easy assembly required"
        ],
        specifications: [
            "Dimensions: 19.7\"W x 15.7\"D x 17.9\"H each",
            "Material: Wood with metal legs",
            "Color: Black",
            "Drawer slides: Smooth operating",
            "Weight capacity: Suitable for bedside essentials",
            "Assembly: Required"
        ],
        warranty: "Manufacturer warranty included",
        link: "https://www.homedepot.com/pep/FUFU-GAGA-2-Drawer-Black-Wooden-Nightstand-Bedside-Table-With-4-Metal-Legs-15-7-in-D-x-19-7-in-W-x-17-9-in-H-KF200155-01/318148664?g_store=&source=shoppingads&locale=en-US&pla&mtc=SHOPPING-BF-HDH-GGL-D59H-059_034_INT_FURN-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX&cm_mmc=SHOPPING-BF-HDH-GGL-D59H-059_034_INT_FURN-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX-21266992005--&gad_source=1&gad_campaignid=21273442763&gbraid=0AAAAADq61Ud5nz66Xbz-vKuoJ5TDx1WqF&gclid=CjwKCAjw87XBBhBIEiwAxP3_A2Xw5vITMLJXTprpL0Phw1SMOQqEbjbOwF4JbqmHYQU_Vu7sChqflxoCfKIQAvD_BwE&gclsrc=aw.ds"
    },
    item3: {
        title: "IKEA MALM 6-Drawer Chest",
        price: "$139",
        originalPrice: "$280",
        description: "Spacious 6-drawer chest with classic design. Perfect for bedroom storage with smooth-running drawers and safety features.",
        features: [
            "6 spacious drawers for ample storage",
            "Smooth-running drawers with pull-out stop",
            "Safety feature prevents tipping",
            "Can be used as a room divider",
            "Classic black-brown finish",
            "Coordinates with other MALM furniture"
        ],
        specifications: [
            "Dimensions: 31 1/2\" x 48 3/8\" x 15 3/4\"",
            "Material: Particleboard, fiberboard, plastic",
            "Color: Black-brown",
            "Drawer capacity: Suitable for clothing storage",
            "Safety: Anti-tip restraint included",
            "Assembly: Required"
        ],
        warranty: "IKEA 25-year guarantee",
        link: "https://www.remodelista.com/products/malm-6-drawer-chest-black-brown/"
    },
    item4: {
        title: "Sony STRDH190 Stereo Receiver & Audio-Technica Turntable",
        price: "$299",
        originalPrice: "$628",
        description: "Complete audio system with Sony 2-channel stereo receiver and Audio-Technica AT-LP120XUSB turntable for vinyl enthusiasts. Two separate components sold together.",
        features: [
            "Sony STRDH190 2-channel stereo receiver",
            "Bluetooth connectivity for wireless streaming",
            "Phono input specifically for turntables",
            "Audio-Technica AT-LP120XUSB direct-drive turntable",
            "USB output for digitizing vinyl records",
            "Professional DJ features with high torque motor"
        ],
        specifications: [
            "Receiver Power: 100W per channel",
            "Turntable Type: Direct-drive",
            "Speeds: 33-1/3 and 45 RPM",
            "Connectivity: Bluetooth, analog, USB",
            "Tonearm: S-shaped with adjustable counterweight",
            "Cartridge: AT-VM95E included"
        ],
        warranty: "Manufacturer warranties for both units",
        link: "https://www.bestbuy.com/site/sony-strdh190-2-ch-stereo-receiver-with-bluetooth-phono-input-for-turntables-black/6187501.p?skuId=6187501&ref=212&loc=SaleEvent&gad_source=1&gad_campaignid=13273963610&gbraid=0AAAAAD-ORIhG1wC146yRIp7PjuYNzKx--&gclid=CjwKCAjw87XBBhBIEiwAxP3_A5fR2LBjF-kbSURX-FanVI88kDmuPqlN87E8cIKEljyMUSwqF_OP4BoCczEQAvD_BwE&gclsrc=aw.ds"
    },
    item5: {
        title: "TV Unit and Media Shelf",
        price: "$49",
        originalPrice: "$199",
        description: "Modern TV stand with storage shelves for media components and accessories. Clean design fits most living rooms.",
        features: [
            "Multiple storage compartments",
            "Cable management system",
            "Suitable for TVs up to 65 inches",
            "Modern minimalist design",
            "Durable construction",
            "Easy assembly"
        ],
        specifications: [
            "Material: Engineered wood",
            "Color: Modern finish",
            "Weight capacity: Supports most TVs",
            "Storage: Multiple shelves and compartments",
            "Assembly: Required",
            "Style: Contemporary"
        ],
        warranty: "Standard manufacturer warranty",
        link: "#"
    },
    item7: {
        title: "Bookshelf/HiFi Media Stand",
        price: "$49",
        originalPrice: "$149",
        description: "Versatile storage unit perfect for books, media equipment, and decorative items. Classic design fits any room.",
        features: [
            "Multiple shelf levels",
            "Sturdy construction",
            "Perfect for books and media",
            "Classic wood finish",
            "Adjustable shelving",
            "Easy to assemble"
        ],
        specifications: [
            "Material: Wood composite",
            "Shelves: Multiple adjustable levels",
            "Weight capacity: Suitable for books and electronics",
            "Finish: Wood grain",
            "Assembly: Required",
            "Style: Traditional"
        ],
        warranty: "Standard manufacturer warranty",
        link: "#"
    },
    item9: {
        title: "50\" White Rectangle Pine Console Table",
        price: "$99",
        originalPrice: "$273",
        description: "Retro and modern design console table with storage drawers and open shelves. Perfect for entryway or living room.",
        features: [
            "50-inch width for ample surface space",
            "3 top drawers for hidden storage",
            "2 open shelves for display",
            "Solid pine wood construction",
            "Clean white finish",
            "Retro-modern design aesthetic"
        ],
        specifications: [
            "Dimensions: 50\" W x suitable depth and height",
            "Material: Pine wood",
            "Color: White",
            "Storage: 3 drawers + 2 open shelves",
            "Style: Retro-modern",
            "Assembly: Required"
        ],
        warranty: "Harper Bright Designs warranty",
        link: "https://www.homedepot.com/p/Harper-Bright-Designs-Retro-and-Modern-Design-50-in-White-Rectangle-Pine-Console-Table-with-3-Top-Drawers-and-2-Open-Shelves-WF199598AAK/318332350"
    },
    item10: {
        title: "Metal Bar Cart Silver",
        price: "$149",
        originalPrice: "$290",
        description: "3-tier home bar serving cart with locking caster wheels. Perfect for entertaining and mobile bar service.",
        features: [
            "3-tier design for maximum storage",
            "Locking caster wheels for mobility",
            "Chrome/silver finish",
            "Tempered glass shelves",
            "Wine glass holders",
            "Bottle storage areas"
        ],
        specifications: [
            "Tiers: 3 levels",
            "Material: Metal frame with glass shelves",
            "Finish: Chrome/Silver",
            "Wheels: 4 locking casters",
            "Storage: Wine glasses and bottles",
            "Assembly: Required"
        ],
        warranty: "Manufacturer warranty",
        link: "https://www.bedbathandbeyond.com/Home-Garden/Chrome-Bar-Cart-3-tier-Home-Bar-Serving-Cart-with-Locking-Caster-Wheels/36148263/product.html"
    },
    item11: {
        title: "La-Z-Boy Kennedy Full Sleep Sofa",
        price: "$1,199",
        originalPrice: "$2,499",
        description: "Premium sleep sofa with full-size air mattress system. Converts from comfortable seating to queen bed in minutes.",
        features: [
            "Full-size sleep surface",
            "Integrated air mattress system",
            "Premium fabric upholstery",
            "La-Z-Boy comfort technology",
            "Easy conversion mechanism",
            "Durable hardwood frame"
        ],
        specifications: [
            "Sleep Surface: Full/Queen size",
            "Mattress: Integrated air system",
            "Frame: Hardwood construction",
            "Upholstery: Premium fabric",
            "Mechanism: Easy fold-out",
            "Brand: La-Z-Boy"
        ],
        warranty: "La-Z-Boy manufacturer warranty",
        link: "https://www.la-z-boy.com/p/living-room-sofas-stationary-sofas/kennedy-full-sleep-sofa/_/R-520593?region_id=50861778&WT.srch=1&cid=search&cid_account=USA_Tier1&cid_campaign=&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=&gad_source=1&gad_campaignid=17326288297&gbraid=0AAAAADL1GQZmS8Y4gzt0uaf4EhVEJRy98&gclid=CjwKCAjw87XBBhBIEiwAxP3_A3qpv-b1GG6TVGSthPMsN3N1XJvsfcC9g7lLmJnyHKAP7Jbx7W7EbxoCF4YQAvD_BwE"
    },
    item12: {
        title: "La-Z-Boy Astor Platinum Power Lift Recliner",
        price: "$1,199",
        originalPrice: "$2,519",
        description: "Premium power lift recliner with headrest and lumbar support. Designed for comfort and mobility assistance.",
        features: [
            "Power lift mechanism for easy standing",
            "Power adjustable headrest",
            "Lumbar support system",
            "Premium platinum upholstery",
            "Infinite recline positions",
            "Battery backup system"
        ],
        specifications: [
            "Type: Power lift recliner",
            "Features: Headrest and lumbar support",
            "Upholstery: Platinum fabric",
            "Power: Dual motor system",
            "Backup: Battery included",
            "Brand: La-Z-Boy"
        ],
        warranty: "La-Z-Boy manufacturer warranty",
        link: "https://www.la-z-boy.com/i/living-room-recliners-power-lift-chairs/astor-platinum-power-lift-recliner-w-headrest--lumbar-in-stock/_/R-1PH519"
    },
    item13: {
        title: "Devinci St. Tropez XL Bicycle",
        price: "$299",
        originalPrice: "$700",
        description: "Quality mountain bike in XL size. Perfect for trails and recreational riding. Well-maintained and ready to ride.",
        features: [
            "XL frame size for taller riders",
            "Mountain bike design",
            "Quality Devinci construction",
            "Suitable for trail riding",
            "Well-maintained condition",
            "Serial #: SM042404"
        ],
        specifications: [
            "Brand: Devinci",
            "Model: St. Tropez",
            "Size: XL",
            "Type: Mountain bike",
            "Condition: Used, well-maintained",
            "Serial Number: SM042404"
        ],
        warranty: "Sold as-is",
        link: "#"
    },
    item15: {
        title: "Corvus Padova 4-Piece Wicker Patio Set",
        price: "$349",
        originalPrice: "$686",
        description: "Complete outdoor conversation set with weather-resistant wicker construction. Perfect for patio entertaining.",
        features: [
            "4-piece conversation set",
            "Weather-resistant wicker",
            "Comfortable cushions included",
            "UV-resistant materials",
            "Easy maintenance",
            "Classic patio design"
        ],
        specifications: [
            "Pieces: 4-piece set",
            "Material: Weather-resistant wicker",
            "Cushions: Included",
            "UV Protection: Yes",
            "Maintenance: Low",
            "Style: Traditional patio"
        ],
        warranty: "Corvus manufacturer warranty",
        link: "https://www.bedbathandbeyond.com/Home-Garden/Corvus-Padova-4-piece-Wicker-Patio-Chat-Set/21417060/product.html"
    },
    item17: {
        title: "Hamilton 44\" Rectangle Fire Pit Table",
        price: "$179",
        originalPrice: "$340",
        description: "Natural wood-burning fire pit with slate top. Perfect for outdoor gatherings and year-round enjoyment.",
        features: [
            "44-inch rectangle design",
            "Natural wood-burning",
            "Slate top surface",
            "Steel construction",
            "Weather-resistant finish",
            "Includes spark screen"
        ],
        specifications: [
            "Dimensions: 44\" x 13\" rectangle",
            "Fuel: Natural wood",
            "Material: Steel and slate",
            "Finish: Black and brown",
            "Safety: Spark screen included",
            "Brand: Real Flame"
        ],
        warranty: "Real Flame manufacturer warranty",
        link: "https://www.homedepot.com/p/Real-Flame-Hamilton-44-in-x-13-in-Rectangle-Steel-and-Slate-Natural-Wood-Burning-Fire-Pit-in-Black-and-Brown-with-Slate-Top-946-NST/304052109"
    },
    item18: {
        title: "Traeger Pro 575 Pellet Grill",
        price: "$499",
        originalPrice: "$1,100",
        description: "WiFi-enabled pellet grill with brand new grill grates. Perfect for smoking, grilling, and BBQ cooking.",
        features: [
            "WiFi connectivity for remote control",
            "Brand new grill grates included",
            "Pellet fuel system",
            "Precise temperature control",
            "Large cooking surface",
            "Versatile cooking methods"
        ],
        specifications: [
            "Model: Pro 575",
            "Fuel: Wood pellets",
            "Connectivity: WiFi enabled",
            "Grates: Brand new included",
            "Temperature: Precise digital control",
            "Cooking Area: Large capacity"
        ],
        warranty: "Traeger manufacturer warranty",
        link: "https://www.amazon.com/dp/B07T2FWL8Q"
    },
    item20: {
        title: "DeLonghi La Specialista Espresso Machine",
        price: "$399",
        originalPrice: "$849",
        description: "Professional manual espresso maker with advanced features for coffee enthusiasts. Create café-quality espresso at home.",
        features: [
            "Manual espresso operation",
            "Built-in grinder",
            "Milk frothing system",
            "Professional portafilter",
            "Stainless steel construction",
            "Advanced brewing controls"
        ],
        specifications: [
            "Type: Manual espresso machine",
            "Grinder: Built-in burr grinder",
            "Milk System: Steam wand",
            "Material: Stainless steel",
            "Controls: Manual operation",
            "Brand: DeLonghi"
        ],
        warranty: "DeLonghi manufacturer warranty",
        link: "https://www.delonghi.com/en/ec9355-m-la-specialista-prestigio-manual-espresso-maker/p/EC9355.M"
    },
    item22: {
        title: "Samsung 49\" Odyssey OLED G9 (G95SC) Curved Gaming Monitor",
        price: "$599",
        originalPrice: "$1,099",
        description: "World's first 32:9 aspect ratio OLED gaming monitor with QD-OLED technology, 240Hz refresh rate, and smart features.",
        features: [
            "49-inch QD-OLED display technology",
            "5120x1440 resolution (Dual QHD)",
            "240Hz refresh rate with 0.03ms response time",
            "32:9 super ultrawide aspect ratio",
            "1800R curve for immersive gaming",
            "HDR support with exceptional contrast",
            "Samsung Tizen smart platform built-in",
            "RGB lighting on back mount"
        ],
        specifications: [
            "Screen Size: 49 inches",
            "Resolution: 5120 x 1440 (Dual QHD)",
            "Aspect Ratio: 32:9",
            "Refresh Rate: 240Hz",
            "Response Time: 0.03ms GTG",
            "Curve: 1800R",
            "Color Gamut: 98% DCI-P3",
            "Connectivity: DisplayPort 1.4, HDMI 2.1"
        ],
        warranty: "Samsung manufacturer warranty",
        link: "https://www.amazon.com/dp/B0C48D7Q22"
    },
    item23: {
        title: "67\" L-Shaped Executive Desk with File Cabinet",
        price: "$199",
        originalPrice: "$365",
        description: "Large L-shaped office desk with integrated file cabinet. Perfect for home office setup with ample workspace.",
        features: [
            "67-inch L-shaped design",
            "Integrated 55-inch file cabinet",
            "Executive style finish",
            "Multiple storage compartments",
            "Large work surface area",
            "Modern office design"
        ],
        specifications: [
            "Shape: L-shaped configuration",
            "Size: 67-inch main surface",
            "Storage: 55-inch file cabinet",
            "Style: Executive office",
            "Material: Office-grade materials",
            "Color: Available in multiple finishes"
        ],
        warranty: "Manufacturer warranty",
        link: "https://www.bedbathandbeyond.com/Home-Garden/67-L-Shaped-Executive-Desk-with-55-File-Cabinet-for-Home-Office-Walnut-Black-Grey/37001317/product.html"
    },
    item24: {
        title: "Steelcase Karman Office Chair",
        price: "$599",
        originalPrice: "$969",
        description: "Premium ergonomic office chair with advanced comfort features. Professional design for all-day comfort and support.",
        features: [
            "Ergonomic design for all-day comfort",
            "Advanced lumbar support",
            "Breathable mesh back",
            "Adjustable armrests",
            "Professional office styling",
            "High-quality construction"
        ],
        specifications: [
            "Brand: Steelcase",
            "Model: Karman",
            "Back: Mesh design",
            "Support: Lumbar and ergonomic",
            "Adjustability: Multiple positions",
            "Use: Professional office"
        ],
        warranty: "Steelcase manufacturer warranty",
        link: "https://store.steelcase.com/steelcase-karman-ready-to-ship?qid=57fcd00681da843f1e0c2fc312b7b7b2&i=13"
    }
};

// Show more info modal
function showMoreInfo(productId) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const product = productDetails[productId];
    
    if (!product) {
        modalBody.innerHTML = '<p>Product details not available.</p>';
    } else {
        // Store current product ID for translation updates
        modal.dataset.currentProduct = productId;
        updateModalContent(productId);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Update modal content based on current language
function updateModalContent(productId) {
    const modalBody = document.getElementById('modalBody');
    const product = productDetails[productId];
    const trans = translations[currentLanguage];
    
    // Get translated content for the product
    const translatedProduct = getTranslatedProduct(productId);
    
    modalBody.innerHTML = `
        <div class="modal-product-info">
            <div class="language-selector">
                <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" onclick="changeLanguage('en', '${productId}')">English</button>
                <button class="lang-btn ${currentLanguage === 'hu' ? 'active' : ''}" onclick="changeLanguage('hu', '${productId}')">Magyar</button>
                <button class="lang-btn ${currentLanguage === 'pl' ? 'active' : ''}" onclick="changeLanguage('pl', '${productId}')">Polski</button>
            </div>
            
            <h2>${translatedProduct.title}</h2>
            <div class="modal-pricing">
                <span class="modal-sale-price">${product.price}</span>
                <span class="modal-original-price">${currentLanguage === 'en' ? 'Originally' : currentLanguage === 'hu' ? 'Eredetileg' : 'Pierwotnie'} ${product.originalPrice}</span>
            </div>
            <p class="modal-description">${translatedProduct.description}</p>
            
            <div class="modal-section">
                <h3>${trans.keyFeatures}</h3>
                <ul class="features-list">
                    ${translatedProduct.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>${trans.specifications}</h3>
                <ul class="specs-list">
                    ${translatedProduct.specifications.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>${trans.warranty}</h3>
                <p>${translatedProduct.warranty}</p>
            </div>
            
            <div class="modal-actions">
                <a href="${product.link}" target="_blank" class="btn-primary">${trans.viewFullDetails}</a>
                <button class="btn-secondary" onclick="closeModal()">${trans.close}</button>
            </div>
        </div>
    `;
}

// Change language function
function changeLanguage(lang, productId) {
    currentLanguage = lang;
    updateModalContent(productId);
}

// Product translations
const productTranslations = {
    item1: {
        hu: {
            title: "DreamCloud Premier Hybrid King matrac + ágykeret",
            description: "Komplett hálószoba garnitúra, DreamCloud Premier Hybrid King matrac és kárpitozott fejvéges ágykeret. A prémium hibrid kombinálja a memóriahabos kényelmet a fejlett belső rugós támogatással.",
            features: [
                "13 hüvelykes teljes magasság 6 rétegű szerkezettel",
                "CloudQuilt™ euro top borítás hűtő szálakkal",
                "Gél infúziós memóriahab nyomáscsökkentéshez",
                "8 hüvelykes zsebezett rugós rendszer megerősített peremmel",
                "Kárpitozott fejvéges ágykeret mellékelve",
                "Közepesen kemény tapintás (6/10 keménységi skála)",
                "100% üvegszál-mentes konstrukció"
            ],
            specifications: [
                "Méret: King (76\" x 80\")",
                "Magasság: 13 hüvelyk",
                "Keménység: Közepesen kemény (6/10)",
                "Anyagok: Hibrid (memóriahab + belső rugó)",
                "Ágykeret: Kárpitozott fejvégű",
                "Mozgás szigetelés: Kiváló"
            ],
            warranty: "365 éjszakás otthoni próba és örökös garancia™"
        },
        pl: {
            title: "DreamCloud Premier Hybrid King materac + rama łóżka",
            description: "Kompletny zestaw sypialni zawierający materac DreamCloud Premier Hybrid King i tapicerowaną ramę łóżka z zagłówkiem. Premium hybrid łączy komfort pianki pamięciowej z zaawansowanym wsparciem sprężyn wewnętrznych.",
            features: [
                "13-calowa całkowita wysokość z 6-warstwową konstrukcją",
                "Pokrycie CloudQuilt™ euro top z włóknami chłodzącymi",
                "Pianka pamięciowa z żelem dla ulgi w punktach nacisku",
                "8-calowy system sprężyn kieszeniowych ze wzmocnionym obwodem",
                "Tapicerowana rama łóżka z zagłówkiem w zestawie",
                "Średnio twarde uczucie (6/10 w skali twardości)",
                "100% konstrukcja wolna od włókna szklanego"
            ],
            specifications: [
                "Rozmiar: King (76\" x 80\")",
                "Wysokość: 13 cali",
                "Twardość: Średnio twardy (6/10)",
                "Materiały: Hybrydowy (pianka pamięciowa + sprężyny wewnętrzne)",
                "Rama łóżka: Tapicerowane zagłówek",
                "Izolacja ruchu: Doskonała"
            ],
            warranty: "365-nocna próba domowa i wieczna gwarancja™"
        }
    },
    item2: {
        hu: {
            title: "FUFU&GAGA 2-fiókos fekete fa éjjeliszekrények (2 db-os szett)",
            description: "Modern fekete fa éjjeliszekrények tiszta vonalakkal és funkcionális tárolással. Tökéletes a kortárs hálószoba dekorációhoz.",
            features: [
                "2 egyforma éjjeliszekrény szett",
                "Egyenként 2 tágas fiók",
                "Tartós fa konstrukció",
                "4 erős fém láb a stabilitásért",
                "Modern fekete felület",
                "Egyszerű összeszerelés szükséges"
            ],
            specifications: [
                "Méretek: 19.7\"Sz x 15.7\"M x 17.9\"Ma egyenként",
                "Anyag: Fa fém lábakkal",
                "Szín: Fekete",
                "Fiók sínek: Simán működő",
                "Teherbírás: Alkalmas éjjeliszekrény kellékekhez",
                "Összeszerelés: Szükséges"
            ],
            warranty: "Gyártói garancia mellékelve"
        },
        pl: {
            title: "FUFU&GAGA 2-szufladowe czarne drewniane szafki nocne (zestaw 2 szt.)",
            description: "Nowoczesne czarne drewniane szafki nocne z czystymi liniami i funkcjonalnym przechowywaniem. Idealne do współczesnego wystroju sypialni.",
            features: [
                "Zestaw 2 pasujących szafek nocnych",
                "2 przestronne szuflady na jednostkę",
                "Trwała drewniana konstrukcja",
                "4 solidne metalowe nogi dla stabilności",
                "Nowoczesne czarne wykończenie",
                "Wymagany łatwy montaż"
            ],
            specifications: [
                "Wymiary: 19.7\"S x 15.7\"G x 17.9\"W każda",
                "Materiał: Drewno z metalowymi nogami",
                "Kolor: Czarny",
                "Prowadnice szuflad: Płynne działanie",
                "Nośność: Odpowiednia na przybory nocne",
                "Montaż: Wymagany"
            ],
            warranty: "Gwarancja producenta w zestawie"
        }
    },
    item3: {
        hu: {
            title: "IKEA MALM 6-fiókos komód",
            description: "Tágas 6-fiókos komód klasszikus dizájnnal. Tökéletes hálószobai tároláshoz simán futó fiókokkal és biztonsági funkciókkal.",
            features: [
                "6 tágas fiók bőséges tároláshoz",
                "Simán futó fiókok kihúzás-megállítóval",
                "Biztonsági funkció megakadályozza a felborulást",
                "Használható szobaosztóként",
                "Klasszikus fekete-barna felület",
                "Más MALM bútorokkal koordinálható"
            ],
            specifications: [
                "Méretek: 31 1/2\" x 48 3/8\" x 15 3/4\"",
                "Anyag: Forgácslap, rostlap, műanyag",
                "Szín: Fekete-barna",
                "Fiók kapacitás: Alkalmas ruha tároláshoz",
                "Biztonság: Felborulás gátló mellékelve",
                "Összeszerelés: Szükséges"
            ],
            warranty: "IKEA 25 éves garancia"
        },
        pl: {
            title: "IKEA MALM 6-szufladowa komoda",
            description: "Przestronna 6-szufladowa komoda o klasycznym designie. Idealna do przechowywania w sypialni z płynnie działającymi szufladami i funkcjami bezpieczeństwa.",
            features: [
                "6 przestronnych szuflad dla dużej pojemności",
                "Płynnie działające szuflady z ogranicznikiem wysuwu",
                "Funkcja bezpieczeństwa zapobiega przewróceniu",
                "Może być używana jako dzielnik pokoju",
                "Klasyczne czarno-brązowe wykończenie",
                "Koordynuje się z innymi meblami MALM"
            ],
            specifications: [
                "Wymiary: 31 1/2\" x 48 3/8\" x 15 3/4\"",
                "Materiał: Płyta wiórowa, płyta pilśniowa, plastik",
                "Kolor: Czarno-brązowy",
                "Pojemność szuflad: Odpowiednia do przechowywania odzieży",
                "Bezpieczeństwo: Zawiera ogranicznik przechyłu",
                "Montaż: Wymagany"
            ],
            warranty: "25-letnia gwarancja IKEA"
        }
    },
    item4: {
        hu: {
            title: "Sony STRDH190 sztereó vevő és Audio-Technica lemezjátszó",
            description: "Komplett audio rendszer Sony 2-csatornás sztereó vevővel és Audio-Technica AT-LP120XUSB lemezjátszóval bakelitlemez rajongóknak. Két külön komponens együtt eladva.",
            features: [
                "Sony STRDH190 2-csatornás sztereó vevő",
                "Bluetooth kapcsolat vezeték nélküli streaminghez",
                "Phono bemenet kifejezetten lemezjátszókhoz",
                "Audio-Technica AT-LP120XUSB direkt meghajtású lemezjátszó",
                "USB kimenet bakelitlemezek digitalizálásához",
                "Professzionális DJ funkciók nagy nyomatékú motorral"
            ],
            specifications: [
                "Vevő teljesítmény: 100W csatornánként",
                "Lemezjátszó típus: Direkt meghajtású",
                "Sebességek: 33-1/3 és 45 RPM",
                "Csatlakozás: Bluetooth, analóg, USB",
                "Hangkar: S-alakú állítható ellensúllyal",
                "Hangszedő: AT-VM95E mellékelve"
            ],
            warranty: "Gyártói garanciák mindkét egységhez"
        },
        pl: {
            title: "Odbiornik stereo Sony STRDH190 i gramofon Audio-Technica",
            description: "Kompletny system audio z 2-kanałowym odbiornikiem stereo Sony i gramofonem Audio-Technica AT-LP120XUSB dla miłośników winylu. Dwa osobne komponenty sprzedawane razem.",
            features: [
                "2-kanałowy odbiornik stereo Sony STRDH190",
                "Łączność Bluetooth do bezprzewodowego streamingu",
                "Wejście phono specjalnie dla gramofonów",
                "Gramofon Audio-Technica AT-LP120XUSB z napędem bezpośrednim",
                "Wyjście USB do digitalizacji płyt winylowych",
                "Profesjonalne funkcje DJ z silnikiem o wysokim momencie obrotowym"
            ],
            specifications: [
                "Moc odbiornika: 100W na kanał",
                "Typ gramofonu: Napęd bezpośredni",
                "Prędkości: 33-1/3 i 45 RPM",
                "Łączność: Bluetooth, analogowa, USB",
                "Ramię: S-kształtne z regulowaną przeciwwagą",
                "Wkładka: AT-VM95E w zestawie"
            ],
            warranty: "Gwarancje producenta dla obu urządzeń"
        }
    },
    item5: {
        hu: {
            title: "TV egység és média polc",
            description: "Modern TV állvány tárolópolcokkal média komponensekhez és kiegészítőkhöz. Tiszta dizájn, amely a legtöbb nappaliba illik.",
            features: [
                "Több tárolórekesz",
                "Kábelkezelő rendszer",
                "65 hüvelykes TV-kig alkalmas",
                "Modern minimalista dizájn",
                "Tartós konstrukció",
                "Egyszerű összeszerelés"
            ],
            specifications: [
                "Anyag: Műszaki fa",
                "Szín: Modern felület",
                "Teherbírás: A legtöbb TV-t megtartja",
                "Tárolás: Több polc és rekesz",
                "Összeszerelés: Szükséges",
                "Stílus: Kortárs"
            ],
            warranty: "Szabványos gyártói garancia"
        },
        pl: {
            title: "Szafka TV i półka medialna",
            description: "Nowoczesna szafka TV z półkami do przechowywania komponentów medialnych i akcesoriów. Czysty design pasujący do większości salonów.",
            features: [
                "Wiele przegródek do przechowywania",
                "System zarządzania kablami",
                "Odpowiednia dla telewizorów do 65 cali",
                "Nowoczesny minimalistyczny design",
                "Trwała konstrukcja",
                "Łatwy montaż"
            ],
            specifications: [
                "Materiał: Drewno inżynieryjne",
                "Kolor: Nowoczesne wykończenie",
                "Nośność: Obsługuje większość telewizorów",
                "Przechowywanie: Wiele półek i przegródek",
                "Montaż: Wymagany",
                "Styl: Współczesny"
            ],
            warranty: "Standardowa gwarancja producenta"
        }
    },
    item7: {
        hu: {
            title: "Könyvespolc/HiFi média állvány",
            description: "Sokoldalú tároló egység, tökéletes könyvekhez, média berendezésekhez és dekoratív tárgyakhoz. Klasszikus dizájn, amely bármilyen szobába illik.",
            features: [
                "Több polcszint",
                "Erős konstrukció",
                "Tökéletes könyvekhez és médiához",
                "Klasszikus fa felület",
                "Állítható polcok",
                "Könnyű összeszerelés"
            ],
            specifications: [
                "Anyag: Fa kompozit",
                "Polcok: Több állítható szint",
                "Teherbírás: Alkalmas könyvekhez és elektronikához",
                "Felület: Fa erezetű",
                "Összeszerelés: Szükséges",
                "Stílus: Hagyományos"
            ],
            warranty: "Szabványos gyártói garancia"
        },
        pl: {
            title: "Regał/stojak na media HiFi",
            description: "Wszechstronna jednostka do przechowywania idealna na książki, sprzęt medialny i przedmioty dekoracyjne. Klasyczny design pasujący do każdego pokoju.",
            features: [
                "Wiele poziomów półek",
                "Solidna konstrukcja",
                "Idealny na książki i media",
                "Klasyczne drewniane wykończenie",
                "Regulowane półki",
                "Łatwy montaż"
            ],
            specifications: [
                "Materiał: Kompozyt drzewny",
                "Półki: Wiele regulowanych poziomów",
                "Nośność: Odpowiednia dla książek i elektroniki",
                "Wykończenie: Imitacja drewna",
                "Montaż: Wymagany",
                "Styl: Tradycyjny"
            ],
            warranty: "Standardowa gwarancja producenta"
        }
    },
    item9: {
        hu: {
            title: "50\" fehér téglalap alakú fenyő konzolasztal",
            description: "Retro és modern dizájnú konzolasztal tárolófiókokkal és nyitott polcokkal. Tökéletes előszobába vagy nappaliba.",
            features: [
                "50 hüvelykes szélesség bőséges felülettel",
                "3 felső fiók rejtett tároláshoz",
                "2 nyitott polc kiállításhoz",
                "Masszív fenyőfa konstrukció",
                "Tiszta fehér felület",
                "Retro-modern dizájn esztétika"
            ],
            specifications: [
                "Méretek: 50\" Sz x megfelelő mélység és magasság",
                "Anyag: Fenyőfa",
                "Szín: Fehér",
                "Tárolás: 3 fiók + 2 nyitott polc",
                "Stílus: Retro-modern",
                "Összeszerelés: Szükséges"
            ],
            warranty: "Harper Bright Designs garancia"
        },
        pl: {
            title: "50\" biały prostokątny stół konsolowy z sosny",
            description: "Stół konsolowy w stylu retro i nowoczesnym z szufladami do przechowywania i otwartymi półkami. Idealny do przedpokoju lub salonu.",
            features: [
                "50-calowa szerokość dla dużej powierzchni",
                "3 górne szuflady do ukrytego przechowywania",
                "2 otwarte półki do ekspozycji",
                "Solidna konstrukcja z drewna sosnowego",
                "Czyste białe wykończenie",
                "Estetyka retro-nowoczesnego designu"
            ],
            specifications: [
                "Wymiary: 50\" S x odpowiednia głębokość i wysokość",
                "Materiał: Drewno sosnowe",
                "Kolor: Biały",
                "Przechowywanie: 3 szuflady + 2 otwarte półki",
                "Styl: Retro-nowoczesny",
                "Montaż: Wymagany"
            ],
            warranty: "Gwarancja Harper Bright Designs"
        }
    },
    item10: {
        hu: {
            title: "Fém bárszekrény ezüst",
            description: "3 szintes házi bár szervírozó kocsi záródó görgőkkel. Tökéletes szórakoztatáshoz és mobil bár szolgáltatáshoz.",
            features: [
                "3 szintes dizájn maximális tároláshoz",
                "Záródó görgők a mobilitásért",
                "Króm/ezüst felület",
                "Edzett üveg polcok",
                "Borospohár tartók",
                "Palack tároló területek"
            ],
            specifications: [
                "Szintek: 3 szint",
                "Anyag: Fém keret üveg polcokkal",
                "Felület: Króm/Ezüst",
                "Kerekek: 4 záródó görgő",
                "Tárolás: Borospoharak és palackok",
                "Összeszerelés: Szükséges"
            ],
            warranty: "Gyártói garancia"
        },
        pl: {
            title: "Metalowy wózek barowy srebrny",
            description: "3-poziomowy domowy wózek barowy serwujący z blokującymi kółkami. Idealny do rozrywki i mobilnej obsługi barowej.",
            features: [
                "3-poziomowy design dla maksymalnego przechowywania",
                "Blokujące kółka dla mobilności",
                "Chromowane/srebrne wykończenie",
                "Półki ze szkła hartowanego",
                "Uchwyty na kieliszki do wina",
                "Miejsca do przechowywania butelek"
            ],
            specifications: [
                "Poziomy: 3 poziomy",
                "Materiał: Metalowa rama ze szklanymi półkami",
                "Wykończenie: Chrom/Srebro",
                "Kółka: 4 blokujące kółka",
                "Przechowywanie: Kieliszki do wina i butelki",
                "Montaż: Wymagany"
            ],
            warranty: "Gwarancja producenta"
        }
    },
    item11: {
        hu: {
            title: "La-Z-Boy Kennedy teljes méretű kanapéágy",
            description: "Prémium kanapéágy teljes méretű légmatrac rendszerrel. Percek alatt átalakítható kényelmes ülésből queen méretű ággyá.",
            features: [
                "Teljes méretű alvófelület",
                "Integrált légmatrac rendszer",
                "Prémium szövet kárpitozás",
                "La-Z-Boy kényelmi technológia",
                "Könnyű átalakítási mechanizmus",
                "Tartós keményfa keret"
            ],
            specifications: [
                "Alvófelület: Teljes/Queen méret",
                "Matrac: Integrált légrendszer",
                "Keret: Keményfa konstrukció",
                "Kárpitozás: Prémium szövet",
                "Mechanizmus: Könnyű kihajtás",
                "Márka: La-Z-Boy"
            ],
            warranty: "La-Z-Boy gyártói garancia"
        },
        pl: {
            title: "La-Z-Boy Kennedy pełnowymiarowa sofa rozkładana",
            description: "Premium sofa rozkładana z pełnowymiarowym systemem materaca powietrznego. Przekształca się z wygodnego siedzenia w łóżko queen w ciągu minut.",
            features: [
                "Pełnowymiarowa powierzchnia do spania",
                "Zintegrowany system materaca powietrznego",
                "Premium tapicerka tkaninowa",
                "Technologia komfortu La-Z-Boy",
                "Łatwy mechanizm przekształcania",
                "Trwała rama z twardego drewna"
            ],
            specifications: [
                "Powierzchnia do spania: Pełny/Queen rozmiar",
                "Materac: Zintegrowany system powietrzny",
                "Rama: Konstrukcja z twardego drewna",
                "Tapicerka: Premium tkanina",
                "Mechanizm: Łatwe rozkładanie",
                "Marka: La-Z-Boy"
            ],
            warranty: "Gwarancja producenta La-Z-Boy"
        }
    },
    item12: {
        hu: {
            title: "La-Z-Boy Astor Platinum elektromos emelő fotel",
            description: "Prémium elektromos emelő fotel fejtámlával és deréktámasszal. Kényelemre és mobilitási segítségre tervezve.",
            features: [
                "Elektromos emelő mechanizmus könnyű felálláshoz",
                "Elektromosan állítható fejtámla",
                "Deréktámasz rendszer",
                "Prémium platina kárpitozás",
                "Végtelen döntési pozíciók",
                "Akkumulátor tartalék rendszer"
            ],
            specifications: [
                "Típus: Elektromos emelő fotel",
                "Funkciók: Fejtámla és deréktámasz",
                "Kárpitozás: Platina szövet",
                "Áram: Kettős motor rendszer",
                "Tartalék: Akkumulátor mellékelve",
                "Márka: La-Z-Boy"
            ],
            warranty: "La-Z-Boy gyártói garancia"
        },
        pl: {
            title: "La-Z-Boy Astor Platinum elektryczny fotel podnoszący",
            description: "Premium elektryczny fotel podnoszący z zagłówkiem i wsparciem lędźwiowym. Zaprojektowany dla komfortu i pomocy w mobilności.",
            features: [
                "Mechanizm elektrycznego podnoszenia dla łatwego wstawania",
                "Elektrycznie regulowany zagłówek",
                "System wsparcia lędźwiowego",
                "Premium platynowa tapicerka",
                "Nieskończone pozycje rozkładania",
                "System zasilania awaryjnego"
            ],
            specifications: [
                "Typ: Elektryczny fotel podnoszący",
                "Funkcje: Zagłówek i wsparcie lędźwiowe",
                "Tapicerka: Platynowa tkanina",
                "Zasilanie: System dwóch silników",
                "Zasilanie awaryjne: Bateria w zestawie",
                "Marka: La-Z-Boy"
            ],
            warranty: "Gwarancja producenta La-Z-Boy"
        }
    },
    item13: {
        hu: {
            title: "Devinci St. Tropez XL kerékpár",
            description: "Minőségi mountain bike XL méretben. Tökéletes ösvényekre és szabadidős kerékpározáshoz. Jól karbantartott és használatra kész.",
            features: [
                "XL vázméret magasabb kerékpárosoknak",
                "Mountain bike dizájn",
                "Minőségi Devinci konstrukció",
                "Ösvényes kerékpározáshoz alkalmas",
                "Jól karbantartott állapot",
                "Sorozatszám: SM042404"
            ],
            specifications: [
                "Márka: Devinci",
                "Modell: St. Tropez",
                "Méret: XL",
                "Típus: Mountain bike",
                "Állapot: Használt, jól karbantartott",
                "Sorozatszám: SM042404"
            ],
            warranty: "Jelenlegi állapotában eladva"
        },
        pl: {
            title: "Rower Devinci St. Tropez XL",
            description: "Wysokiej jakości rower górski w rozmiarze XL. Idealny na szlaki i rekreacyjną jazdę. Dobrze utrzymany i gotowy do jazdy.",
            features: [
                "Rama XL dla wyższych rowerzystów",
                "Design roweru górskiego",
                "Wysokiej jakości konstrukcja Devinci",
                "Nadaje się do jazdy po szlakach",
                "Stan dobrze utrzymany",
                "Numer seryjny: SM042404"
            ],
            specifications: [
                "Marka: Devinci",
                "Model: St. Tropez",
                "Rozmiar: XL",
                "Typ: Rower górski",
                "Stan: Używany, dobrze utrzymany",
                "Numer seryjny: SM042404"
            ],
            warranty: "Sprzedawany w obecnym stanie"
        }
    },
    item15: {
        hu: {
            title: "Corvus Padova 4 részes fonott kerti bútor szett",
            description: "Komplett kültéri társalgó szett időjárásálló fonott konstrukcióval. Tökéletes kerti szórakoztatáshoz.",
            features: [
                "4 részes társalgó szett",
                "Időjárásálló fonott anyag",
                "Kényelmes párnák mellékelve",
                "UV-álló anyagok",
                "Könnyű karbantartás",
                "Klasszikus kerti dizájn"
            ],
            specifications: [
                "Darabok: 4 részes szett",
                "Anyag: Időjárásálló fonott",
                "Párnák: Mellékelve",
                "UV védelem: Igen",
                "Karbantartás: Alacsony",
                "Stílus: Hagyományos kerti"
            ],
            warranty: "Corvus gyártói garancia"
        },
        pl: {
            title: "Zestaw mebli ogrodowych Corvus Padova 4-częściowy",
            description: "Kompletny zestaw wypoczynkowy na zewnątrz z odporną na warunki atmosferyczne konstrukcją wiklinową. Idealny do rozrywki w ogrodzie.",
            features: [
                "4-częściowy zestaw wypoczynkowy",
                "Wiklina odporna na warunki atmosferyczne",
                "Wygodne poduszki w zestawie",
                "Materiały odporne na UV",
                "Łatwa konserwacja",
                "Klasyczny ogrodowy design"
            ],
            specifications: [
                "Części: Zestaw 4-częściowy",
                "Materiał: Wiklina odporna na pogodę",
                "Poduszki: W zestawie",
                "Ochrona UV: Tak",
                "Konserwacja: Niska",
                "Styl: Tradycyjny ogrodowy"
            ],
            warranty: "Gwarancja producenta Corvus"
        }
    },
    item17: {
        hu: {
            title: "Hamilton 44\" téglalap alakú tűzrakó asztal",
            description: "Természetes fatüzelésű tűzrakó pala tetővel. Tökéletes kültéri összejövetelekhez és egész éves élvezethez.",
            features: [
                "44 hüvelykes téglalap alakú dizájn",
                "Természetes fatüzelés",
                "Pala felső felület",
                "Acél konstrukció",
                "Időjárásálló felület",
                "Szikrafogó mellékelve"
            ],
            specifications: [
                "Méretek: 44\" x 13\" téglalap",
                "Tüzelőanyag: Természetes fa",
                "Anyag: Acél és pala",
                "Felület: Fekete és barna",
                "Biztonság: Szikrafogó mellékelve",
                "Márka: Real Flame"
            ],
            warranty: "Real Flame gyártói garancia"
        },
        pl: {
            title: "Hamilton 44\" prostokątny stół z paleniskiem",
            description: "Palenisko na naturalne drewno z blatem łupkowym. Idealne na spotkania na świeżym powietrzu i całoroczną przyjemność.",
            features: [
                "44-calowy prostokątny design",
                "Opalanie naturalnym drewnem",
                "Łupkowa powierzchnia górna",
                "Konstrukcja stalowa",
                "Wykończenie odporne na warunki atmosferyczne",
                "Osłona przeciwiskrowa w zestawie"
            ],
            specifications: [
                "Wymiary: 44\" x 13\" prostokąt",
                "Paliwo: Naturalne drewno",
                "Materiał: Stal i łupek",
                "Wykończenie: Czarne i brązowe",
                "Bezpieczeństwo: Osłona przeciwiskrowa w zestawie",
                "Marka: Real Flame"
            ],
            warranty: "Gwarancja producenta Real Flame"
        }
    },
    item18: {
        hu: {
            title: "Traeger Pro 575 pellet grill",
            description: "WiFi-képes pellet grill vadonatúj grillrácsokkal. Tökéletes füstöléshez, grillezéshez és BBQ főzéshez.",
            features: [
                "WiFi kapcsolat távoli vezérléshez",
                "Vadonatúj grillrácsok mellékelve",
                "Pellet tüzelőanyag rendszer",
                "Pontos hőmérséklet szabályozás",
                "Nagy főzési felület",
                "Sokoldalú főzési módszerek"
            ],
            specifications: [
                "Modell: Pro 575",
                "Tüzelőanyag: Fa pellet",
                "Kapcsolat: WiFi képes",
                "Rácsok: Vadonatúj mellékelve",
                "Hőmérséklet: Pontos digitális vezérlés",
                "Főzési terület: Nagy kapacitás"
            ],
            warranty: "Traeger gyártói garancia"
        },
        pl: {
            title: "Grill pelletowy Traeger Pro 575",
            description: "Grill pelletowy z WiFi i zupełnie nowymi rusztami. Idealny do wędzenia, grillowania i gotowania BBQ.",
            features: [
                "Łączność WiFi do zdalnego sterowania",
                "Zupełnie nowe ruszty w zestawie",
                "System paliwowy na pellety",
                "Precyzyjna kontrola temperatury",
                "Duża powierzchnia gotowania",
                "Wszechstronne metody gotowania"
            ],
            specifications: [
                "Model: Pro 575",
                "Paliwo: Pellety drzewne",
                "Łączność: Z obsługą WiFi",
                "Ruszty: Zupełnie nowe w zestawie",
                "Temperatura: Precyzyjna kontrola cyfrowa",
                "Obszar gotowania: Duża pojemność"
            ],
            warranty: "Gwarancja producenta Traeger"
        }
    },
    item20: {
        hu: {
            title: "DeLonghi La Specialista eszpresszó gép",
            description: "Professzionális kézi eszpresszó készítő fejlett funkciókkal kávé rajongóknak. Készítsen kávézó minőségű eszpresszót otthon.",
            features: [
                "Kézi eszpresszó működés",
                "Beépített őrlő",
                "Tej habosító rendszer",
                "Professzionális portafilter",
                "Rozsdamentes acél konstrukció",
                "Fejlett főzési vezérlők"
            ],
            specifications: [
                "Típus: Kézi eszpresszó gép",
                "Őrlő: Beépített zúzóőrlő",
                "Tej rendszer: Gőzölő pálca",
                "Anyag: Rozsdamentes acél",
                "Vezérlők: Kézi működés",
                "Márka: DeLonghi"
            ],
            warranty: "DeLonghi gyártói garancia"
        },
        pl: {
            title: "Ekspres do espresso DeLonghi La Specialista",
            description: "Profesjonalny ręczny ekspres do espresso z zaawansowanymi funkcjami dla miłośników kawy. Twórz espresso o jakości kawiarnianej w domu.",
            features: [
                "Ręczna obsługa espresso",
                "Wbudowany młynek",
                "System spieniania mleka",
                "Profesjonalny portafilter",
                "Konstrukcja ze stali nierdzewnej",
                "Zaawansowane sterowanie parzeniem"
            ],
            specifications: [
                "Typ: Ręczny ekspres do espresso",
                "Młynek: Wbudowany młynek żarnowy",
                "System mleczny: Dysza parowa",
                "Materiał: Stal nierdzewna",
                "Sterowanie: Obsługa ręczna",
                "Marka: DeLonghi"
            ],
            warranty: "Gwarancja producenta DeLonghi"
        }
    },
    item22: {
        hu: {
            title: "Samsung 49\" Odyssey OLED G9 (G95SC) görbült gaming monitor",
            description: "A világ első 32:9 képarányú OLED gaming monitor QD-OLED technológiával, 240Hz frissítési gyakorisággal és okos funkciókkal.",
            features: [
                "49 hüvelykes QD-OLED kijelző technológia",
                "5120x1440 felbontás (Dual QHD)",
                "240Hz frissítési gyakoriság 0.03ms válaszidővel",
                "32:9 szuper széles képarány",
                "1800R görbület magával ragadó játékhoz",
                "HDR támogatás kivételes kontraszttal",
                "Samsung Tizen okos platform beépítve",
                "RGB világítás a hátsó tartón"
            ],
            specifications: [
                "Képernyő méret: 49 hüvelyk",
                "Felbontás: 5120 x 1440 (Dual QHD)",
                "Képarány: 32:9",
                "Frissítési gyakoriság: 240Hz",
                "Válaszidő: 0.03ms GTG",
                "Görbület: 1800R",
                "Színtartomány: 98% DCI-P3",
                "Csatlakozás: DisplayPort 1.4, HDMI 2.1"
            ],
            warranty: "Samsung gyártói garancia"
        },
        pl: {
            title: "Samsung 49\" Odyssey OLED G9 (G95SC) zakrzywiony monitor gamingowy",
            description: "Pierwszy na świecie monitor gamingowy OLED o proporcjach 32:9 z technologią QD-OLED, częstotliwością odświeżania 240Hz i funkcjami smart.",
            features: [
                "49-calowa technologia wyświetlacza QD-OLED",
                "Rozdzielczość 5120x1440 (Dual QHD)",
                "Częstotliwość odświeżania 240Hz z czasem reakcji 0.03ms",
                "Superszeroki format obrazu 32:9",
                "Krzywizna 1800R dla wciągającej rozgrywki",
                "Obsługa HDR z wyjątkowym kontrastem",
                "Wbudowana platforma Samsung Tizen smart",
                "Oświetlenie RGB na tylnym mocowaniu"
            ],
            specifications: [
                "Rozmiar ekranu: 49 cali",
                "Rozdzielczość: 5120 x 1440 (Dual QHD)",
                "Format obrazu: 32:9",
                "Częstotliwość odświeżania: 240Hz",
                "Czas reakcji: 0.03ms GTG",
                "Krzywizna: 1800R",
                "Gama kolorów: 98% DCI-P3",
                "Łączność: DisplayPort 1.4, HDMI 2.1"
            ],
            warranty: "Gwarancja producenta Samsung"
        }
    },
    item23: {
        hu: {
            title: "67\" L-alakú vezetői íróasztal iratszekrénnyel",
            description: "Nagy L-alakú irodai íróasztal integrált iratszekrénnyel. Tökéletes otthoni irodai berendezéshez bőséges munkaterülettel.",
            features: [
                "67 hüvelykes L-alakú dizájn",
                "Integrált 55 hüvelykes iratszekrény",
                "Vezetői stílusú felület",
                "Több tárolórekesz",
                "Nagy munkafelület",
                "Modern irodai dizájn"
            ],
            specifications: [
                "Forma: L-alakú konfiguráció",
                "Méret: 67 hüvelykes fő felület",
                "Tárolás: 55 hüvelykes iratszekrény",
                "Stílus: Vezetői iroda",
                "Anyag: Irodai minőségű anyagok",
                "Szín: Több felületben elérhető"
            ],
            warranty: "Gyártói garancia"
        },
        pl: {
            title: "67\" biurko wykonawcze w kształcie L z szafką na dokumenty",
            description: "Duże biurko biurowe w kształcie L ze zintegrowaną szafką na dokumenty. Idealne do domowego biura z dużą przestrzenią roboczą.",
            features: [
                "67-calowy design w kształcie L",
                "Zintegrowana 55-calowa szafka na dokumenty",
                "Wykończenie w stylu wykonawczym",
                "Wiele przegródek do przechowywania",
                "Duża powierzchnia robocza",
                "Nowoczesny design biurowy"
            ],
            specifications: [
                "Kształt: Konfiguracja w kształcie L",
                "Rozmiar: 67-calowa główna powierzchnia",
                "Przechowywanie: 55-calowa szafka na dokumenty",
                "Styl: Biuro wykonawcze",
                "Materiał: Materiały klasy biurowej",
                "Kolor: Dostępny w wielu wykończeniach"
            ],
            warranty: "Gwarancja producenta"
        }
    },
    item24: {
        hu: {
            title: "Steelcase Karman irodai szék",
            description: "Prémium ergonomikus irodai szék fejlett kényelmi funkciókkal. Professzionális dizájn egész napos kényelemhez és támogatáshoz.",
            features: [
                "Ergonomikus dizájn egész napos kényelemhez",
                "Fejlett deréktámasz",
                "Légáteresztő háló háttámla",
                "Állítható karfák",
                "Professzionális irodai stílus",
                "Kiváló minőségű konstrukció"
            ],
            specifications: [
                "Márka: Steelcase",
                "Modell: Karman",
                "Háttámla: Háló dizájn",
                "Támogatás: Derék és ergonomikus",
                "Állíthatóság: Több pozíció",
                "Használat: Professzionális iroda"
            ],
            warranty: "Steelcase gyártói garancia"
        },
        pl: {
            title: "Krzesło biurowe Steelcase Karman",
            description: "Premium ergonomiczne krzesło biurowe z zaawansowanymi funkcjami komfortu. Profesjonalny design dla całodziennego komfortu i wsparcia.",
            features: [
                "Ergonomiczny design dla całodziennego komfortu",
                "Zaawansowane wsparcie lędźwiowe",
                "Oddychające siatkowe oparcie",
                "Regulowane podłokietniki",
                "Profesjonalny styl biurowy",
                "Wysokiej jakości konstrukcja"
            ],
            specifications: [
                "Marka: Steelcase",
                "Model: Karman",
                "Oparcie: Design siatkowy",
                "Wsparcie: Lędźwiowe i ergonomiczne",
                "Regulacja: Wiele pozycji",
                "Użytkowanie: Profesjonalne biuro"
            ],
            warranty: "Gwarancja producenta Steelcase"
        }
    }
};

// Get translated product details
function getTranslatedProduct(productId) {
    const product = productDetails[productId];
    
    if (currentLanguage === 'en') {
        return product;
    }
    
    // Check if we have translations for this product
    const translations = productTranslations[productId];
    if (translations && translations[currentLanguage]) {
        return {
            ...product,
            ...translations[currentLanguage]
        };
    }
    
    // Return original if no translation available (shouldn't happen now)
    return product;
}


// Close modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Lightbox functionality
let currentLightboxProduct = '';
let currentLightboxIndex = 0;

// Open lightbox
function openLightbox(productId, imageIndex = 0) {
    console.log('Opening lightbox for:', productId, 'at index:', imageIndex);
    
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxDots = document.getElementById('lightboxDots');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    
    if (!lightbox || !lightboxImage) {
        console.error('Lightbox elements not found');
        return;
    }
    
    currentLightboxProduct = productId;
    currentLightboxIndex = imageIndex;
    
    const images = productImages[productId];
    if (!images || images.length === 0) {
        console.error('No images found for product:', productId);
        return;
    }
    
    // Update image
    lightboxImage.src = images[currentLightboxIndex];
    lightboxImage.alt = `Product image ${currentLightboxIndex + 1}`;
    
    // Update counter
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${images.length}`;
    
    // Generate dots
    lightboxDots.innerHTML = '';
    if (images.length > 1) {
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = index === currentLightboxIndex ? 'lightbox-dot active' : 'lightbox-dot';
            dot.onclick = () => goToLightboxImage(index);
            lightboxDots.appendChild(dot);
        });
    }
    
    // Hide navigation for single images
    if (images.length === 1) {
        lightboxContent.classList.add('lightbox-single-image');
    } else {
        lightboxContent.classList.remove('lightbox-single-image');
    }
    
    // Force display
    lightbox.style.display = 'block';
    lightbox.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    
    console.log('Lightbox should now be visible');
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigate to previous image in lightbox
function lightboxPrevImage() {
    const images = productImages[currentLightboxProduct];
    if (!images || images.length <= 1) return;
    
    currentLightboxIndex = currentLightboxIndex === 0 ? images.length - 1 : currentLightboxIndex - 1;
    updateLightboxImage();
}

// Navigate to next image in lightbox
function lightboxNextImage() {
    const images = productImages[currentLightboxProduct];
    if (!images || images.length <= 1) return;
    
    currentLightboxIndex = currentLightboxIndex === images.length - 1 ? 0 : currentLightboxIndex + 1;
    updateLightboxImage();
}

// Go to specific image in lightbox
function goToLightboxImage(index) {
    const images = productImages[currentLightboxProduct];
    if (!images || index < 0 || index >= images.length) return;
    
    currentLightboxIndex = index;
    updateLightboxImage();
}

// Update lightbox image and controls
function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxDots = document.querySelectorAll('.lightbox-dot');
    
    const images = productImages[currentLightboxProduct];
    
    // Update image with animation
    lightboxImage.style.animation = 'none';
    lightboxImage.offsetHeight; // Trigger reflow
    lightboxImage.style.animation = 'lightboxImageSlide 0.4s ease';
    lightboxImage.src = images[currentLightboxIndex];
    
    // Update counter
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${images.length}`;
    
    // Update dots
    lightboxDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentLightboxIndex);
    });
}

// Close lightbox when clicking outside the image
window.onclick = function(event) {
    const lightbox = document.getElementById('imageLightbox');
    const modal = document.getElementById('productModal');
    
    if (event.target === lightbox) {
        closeLightbox();
    } else if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                lightboxPrevImage();
                break;
            case 'ArrowRight':
                lightboxNextImage();
                break;
        }
    }
});

// Add error handling for images
function handleImageError(img) {
    console.warn('Image failed to load:', img.src);
    img.style.display = 'none';
}

// Add image loading error handlers
function addImageErrorHandlers() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            handleImageError(this);
        };
        img.onload = function() {
            this.classList.add('loaded');
        };
        // If image is already loaded
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page initializing...');
    
    // Ensure lightbox is hidden on page load
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        console.log('Lightbox hidden on load');
    }
    
    // Update all product cards to support image cycling
    updateAllProductCards();
    
    // Add click handlers to all product images
    addImageClickHandlers();
    
    // Add error handlers for images
    addImageErrorHandlers();
    
    // Setup contact form
    setupContactForm();
    
    // Re-add click handlers after a delay to ensure all images are loaded
    setTimeout(() => {
        addImageClickHandlers();
        addImageErrorHandlers();
        console.log('Re-initialized click handlers');
    }, 500);
});

// Function to add click handlers to product images
function addImageClickHandlers() {
    Object.keys(productImages).forEach(productId => {
        const productCard = document.querySelector(`[data-product="${productId}"]`);
        if (productCard) {
            const mainImage = productCard.querySelector('.main-image');
            if (mainImage) {
                // Remove any existing listeners first
                mainImage.style.cursor = 'pointer';
                mainImage.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Image clicked:', productId);
                    const currentIndex = currentImageIndex[productId] || 0;
                    openLightbox(productId, currentIndex);
                });
            }
        }
    });
}

// Function to update all product cards with proper image cycling support
function updateAllProductCards() {
    Object.keys(productImages).forEach(productId => {
        const productCard = document.querySelector(`[data-product="${productId}"]`);
        if (productCard) {
            const images = productImages[productId];
            const dotsContainer = productCard.querySelector('.image-dots');
            
            if (dotsContainer && images.length > 1) {
                // Clear existing dots
                dotsContainer.innerHTML = '';
                
                // Add dots for each image
                images.forEach((_, index) => {
                    const dot = document.createElement('span');
                    dot.className = index === 0 ? 'dot active' : 'dot';
                    dot.onclick = () => currentImage(productId, index + 1);
                    dotsContainer.appendChild(dot);
                });
            }
            
            // Hide navigation if only one image
            const prevBtn = productCard.querySelector('.prev-btn');
            const nextBtn = productCard.querySelector('.next-btn');
            if (images.length <= 1) {
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                if (dotsContainer) dotsContainer.style.display = 'none';
            }
        }
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function() {
        // Add submitting class for visual feedback
        form.classList.add('submitting');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // The form will submit normally to Formspree
        // Add a timeout to reset button state if something goes wrong
        setTimeout(() => {
            form.classList.remove('submitting');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 10000); // Reset after 10 seconds
    });
}