// Product image arrays - maps each item to its available images
const productImages = {
    item1: ['./item1-1.png', './item1-web1.png', './item1-web2.png'],
    item2: ['./item2-1.png', './item2-web1.png'],
    item3: ['./item3-1.png', './item3-web1.png'],
    item4: ['./item4-1.png', './item4-2.png', './item4-web1.png', './item4-web2.png'],
    item5: ['./item5-1.png', './item5-2.png'],
    item6: ['./item6-1.png', './item6-2.png', './item6-web1.png'],
    item7: ['./item7-1.png'],
    item8: ['./item8-1.png', './item8-2.png', './item8-web1.png'],
    item9: ['./item9-1.png', './item9-web1.png'],
    item10: ['./item10-1.png', './item10-web1.png'],
    item11: ['./item11-1.png', './item11-web1.png', './item11-web2.png'],
    item12: ['./item12-1.png', './item12-2.png', './item12-web1.png', './item12-web2.png'],
    item13: ['./item13-1.png'],
    item14: ['./item14-1.png', './item14-2.png', './item14-web1.png'],
    item15: ['./item15-1.png', './item15-web1.png'],
    item16: ['./item16-1.png', './item16-web1.png'],
    item17: ['./item17-1.png', './item17-web1.png'],
    item18: ['./item18-1.png', './item18-web1.png'],
    item19: ['./item19-1.png', './item19-2.png', './item19-3.png', './item19-web1.png'],
    item20: ['./item20-1.png', './item20-web1.png'],
    item21: ['./item21-1.png', './item21-2.png', './item21-3.png', './item21-web1.png', './item21-web2.png'],
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
    item6: {
        title: "LG C1 65\" Class 4K Smart OLED TV with AI ThinQ®",
        price: "$599",
        originalPrice: "$2,299",
        description: "Premium 65-inch OLED TV with stunning picture quality, perfect blacks, and smart features. Ideal for gaming and entertainment.",
        features: [
            "Self-lit OLED pixels for perfect blacks",
            "α9 Gen4 AI processor 4K",
            "Dolby Vision IQ and Dolby Atmos",
            "HDMI 2.1 on all 4 ports (4K@120Hz)",
            "VRR, G-SYNC compatibility, 1ms response time",
            "webOS smart platform with ThinQ AI",
            "Google Assistant and Alexa built-in",
            "FILMMAKER MODE™ support"
        ],
        specifications: [
            "Screen Size: 64.5 inches diagonal",
            "Resolution: 3840 x 2160 (4K UHD)",
            "Display Type: OLED",
            "Refresh Rate: 40Hz - 120Hz",
            "Viewing Angles: 178° horizontal/vertical",
            "Gaming Features: 1ms response time, VRR",
            "Connectivity: 4x HDMI 2.1, Ethernet, Wi-Fi"
        ],
        warranty: "LG manufacturer warranty",
        link: "https://www.lg.com/us/tvs/lg-oled65c1pub-oled-4k-tv"
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
    item8: {
        title: "Denny Fabric Power Recline 4-Piece Sectional",
        price: "$1,299",
        originalPrice: "$2,999",
        description: "Luxury power reclining sectional sofa in ash grey. Features power headrests, USB charging, and premium fabric upholstery.",
        features: [
            "4-piece sectional configuration",
            "Power reclining mechanism",
            "Power adjustable headrests",
            "Built-in USB charging ports",
            "Premium ash grey fabric",
            "Memory foam cushioning",
            "Zero wall clearance reclining"
        ],
        specifications: [
            "Configuration: 4-piece sectional",
            "Upholstery: Premium fabric",
            "Color: Ash Grey",
            "Power Features: Reclining and headrests",
            "Charging: USB ports included",
            "Frame: Hardwood construction"
        ],
        warranty: "Kasala manufacturer warranty",
        link: "https://www.kasala.com/catalog/product/furniture/denny-fabric-power-recline-4-piece-sectional-ash-grey/?sku=350163&gad_source=1&gad_campaignid=17347513802&gbraid=0AAAAAC1yhrvVp-3ym33uw1rnXOw6NPLwd&gclid=CjwKCAjw87XBBhBIEiwAxP3_A9FwtM0tndTr8TeX4-4YXm6j-FqHkjSpImjlY84_ns-WARADcU0IMRoCm4gQAvD_BwE"
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
    item14: {
        title: "EMOVE Cruiser Electric Scooter",
        price: "$499",
        originalPrice: "$1,399",
        description: "Long-range electric scooter with dual suspension and powerful 1600W motor. Perfect for commuting and recreation.",
        features: [
            "52V battery system",
            "1600W powerful motor",
            "Dual suspension system",
            "Long range capability",
            "High-quality construction",
            "Advanced braking system"
        ],
        specifications: [
            "Motor: 1600W",
            "Battery: 52V system",
            "Suspension: Dual front and rear",
            "Range: Long distance capable",
            "Brakes: Advanced disc system",
            "Weight capacity: Adult rider"
        ],
        warranty: "EMOVE manufacturer warranty",
        link: "https://www.voromotors.com/pages/search-results-page?q=emove%20cruiser"
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
    item16: {
        title: "11-12 ft. Deluxe Aluminum Patio Umbrella",
        price: "$289",
        originalPrice: "$533",
        description: "Large cantilever patio umbrella with base included. Provides excellent shade coverage for outdoor spaces.",
        features: [
            "11-12 foot coverage area",
            "Cantilever design",
            "Aluminum construction",
            "Base included",
            "Weather-resistant fabric",
            "Easy tilt mechanism"
        ],
        specifications: [
            "Size: 11-12 feet diameter",
            "Type: Cantilever",
            "Material: Aluminum frame",
            "Base: Included",
            "Fabric: Weather-resistant",
            "Operation: Easy tilt and rotation"
        ],
        warranty: "Manufacturer warranty",
        link: "https://www.bedbathandbeyond.com/Home-Garden/Deluxe-Aluminum-Offset-Umbrella-Patio-Cantilever-Umbrella/36035085/product.html"
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
    item19: {
        title: "Capri 7-Piece Dining Set",
        price: "$899",
        originalPrice: "$1,799",
        description: "Elegant dining set with natural marble table top and wood trestle base. Includes 6 linen side chairs for complete dining solution.",
        features: [
            "7-piece complete dining set",
            "Natural marble table top",
            "Wood trestle base design",
            "6 linen upholstered side chairs",
            "Classic traditional styling",
            "Seats up to 6 people comfortably"
        ],
        specifications: [
            "Pieces: Table + 6 chairs",
            "Table Top: Natural marble",
            "Base: Wood trestle design",
            "Chairs: Linen upholstery",
            "Seating: 6 people",
            "Style: Traditional/Classic"
        ],
        warranty: "Hanover manufacturer warranty",
        link: "https://www.homedepot.com/p/Hanover-Capri-7-Piece-Dining-Set-with-Linen-Side-Chairs-Natural-Marble-Table-Top-and-Wood-Trestle-Base-HDR015-7PC-WHT/324041938"
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
    item21: {
        title: "PLAYSEAT Trophy + Logitech G923 Racing System",
        price: "$449",
        originalPrice: "$998",
        description: "Complete racing setup with PLAYSEAT Trophy chair and Logitech G923 racing wheel system. Professional gaming experience.",
        features: [
            "PLAYSEAT Trophy racing chair",
            "Logitech G923 racing wheel",
            "TrueForce feedback technology",
            "Compatible with PC and consoles",
            "Adjustable seating position",
            "Professional racing experience"
        ],
        specifications: [
            "Chair: PLAYSEAT Trophy Logitech G Edition",
            "Wheel: Logitech G923 TrueForce",
            "Compatibility: PC, PlayStation, Xbox",
            "Feedback: Advanced force feedback",
            "Adjustability: Multiple positions",
            "Setup: Complete racing solution"
        ],
        warranty: "Logitech and PLAYSEAT warranties",
        link: "https://www.logitechg.com/en-us/products/driving/g923-trueforce-sim-racing-wheel.html?bvstate=pg:6/ct:r&utm_source=Google&utm_medium=Paid-Search&utm_campaign=DEPT_FY25_QX_USA_GA_G_DTX-LogiG-Search-DSA_Google_na&gad_source=1&gad_campaignid=21391472588&gbraid=0AAAAADDQ2OwIINePDoRylqzzug63jr7R4&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgORqXreheXP5oYgBusZey9YxNH2YLDQiA5QGV6XZlokMLQzvO3DAiOQaApKjEALw_wcB"
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
        modalBody.innerHTML = `
            <div class="modal-product-info">
                <h2>${product.title}</h2>
                <div class="modal-pricing">
                    <span class="modal-sale-price">${product.price}</span>
                    <span class="modal-original-price">Originally ${product.originalPrice}</span>
                </div>
                <p class="modal-description">${product.description}</p>
                
                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Specifications</h3>
                    <ul class="specs-list">
                        ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Warranty</h3>
                    <p>${product.warranty}</p>
                </div>
                
                <div class="modal-actions">
                    <a href="${product.link}" target="_blank" class="btn-primary">View Full Details</a>
                    <button class="btn-secondary" onclick="closeModal()">Close</button>
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxDots = document.getElementById('lightboxDots');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    
    currentLightboxProduct = productId;
    currentLightboxIndex = imageIndex;
    
    const images = productImages[productId];
    if (!images || images.length === 0) return;
    
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
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
    // Update all product cards to support image cycling
    updateAllProductCards();
    
    // Add click handlers to all product images
    addImageClickHandlers();
    
    // Add error handlers for images
    addImageErrorHandlers();
    
    // Ensure all dynamic content is loaded
    setTimeout(() => {
        addImageErrorHandlers();
    }, 1000);
});

// Function to add click handlers to product images
function addImageClickHandlers() {
    Object.keys(productImages).forEach(productId => {
        const productCard = document.querySelector(`[data-product="${productId}"]`);
        if (productCard) {
            const mainImage = productCard.querySelector('.main-image');
            if (mainImage) {
                mainImage.addEventListener('click', function() {
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