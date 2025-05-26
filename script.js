// Product image arrays - maps each item to its available images
const productImages = {
    item1: ['./item1-1.png', './item1-web1.png', './item1-web2.png'],
    item2: ['./item2-1.png', './item2-web1.png'],
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
    item16: ['./item16-1.png', './item16-web1.png'],
    item18: ['./item18-1.png', './item18-web1.png'],
    item19: ['./item19-1.png', './item19-2.png', './item19-3.png', './item19-web1.png'],
    item20: ['./item20-1.png', './item20-web1.png'],
    item21: ['./item21-1.png', './item21-2.png', './item21-3.png', './item21-web1.png', './item21-web2.png'],
    item22: ['./item22-1.png', './item22-2.png', './item22-web1.png'],
    item23: ['./item23-1.png', './item23-2.png', './item23-web1.png'],
    item24: ['./item24-1.png', './item24-web1.png'],
    item25: ['./item25-1.png'],
    item26: ['./item26-1.png'],
    item27: ['./item27-1.png'],
    item28: ['./item28-1.png'],
    item29: ['./item29-1.png'],
    item30: ['./item30-1.png'],
    item31: ['./item31-2.png', './item31-1.png'],
    item32: ['./item32-1.png'],
    item33: ['./item33-1.png'],
    item34: ['./item34-1.png', './item34-2.png', './item34-3.png'],
    item35: ['./item35-1.png'],
    item36: ['./item36-1.png'],
    item37: ['./item37-1.png', './item37-2.png'],
    item38: ['./item38-1.png'],
    item39: ['./item39-1.png'],
    item40: ['./item40-1.png']
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

// Current language state (removed - English only)
// let currentLanguage = 'en';

// Translation labels (removed - English only)
/* const translations = {
    en: {
        keyFeatures: "Key Features",
        specifications: "Specifications",
        viewFullDetails: "View Full Details",
        close: "Close",
        save: "Save"
    },
    hu: {
        keyFeatures: "Főbb jellemzők",
        specifications: "Műszaki adatok",
        viewFullDetails: "Teljes részletek megtekintése",
        close: "Bezárás",
        save: "Megtakarítás"
    },
    pl: {
        keyFeatures: "Główne cechy",
        specifications: "Specyfikacje",
        viewFullDetails: "Zobacz pełne szczegóły",
        close: "Zamknij",
        save: "Oszczędność"
    }
}; */

// Product detailed information
const productDetails = {
    item1: {
        title: "DreamCloud Premier Hybrid King Mattress + Bed Frame",
        price: "$499",
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
            "Modern black finish"
        ],
        specifications: [
            "Dimensions: 19.7\"W x 15.7\"D x 17.9\"H each",
            "Material: Wood with metal legs",
            "Color: Black",
            "Drawer slides: Smooth operating",
            "Weight capacity: Suitable for bedside essentials"
        ],
        link: "https://www.homedepot.com/pep/FUFU-GAGA-2-Drawer-Black-Wooden-Nightstand-Bedside-Table-With-4-Metal-Legs-15-7-in-D-x-19-7-in-W-x-17-9-in-H-KF200155-01/318148664?g_store=&source=shoppingads&locale=en-US&pla&mtc=SHOPPING-BF-HDH-GGL-D59H-059_034_INT_FURN-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX&cm_mmc=SHOPPING-BF-HDH-GGL-D59H-059_034_INT_FURN-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX-21266992005--&gad_source=1&gad_campaignid=21273442763&gbraid=0AAAAADq61Ud5nz66Xbz-vKuoJ5TDx1WqF&gclid=CjwKCAjw87XBBhBIEiwAxP3_A2Xw5vITMLJXTprpL0Phw1SMOQqEbjbOwF4JbqmHYQU_Vu7sChqflxoCfKIQAvD_BwE&gclsrc=aw.ds"
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
            "Durable construction"
        ],
        specifications: [
            "Material: Engineered wood",
            "Color: Modern finish",
            "Weight capacity: Supports most TVs",
            "Storage: Multiple shelves and compartments",
            "Style: Contemporary"
        ],
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
            "Adjustable shelving"
        ],
        specifications: [
            "Material: Wood composite",
            "Shelves: Multiple adjustable levels",
            "Weight capacity: Suitable for books and electronics",
            "Finish: Wood grain",
            "Style: Traditional"
        ],
        link: "#"
    },
    item8: {
        title: "Denny Fabric Power Recline 4-Piece Sectional",
        price: "$499",
        originalPrice: "$2,999",
        description: "Luxury power reclining sectional sofa in ash grey. Features power headrests, USB charging, and premium fabric upholstery.",
        features: [
            "4-piece sectional configuration",
            "Power reclining mechanism",
            "Power adjustable headrests",
            "Premium ash grey fabric",
            "Memory foam cushioning",
            "Zero wall clearance reclining"
        ],
        specifications: [
            "Configuration: 4-piece sectional",
            "Upholstery: Premium fabric",
            "Color: Ash Grey",
            "Power Features: Reclining and headrests",
            "Frame: Hardwood construction"
        ],
        link: "https://www.kasala.com/catalog/product/furniture/denny-fabric-power-recline-4-piece-sectional-ash-grey/?sku=350163&gad_source=1&gad_campaignid=17347513802&gbraid=0AAAAAC1yhrvVp-3ym33uw1rnXOw6NPLwd&gclid=CjwKCAjw87XBBhBIEiwAxP3_A9FwtM0tndTr8TeX4-4YXm6j-FqHkjSpImjlY84_ns-WARADcU0IMRoCm4gQAvD_BwE"
    },
    item9: {
        title: "50\" White Rectangle Pine Console Table",
        price: "$49",
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
            "Style: Retro-modern"
        ],
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
            "Storage: Wine glasses and bottles"
        ],
        link: "https://www.bedbathandbeyond.com/Home-Garden/Chrome-Bar-Cart-3-tier-Home-Bar-Serving-Cart-with-Locking-Caster-Wheels/36148263/product.html"
    },
    item11: {
        title: "La-Z-Boy Kennedy Full Sleep Sofa",
        price: "$499",
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
        link: "https://www.la-z-boy.com/p/living-room-sofas-stationary-sofas/kennedy-full-sleep-sofa/_/R-520593?region_id=50861778&WT.srch=1&cid=search&cid_account=USA_Tier1&cid_campaign=&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=&gad_source=1&gad_campaignid=17326288297&gbraid=0AAAAADL1GQZmS8Y4gzt0uaf4EhVEJRy98&gclid=CjwKCAjw87XBBhBIEiwAxP3_A3qpv-b1GG6TVGSthPMsN3N1XJvsfcC9g7lLmJnyHKAP7Jbx7W7EbxoCF4YQAvD_BwE"
    },
    item12: {
        title: "La-Z-Boy Astor Platinum Power Lift Recliner",
        price: "$499",
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
        link: "https://www.la-z-boy.com/i/living-room-recliners-power-lift-chairs/astor-platinum-power-lift-recliner-w-headrest--lumbar-in-stock/_/R-1PH519"
    },
    item13: {
        title: "Devinci St. Tropez XL Bicycle",
        price: "$199",
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
        link: "#"
    },
    item14: {
        title: "EMOVE Cruiser Electric Scooter",
        price: "$349",
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
        link: "https://www.voromotors.com/pages/search-results-page?q=emove%20cruiser"
    },
    item16: {
        title: "11-12 ft. Deluxe Aluminum Patio Umbrella",
        price: "$199",
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
        link: "https://www.bedbathandbeyond.com/Home-Garden/Deluxe-Aluminum-Offset-Umbrella-Patio-Cantilever-Umbrella/36035085/product.html"
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
        link: "https://www.amazon.com/dp/B07T2FWL8Q"
    },
    item19: {
        title: "Capri 7-Piece Dining Set",
        price: "$499",
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
        link: "https://store.steelcase.com/steelcase-karman-ready-to-ship?qid=57fcd00681da843f1e0c2fc312b7b7b2&i=13"
    },
    item25: {
        title: "Humanscale World One Task Chair",
        price: "$199",
        originalPrice: "$684",
        description: "Award-winning ergonomic task chair featuring innovative tri-panel mesh back and weight-sensitive recline. Designed for all-day comfort without complex adjustments.",
        features: [
            "Tri-panel mesh backrest for custom lumbar support",
            "Weight-sensitive recline (no manual adjustments needed)",
            "Armrests attached to back move with user",
            "Frameless front edge prevents leg pressure",
            "Supports users 5'0\" to 6'4\" (up to 400 lbs)",
            "Minimal 27 lb design with eco-friendly materials",
            "Self-adjusting mechanism using physics and body weight",
            "Promotes active sitting and core engagement"
        ],
        specifications: [
            "Width: 25.75\" (25\" arm base)",
            "Seat Height: 15.6\" - 20.75\"",
            "Recline: 17° + 8° backrest tilt",
            "Weight: 27 lbs with arms",
            "Capacity: 400 lbs maximum",
            "Material: High-quality mesh construction",
            "Adjustments: Height, seat depth, arm height"
        ],
        link: "https://www.humanscale.com/products/world-one-task-chair-configurator.cfm?_gl=1*7erf4n*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwotDBBhCQARIsAG5pinNZ8k8ib8X_aj19ogfTs9ddqQ2_JgG7y-Ew4lDeOrZZW-3JBk_sPQIaAr-2EALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADeBWM3FWlm4RwMG01U3D6XJ6LUUi"
    },
    item26: {
        title: "IKEA L-Shaped Computer Desk",
        price: "$49",
        originalPrice: "$249",
        description: "Modern L-shaped corner desk with integrated storage. Features light wood-grain finish top with white base and built-in 3-drawer filing cabinet.",
        features: [
            "L-shaped corner design maximizes workspace",
            "Light wood-grain laminate top (birch/oak finish)",
            "Built-in 3-drawer filing cabinet",
            "Cable management with desk grommet",
            "Sturdy white metal frame and panels",
            "Generous work surface for dual monitors",
            "Left-hand return configuration",
            "Clean, minimalist Scandinavian design"
        ],
        specifications: [
            "Configuration: L-shaped corner desk",
            "Finish: Light wood-grain top, white base",
            "Storage: 3-drawer filing cabinet",
            "Desktop thickness: Standard laminate",
            "Cable management: Built-in grommet",
            "Condition: Gently used, excellent condition",
            "Ideal for: Home office or study"
        ],
        link: "#"
    },
    item27: {
        title: "BlueVua ROPOT Countertop Reverse Osmosis System",
        price: "$59",
        originalPrice: "$454",
        description: "Premium countertop water purification system with 5-stage reverse osmosis filtration. Features glass carafe, smart LED display, and no installation required.",
        features: [
            "5-stage RO filtration removes 99.99% of contaminants",
            "0.0001μm RO membrane blocks bacteria, viruses, heavy metals",
            "Premium borosilicate glass carafe (no plastic)",
            "Smart LED display shows filter life and water quality",
            "2:1 pure to drain ratio saves water",
            "100 GPD production capacity",
            "Plug-and-play design, no plumbing required",
            "Auto power-saving standby mode",
            "Real-time TDS monitoring"
        ],
        specifications: [
            "Flow Rate: 0.26L/min (4 gallons/hour)",
            "Carafe Capacity: 40 oz (1.2L) glass container",
            "Daily Production: 100 gallons pure water",
            "Water Efficiency: 2:1 pure to waste ratio",
            "Filter Life: 12-24 months",
            "Filtration: PP, CTO, RO, PCF stages",
            "Contaminants Removed: Chlorine, lead, fluoride, arsenic, 99.99%",
            "Certifications: NSF/ANSI 58, NSF/ANSI 372"
        ],
        link: "https://bluevua.com/"
    },
    item28: {
        title: "Ninja Professional Blender with 72oz Pitcher",
        price: "$39",
        originalPrice: "$139",
        description: "Powerful 1000-watt professional blender with Total Crushing® technology. Features 72oz BPA-free pitcher perfect for large batches of smoothies, frozen drinks, and more.",
        features: [
            "1000-watt motor base for professional performance",
            "72oz Total Crushing® pitcher (64oz max liquid capacity)",
            "Crush ice and frozen fruit in seconds",
            "6-blade assembly pulverizes ice to snow",
            "BPA-free and dishwasher safe pitcher",
            "3 speed settings plus pulse function",
            "Non-slip base for stability",
            "Cord storage for convenience"
        ],
        specifications: [
            "Power: 1000 watts",
            "Pitcher Capacity: 72oz total (64oz liquid)",
            "Blade Assembly: 6-blade Total Crushing",
            "Speed Settings: 3 speeds + pulse",
            "Material: BPA-free plastic",
            "Dishwasher Safe: Yes (pitcher and lid)",
            "Color: Black/Clear",
            "Condition: Excellent, lightly used"
        ],
        link: "https://www.amazon.com/dp/B0CDCTBMKX"
    },
    item29: {
        title: "Ninja AF101 Air Fryer 4-Quart",
        price: "$39",
        originalPrice: "$119",
        description: "Compact 4-quart air fryer with 1550W power. Features 4 cooking functions and wide temperature range from 105°F to 400°F for versatile cooking.",
        features: [
            "4-quart ceramic-coated nonstick basket",
            "4-in-1 functionality: Air Fry, Roast, Reheat, Dehydrate",
            "Wide temperature range: 105°F to 400°F",
            "1550-watt high-speed air circulation",
            "Digital control panel with timer",
            "PTFE/PFOA-free nonstick coating",
            "Dishwasher-safe parts for easy cleanup",
            "Compact design fits on countertop"
        ],
        specifications: [
            "Capacity: 4 quarts (serves 2-3 people)",
            "Power: 1550 watts",
            "Temperature Range: 105°F - 400°F",
            "Basket: 8.5\" diameter x 4.5\" deep",
            "Functions: Air Fry, Roast, Reheat, Dehydrate",
            "Timer: Up to 30 minutes",
            "Color: Black/Gray",
            "Condition: Excellent, barely used"
        ],
        link: "https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q"
    },
    item30: {
        title: "Anova Sous Vide Precision Cooker Kit with Vacuum Sealer",
        price: "$39",
        originalPrice: "$199",
        description: "Complete sous vide cooking system with Anova Precision Cooker 3.0 and vacuum sealer. Professional restaurant-quality results at home with WiFi connectivity.",
        features: [
            "Anova Precision Cooker 3.0 with 1100W power",
            "Precision vacuum sealer included",
            "WiFi connectivity for remote control",
            "Temperature range: 32°F to 197°F (±0.2°F accuracy)",
            "Flow rate: 8 liters per minute",
            "Touch screen display with timer",
            "Adjustable clamp fits any pot",
            "Includes vacuum sealer bags",
            "App with thousands of recipes"
        ],
        specifications: [
            "Sous Vide Power: 1100 watts",
            "Temperature Range: 32°F - 197°F",
            "Accuracy: ±0.2°F (0.1°C)",
            "WiFi: Dual-band 802.11 b/g/n",
            "Display: Two-line touch screen",
            "Vacuum Sealer: Wet & dry modes",
            "Compatibility: iOS and Android app",
            "Condition: Like new, barely used"
        ],
        link: "https://www.amazon.com/Anova-Culinary-AN525-US00-Precision-Cooker/dp/B0BQ9F56WV"
    },
    item31: {
        title: "Mac Sports Heavy Duty Camp Chairs (Set of 2)",
        price: "$59",
        originalPrice: "$236",
        description: "Two heavy-duty aluminum camp chairs with 375 lb capacity each. Features comfortable stretch-tight fabric, cup holders, and compact folding design.",
        features: [
            "Set of 2 heavy-duty camp chairs",
            "375 lb weight capacity per chair",
            "Durable aluminum frame construction",
            "Stretch-tight fabric for comfort",
            "Locking frame mechanism for safety",
            "2 convenient cup holders per chair",
            "Compact folding design",
            "Lightweight at 12.87 lbs per chair"
        ],
        specifications: [
            "Capacity: 375 lbs per chair",
            "Open Size: 27.56\" W x 26.77\" D",
            "Folded Size: 7.87\" W x 45.28\" H x 11.61\" D",
            "Weight: 12.87 lbs per chair",
            "Frame: Heavy-duty aluminum",
            "Fabric: Stretch-tight material",
            "Color: Black",
            "Includes: 2 complete chairs"
        ],
        link: "https://www.walmart.com/ip/Mac-Sports-Heavy-Duty-Camp-Chair/5494358715"
    },
    item32: {
        title: "COHO 24-Quart Injection Molded Cooler",
        price: "$39",
        originalPrice: "$114",
        description: "Lightweight injection-molded cooler with foam-filled body and lid. Holds up to 32 cans with excellent ice retention for up to 7 days.",
        features: [
            "24-quart capacity holds up to 32 cans",
            "Foam-filled injection molded construction",
            "30% lighter than roto-molded coolers",
            "Up to 7-day ice retention",
            "Stainless steel bottle opener",
            "Comfort grip carry handle",
            "Built-in fish ruler on lid",
            "Double drain plug system",
            "Padlock-compatible for security"
        ],
        specifications: [
            "Capacity: 24 quarts (32 cans)",
            "Dimensions: 18.9\" W x 15.5\" L x 17.2\" H",
            "Material: Polypropylene with foam insulation",
            "Weight: 30% lighter than roto-molded",
            "Ice Retention: Up to 7 days",
            "Color: White/Gray",
            "Features: Bottle opener, fish ruler, drains",
            "Condition: Like new"
        ],
        link: "https://www.walmart.com/ip/COHO-24-quart-Injection-Molded-Cooler/5625009582"
    },
    item33: {
        title: "Mac Sports XL Folding Wagon with Brakes",
        price: "$39",
        originalPrice: "$140",
        description: "Heavy-duty folding wagon with 350 lb capacity, all-terrain wheels, and braking system. Back unzips for longer cargo transport.",
        features: [
            "350 lb maximum load capacity",
            "All-terrain wheels for any surface",
            "Built-in braking system",
            "Back panel unzips for longer cargo",
            "Easy-fold steel frame",
            "No assembly required",
            "Inside zipper pocket for storage",
            "Lightweight at 24.8 lbs"
        ],
        specifications: [
            "Capacity: 350 lbs (159 kg)",
            "Open Size: 38.6\" x 21.7\" x 25.4\"",
            "Folded Size: 21.7\" x 7.9\" x 32.1\"",
            "Weight: 24.8 lbs (11.25 kg)",
            "Frame: Heavy-duty steel",
            "Wheels: All-terrain with brakes",
            "Special Feature: Expandable back panel",
            "Color: Black/Navy Blue"
        ],
        link: "https://www.walmart.com/ip/Mac-Sports-XL-Folding-Wagon-with-Brakes-Maximum-Load-350-lb-All-terrain-Wheels-Back-Unzips-for-Longer-Cargo/5440153203"
    },
    item34: {
        title: "Rowenta Iron Steam Station with Ironing Board",
        price: "$99",
        originalPrice: "$479",
        description: "Professional-grade steam station with stainless steel soleplate and luxury ironing board. Powerful continuous steam for efficient wrinkle removal.",
        features: [
            "Professional stainless steel soleplate",
            "Large 1.4L removable water tank",
            "430g/min steam boost power",
            "7 bar pressure for deep fabric penetration",
            "Anti-calc collector for easy maintenance",
            "Vertical steam function",
            "Auto shut-off safety feature",
            "Includes luxury full-size ironing board"
        ],
        specifications: [
            "Water Tank: 1.4 liters removable",
            "Steam Output: 120g/min continuous",
            "Steam Boost: 430g/min",
            "Pressure: 7 bars",
            "Soleplate: Stainless steel",
            "Heat-up Time: 2 minutes",
            "Cord Length: 6 feet",
            "Board Included: Yes - luxury model"
        ],
        link: "https://www.amazon.com/Rowenta-DG8624U1-Stainless-Soleplate-Professional/dp/B07FKHB72X"
    },
    item35: {
        title: "Metal Coat Rack Stand with Natural Marble Base",
        price: "$19",
        originalPrice: "$76",
        description: "Modern freestanding coat rack with sturdy metal construction and elegant natural marble base. Perfect for entryways, bedrooms, or offices.",
        features: [
            "Heavy natural marble base for stability",
            "Premium metal construction",
            "Multiple hanging hooks at different heights",
            "Modern minimalist design",
            "No assembly required",
            "Anti-slip base padding",
            "Suitable for coats, hats, bags, and scarves",
            "Space-saving vertical storage"
        ],
        specifications: [
            "Base Material: Natural marble",
            "Frame Material: Metal with powder coating",
            "Height: Approximately 70 inches",
            "Base Diameter: 12 inches",
            "Weight Capacity: 30+ lbs",
            "Number of Hooks: 6-8 at various heights",
            "Color: Black metal with white marble",
            "Assembly: None required"
        ],
        link: "https://www.amazon.com/dp/B0933BRM86"
    },
    item36: {
        title: "Premium Cookware Set - Pots and Pans Collection",
        price: "$89",
        originalPrice: "$500+",
        description: "Comprehensive collection of high-quality cookware including T-fal non-stick pans, stainless steel pots, ceramic dishes, and more. Everything you need for a complete kitchen.",
        features: [
            "Multiple T-fal non-stick frying pans (various sizes)",
            "Large stockpot with glass lid",
            "Stainless steel saucepans with lids",
            "Ceramic/enamel coated Dutch oven",
            "Square grill pan",
            "Small and medium saucepots",
            "Glass baking dishes",
            "Wire cooling/roasting rack",
            "All items in excellent condition",
            "Mix of premium brands"
        ],
        specifications: [
            "Set includes approximately 15+ pieces",
            "T-fal Thermo-Spot heat indicator technology",
            "Non-stick coating on frying pans",
            "Dishwasher safe pieces",
            "Oven-safe cookware",
            "Glass lids for monitoring cooking",
            "Various sizes from small to extra large",
            "Materials: Non-stick aluminum, stainless steel, ceramic"
        ],
        link: "#"
    },
    item37: {
        title: "Dyson Purifier Humidify+Cool PH03",
        price: "$199",
        originalPrice: "$699",
        description: "Advanced 3-in-1 air treatment system that purifies, humidifies, and cools. HEPA filtration captures 99.97% of particles and removes gases and odors.",
        features: [
            "3-in-1 functionality: purifies, humidifies, and cools",
            "HEPA H13 filter captures 99.97% of particles as small as 0.3 microns",
            "Activated carbon filter removes gases and odors",
            "Ultraviolet Cleanse technology kills 99.9% of bacteria in water",
            "Air Multiplier technology for whole room circulation",
            "Real-time air quality monitoring and display",
            "Quiet operation with night mode",
            "WiFi enabled with Dyson Link app control"
        ],
        specifications: [
            "Coverage: Up to 400 sq ft",
            "Tank Capacity: 1 gallon",
            "Humidification: Up to 36 hours continuous",
            "Filtration: HEPA H13 + Activated Carbon",
            "Airflow: 350° oscillation",
            "Dimensions: 36.3\" H x 12.2\" W",
            "Weight: 19.4 lbs",
            "Color: White/Silver"
        ],
        link: "https://www.dyson.com/air-treatment/air-purifier-humidifiers/purifier-humidify-cool-ph03"
    },
    item38: {
        title: "Entryway Shoe Storage Cabinet with Flip Doors - 2-Tier",
        price: "$39",
        originalPrice: "$150",
        description: "Space-saving shoe storage cabinet with flip-down doors. Perfect for entryways, hallways, or bedrooms. Keeps shoes organized and out of sight.",
        features: [
            "2-tier design with flip-down doors",
            "Holds up to 12 pairs of shoes",
            "Space-saving vertical storage",
            "Modern brown wood finish",
            "Easy-access flip door design",
            "Ventilated design prevents odors",
            "Sturdy construction",
            "Easy assembly required"
        ],
        specifications: [
            "Material: Engineered wood",
            "Color: Brown wood grain finish",
            "Dimensions: 31.5\" W x 9.5\" D x 24\" H",
            "Capacity: 12 pairs of shoes (6 per tier)",
            "Door Type: Flip-down magnetic closure",
            "Weight: Approximately 30 lbs",
            "Assembly: Required (hardware included)",
            "Style: Modern minimalist"
        ],
        link: "https://www.bedbathandbeyond.com/Home-Garden/Shoe-Cabinet-Brown-Shoe-Storage-Organizer-with-2-Compartment-2-Tier/36087582/product.html"
    },
    item39: {
        title: "Dyson V11 Origin Cordless Vacuum",
        price: "$99",
        originalPrice: "$470",
        description: "Powerful cordless vacuum with advanced whole-machine filtration. Intelligently optimizes suction and run time across all floor types.",
        features: [
            "Up to 60 minutes of fade-free suction",
            "Advanced whole-machine filtration",
            "LCD screen displays real-time performance",
            "3 cleaning modes for different tasks",
            "Point-and-shoot hygienic bin emptying",
            "Converts to handheld vacuum",
            "Wall-mounted docking station included",
            "Multiple attachments for versatile cleaning"
        ],
        specifications: [
            "Run Time: Up to 60 minutes",
            "Charge Time: 4.5 hours",
            "Bin Capacity: 0.77 liters",
            "Weight: 6.68 lbs",
            "Filtration: Whole-machine HEPA",
            "Cleaning Modes: Eco, Auto, Boost",
            "Color: Nickel/Blue",
            "Attachments: Crevice tool, combination tool, mini motorized tool"
        ],
        link: "https://www.amazon.com/Dyson-Origin-Cordless-Vacuum-Nickel/dp/B00FZPRUTY"
    },
    item40: {
        title: "Modern Decorative Vase Collection",
        price: "$29",
        originalPrice: "$89",
        description: "Set of 3 modern decorative vases in complementary styles. Perfect for dried flowers, pampas grass, or as standalone decorative pieces.",
        features: [
            "Set includes 3 different vase styles",
            "Modern minimalist design",
            "White ceramic center vase with pampas grass",
            "Textured glass accent vases",
            "Various heights for visual interest",
            "Perfect for entryways or dining tables",
            "Works with dried or artificial flowers",
            "Contemporary aesthetic"
        ],
        specifications: [
            "Set Size: 3 vases",
            "Materials: Ceramic and textured glass",
            "Colors: White, clear glass with patterns",
            "Tallest Vase: Approximately 12 inches",
            "Medium Vase: Approximately 8 inches",
            "Small Vase: Approximately 6 inches",
            "Style: Modern/Contemporary",
            "Pampas grass included with center vase"
        ],
        link: "#"
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

// Update modal content (English only)
function updateModalContent(productId) {
    const modalBody = document.getElementById('modalBody');
    const product = productDetails[productId];
    
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
            
            <div class="modal-actions">
                <a href="${product.link}" target="_blank" class="btn-primary">View Full Details</a>
                <button class="btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
}

// Change language function (removed - English only)
// function changeLanguage(lang, productId) {
//     currentLanguage = lang;
//     updateModalContent(productId);
// }

// Product translations (removed - English only)
/* const productTranslations = {
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
            ]
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
            ]
        }
    },
    item6: {
        hu: {
            title: "LG C1 65\" Class 4K Smart OLED TV AI ThinQ®-val",
            description: "Prémium 65 hüvelykes OLED TV lenyűgöző képminőséggel, tökéletes feketékkel és okos funkciókkal. Ideális játékhoz és szórakoztatáshoz.",
            features: [
                "Önvilágító OLED pixelek a tökéletes feketékért",
                "α9 Gen4 AI processzor 4K",
                "Dolby Vision IQ és Dolby Atmos",
                "HDMI 2.1 mind a 4 porton (4K@120Hz)",
                "VRR, G-SYNC kompatibilitás, 1ms válaszidő",
                "webOS okos platform ThinQ AI-val",
                "Beépített Google Assistant és Alexa",
                "FILMMAKER MODE™ támogatás"
            ],
            specifications: [
                "Képernyő mérete: 64,5 hüvelyk átló",
                "Felbontás: 3840 x 2160 (4K UHD)",
                "Kijelző típusa: OLED",
                "Frissítési gyakoriság: 40Hz - 120Hz",
                "Látószög: 178° vízszintes/függőleges",
                "Játék funkciók: 1ms válaszidő, VRR",
                "Csatlakozás: 4x HDMI 2.1, Ethernet, Wi-Fi"
            ],
        },
        pl: {
            title: "LG C1 65\" Class 4K Smart OLED TV z AI ThinQ®",
            description: "Premium 65-calowy telewizor OLED z oszałamiającą jakością obrazu, idealnymi czerniami i funkcjami smart. Idealny do gier i rozrywki.",
            features: [
                "Samoświecące piksele OLED dla idealnych czerni",
                "Procesor α9 Gen4 AI 4K",
                "Dolby Vision IQ i Dolby Atmos",
                "HDMI 2.1 na wszystkich 4 portach (4K@120Hz)",
                "VRR, kompatybilność G-SYNC, czas reakcji 1ms",
                "Platforma webOS smart z ThinQ AI",
                "Wbudowany Google Assistant i Alexa",
                "Wsparcie FILMMAKER MODE™"
            ],
            specifications: [
                "Rozmiar ekranu: 64,5 cala przekątna",
                "Rozdzielczość: 3840 x 2160 (4K UHD)",
                "Typ wyświetlacza: OLED",
                "Częstotliwość odświeżania: 40Hz - 120Hz",
                "Kąty widzenia: 178° poziomo/pionowo",
                "Funkcje gamingowe: czas reakcji 1ms, VRR",
                "Łączność: 4x HDMI 2.1, Ethernet, Wi-Fi"
            ],
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
        },
        pl: {
            title: "FUFU&GAGA 2-szufladowe czarne drewniane szafki nocne (zestaw 2 szt.)",
            description: "Nowoczesne czarne drewniane szafki nocne z czystymi liniami i funkcjonalnym przechowywaniem. Idealne do współczesnego wystroju sypialni.",
            features: [
                "Zestaw 2 pasujących szafek nocnych",
                "2 przestronne szuflady na jednostkę",
                "Trwała drewniana konstrukcja",
                "4 solidne metalowe nogi dla stabilności",
                "Nowoczesne czarne wykończenie"
            ],
            specifications: [
                "Wymiary: 19.7\"S x 15.7\"G x 17.9\"W każda",
                "Materiał: Drewno z metalowymi nogami",
                "Kolor: Czarny",
                "Prowadnice szuflad: Płynne działanie",
                "Nośność: Odpowiednia na przybory nocne"
            ]
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
                "Biztonság: Felborulás gátló mellékelve"
            ]
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
                "Bezpieczeństwo: Zawiera ogranicznik przechyłu"
            ]
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
                "Tartós konstrukció"
            ],
            specifications: [
                "Anyag: Műszaki fa",
                "Szín: Modern felület",
                "Teherbírás: A legtöbb TV-t megtartja",
                "Tárolás: Több polc és rekesz",
                "Stílus: Kortárs"
            ]
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
                "Styl: Współczesny"
            ]
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
                "Állítható polcok"
            ],
            specifications: [
                "Anyag: Fa kompozit",
                "Polcok: Több állítható szint",
                "Teherbírás: Alkalmas könyvekhez és elektronikához",
                "Felület: Fa erezetű",
                "Stílus: Hagyományos"
            ]
        },
        pl: {
            title: "Regał/stojak na media HiFi",
            description: "Wszechstronna jednostka do przechowywania idealna na książki, sprzęt medialny i przedmioty dekoracyjne. Klasyczny design pasujący do każdego pokoju.",
            features: [
                "Wiele poziomów półek",
                "Solidna konstrukcja",
                "Idealny na książki i media",
                "Klasyczne drewniane wykończenie",
                "Regulowane półki"
            ],
            specifications: [
                "Materiał: Kompozyt drzewny",
                "Półki: Wiele regulowanych poziomów",
                "Nośność: Odpowiednia dla książek i elektroniki",
                "Wykończenie: Imitacja drewna",
                "Styl: Tradycyjny"
            ]
        }
    },
    item8: {
        hu: {
            title: "Denny szövet elektromos dönthető 4 részes szekcionált kanapé",
            description: "Luxus elektromos dönthető szekcionált kanapé hamuszürke színben. Elektromos fejtámlákkal, USB töltőportokkal és prémium szövet kárpitozással.",
            features: [
                "4 részes szekcionált konfiguráció",
                "Elektromos döntési mechanizmus",
                "Elektromosan állítható fejtámlák",
                "Beépített USB töltőportok",
                "Prémium hamuszürke szövet",
                "Memóriahab párnázás",
                "Nulla fal távolság döntés"
            ],
            specifications: [
                "Konfiguráció: 4 részes szekcionált",
                "Kárpitozás: Prémium szövet",
                "Szín: Hamuszürke",
                "Elektromos funkciók: Döntés és fejtámlák",
                "Töltés: USB portok mellékelve",
                "Keret: Keményfa konstrukció"
            ],
        },
        pl: {
            title: "Denny tkaninowa 4-częściowa narożnik z elektrycznym rozkładaniem",
            description: "Luksusowa narożnik z elektrycznym rozkładaniem w kolorze popielatoszarym. Posiada elektryczne zagłówki, porty ładowania USB i premium tapicerkę tkaninową.",
            features: [
                "4-częściowa konfiguracja narożnika",
                "Mechanizm elektrycznego rozkładania",
                "Elektrycznie regulowane zagłówki",
                "Premium popielatoszara tkanina",
                "Poduszki z pianki pamięciowej",
                "Rozkładanie bez odstępu od ściany"
            ],
            specifications: [
                "Konfiguracja: 4-częściowy narożnik",
                "Tapicerka: Premium tkanina",
                "Kolor: Popielatoszary",
                "Funkcje elektryczne: Rozkładanie i zagłówki",
                "Rama: Konstrukcja z twardego drewna"
            ],
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
                "Stílus: Retro-modern"
            ]
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
                "Styl: Retro-nowoczesny"
            ]
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
                "Tárolás: Borospoharak és palackok"
            ]
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
                "Przechowywanie: Kieliszki do wina i butelki"
            ]
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
        }
    },
    item14: {
        hu: {
            title: "EMOVE Cruiser elektromos roller",
            description: "Nagy hatótávolságú elektromos roller kettős felfüggesztéssel és erős 1600W motorral. Tökéletes ingázáshoz és szabadidőhöz.",
            features: [
                "52V akkumulátor rendszer",
                "1600W erős motor",
                "Kettős felfüggesztési rendszer",
                "Nagy hatótávolságú képesség",
                "Kiváló minőségű konstrukció",
                "Fejlett fékrendszer"
            ],
            specifications: [
                "Motor: 1600W",
                "Akkumulátor: 52V rendszer",
                "Felfüggesztés: Kettős első és hátsó",
                "Hatótáv: Nagy távolságra képes",
                "Fékek: Fejlett tárcsafék rendszer",
                "Teherbírás: Felnőtt használatra"
            ],
        },
        pl: {
            title: "Hulajnoga elektryczna EMOVE Cruiser",
            description: "Hulajnoga elektryczna dalekiego zasięgu z podwójnym zawieszeniem i mocnym silnikiem 1600W. Idealna do dojazdów i rekreacji.",
            features: [
                "System baterii 52V",
                "Mocny silnik 1600W",
                "System podwójnego zawieszenia",
                "Możliwość dalekiego zasięgu",
                "Wysokiej jakości konstrukcja",
                "Zaawansowany system hamulcowy"
            ],
            specifications: [
                "Silnik: 1600W",
                "Bateria: System 52V",
                "Zawieszenie: Podwójne przód i tył",
                "Zasięg: Zdolny do dużych odległości",
                "Hamulce: Zaawansowany system hamulców tarczowych",
                "Nośność: Dla dorosłego użytkownika"
            ],
        }
    },
    item16: {
        hu: {
            title: "11-12 láb Deluxe alumínium kerti napernyő",
            description: "Nagy konzolos kerti napernyő talppal együtt. Kiváló árnyékot biztosít kültéri terekhez.",
            features: [
                "11-12 láb átmérőjű fedési terület",
                "Konzolos dizájn",
                "Alumínium konstrukció",
                "Talp mellékelve",
                "Időjárásálló szövet",
                "Könnyű döntési mechanizmus"
            ],
            specifications: [
                "Méret: 11-12 láb átmérő",
                "Típus: Konzolos",
                "Anyag: Alumínium keret",
                "Talp: Mellékelve",
                "Szövet: Időjárásálló",
                "Működés: Könnyű döntés és forgatás"
            ],
        },
        pl: {
            title: "11-12 stóp Deluxe aluminiowy parasol ogrodowy",
            description: "Duży parasol ogrodowy typu cantilever z bazą w zestawie. Zapewnia doskonały cień dla przestrzeni zewnętrznych.",
            features: [
                "11-12 stóp obszar pokrycia",
                "Design typu cantilever",
                "Konstrukcja aluminiowa",
                "Baza w zestawie",
                "Tkanina odporna na warunki atmosferyczne",
                "Łatwy mechanizm przechylania"
            ],
            specifications: [
                "Rozmiar: 11-12 stóp średnicy",
                "Typ: Cantilever",
                "Materiał: Rama aluminiowa",
                "Baza: W zestawie",
                "Tkanina: Odporna na pogodę",
                "Obsługa: Łatwe przechylanie i obracanie"
            ],
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
        }
    },
    item19: {
        hu: {
            title: "Capri 7 részes étkező garnitúra",
            description: "Elegáns étkező garnitúra természetes márvány asztallal és fa bakláb alappal. 6 vászon oldalsó széket tartalmaz a teljes étkezési megoldáshoz.",
            features: [
                "7 részes komplett étkező garnitúra",
                "Természetes márvány asztallap",
                "Fa bakláb alap dizájn",
                "6 vászon kárpitozott oldalsó szék",
                "Klasszikus hagyományos stílus",
                "Kényelmesen elfér 6 személy"
            ],
            specifications: [
                "Darabok: Asztal + 6 szék",
                "Asztallap: Természetes márvány",
                "Alap: Fa bakláb dizájn",
                "Székek: Vászon kárpitozás",
                "Ülőhelyek: 6 személy",
                "Stílus: Hagyományos/Klasszikus"
            ],
        },
        pl: {
            title: "Zestaw jadalny Capri 7-częściowy",
            description: "Elegancki zestaw jadalny z naturalnym marmurowym blatem i drewnianą podstawą kozłową. Zawiera 6 lnianych krzeseł bocznych dla kompletnego rozwiązania jadalnianego.",
            features: [
                "7-częściowy kompletny zestaw jadalny",
                "Naturalny marmurowy blat stołu",
                "Drewniana podstawa kozłowa",
                "6 lnianych tapicerowanych krzeseł bocznych",
                "Klasyczny tradycyjny styl",
                "Wygodnie mieści do 6 osób"
            ],
            specifications: [
                "Części: Stół + 6 krzeseł",
                "Blat stołu: Naturalny marmur",
                "Podstawa: Drewniana konstrukcja kozłowa",
                "Krzesła: Tapicerka lniana",
                "Miejsca siedzące: 6 osób",
                "Styl: Tradycyjny/Klasyczny"
            ],
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
        }
    },
    item21: {
        hu: {
            title: "PLAYSEAT Trophy + Logitech G923 verseny rendszer",
            description: "Komplett verseny beállítás PLAYSEAT Trophy székkel és Logitech G923 verseny kormány rendszerrel. Professzionális játék élmény.",
            features: [
                "PLAYSEAT Trophy verseny szék",
                "Logitech G923 verseny kormány",
                "TrueForce visszajelzés technológia",
                "Kompatibilis PC-vel és konzolokkal",
                "Állítható ülési pozíció",
                "Professzionális verseny élmény"
            ],
            specifications: [
                "Szék: PLAYSEAT Trophy Logitech G Edition",
                "Kormány: Logitech G923 TrueForce",
                "Kompatibilitás: PC, PlayStation, Xbox",
                "Visszajelzés: Fejlett erő visszajelzés",
                "Állíthatóság: Több pozíció",
                "Beállítás: Komplett verseny megoldás"
            ],
        },
        pl: {
            title: "PLAYSEAT Trophy + system wyścigowy Logitech G923",
            description: "Kompletna konfiguracja wyścigowa z fotelem PLAYSEAT Trophy i systemem kierownicy wyścigowej Logitech G923. Profesjonalne wrażenia z gry.",
            features: [
                "Fotel wyścigowy PLAYSEAT Trophy",
                "Kierownica wyścigowa Logitech G923",
                "Technologia sprzężenia zwrotnego TrueForce",
                "Kompatybilny z PC i konsolami",
                "Regulowana pozycja siedzenia",
                "Profesjonalne wrażenia wyścigowe"
            ],
            specifications: [
                "Fotel: PLAYSEAT Trophy Logitech G Edition",
                "Kierownica: Logitech G923 TrueForce",
                "Kompatybilność: PC, PlayStation, Xbox",
                "Sprzężenie zwrotne: Zaawansowane sprzężenie siłowe",
                "Regulacja: Wiele pozycji",
                "Konfiguracja: Kompletne rozwiązanie wyścigowe"
            ],
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
        }
    }
}; */

// Get translated product details (removed - English only)
// function getTranslatedProduct(productId) {
//     const product = productDetails[productId];
//     
//     if (currentLanguage === 'en') {
//         return product;
//     }
//     
//     // Check if we have translations for this product
//     const translations = productTranslations[productId];
//     if (translations && translations[currentLanguage]) {
//         return {
//             ...product,
//             ...translations[currentLanguage]
//         };
//     }
//     
//     // Return original if no translation available (shouldn't happen now)
//     return product;
// }


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
    
    // Setup stars animation
    setupStarsAnimation();
    
    // Re-add click handlers after a delay to ensure all images are loaded
    setTimeout(() => {
        addImageClickHandlers();
        addImageErrorHandlers();
        console.log('Re-initialized click handlers');
    }, 500);
});

// Setup stars animation on services text hover
function setupStarsAnimation() {
    const starsContainer = document.querySelector('.stars-container');
    const servicesText = document.querySelector('.services-text');
    const heroSection = document.querySelector('.hero');
    
    if (!starsContainer || !servicesText || !heroSection) return;
    
    // Create fewer star elements for professional look
    for (let i = 0; i < 7; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✦';
        starsContainer.appendChild(star);
    }
    
    // Add hover listeners
    servicesText.addEventListener('mouseenter', function() {
        starsContainer.classList.add('active');
    });
    
    servicesText.addEventListener('mouseleave', function() {
        starsContainer.classList.remove('active');
    });
    
    // Create meteorite element
    const meteorite = document.createElement('div');
    meteorite.className = 'meteorite';
    heroSection.appendChild(meteorite);
    
    // Launch meteorite every 10 seconds
    function launchMeteorite() {
        meteorite.classList.add('flying');
        setTimeout(() => {
            meteorite.classList.remove('flying');
        }, 3000); // Duration of the flight
    }
    
    // Start meteorite animation
    launchMeteorite();
    setInterval(launchMeteorite, 10000);
}

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