/* =========================================================
   DESH DARSHAN
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     STATE DATA
     ======================================================= */

  const stateInfo = {

    "Andhra Pradesh": {
      type: "STATE",
      capital: "Amaravati",
      language: "Telugu",
      food: "Pulihora",
      festival: "Ugadi",
      places: ["Visakhapatnam", "Tirupati", "Araku Valley"],
      culture: "Known for Telugu traditions, classical dance, temples and coastal culture.",
      region: "south",
      emoji: "🌊",
      image: "https://images.unsplash.com/photo-1600100397608-f010d7a3a9d2?auto=format&fit=crop&w=1200&q=85",
      description: "A beautiful southern state known for temples, beaches, hills and rich Telugu culture."
    },

    "Arunachal Pradesh": {
      type: "STATE",
      capital: "Itanagar",
      language: "English",
      food: "Thukpa",
      festival: "Losar",
      places: ["Tawang", "Ziro Valley", "Bomdila"],
      culture: "Home to diverse Himalayan tribes, traditional crafts and vibrant festivals.",
      region: "northeast",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
      description: "The land of the rising sun, filled with Himalayan landscapes and diverse cultures."
    },

    "Assam": {
      type: "STATE",
      capital: "Dispur",
      language: "Assamese",
      food: "Khar",
      festival: "Bihu",
      places: ["Kaziranga", "Majuli", "Guwahati"],
      culture: "Famous for Bihu, tea gardens, traditional silk and wildlife.",
      region: "northeast",
      emoji: "🦏",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
      description: "A northeastern treasure famous for tea, wildlife and the colourful festival of Bihu."
    },

    "Bihar": {
      type: "STATE",
      capital: "Patna",
      language: "Hindi",
      food: "Litti Chokha",
      festival: "Chhath Puja",
      places: ["Bodh Gaya", "Nalanda", "Rajgir"],
      culture: "A historic region associated with Buddhism, ancient universities and Chhath traditions.",
      region: "east",
      emoji: "☀️",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      description: "A historic land with deep connections to Buddhism, ancient learning and Indian civilisation."
    },

    "Chhattisgarh": {
      type: "STATE",
      capital: "Raipur",
      language: "Hindi",
      food: "Fara",
      festival: "Bastar Dussehra",
      places: ["Chitrakote Falls", "Bastar", "Barnawapara"],
      culture: "Known for tribal traditions, forests, folk arts and waterfalls.",
      region: "central",
      emoji: "🌳",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      description: "A forest-rich state with spectacular waterfalls and vibrant tribal heritage."
    },

    "Goa": {
      type: "STATE",
      capital: "Panaji",
      language: "Konkani",
      food: "Goan Fish Curry",
      festival: "Carnival",
      places: ["Panaji", "Baga", "Old Goa"],
      culture: "A unique blend of Indian and Portuguese influences with coastal traditions.",
      region: "west",
      emoji: "🏖️",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
      description: "India's famous coastal escape with beaches, Portuguese heritage and relaxed culture."
    },

    "Gujarat": {
      type: "STATE",
      capital: "Gandhinagar",
      language: "Gujarati",
      food: "Dhokla",
      festival: "Navratri",
      places: ["Ahmedabad", "Kutch", "Somnath"],
      culture: "Famous for Garba, textiles, handicrafts, temples and colourful traditions.",
      region: "west",
      emoji: "🪔",
      image: "https://images.unsplash.com/photo-1600100397608-f010d7a3a9d2?auto=format&fit=crop&w=1200&q=85",
      description: "A colourful western state known for Garba, handicrafts, temples and the Rann of Kutch."
    },

    "Haryana": {
      type: "STATE",
      capital: "Chandigarh",
      language: "Hindi",
      food: "Bajra Khichdi",
      festival: "Baisakhi",
      places: ["Kurukshetra", "Panipat", "Sultanpur"],
      culture: "Known for rural traditions, folk music, farming and strong sporting culture.",
      region: "north",
      emoji: "🌾",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A northern state with deep historical roots, farming traditions and sporting culture."
    },

    "Himachal Pradesh": {
      type: "STATE",
      capital: "Shimla",
      language: "Hindi",
      food: "Dham",
      festival: "Kullu Dussehra",
      places: ["Shimla", "Manali", "Spiti Valley"],
      culture: "Known for Himalayan villages, temples, wool crafts and mountain traditions.",
      region: "north",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      description: "A Himalayan state filled with snowy mountains, valleys, forests and peaceful towns."
    },

    "Jharkhand": {
      type: "STATE",
      capital: "Ranchi",
      language: "Hindi",
      food: "Dhuska",
      festival: "Sarhul",
      places: ["Ranchi", "Netarhat", "Deoghar"],
      culture: "Rich in tribal traditions, forests, waterfalls and folk art.",
      region: "east",
      emoji: "🌲",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      description: "A forested eastern state known for tribal heritage, waterfalls and natural beauty."
    },

    "Karnataka": {
      type: "STATE",
      capital: "Bengaluru",
      language: "Kannada",
      food: "Bisi Bele Bath",
      festival: "Mysuru Dasara",
      places: ["Hampi", "Mysuru", "Coorg"],
      culture: "A blend of ancient temples, classical arts, technology and diverse landscapes.",
      region: "south",
      emoji: "🏛️",
      image: "https://images.unsplash.com/photo-1600100397608-f010d7a3a9d2?auto=format&fit=crop&w=1200&q=85",
      description: "A southern state where ancient heritage, coffee hills and modern technology meet."
    },

    "Kerala": {
      type: "STATE",
      capital: "Thiruvananthapuram",
      language: "Malayalam",
      food: "Sadya",
      festival: "Onam",
      places: ["Alappuzha", "Munnar", "Kochi"],
      culture: "Known for backwaters, Ayurveda, classical arts and the celebration of Onam.",
      region: "south",
      emoji: "🌴",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
      description: "God's Own Country, famous for lush landscapes, backwaters, beaches and rich traditions."
    },

    "Madhya Pradesh": {
      type: "STATE",
      capital: "Bhopal",
      language: "Hindi",
      food: "Poha",
      festival: "Khajuraho Dance Festival",
      places: ["Khajuraho", "Ujjain", "Sanchi"],
      culture: "Rich in heritage, wildlife, temples, tribal arts and historic monuments.",
      region: "central",
      emoji: "🐅",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      description: "The heart of India, known for ancient monuments, wildlife and spiritual destinations."
    },

    "Maharashtra": {
      type: "STATE",
      capital: "Mumbai",
      language: "Marathi",
      food: "Vada Pav",
      festival: "Ganesh Chaturthi",
      places: ["Mumbai", "Ajanta Caves", "Mahabaleshwar"],
      culture: "Known for Marathi traditions, Bollywood, forts, caves and Ganesh celebrations.",
      region: "west",
      emoji: "🏙️",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85",
      description: "A dynamic western state combining historic forts, bustling cities and beautiful hill stations."
    },

    "Manipur": {
      type: "STATE",
      capital: "Imphal",
      language: "Meitei",
      food: "Eromba",
      festival: "Yaoshang",
      places: ["Loktak Lake", "Imphal", "Keibul Lamjao"],
      culture: "Known for classical dance, indigenous traditions and the floating Loktak Lake.",
      region: "northeast",
      emoji: "🌊",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A northeastern state with unique traditions, dance, lakes and rich biodiversity."
    },

    "Meghalaya": {
      type: "STATE",
      capital: "Shillong",
      language: "English",
      food: "Jadoh",
      festival: "Wangala",
      places: ["Shillong", "Cherrapunji", "Dawki"],
      culture: "Known for waterfalls, living root bridges and Khasi, Jaintia and Garo traditions.",
      region: "northeast",
      emoji: "🌧️",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A beautiful northeastern state of clouds, waterfalls, caves and living root bridges."
    },

    "Mizoram": {
      type: "STATE",
      capital: "Aizawl",
      language: "Mizo",
      food: "Bai",
      festival: "Chapchar Kut",
      places: ["Aizawl", "Reiek", "Vantawng Falls"],
      culture: "Known for Mizo traditions, community life, music and mountain landscapes.",
      region: "northeast",
      emoji: "⛰️",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      description: "A peaceful hill state known for Mizo culture, music and spectacular landscapes."
    },

    "Nagaland": {
      type: "STATE",
      capital: "Kohima",
      language: "English",
      food: "Smoked Pork",
      festival: "Hornbill Festival",
      places: ["Kohima", "Dzukou Valley", "Mon"],
      culture: "Famous for colourful tribal traditions and the Hornbill Festival.",
      region: "northeast",
      emoji: "🪶",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      description: "A vibrant northeastern state where tribal traditions meet dramatic mountain landscapes."
    },

    "Odisha": {
      type: "STATE",
      capital: "Bhubaneswar",
      language: "Odia",
      food: "Dalma",
      festival: "Rath Yatra",
      places: ["Puri", "Konark", "Bhubaneswar"],
      culture: "Known for temple architecture, Odissi dance, crafts and Rath Yatra.",
      region: "east",
      emoji: "🛕",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      description: "An eastern cultural treasure famous for temples, classical dance and coastal traditions."
    },

    "Punjab": {
      type: "STATE",
      capital: "Chandigarh",
      language: "Punjabi",
      food: "Sarson da Saag",
      festival: "Baisakhi",
      places: ["Amritsar", "Golden Temple", "Patiala"],
      culture: "Known for Punjabi music, farming traditions, vibrant celebrations and hospitality.",
      region: "north",
      emoji: "🌾",
      image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1200&q=85",
      description: "A lively northern state famous for its food, music, farms and spiritual heritage."
    },

    "Rajasthan": {
      type: "STATE",
      capital: "Jaipur",
      language: "Hindi",
      food: "Dal Baati Churma",
      festival: "Pushkar Fair",
      places: ["Jaipur", "Jaisalmer", "Udaipur"],
      culture: "Known for royal forts, folk music, colourful clothing, desert traditions and handicrafts.",
      region: "west",
      emoji: "🏰",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
      description: "The land of kings, grand forts, colourful traditions and the golden Thar Desert."
    },

    "Sikkim": {
      type: "STATE",
      capital: "Gangtok",
      language: "Nepali",
      food: "Momos",
      festival: "Losar",
      places: ["Gangtok", "Tsomgo Lake", "Nathula"],
      culture: "Known for Buddhist monasteries, Himalayan landscapes and diverse communities.",
      region: "northeast",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      description: "A Himalayan state with monasteries, mountain passes, lakes and peaceful valleys."
    },

    "Tamil Nadu": {
      type: "STATE",
      capital: "Chennai",
      language: "Tamil",
      food: "Dosa",
      festival: "Pongal",
      places: ["Chennai", "Madurai", "Ooty"],
      culture: "Famous for Dravidian temples, Bharatanatyam, Tamil literature and classical traditions.",
      region: "south",
      emoji: "🛕",
      image: "https://images.unsplash.com/photo-1600100397608-f010d7a3a9d2?auto=format&fit=crop&w=1200&q=85",
      description: "A southern cultural powerhouse with magnificent temples, classical arts and coastal cities."
    },

    "Telangana": {
      type: "STATE",
      capital: "Hyderabad",
      language: "Telugu",
      food: "Hyderabadi Biryani",
      festival: "Bathukamma",
      places: ["Hyderabad", "Warangal", "Charminar"],
      culture: "A blend of Telugu and Deccani traditions, historic architecture and famous cuisine.",
      region: "south",
      emoji: "🍗",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
      description: "A Deccan state where historic architecture, technology and famous cuisine come together."
    },

    "Tripura": {
      type: "STATE",
      capital: "Agartala",
      language: "Bengali",
      food: "Mui Borok",
      festival: "Kharchi Puja",
      places: ["Agartala", "Ujjayanta Palace", "Neermahal"],
      culture: "Known for royal heritage, tribal traditions and beautiful lakes.",
      region: "northeast",
      emoji: "🏛️",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A northeastern state with royal heritage, lakes and diverse cultural traditions."
    },

    "Uttar Pradesh": {
      type: "STATE",
      capital: "Lucknow",
      language: "Hindi",
      food: "Awadhi Biryani",
      festival: "Diwali",
      places: ["Agra", "Varanasi", "Ayodhya"],
      culture: "Known for Mughal and Awadhi heritage, spiritual centres, crafts and classical traditions.",
      region: "north",
      emoji: "🕌",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
      description: "A historic heartland of India with major spiritual centres and world-famous monuments."
    },

    "Uttarakhand": {
      type: "STATE",
      capital: "Dehradun",
      language: "Hindi",
      food: "Kafuli",
      festival: "Nanda Devi Raj Jat",
      places: ["Rishikesh", "Nainital", "Kedarnath"],
      culture: "Known for Himalayan pilgrimage, yoga, mountain villages and natural beauty.",
      region: "north",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A Himalayan state known for sacred temples, rivers, forests and mountain landscapes."
    },

    "West Bengal": {
      type: "STATE",
      capital: "Kolkata",
      language: "Bengali",
      food: "Macher Jhol",
      festival: "Durga Puja",
      places: ["Kolkata", "Darjeeling", "Sundarbans"],
      culture: "Known for literature, art, Durga Puja, music and rich Bengali traditions.",
      region: "east",
      emoji: "🎨",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=85",
      description: "A cultural powerhouse famous for literature, art, Durga Puja and the Sundarbans."
    },


    /* ================= UNION TERRITORIES ================= */

    "Andaman and Nicobar Islands": {
      type: "UNION TERRITORY",
      capital: "Port Blair",
      language: "Hindi / English",
      food: "Seafood",
      festival: "Island Tourism Festival",
      places: ["Havelock Island", "Radhanagar Beach", "Cellular Jail"],
      culture: "A multicultural island region with coastal communities and natural beauty.",
      region: "ut",
      emoji: "🏝️",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      description: "Tropical islands known for beaches, marine life and historic landmarks."
    },

    "Chandigarh": {
      type: "UNION TERRITORY",
      capital: "Chandigarh",
      language: "Hindi / Punjabi",
      food: "Chole Bhature",
      festival: "Baisakhi",
      places: ["Rock Garden", "Sukhna Lake", "Capitol Complex"],
      culture: "India's planned modern city known for architecture, gardens and urban design.",
      region: "ut",
      emoji: "🏙️",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
      description: "A modern planned city known for its architecture, gardens and urban design."
    },

    "Dadra and Nagar Haveli and Daman and Diu": {
      type: "UNION TERRITORY",
      capital: "Daman",
      language: "Gujarati / Hindi",
      food: "Seafood",
      festival: "Nariyal Poornima",
      places: ["Daman", "Diu", "Silvassa"],
      culture: "A western coastal region with tribal traditions and Portuguese heritage.",
      region: "ut",
      emoji: "🌊",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      description: "A coastal Union Territory combining beaches, tribal traditions and historic architecture."
    },

    "Delhi": {
      type: "UNION TERRITORY",
      capital: "New Delhi",
      language: "Hindi",
      food: "Chaat",
      festival: "Diwali",
      places: ["India Gate", "Red Fort", "Qutub Minar"],
      culture: "A historic capital region where centuries of architecture and modern life meet.",
      region: "ut",
      emoji: "🏛️",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85",
      description: "India's capital territory, filled with monuments, markets, museums and modern landmarks."
    },

    "Jammu and Kashmir": {
      type: "UNION TERRITORY",
      capital: "Srinagar",
      language: "Kashmiri / Urdu",
      food: "Rogan Josh",
      festival: "Baisakhi",
      places: ["Srinagar", "Gulmarg", "Pahalgam"],
      culture: "Known for Kashmiri crafts, mountain landscapes, lakes and distinctive cuisine.",
      region: "ut",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
      description: "A mountainous region known for lakes, valleys, traditional crafts and dramatic landscapes."
    },

    "Ladakh": {
      type: "UNION TERRITORY",
      capital: "Leh",
      language: "Ladakhi",
      food: "Momos",
      festival: "Hemis Festival",
      places: ["Leh", "Pangong Lake", "Nubra Valley"],
      culture: "Known for Buddhist monasteries, high-altitude landscapes and Himalayan traditions.",
      region: "ut",
      emoji: "🏔️",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
      description: "A high-altitude Himalayan region famous for monasteries, dramatic mountains and lakes."
    },

    "Lakshadweep": {
      type: "UNION TERRITORY",
      capital: "Kavaratti",
      language: "Malayalam",
      food: "Seafood",
      festival: "Eid",
      places: ["Kavaratti", "Agatti", "Bangaram"],
      culture: "Island culture shaped by the sea, traditional communities and tropical landscapes.",
    
