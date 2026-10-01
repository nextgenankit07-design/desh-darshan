/* =========================================================
   DESH DARSHAN 3.0
   Interactive India Explorer
========================================================= */


/* ================= STATE DATA ================= */

const stateInfo = {

"Andhra Pradesh":{
capital:"Amaravati",
language:"Telugu",
food:"Pulihora",
festival:"Ugadi",
places:["Visakhapatnam","Tirupati","Araku Valley","Amaravati"],
culture:"Andhra Pradesh is known for classical dance, temples, handlooms, spicy cuisine and rich coastal traditions.",
region:"south",
emoji:"🌊",
description:"A beautiful southern state known for temples, coastline, hills and rich Telugu culture."
},

"Arunachal Pradesh":{
capital:"Itanagar",
language:"English",
food:"Thukpa",
festival:"Losar",
places:["Tawang","Ziro Valley","Bomdila","Sela Pass"],
culture:"Mountain communities, monasteries, colourful festivals and tribal traditions form the cultural identity of Arunachal Pradesh.",
region:"northeast",
emoji:"🏔️",
description:"India's northeastern frontier is famous for Himalayan landscapes, monasteries and tribal cultures."
},

"Assam":{
capital:"Dispur",
language:"Assamese",
food:"Khar",
festival:"Bihu",
places:["Kaziranga","Majuli","Guwahati","Sivasagar"],
culture:"Assam is known for Bihu, silk traditions, tea gardens and vibrant Assamese culture.",
region:"northeast",
emoji:"🍃",
description:"Famous for tea gardens, the Brahmaputra and incredible wildlife."
},

"Bihar":{
capital:"Patna",
language:"Hindi",
food:"Litti Chokha",
festival:"Chhath Puja",
places:["Bodh Gaya","Nalanda","Rajgir","Patna"],
culture:"Bihar has deep connections with Buddhism, Jainism, ancient universities and folk traditions.",
region:"east",
emoji:"☀️",
description:"An ancient land of learning, spirituality and historic civilizations."
},

"Chhattisgarh":{
capital:"Raipur",
language:"Hindi",
food:"Chila",
festival:"Bastar Dussehra",
places:["Chitrakote Falls","Bastar","Sirpur","Barnawapara"],
culture:"Tribal art, folk music, forests and traditional crafts are important parts of Chhattisgarh.",
region:"central",
emoji:"🌳",
description:"A forest-rich state famous for waterfalls, tribal culture and natural beauty."
},

"Goa":{
capital:"Panaji",
language:"Konkani",
food:"Goan Fish Curry",
festival:"Carnival",
places:["Panaji","Calangute","Old Goa","Dudhsagar Falls"],
culture:"Goa blends Konkani traditions with Portuguese-influenced architecture, music, food and festivals.",
region:"west",
emoji:"🏖️",
description:"India's famous coastal destination known for beaches, heritage and vibrant culture."
},

"Gujarat":{
capital:"Gandhinagar",
language:"Gujarati",
food:"Dhokla",
festival:"Navratri",
places:["Ahmedabad","Kutch","Somnath","Statue of Unity"],
culture:"Gujarati culture is celebrated through Garba, handicrafts, textiles, vegetarian cuisine and colourful festivals.",
region:"west",
emoji:"🪔",
description:"A vibrant western state famous for business, heritage, crafts and Garba."
},

"Haryana":{
capital:"Chandigarh",
language:"Hindi",
food:"Bajra Khichdi",
festival:"Baisakhi",
places:["Gurugram","Kurukshetra","Panipat","Morni Hills"],
culture:"Haryana has strong agricultural traditions, folk music, dance and sports culture.",
region:"north",
emoji:"🌾",
description:"A northern state known for agriculture, sports and historic battlefields."
},

"Himachal Pradesh":{
capital:"Shimla",
language:"Hindi",
food:"Dham",
festival:"Kullu Dussehra",
places:["Manali","Shimla","Spiti","Dharamshala"],
culture:"Himachali culture features mountain traditions, temples, wool crafts, folk music and festivals.",
region:"north",
emoji:"🏔️",
description:"A Himalayan state filled with mountains, valleys, forests and hill towns."
},

"Jharkhand":{
capital:"Ranchi",
language:"Hindi",
food:"Dhuska",
festival:"Sarhul",
places:["Ranchi","Deoghar","Netarhat","Hundru Falls"],
culture:"Jharkhand is home to many tribal communities with rich dance, music, art and nature-based traditions.",
region:"east",
emoji:"🌲",
description:"Known for forests, waterfalls, minerals and vibrant tribal traditions."
},

"Karnataka":{
capital:"Bengaluru",
language:"Kannada",
food:"Bisi Bele Bath",
festival:"Mysuru Dasara",
places:["Bengaluru","Mysuru","Hampi","Coorg"],
culture:"Karnataka combines ancient temple traditions, classical arts, modern technology and diverse regional cuisines.",
region:"south",
emoji:"🏛️",
description:"Home to Hampi, Mysuru, coffee hills and India's technology hub."
},

"Kerala":{
capital:"Thiruvananthapuram",
language:"Malayalam",
food:"Appam",
festival:"Onam",
places:["Munnar","Alappuzha","Kochi","Wayanad"],
culture:"Kerala is famous for Kathakali, Ayurveda, Onam, backwaters and rich literary traditions.",
region:"south",
emoji:"🌴",
description:"God's Own Country — famous for backwaters, greenery, beaches and culture."
},

"Madhya Pradesh":{
capital:"Bhopal",
language:"Hindi",
food:"Poha",
festival:"Khajuraho Dance Festival",
places:["Khajuraho","Ujjain","Pachmarhi","Sanchi"],
culture:"Madhya Pradesh has historic temples, tribal traditions, wildlife and classical heritage.",
region:"central",
emoji:"🐅",
description:"The heart of India, filled with heritage, forests, wildlife and ancient sites."
},

"Maharashtra":{
capital:"Mumbai",
language:"Marathi",
food:"Misal Pav",
festival:"Ganesh Chaturthi",
places:["Mumbai","Pune","Mahabaleshwar","Ajanta Caves"],
culture:"Maharashtra is known for Marathi literature, theatre, forts, music, festivals and diverse cuisine.",
region:"west",
emoji:"🏙️",
description:"A dynamic state combining historic forts, Bollywood, cities and beautiful landscapes."
},

"Manipur":{
capital:"Imphal",
language:"Meitei",
food:"Eromba",
festival:"Yaoshang",
places:["Imphal","Loktak Lake","Kangla","Ukhrul"],
culture:"Manipur is known for Manipuri dance, handlooms, indigenous traditions and Loktak Lake.",
region:"northeast",
emoji:"🌺",
description:"A northeastern jewel known for dance, lakes and rich indigenous culture."
},

"Meghalaya":{
capital:"Shillong",
language:"English",
food:"Jadoh",
festival:"Wangala",
places:["Shillong","Cherrapunji","Dawki","Mawlynnong"],
culture:"Meghalaya is famous for living root bridges, Khasi, Jaintia and Garo traditions and beautiful music.",
region:"northeast",
emoji:"☁️",
description:"A cloud-covered paradise filled with waterfalls, caves and green hills."
},

"Mizoram":{
capital:"Aizawl",
language:"Mizo",
food:"Bai",
festival:"Chapchar Kut",
places:["Aizawl","Reiek","Vantawng Falls","Champhai"],
culture:"Mizo traditions include community celebrations, music, dance and colourful festivals.",
region:"northeast",
emoji:"🌄",
description:"A peaceful hill state famous for rolling landscapes and Mizo culture."
},

"Nagaland":{
capital:"Kohima",
language:"English",
food:"Smoked Pork",
festival:"Hornbill Festival",
places:["Kohima","Dzukou Valley","Mon","Mokokchung"],
culture:"Nagaland has diverse Naga communities, traditional crafts, music and festivals.",
region:"northeast",
emoji:"🪶",
description:"Known for its colourful tribal traditions and the famous Hornbill Festival."
},

"Odisha":{
capital:"Bhubaneswar",
language:"Odia",
food:"Dalma",
festival:"Rath Yatra",
places:["Puri","Konark","Bhubaneswar","Chilika Lake"],
culture:"Odisha is known for Odissi dance, temple architecture, crafts and Rath Yatra.",
region:"east",
emoji:"🛕",
description:"A coastal state rich in temples, classical dance, crafts and ancient heritage."
},

"Punjab":{
capital:"Chandigarh",
language:"Punjabi",
food:"Sarson da Saag",
festival:"Baisakhi",
places:["Amritsar","Golden Temple","Patiala","Wagah Border"],
culture:"Punjabi culture is famous for energetic music, dance, hospitality, farming and food.",
region:"north",
emoji:"🌾",
description:"The land of energetic culture, Golden Temple, farming and Punjabi traditions."
},

"Rajasthan":{
capital:"Jaipur",
language:"Hindi",
food:"Dal Baati Churma",
festival:"Gangaur",
places:["Jaipur","Udaipur","Jaisalmer","Jodhpur","Pushkar"],
culture:"Rajasthan is celebrated for royal architecture, folk music, colourful clothing, crafts and desert traditions.",
region:"west",
emoji:"🏰",
description:"The royal land of forts, palaces, deserts, folk music and colourful traditions."
},

"Sikkim":{
capital:"Gangtok",
language:"Nepali",
food:"Momos",
festival:"Losar",
places:["Gangtok","Tsomgo Lake","Nathula","Pelling"],
culture:"Sikkim blends Himalayan Buddhist traditions with Nepali, Bhutia and Lepcha cultures.",
region:"northeast",
emoji:"🏔️",
description:"A peaceful Himalayan state with monasteries, mountains and stunning lakes."
},

"Tamil Nadu":{
capital:"Chennai",
language:"Tamil",
food:"Pongal",
festival:"Pongal",
places:["Chennai","Madurai","Ooty","Mahabalipuram"],
culture:"Tamil Nadu is renowned for classical Tamil literature, Bharatanatyam, temples and traditional cuisine.",
region:"south",
emoji:"🛕",
description:"A southern cultural powerhouse famous for temples, dance, literature and cuisine."
},

"Telangana":{
capital:"Hyderabad",
language:"Telugu",
food:"Hyderabadi Biryani",
festival:"Bathukamma",
places:["Hyderabad","Warangal","Charminar","Ramoji Film City"],
culture:"Telangana blends Deccan history, Telugu traditions, folk arts and famous Hyderabadi cuisine.",
region:"south",
emoji:"🏙️",
description:"A modern Deccan state where historic architecture meets technology."
},

"Tripura":{
capital:"Agartala",
language:"Bengali",
food:"Mui Borok",
festival:"Kharchi Puja",
places:["Agartala","Ujjayanta Palace","Neermahal","Unakoti"],
culture:"Tripura has a mix of Bengali and indigenous tribal traditions, crafts and music.",
region:"northeast",
emoji:"🌿",
description:"A green northeastern state with palaces, forests and ancient rock carvings."
},

"Uttar Pradesh":{
capital:"Lucknow",
language:"Hindi",
food:"Awadhi Biryani",
festival:"Diwali",
places:["Agra","Varanasi","Lucknow","Ayodhya","Mathura"],
culture:"Uttar Pradesh has deep roots in Indian spirituality, literature, music, architecture and classical traditions.",
region:"north",
emoji:"🕌",
description:"A historic heartland of India known for the Taj Mahal, sacred cities and rich culture."
},

"Uttarakhand":{
capital:"Dehradun",
language:"Hindi",
food:"Kafuli",
festival:"Harela",
places:["Rishikesh","Nainital","Kedarnath","Badrinath"],
culture:"Uttarakhand combines Himalayan spirituality, folk traditions, temples, forests and mountain life.",
region:"north",
emoji:"🏔️",
description:"A Himalayan state famous for pilgrimage, adventure, rivers and mountain landscapes."
},

"West Bengal":{
capital:"Kolkata",
language:"Bengali",
food:"Macher Jhol",
festival:"Durga Puja",
places:["Kolkata","Darjeeling","Sundarbans","Digha"],
culture:"Bengali literature, art, music, Durga Puja and distinctive cuisine are central to West Bengal's identity.",
region:"east",
emoji:"🎨",
description:"A cultural powerhouse famous for literature, Durga Puja, tea hills and the Sundarbans."
},


/* UNION TERRITORIES */

"Andaman and Nicobar Islands":{
capital:"Port Blair",
language:"Hindi / English",
food:"Seafood",
festival:"Island Tourism Festival",
places:["Port Blair","Havelock Island","Neil Island","Cellular Jail"],
culture:"Island communities and natural landscapes make this territory culturally and geographically unique.",
region:"ut",
emoji:"🏝️",
description:"Tropical islands famous for beaches, marine life and historic landmarks."
},

"Chandigarh":{
capital:"Chandigarh",
language:"Hindi / Punjabi",
food:"Chole Bhature",
festival:"Baisakhi",
places:["Rock Garden","Sukhna Lake","Rose Garden"],
culture:"Chandigarh is known for modern architecture, planned urban design and multicultural life.",
region:"ut",
emoji:"🏙️",
description:"A planned modern city designed with a unique blend of architecture and greenery."
},

"Dadra and Nagar Haveli and Daman and Diu":{
capital:"Daman",
language:"Gujarati / Hindi",
food:"Gujarati Cuisine",
festival:"Navratri",
places:["Daman","Diu","Silvassa","Nagoa Beach"],
culture:"The territory combines tribal, Gujarati and Portuguese-influenced traditions.",
region:"ut",
emoji:"🌊",
description:"A coastal territory known for beaches, heritage and diverse traditions."
},

"Delhi":{
capital:"New Delhi",
language:"Hindi",
food:"Chaat",
festival:"Diwali",
places:["Red Fort","India Gate","Qutub Minar","Humayun's Tomb"],
culture:"Delhi brings together centuries of history with a modern, multicultural city life.",
region:"ut",
emoji:"🏛️",
description:"India's national capital region, packed with monuments, museums and modern attractions."
},

"Jammu and Kashmir":{
capital:"Srinagar",
language:"Kashmiri / Urdu",
food:"Rogan Josh",
festival:"Baisakhi",
places:["Srinagar","Gulmarg","Pahalgam","Dal Lake"],
culture:"Kashmiri traditions are known for crafts, music, cuisine, gardens and Himalayan landscapes.",
region:"ut",
emoji:"🏔️",
description:"A Himalayan region famous for valleys, lakes, mountains and traditional crafts."
},

"Ladakh":{
capital:"Leh",
language:"Ladakhi",
food:"Thukpa",
festival:"Hemis Festival",
places:["Leh","Pangong Lake","Nubra Valley","Khardung La"],
culture:"Ladakh has strong Himalayan Buddhist traditions, monasteries, festivals and mountain lifestyles.",
region:"ut",
emoji:"🏔️",
description:"A high-altitude Himalayan land of monasteries, dramatic mountains and clear lakes."
},

"Lakshadweep":{
capital:"Kavaratti",
language:"Malayalam",
food:"Tuna Curry",
festival:"Eid",
places:["Kavaratti","Agatti","Bangaram","Kalpeni"],
culture:"Island traditions are closely connected with the sea, fishing, local cuisine and community life.",
region:"ut",
emoji:"🏝️",
description:"A tropical archipelago famous for coral islands, lagoons and clear waters."
},

"Puducherry":{
capital:"Puducherry",
language:"Tamil",
food:"South Indian Cuisine",
festival:"Pongal",
places:["White Town","Auroville","Promenade Beach","Paradise Beach"],
culture:"Puducherry blends Tamil traditions with French-influenced architecture and coastal lifestyle.",
region:"ut",
emoji:"🌴",
description:"A charming coastal destination known for French-style streets and beaches."
}

};


/* ================= CATEGORY DATA ================= */

const categoryData = {

food:[
["🍛","Biryani","Hyderabad","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"],
["🥘","Dal Baati Churma","Rajasthan","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"],
["🥞","Dosa","South India","https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80"],
["🍲","Litti Chokha","Bihar","https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80"]
],

festival:[
["🎨","Holi","North India","https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"],
["🪔","Diwali","Across India","https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=80"],
["🌸","Onam","Kerala","https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80"],
["🎭","Durga Puja","West Bengal","https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=900&q=80"]
],

heritage:[
["🏛️","Taj Mahal","Agra, Uttar Pradesh","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"],
["🏰","Amber Fort","Jaipur, Rajasthan","https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"],
["🛕","Konark Temple","Odisha","https://images.unsplash.com/photo-1600100397608-f010c9c5d4f0?auto=format&fit=crop&w=900&q=80"],
["🏛️","Hampi","Karnataka","https://images.unsplash.com/photo-1600100397608-f010c9c5d4f0?auto=format&fit=crop&w=900&q=80"]
],

nature:[
["🏔️","Himalayas","North India","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"],
["🌊","Kerala Backwaters","Kerala","https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"],
["🌳","Kaziranga","Assam","https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80"],
["🏝️","Andaman Islands","Andaman & Nicobar","https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"]
],

mountains:[
["🏔️","Himachal Pradesh","Mountain Escape","https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"],
["🏔️","Ladakh","High Himalayas","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"],
["🌄","Sikkim","Eastern Himalayas","https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80"],
["☁️","Meghalaya","Cloud Hills","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"]
],

culture:[
["💃","Classical Dance","Tamil Nadu","https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=900&q=80"],
["🎶","Folk Traditions","Rajasthan","https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80"],
["🎨","Art & Crafts","India","https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=80"],
["🥁","Festivals","India","https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"]
],

coast:[
["🏖️","Goa","Arabian Sea","https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"],
["🌴","Kerala","Malabar Coast","https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"],
["🌊","Odisha","Bay of Bengal","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"],
["🏝️","Lakshadweep","Arabian Sea","https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"]
]

};


/* ================= INDIA MAP ================= */

let map;
let geoLayer;
let selectedLayer=null;
let mapLoaded=false;

const geoJSON_URL =
"https://raw.githubusercontent.com/iamaanahmad/GeoJson-of-Indian-States/master/indian-states.geojson";


function normalizeName(name){

    if(!name) return "";

    const n=name.trim().toLowerCase();

    const aliases={
        "nct of delhi":"Delhi",
        "delhi":"Delhi",
        "jammu & kashmir":"Jammu and Kashmir",
        "jammu and kashmir":"Jammu and Kashmir",
        "jammu & kashmir":"Jammu and Kashmir",
        "andaman & nicobar":"Andaman and Nicobar Islands",
        "andaman and nicobar":"Andaman and Nicobar Islands",
        "dadra and nagar haveli":"Dadra and Nagar Haveli and Daman and Diu",
        "daman and diu":"Dadra and Nagar Haveli and Daman and Diu",
        "uttarakhand":"Uttarakhand",
        "pondicherry":"Puducherry",
        "puducherry":"Puducherry"
    };

    if(aliases[n]) return aliases[n];

    return Object.keys(stateInfo).find(
        s=>s.toLowerCase()===n
    ) || name;
}


function getGeoName(feature){

    const p=feature.properties || {};

    return normalizeName(
        p.NAME_1 ||
        p.name ||
        p.NAME ||
        p.ST_NM ||
        p.state ||
        p.State ||
        p.STATE ||
        ""
    );
}


function initMap(){

    map=L.map("indiaMap",{
        zoomControl:true,
        minZoom:4,
        maxZoom:9,
        attributionControl:true
    }).setView([22.5,79],5);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom:19,
            attribution:"© OpenStreetMap contributors"
        }
    ).addTo(map);

    fetch(geoJSON_URL)
    .then(r=>r.json())
    .then(data=>{

        geoLayer=L.geoJSON(data,{
            style:defaultStateStyle,
            onEachFeature:onEachState
        }).addTo(map);

        map.fitBounds(geoLayer.getBounds(),{
            padding:[10,10]
        });

        mapLoaded=true;

    })
    .catch(error=>{

        console.error(error);

        document.getElementById("mapStatus").textContent=
        "Map data unavailable";

    });
