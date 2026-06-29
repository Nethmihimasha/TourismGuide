/* Shared image URLs and site data */
const IMG = {
  sigiriya: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80',
  sigiriyaAerial: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80',
  beach: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80',
  beach2: 'https://images.unsplash.com/photo-1653959699604-1eb000740b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  palms: 'https://images.unsplash.com/photo-1650970366119-34cb82f8b4c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  tea1: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  tea2: 'https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80',
  tea3: 'https://images.unsplash.com/photo-1578517929034-db013fd86597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  train: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  train2: 'https://images.unsplash.com/photo-1578519050142-afb511e518de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  elephant: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  elephant2: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  galle: 'https://images.unsplash.com/photo-1704797390682-76479a29dc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  galle2: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  food: 'https://images.unsplash.com/photo-1742281095650-dd3c50c08772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  rice: 'https://images.unsplash.com/photo-1613526949297-1aba25022d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  kottu: 'https://images.unsplash.com/photo-1687688207105-0da2a4aa3dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  hoppers: 'https://images.unsplash.com/photo-1742281095661-29de44440bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  stringHoppers: 'https://images.unsplash.com/photo-1620641856311-a64e917104ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  watalappam: 'https://images.unsplash.com/photo-1617253426949-94541a3e3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  kiribath: 'https://images.unsplash.com/photo-1630056656591-0cba044ba94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgCultural: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgAdventure: 'https://images.unsplash.com/photo-1549983091-48c70653663b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgHoneymoon: 'https://images.unsplash.com/photo-1460627390041-532a28402358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgBeach: 'https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgSafari: 'https://images.unsplash.com/photo-1667987486234-a1330e262ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pkgHillCountry: 'https://images.unsplash.com/photo-1658051161493-1d311c4c7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  kandyanDance: 'https://images.unsplash.com/photo-1663471984093-5925e87e72d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  masks: 'https://images.unsplash.com/photo-1720945489942-30f99e7302fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  batik: 'https://images.unsplash.com/photo-1604973104381-870c92f10343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  woodCarving: 'https://images.unsplash.com/photo-1497219055242-93359eeed651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  handloom: 'https://images.unsplash.com/photo-1598616068517-c75ad397a436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  vesak: 'https://images.unsplash.com/photo-1717216229791-0d437312799a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  perahera: 'https://images.unsplash.com/photo-1641666017842-f94246ef2961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  newYear: 'https://images.unsplash.com/photo-1739916855018-269ced9699e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  pongal: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  christmas: 'https://images.unsplash.com/photo-1577268173819-d36a3378f8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
  ramadan: 'https://images.unsplash.com/photo-1574246604907-db69e30ddb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
};

const NAV_LINKS = [
  { label: 'Home', href: 'index.html', page: 'home' },
  { label: 'About', href: 'pages/about.html', page: 'about' },
  { label: 'Destinations', href: 'pages/destinations.html', page: 'destinations' },
  { label: 'Packages', href: 'pages/packages.html', page: 'packages' },
  { label: 'Hotels', href: 'pages/hotels.html', page: 'hotels' },
  { label: 'Food & Culture', href: 'pages/food-culture.html', page: 'food' },
  { label: 'Gallery', href: 'pages/gallery.html', page: 'gallery' },
  { label: 'Blog', href: 'pages/blog.html', page: 'blog' },
  { label: 'Contact', href: 'pages/contact.html', page: 'contact' },
];

const DESTINATIONS = [
  { name: 'Sigiriya', cat: 'Historical', rating: 4.9, season: 'Dec–May', desc: '5th-century rock fortress, UNESCO site with ancient frescoes and mirror wall.', budget: '$25 entry', img: IMG.sigiriya, things: ['Rock climb', 'Ancient frescoes', 'Sigiri village'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sigiriya+Sri+Lanka' },
  { name: 'Ella', cat: 'Mountain', rating: 4.8, season: 'Year-round', desc: 'Misty highland village famed for Nine Arch Bridge, Little Adam\'s Peak and local cuisine.', budget: '$30–80/day', img: IMG.train, things: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Tea factory tours'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ella+Sri+Lanka' },
  { name: 'Mirissa', cat: 'Beach', rating: 4.7, season: 'Nov–Apr', desc: 'Golden crescent beach, legendary whale watching and laid-back surf lifestyle.', budget: '$40–100/day', img: IMG.beach2, things: ['Whale watching', 'Surfing', 'Sunset cocktails'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mirissa+Sri+Lanka' },
  { name: 'Yala National Park', cat: 'Wildlife', rating: 4.8, season: 'Feb–Jul', desc: 'World\'s highest leopard density. Home to elephants, crocodiles and 200+ bird species.', budget: '$50 safari', img: IMG.elephant, things: ['Leopard safari', 'Bird watching', 'Elephant herds'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yala+National+Park+Sri+Lanka' },
  { name: 'Galle Fort', cat: 'Historical', rating: 4.6, season: 'Dec–Apr', desc: 'UNESCO-listed 17th century Dutch fort with colonial streets, boutique shops and cafés.', budget: '$20–60/day', img: IMG.galle, things: ['Fort walk', 'Lighthouse', 'Boutique shopping'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Galle+Fort+Sri+Lanka' },
  { name: 'Nuwara Eliya', cat: 'Mountain', rating: 4.7, season: 'Jan–Apr', desc: 'Sri Lanka\'s Little England — lush tea estates, colonial bungalows and cool highland air.', budget: '$35–90/day', img: IMG.tea1, things: ['Tea factory visit', 'Gregory Lake', 'Horton Plains'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nuwara+Eliya+Sri+Lanka' },
  { name: 'Arugam Bay', cat: 'Beach', rating: 4.6, season: 'May–Oct', desc: 'World-class surf point on the east coast with a relaxed beach village atmosphere.', budget: '$30–70/day', img: IMG.palms, things: ['Surfing', 'Crocodile safari', 'Pottuvil lagoon'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arugam+Bay+Sri+Lanka' },
  { name: 'Horton Plains', cat: 'Adventure', rating: 4.7, season: 'Year-round', desc: 'Dramatic highland plateau with World\'s End cliff dropping 870 metres into jungle valley.', budget: '$25 entry', img: IMG.tea3, things: ['World\'s End hike', 'Baker\'s Falls', 'Cloud forest walk'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Horton+Plains+Sri+Lanka' },
  { name: 'Trincomalee', cat: 'Beach', rating: 4.5, season: 'May–Oct', desc: 'Stunning natural harbour with turquoise waters, whale sharks, hot springs and Hindu temples.', budget: '$35–80/day', img: IMG.beach, things: ['Nilaveli beach', 'Whale shark diving', 'Hot springs'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Trincomalee+Sri+Lanka' },
  { name: 'Kandy', cat: 'Religious', rating: 4.8, season: 'Year-round', desc: 'Cultural capital with the sacred Temple of the Tooth, Kandy Lake and Esala Perahera festival.', budget: '$25–70/day', img: IMG.galle2, things: ['Temple of Tooth', 'Peradeniya Botanic Gardens', 'Kandy cultural show'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kandy+Sri+Lanka' },
  { name: 'Adam\'s Peak', cat: 'Adventure', rating: 4.8, season: 'Dec–May', desc: 'Sacred pilgrimage mountain climbed by all religions. The sunrise summit view is transcendent.', budget: '$15–30', img: IMG.sigiriyaAerial, things: ['Summit sunrise hike', 'Waterfall trails', 'Tea stalls'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adams+Peak+Sri+Lanka' },
  { name: 'Bentota', cat: 'Beach', rating: 4.6, season: 'Nov–Apr', desc: 'Luxury beach resort town on the west coast — water sports, river safaris and turtle hatcheries.', budget: '$50–200/day', img: IMG.beach2, things: ['Jet skiing', 'River safari', 'Turtle hatchery'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bentota+Sri+Lanka' },
];

const PACKAGES = [
  { name: '5-Day Cultural Triangle', days: 5, price: '$350', tier: 'Budget', color: '#2D6A4F', img: IMG.pkgCultural, destinations: ['Colombo', 'Sigiriya', 'Dambulla', 'Polonnaruwa'], transport: 'Private Van', meals: 'B&B', accommodation: '3-star hotel', difficulty: 'Easy', desc: 'Discover the ancient Cultural Triangle — Sigiriya, Dambulla and Polonnaruwa in five packed days.' },
  { name: '7-Day Adventure Tour', days: 7, price: '$620', tier: 'Standard', color: '#0077B6', img: IMG.pkgAdventure, destinations: ['Ella', 'Adam\'s Peak', 'Kitulgala', 'Arugam Bay'], transport: 'Train + Van', meals: 'Half Board', accommodation: 'Boutique guesthouses', difficulty: 'Moderate', desc: 'Hike, raft, surf and explore — the ultimate active adventure through Sri Lanka\'s highlands and east coast.' },
  { name: 'Luxury Honeymoon', days: 10, price: '$2,800', tier: 'Luxury', color: '#F77F00', img: IMG.pkgHoneymoon, destinations: ['Bentota', 'Galle', 'Nuwara Eliya', 'Mirissa'], transport: 'Private Chauffeur', meals: 'Full Board', accommodation: '5-star beach villa', difficulty: 'Easy', desc: 'A romantic island escape — pristine beaches, hill country and candlelit dinners by the Indian Ocean.' },
  { name: 'Beach Escape', days: 6, price: '$480', tier: 'Standard', color: '#0077B6', img: IMG.pkgBeach, destinations: ['Negombo', 'Bentota', 'Unawatuna', 'Mirissa'], transport: 'Private Van', meals: 'B&B', accommodation: 'Beach resort', difficulty: 'Easy', desc: 'A coastal journey along Sri Lanka\'s stunning shoreline with crystal clear waters and white sand beaches.' },
  { name: 'Wildlife Safari', days: 5, price: '$540', tier: 'Standard', color: '#2D6A4F', img: IMG.pkgSafari, destinations: ['Yala', 'Udawalawe', 'Minneriya', 'Wilpattu'], transport: '4x4 Safari Jeep', meals: 'Half Board', accommodation: 'Eco-lodge', difficulty: 'Easy', desc: 'Sri Lanka\'s legendary wildlife — leopards, elephants and exotic birds across four national parks.' },
  { name: 'Hill Country Tour', days: 6, price: '$420', tier: 'Budget', color: '#2D6A4F', img: IMG.pkgHillCountry, destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Horton Plains'], transport: 'Train + Tuk-tuk', meals: 'B&B', accommodation: 'Tea estate bungalows', difficulty: 'Moderate', desc: 'Ride the famous hill country train through emerald tea estates and explore misty mountain villages.' },
];

const HOTELS = [
  { name: 'Shangri-La Colombo', stars: 5, tier: 'Luxury', price: '$320/night', location: 'Colombo', desc: 'Iconic 5-star tower overlooking the Indian Ocean with world-class dining and spa facilities.', facilities: ['Pool', 'Spa', '5 Restaurants', 'Gym', 'Ocean view'], img: IMG.galle },
  { name: 'Jetwing Lighthouse', stars: 5, tier: 'Luxury', price: '$280/night', location: 'Galle', desc: 'Geoffrey Bawa-designed masterpiece on a rocky headland — art, architecture and ocean panoramas.', facilities: ['Infinity Pool', 'Spa', 'Fine Dining', 'Sunset Terrace'], img: IMG.galle2 },
  { name: 'Cinnamon Wild Yala', stars: 4, tier: 'Resort', price: '$180/night', location: 'Yala', desc: 'Award-winning eco-resort bordering Yala National Park. Fall asleep to sounds of the wild.', facilities: ['Safari Jeeps', 'Pool', 'Wildlife Deck', 'Jungle Dining'], img: IMG.elephant },
  { name: 'Heritance Tea Factory', stars: 4, tier: 'Boutique', price: '$220/night', location: 'Nuwara Eliya', desc: 'A converted Victorian tea factory perched at 2,200m — extraordinary views over rolling tea estates.', facilities: ['Tea museum', 'Steam Spa', 'Fireplace Lounge', 'Tea Walks'], img: IMG.tea1 },
  { name: 'Amaya Hills Kandy', stars: 4, tier: 'Resort', price: '$150/night', location: 'Kandy', desc: 'Hillside retreat overlooking Kandy with traditional architecture and lush garden terraces.', facilities: ['Infinity Pool', 'Ayurveda Spa', 'Cultural Shows', 'Garden Walks'], img: IMG.sigiriyaAerial },
  { name: 'Secret Garden Villa', stars: 5, tier: 'Villa', price: '$450/night', location: 'Bentota', desc: 'Private luxury beach villa with butler service, plunge pool and direct access to Bentota beach.', facilities: ['Private Pool', 'Butler', 'Beach Access', 'Sunset Dining'], img: IMG.beach2 },
];

const GALLERY_ITEMS = [
  { src: IMG.sigiriya, cat: 'Culture', caption: 'Sigiriya Rock Fortress' },
  { src: IMG.train, cat: 'Mountains', caption: 'Nine Arch Bridge, Ella' },
  { src: IMG.beach, cat: 'Beaches', caption: 'Southern Coastline' },
  { src: IMG.tea2, cat: 'Nature', caption: 'Tea Plantations, Nuwara Eliya' },
  { src: IMG.elephant, cat: 'Wildlife', caption: 'Elephant, Udawalawe' },
  { src: IMG.galle, cat: 'Culture', caption: 'Galle Fort' },
  { src: IMG.beach2, cat: 'Beaches', caption: 'Mirissa Beach' },
  { src: IMG.sigiriyaAerial, cat: 'Nature', caption: 'Sigiriya — Aerial View' },
  { src: IMG.tea1, cat: 'Nature', caption: 'Tea Pickers, Hill Country' },
  { src: IMG.food, cat: 'Food', caption: 'Sri Lankan Rice & Curry Feast' },
  { src: IMG.elephant2, cat: 'Wildlife', caption: 'Wild Elephant' },
  { src: IMG.train2, cat: 'Mountains', caption: 'Hill Country Train Journey' },
  { src: IMG.galle2, cat: 'Culture', caption: 'Galle Fort Promenade' },
  { src: IMG.rice, cat: 'Food', caption: 'Traditional Rice & Curry' },
  { src: IMG.palms, cat: 'Beaches', caption: 'Tropical Palm Coast' },
  { src: IMG.tea3, cat: 'Nature', caption: 'Highland Landscape' },
];

const BLOG_POSTS = [
  { title: 'Top 10 Beaches in Sri Lanka You Must Visit', author: 'Amali Perera', date: 'June 12, 2026', time: '8 min read', tags: ['Beaches', 'Travel'], img: IMG.beach, excerpt: 'From the golden sands of Mirissa to the windswept breaks of Arugam Bay, we rank Sri Lanka\'s most spectacular coastlines.' },
  { title: 'The Ultimate Backpacking Guide to Sri Lanka', author: 'Kasun Fernando', date: 'May 28, 2026', time: '12 min read', tags: ['Budget Travel', 'Backpacking'], img: IMG.train, excerpt: 'How to explore Sri Lanka on $30 per day — the best cheap eats, guesthouses and transport tips.' },
  { title: 'Best Time to Visit Sri Lanka: Month by Month', author: 'Nishani De Silva', date: 'May 15, 2026', time: '6 min read', tags: ['Planning', 'Weather'], img: IMG.tea2, excerpt: 'Sri Lanka\'s two monsoon seasons mean the best time to visit depends on which coast you plan to explore.' },
  { title: 'Hidden Gems: 7 Places Tourists Often Miss', author: 'Ravi Jayasinghe', date: 'April 30, 2026', time: '10 min read', tags: ['Hidden Gems', 'Local Tips'], img: IMG.sigiriyaAerial, excerpt: 'Skip the crowds and discover Ritigala, Buduruwagala and Knuckles Mountain Range — Sri Lanka\'s best-kept secrets.' },
  { title: 'Sri Lanka Photography Guide: Iconic Shots', author: 'Malith Weerasinghe', date: 'April 18, 2026', time: '9 min read', tags: ['Photography', 'Travel'], img: IMG.galle, excerpt: 'Golden hour at Sigiriya, misty Ella mornings and Galle Fort sunsets — the definitive photography locations.' },
  { title: 'Sri Lanka with Kids: A Family Travel Guide', author: 'Chathuri Ekanayake', date: 'April 5, 2026', time: '7 min read', tags: ['Family', 'Kids'], img: IMG.elephant2, excerpt: 'Elephant encounters, beach days and cultural experiences that children love — Sri Lanka is a fantastic family destination.' },
  { title: 'Solo Travel in Sri Lanka: Safety & Tips', author: 'Amali Perera', date: 'March 22, 2026', time: '8 min read', tags: ['Solo Travel', 'Safety'], img: IMG.beach2, excerpt: 'Sri Lanka is one of Asia\'s safest destinations for solo travelers. Here\'s everything you need to know before going alone.' },
  { title: 'Sri Lanka Budget Travel: $25/Day Itinerary', author: 'Kasun Fernando', date: 'March 10, 2026', time: '11 min read', tags: ['Budget', 'Itinerary'], img: IMG.rice, excerpt: 'Proof that Sri Lanka is affordable: our detailed day-by-day budget itinerary covering food, transport and accommodation.' },
];

const FAQS = [
  { q: 'Do I need a visa to visit Sri Lanka?', a: 'Most nationalities require an Electronic Travel Authorization (ETA). Apply online at eta.gov.lk before departure. Costs approximately $35–50 USD and is usually approved within minutes.' },
  { q: 'What is the best way to get around Sri Lanka?', a: 'Trains are scenic and affordable for long distances (especially the hill country route). Tuk-tuks for short hops. Private drivers with car are recommended for comfort. Buses are cheap but crowded.' },
  { q: 'What currency is used in Sri Lanka?', a: 'Sri Lankan Rupee (LKR). USD and EUR are accepted in tourist areas. ATMs are widely available in cities and most tourist towns. Credit cards accepted at hotels and restaurants.' },
  { q: 'Is Sri Lanka safe for tourists?', a: 'Yes, Sri Lanka is generally very safe for tourists. The country is welcoming and peaceful. Exercise standard travel precautions, avoid unmarked beach areas at night and be cautious during swimming in strong surf.' },
  { q: 'Is there internet access throughout Sri Lanka?', a: '4G internet coverage is available across most of the island. Buy a local SIM card (Dialog or Mobitel) at the airport for affordable data. Most hotels and cafés offer free Wi-Fi.' },
];
