import type { Airline } from "./Airline";

const airlines: Airline[] = [
    {
        "name": "1Time Airline",
        "icao": "RNX",
        "callsign": "NEXTIME",
        "country": "South Africa"
    },
    {
        "name": "40-Mile Air",
        "icao": "MLA",
        "callsign": "MILE-AIR",
        "country": "United States"
    },
    {
        "name": "Ansett Australia",
        "icao": "AAA",
        "callsign": "ANSETT",
        "country": "Australia"
    },
    {
        "name": "Aigle Azur",
        "icao": "AAF",
        "callsign": "AIGLE AZUR",
        "country": "France"
    },
    {
        "name": "Aloha Airlines",
        "icao": "AAH",
        "callsign": "ALOHA",
        "country": "United States"
    },
    {
        "name": "American Airlines",
        "icao": "AAL",
        "callsign": "AMERICAN",
        "country": "United States"
    },
    {
        "name": "Asiana Airlines",
        "icao": "AAR",
        "callsign": "ASIANA",
        "country": "Republic of Korea"
    },
    {
        "name": "Askari Aviation",
        "icao": "AAS",
        "callsign": "AL-AAS",
        "country": "Pakistan"
    },
    {
        "name": "Afriqiyah Airways",
        "icao": "AAW",
        "callsign": "AFRIQIYAH",
        "country": "Libya"
    },
    {
        "name": "Allegiant Air",
        "icao": "AAY",
        "callsign": "ALLEGIANT",
        "country": "United States"
    },
    {
        "name": "ABSA - Aerolinhas Brasileiras",
        "icao": "TUS",
        "callsign": "ABSA Cargo",
        "country": "Brazil"
    },
    {
        "name": "Astral Aviation",
        "icao": "ACP",
        "callsign": "ASTRAL CARGO",
        "country": "Kenya"
    },
    {
        "name": "Ada Air",
        "icao": "ADE",
        "callsign": "ADA AIR",
        "country": "Albania"
    },
    {
        "name": "Adria Airways",
        "icao": "ADR",
        "callsign": "ADRIA",
        "country": "Slovenia"
    },
    {
        "name": "Air Europa",
        "icao": "AEA",
        "callsign": "EUROPA",
        "country": "Spain"
    },
    {
        "name": "Aero Benin",
        "icao": "AEB",
        "callsign": "AEROBEN",
        "country": "Benin"
    },
    {
        "name": "Aegean Airlines",
        "icao": "AEE",
        "callsign": "AEGEAN",
        "country": "Greece"
    },
    {
        "name": "Air Europe",
        "icao": "AEL",
        "callsign": "AIR EUROPE",
        "country": "Italy"
    },
    {
        "name": "Alaska Central Express",
        "icao": "AER",
        "callsign": "ACE AIR",
        "country": "United States"
    },
    {
        "name": "ACES Colombia",
        "icao": "AES",
        "callsign": "ACES",
        "country": "Colombia"
    },
    {
        "name": "Astraeus",
        "icao": "AEU",
        "callsign": "FLYSTAR",
        "country": "United Kingdom"
    },
    {
        "name": "Aerosvit Airlines",
        "icao": "AEW",
        "callsign": "AEROSVIT",
        "country": "Ukraine"
    },
    {
        "name": "Air Italy",
        "icao": "AEY",
        "callsign": "AIR ITALY",
        "country": "Italy"
    },
    {
        "name": "Alliance Airlines",
        "icao": "UTY",
        "callsign": "UNITY",
        "country": "Australia"
    },
    {
        "name": "Ariana Afghan Airlines",
        "icao": "AFG",
        "callsign": "ARIANA",
        "country": "Afghanistan"
    },
    {
        "name": "Aeroflot Russian Airlines",
        "icao": "AFL",
        "callsign": "AEROFLOT",
        "country": "Russia"
    },
    {
        "name": "Air Bosna",
        "icao": "BON",
        "callsign": "AIR BOSNA",
        "country": "Bosnia and Herzegovina"
    },
    {
        "name": "Air France",
        "icao": "AFR",
        "callsign": "AIRFRANS",
        "country": "France"
    },
    {
        "name": "Air Caledonie International",
        "icao": "ACI",
        "callsign": "AIRCALIN",
        "country": "France"
    },
    {
        "name": "Air Cargo Carriers",
        "icao": "SNC",
        "callsign": "NIGHT CARGO",
        "country": "United States"
    },
    {
        "name": "Air Namibia",
        "icao": "NMB",
        "callsign": "NAMIBIA",
        "country": "Namibia"
    },
    {
        "name": "Aerolitoral",
        "icao": "SLI",
        "callsign": "COSTERA",
        "country": "Mexico"
    },
    {
        "name": "Air Glaciers",
        "icao": "AGV",
        "callsign": "AIR GLACIERS",
        "country": "Switzerland"
    },
    {
        "name": "Aviogenex",
        "icao": "AGX",
        "callsign": "GENEX",
        "country": "Serbia"
    },
    {
        "name": "Aeroper",
        "icao": "PLI",
        "callsign": "Aeroperu",
        "country": "Peru"
    },
    {
        "name": "Atlas Blue",
        "icao": "BMM",
        "callsign": "ATLAS BLUE",
        "country": "Morocco"
    },
    {
        "name": "Azerbaijan Airlines",
        "icao": "AHY",
        "callsign": "AZAL",
        "country": "Azerbaijan"
    },
    {
        "name": "Avies",
        "icao": "AIA",
        "callsign": "AVIES",
        "country": "Estonia"
    },
    {
        "name": "Airblue",
        "icao": "ABQ",
        "callsign": "PAKBLUE",
        "country": "Pakistan"
    },
    {
        "name": "Airlift International",
        "icao": "AIR",
        "callsign": "AIRLIFT",
        "country": "United States"
    },
    {
        "name": "Air Berlin",
        "icao": "BER",
        "callsign": "AIR BERLIN",
        "country": "Germany"
    },
    {
        "name": "Air India Limited",
        "icao": "AIC",
        "callsign": "AIRINDIA",
        "country": "India"
    },
    {
        "name": "Air Bourbon",
        "icao": "BUB",
        "callsign": "BOURBON",
        "country": "Reunion"
    },
    {
        "name": "Air Atlanta Icelandic",
        "icao": "ABD",
        "callsign": "ATLANTA",
        "country": "Iceland"
    },
    {
        "name": "Air Tahiti Nui",
        "icao": "THT",
        "callsign": "TAHITI AIRLINES",
        "country": "France"
    },
    {
        "name": "Arkia Israel Airlines",
        "icao": "AIZ",
        "callsign": "ARKIA",
        "country": "Israel"
    },
    {
        "name": "Air Jamaica",
        "icao": "AJM",
        "callsign": "JAMAICA",
        "country": "Jamaica"
    },
    {
        "name": "Air One",
        "icao": "ADH",
        "callsign": "HERON",
        "country": "Italy"
    },
    {
        "name": "Air Sahara",
        "icao": "RSH",
        "callsign": "SAHARA",
        "country": "India"
    },
    {
        "name": "Air Malta",
        "icao": "AMC",
        "callsign": "AIR MALTA",
        "country": "Malta"
    },
    {
        "name": "Air Japan",
        "icao": "AJX",
        "callsign": "AIR JAPAN",
        "country": "Japan"
    },
    {
        "name": "America West Airlines",
        "icao": "AWE",
        "callsign": "CACTUS",
        "country": "United States"
    },
    {
        "name": "Air Wisconsin",
        "icao": "AWI",
        "callsign": "AIR WISCONSIN",
        "country": "United States"
    },
    {
        "name": "Tatarstan Airlines",
        "icao": "TAK",
        "callsign": "TATARSTAN",
        "country": "Russia"
    },
    {
        "name": "Allegheny Commuter Airlines",
        "icao": "ALO",
        "callsign": "ALLEGHENY",
        "country": "United States"
    },
    {
        "name": "Air Sunshine",
        "icao": "RSI",
        "callsign": "AIR SUNSHINE",
        "country": "United States"
    },
    {
        "name": "Air Malawi",
        "icao": "AML",
        "callsign": "MALAWI",
        "country": "Malawi"
    },
    {
        "name": "ATA Airlines",
        "icao": "AMT",
        "callsign": "AMTRAN",
        "country": "United States"
    },
    {
        "name": "Air Macau",
        "icao": "AMU",
        "callsign": "AIR MACAO",
        "country": "Macao"
    },
    {
        "name": "Air Seychelles",
        "icao": "SEY",
        "callsign": "SEYCHELLES",
        "country": "Seychelles"
    },
    {
        "name": "AeroMéxico",
        "icao": "AMX",
        "callsign": "AEROMEXICO",
        "country": "Mexico"
    },
    {
        "name": "All Nippon Airways",
        "icao": "ANA",
        "callsign": "ALL NIPPON",
        "country": "Japan"
    },
    {
        "name": "Air Nostrum",
        "icao": "ANE",
        "callsign": "AIR NOSTRUM",
        "country": "Spain"
    },
    {
        "name": "Air Niugini",
        "icao": "ANG",
        "callsign": "NUIGINI",
        "country": "Papua New Guinea"
    },
    {
        "name": "Air Arabia",
        "icao": "ABY",
        "callsign": "ARABIA",
        "country": "United Arab Emirates"
    },
    {
        "name": "Air Canada",
        "icao": "ACA",
        "callsign": "AIR CANADA",
        "country": "Canada"
    },
    {
        "name": "Air Baltic",
        "icao": "BTI",
        "callsign": "AIRBALTIC",
        "country": "Latvia"
    },
    {
        "name": "Air Nippon",
        "icao": "ANK",
        "callsign": "ANK AIR",
        "country": "Japan"
    },
    {
        "name": "Airnorth",
        "icao": "ANO",
        "callsign": "TOPEND",
        "country": "Australia"
    },
    {
        "name": "Air North Charter - Canada",
        "icao": "ANT",
        "callsign": "AIR NORTH",
        "country": "Canada"
    },
    {
        "name": "Air New Zealand",
        "icao": "ANZ",
        "callsign": "NEW ZEALAND",
        "country": "New Zealand"
    },
    {
        "name": "Alitalia Express",
        "icao": "SMX",
        "callsign": "ALIEXPRESS",
        "country": "Italy"
    },
    {
        "name": "Aero Flight",
        "icao": "ARF",
        "callsign": "Aero Fox",
        "country": "Germany"
    },
    {
        "name": "Arrow Air",
        "icao": "APW",
        "callsign": "BIG A",
        "country": "United States"
    },
    {
        "name": "Aerocondor",
        "icao": "ARD",
        "callsign": "AEROCONDOR",
        "country": "Portugal"
    },
    {
        "name": "Aires",
        "icao": "ARE",
        "callsign": " Aerovias de Integracion Regional",
        "country": " S.A."
    },
    {
        "name": "Aerolineas Argentinas",
        "icao": "ARG",
        "callsign": "ARGENTINA",
        "country": "Argentina"
    },
    {
        "name": "Alaska Airlines",
        "icao": "ASA",
        "callsign": " Inc.",
        "country": "ALASKA"
    },
    {
        "name": "Air Sinai",
        "icao": "ASD",
        "callsign": "AIR SINAI",
        "country": "Egypt"
    },
    {
        "name": "Atlantic Southeast Airlines",
        "icao": "ASQ",
        "callsign": "ACEY",
        "country": "United States"
    },
    {
        "name": "Astrakhan Airlines",
        "icao": "ASZ",
        "callsign": "AIR ASTRAKHAN",
        "country": "Russia"
    },
    {
        "name": "Air Tanzania",
        "icao": "ATC",
        "callsign": "TANZANIA",
        "country": "Tanzania"
    },
    {
        "name": "Air Burkina",
        "icao": "VBW",
        "callsign": "BURKINA",
        "country": "Burkina Faso"
    },
    {
        "name": "Airlines Of Tasmania",
        "icao": "ATM",
        "callsign": "AIRTAS",
        "country": "Australia"
    },
    {
        "name": "Austrian Airlines",
        "icao": "AUA",
        "callsign": "AUSTRIAN",
        "country": "Austria"
    },
    {
        "name": "Air Southwest",
        "icao": "WOW",
        "callsign": "SWALLOW",
        "country": "United Kingdom"
    },
    {
        "name": "Augsburg Airways",
        "icao": "AUB",
        "callsign": "AUGSBURG-AIR",
        "country": "Germany"
    },
    {
        "name": "Abu Dhabi Amiri Flight",
        "icao": "AUH",
        "callsign": "SULTAN",
        "country": "United Arab Emirates"
    },
    {
        "name": "Aeroflot-Nord",
        "icao": "AUL",
        "callsign": "DVINA",
        "country": "Russia"
    },
    {
        "name": "Aurigny Air Services",
        "icao": "AUR",
        "callsign": "AYLINE",
        "country": "United Kingdom"
    },
    {
        "name": "Austral Lineas Aereas",
        "icao": "AUT",
        "callsign": "AUSTRAL",
        "country": "Argentina"
    },
    {
        "name": "Avianca - Aerovias Nacionales de Colombia",
        "icao": "AVA",
        "callsign": " S.A.",
        "country": "AVIANCA"
    },
    {
        "name": "Air Vanuatu",
        "icao": "AVN",
        "callsign": "AIR VAN",
        "country": "Vanuatu"
    },
    {
        "name": "Air Bangladesh",
        "icao": "BGD",
        "callsign": "AIR BANGLA",
        "country": "Bangladesh"
    },
    {
        "name": "Air Mediterranee",
        "icao": "BIE",
        "callsign": "MEDITERRANEE",
        "country": "France"
    },
    {
        "name": "Air Moorea",
        "icao": "TAH",
        "callsign": "AIR MOOREA",
        "country": "France"
    },
    {
        "name": "Aeroline GmbH",
        "icao": "AWU",
        "callsign": "SYLT-AIR",
        "country": "Germany"
    },
    {
        "name": "Air Wales",
        "icao": "AWW",
        "callsign": "RED DRAGON",
        "country": "United Kingdom"
    },
    {
        "name": "Air Caraïbes",
        "icao": "FWI",
        "callsign": "FRENCH WEST",
        "country": "France"
    },
    {
        "name": "Air India Express",
        "icao": "AXB",
        "callsign": "EXPRESS INDIA",
        "country": "India"
    },
    {
        "name": "Air Exel",
        "icao": "AXL",
        "callsign": "EXEL COMMUTER",
        "country": "Netherlands"
    },
    {
        "name": "AirAsia",
        "icao": "AXM",
        "callsign": "ASIAN EXPRESS",
        "country": "Malaysia"
    },
    {
        "name": "Atlant-Soyuz Airlines",
        "icao": "AYZ",
        "callsign": "ATLANT-SOYUZ",
        "country": "Russia"
    },
    {
        "name": "Alitalia",
        "icao": "AZA",
        "callsign": "ALITALIA",
        "country": "Italy"
    },
    {
        "name": "Air Zimbabwe",
        "icao": "AZW",
        "callsign": "AIR ZIMBABWE",
        "country": "Zimbabwe"
    },
    {
        "name": "Aserca Airlines",
        "icao": "OCA",
        "callsign": "AROSCA",
        "country": "Venezuela"
    },
    {
        "name": "Rossiya-Russian Airlines",
        "icao": "SDM",
        "callsign": "PULKOVO",
        "country": "Russia"
    },
    {
        "name": "American Eagle Airlines",
        "icao": "EGF",
        "callsign": "EAGLE FLIGHT",
        "country": "United States"
    },
    {
        "name": "AD Aviation",
        "icao": "VUE",
        "callsign": "FLIGHTVUE",
        "country": "United Kingdom"
    },
    {
        "name": "Air Ivoire",
        "icao": "VUN",
        "callsign": "AIRIVOIRE",
        "country": "Ivory Coast"
    },
    {
        "name": "Air Botswana",
        "icao": "BOT",
        "callsign": "BOTSWANA",
        "country": "Botswana"
    },
    {
        "name": "Air Foyle",
        "icao": "UPA",
        "callsign": "FOYLE",
        "country": "United Kingdom"
    },
    {
        "name": "Air Tahiti",
        "icao": "VTA",
        "callsign": "AIR TAHITI",
        "country": "French Polynesia"
    },
    {
        "name": "Africa West",
        "icao": "WTA",
        "callsign": "WEST TOGO",
        "country": "Togo"
    },
    {
        "name": "ATRAN Cargo Airlines",
        "icao": "VAS",
        "callsign": "ATRAN",
        "country": "Russian Federation"
    },
    {
        "name": "Air China",
        "icao": "CCA",
        "callsign": "AIR CHINA",
        "country": "China"
    },
    {
        "name": "Aero Condor Peru",
        "icao": "CDP",
        "callsign": "CONDOR-PERU",
        "country": "Peru"
    },
    {
        "name": "Air Chathams",
        "icao": "CVA",
        "callsign": "CHATHAM",
        "country": "New Zealand"
    },
    {
        "name": "Air Marshall Islands",
        "icao": "CWM",
        "callsign": "AIR MARSHALLS",
        "country": "Marshall Islands"
    },
    {
        "name": "Access Air",
        "icao": "CYD",
        "callsign": "CYCLONE",
        "country": "United States"
    },
    {
        "name": "Air Algerie",
        "icao": "DAH",
        "callsign": "AIR ALGERIE",
        "country": "Algeria"
    },
    {
        "name": "Adam Air",
        "icao": "DHI",
        "callsign": "ADAM SKY",
        "country": "Indonesia"
    },
    {
        "name": "Air Dolomiti",
        "icao": "DLA",
        "callsign": "DOLOMOTI",
        "country": "Italy"
    },
    {
        "name": "Aeroflot-Don",
        "icao": "DNV",
        "callsign": "DONAVIA",
        "country": "Russia"
    },
    {
        "name": "Air Madrid",
        "icao": "DRD",
        "callsign": "ALADA AIR",
        "country": "Spain"
    },
    {
        "name": "Aer Lingus",
        "icao": "EIN",
        "callsign": "SHAMROCK",
        "country": "Ireland"
    },
    {
        "name": "Air Finland",
        "icao": "FIF",
        "callsign": "AIR FINLAND",
        "country": "Finland"
    },
    {
        "name": "Airfix Aviation",
        "icao": "FIX",
        "callsign": "AIRFIX",
        "country": "Finland"
    },
    {
        "name": "Air Pacific",
        "icao": "FJI",
        "callsign": "PACIFIC",
        "country": "Fiji"
    },
    {
        "name": "Atlantic Airways",
        "icao": "FLI",
        "callsign": "FAROELINE",
        "country": "Faroe Islands"
    },
    {
        "name": "Air Florida",
        "icao": "FLZ",
        "callsign": "AIR FLORIDA",
        "country": "United States"
    },
    {
        "name": "Air Iceland",
        "icao": "FXI",
        "callsign": "FAXI",
        "country": "Iceland"
    },
    {
        "name": "Air Philippines",
        "icao": "GAP",
        "callsign": "ORIENT PACIFIC",
        "country": "Philippines"
    },
    {
        "name": "Air Guinee Express",
        "icao": "GIP",
        "callsign": "FUTURE EXPRESS",
        "country": "Guinea"
    },
    {
        "name": "Air Greenland",
        "icao": "GRL",
        "callsign": "GREENLAND",
        "country": "Denmark"
    },
    {
        "name": "Atlas Air",
        "icao": "GTI",
        "callsign": "GIANT",
        "country": "United States"
    },
    {
        "name": "Air Guyane",
        "icao": "GUY",
        "callsign": "GREEN BIRD",
        "country": "French Guiana"
    },
    {
        "name": "Air Bagan",
        "icao": "JAB",
        "callsign": "AIR BAGAN",
        "country": "Myanmar"
    },
    {
        "name": "Air Canada Jazz",
        "icao": "JZA",
        "callsign": "JAZZ",
        "country": "Canada"
    },
    {
        "name": "Atlasjet",
        "icao": "KKK",
        "callsign": "ATLASJET",
        "country": "Turkey"
    },
    {
        "name": "Air Koryo",
        "icao": "KOR",
        "callsign": "AIR KORYO",
        "country": "Democratic People's Republic of Korea"
    },
    {
        "name": "Air Astana",
        "icao": "KZR",
        "callsign": "ASTANALINE",
        "country": "Kazakhstan"
    },
    {
        "name": "Albanian Airlines",
        "icao": "LBC",
        "callsign": "ALBANIAN",
        "country": "Albania"
    },
    {
        "name": "Aerolane",
        "icao": "LNE",
        "callsign": "LAN ECUADOR",
        "country": "Ecuador"
    },
    {
        "name": "Air Luxor",
        "icao": "LXR",
        "callsign": "AIRLUXOR",
        "country": "Portugal"
    },
    {
        "name": "Air Mauritius",
        "icao": "MAU",
        "callsign": "AIRMAURITIUS",
        "country": "Mauritius"
    },
    {
        "name": "Air Madagascar",
        "icao": "MDG",
        "callsign": "AIR MADAGASCAR",
        "country": "Madagascar"
    },
    {
        "name": "Air Moldova",
        "icao": "MLD",
        "callsign": "AIR MOLDOVA",
        "country": "Moldova"
    },
    {
        "name": "Air Plus Comet",
        "icao": "MPD",
        "callsign": "RED COMET",
        "country": "Spain"
    },
    {
        "name": "Aero Contractors",
        "icao": "NIG",
        "callsign": "AEROLINE",
        "country": "Nigeria"
    },
    {
        "name": "Aeropelican Air Services",
        "icao": "PEL",
        "callsign": "PELICAN",
        "country": "Australia"
    },
    {
        "name": "Aer Arann",
        "icao": "REA",
        "callsign": "AER ARANN",
        "country": "Ireland"
    },
    {
        "name": "Air Austral",
        "icao": "REU",
        "callsign": "REUNION",
        "country": "France"
    },
    {
        "name": "Asian Spirit",
        "icao": "RIT",
        "callsign": "ASIAN SPIRIT",
        "country": "Philippines"
    },
    {
        "name": "Air Afrique",
        "icao": "RKA",
        "callsign": "AIRAFRIC",
        "country": "Ivory Coast"
    },
    {
        "name": "Airlinair",
        "icao": "RLA",
        "callsign": "AIRLINAIR",
        "country": "France"
    },
    {
        "name": "Aero Lanka",
        "icao": "RLN",
        "callsign": "AERO LANKA",
        "country": "Sri Lanka"
    },
    {
        "name": "Air Salone",
        "icao": "RNE",
        "callsign": "AIR SALONE",
        "country": "Sierra Leone"
    },
    {
        "name": "Armavia",
        "icao": "RNV",
        "callsign": "ARMAVIA",
        "country": "Armenia"
    },
    {
        "name": "AeroRep",
        "icao": "RPB",
        "callsign": "AEROREPUBLICA",
        "country": "Colombia"
    },
    {
        "name": "Aero-Service",
        "icao": "RSR",
        "callsign": "CONGOSERV",
        "country": "Republic of the Congo"
    },
    {
        "name": "Aerosur",
        "icao": "RSU",
        "callsign": "AEROSUR",
        "country": "Bolivia"
    },
    {
        "name": "Aeronorte",
        "icao": "RTE",
        "callsign": "LUZAVIA",
        "country": "Portugal"
    },
    {
        "name": "Avient Aviation",
        "icao": "SMJ",
        "callsign": "AVAVIA",
        "country": "Zimbabwe"
    },
    {
        "name": "Aircompany Yakutia",
        "icao": "SYL",
        "callsign": "AIR YAKUTIA",
        "country": "Russia"
    },
    {
        "name": "Aeromar",
        "icao": "TAO",
        "callsign": "TRANS-AEROMAR",
        "country": "Mexico"
    },
    {
        "name": "Arkefly",
        "icao": "TFL",
        "callsign": "ARKEFLY",
        "country": "Netherlands"
    },
    {
        "name": "Airlines PNG",
        "icao": "TOK",
        "callsign": "BALUS",
        "country": "Papua New Guinea"
    },
    {
        "name": "AirTran Airways",
        "icao": "TRS",
        "callsign": "CITRUS",
        "country": "United States"
    },
    {
        "name": "Air Transat",
        "icao": "TSC",
        "callsign": "TRANSAT",
        "country": "Canada"
    },
    {
        "name": "Avialeasing Aviation Company",
        "icao": "TWN",
        "callsign": "TWINARROW",
        "country": "Uzbekistan"
    },
    {
        "name": "Tyrolean Airways",
        "icao": "TYR",
        "callsign": "TYROLEAN",
        "country": "Austria"
    },
    {
        "name": "Aerolineas Galapagos (Aerogal)",
        "icao": "GLG",
        "callsign": "AEROGAL",
        "country": "Ecuador"
    },
    {
        "name": "Alrosa Mirny Air Enterprise",
        "icao": "DRU",
        "callsign": "MIRNY",
        "country": "Russia"
    },
    {
        "name": "British Airways",
        "icao": "BAW",
        "callsign": "SPEEDBIRD",
        "country": "United Kingdom"
    },
    {
        "name": "Biman Bangladesh Airlines",
        "icao": "BBC",
        "callsign": "BANGLADESH",
        "country": "Bangladesh"
    },
    {
        "name": "Belair Airlines",
        "icao": "BHP",
        "callsign": "BELAIR",
        "country": "Switzerland"
    },
    {
        "name": "Bahamasair",
        "icao": "BHS",
        "callsign": "BAHAMAS",
        "country": "Bahamas"
    },
    {
        "name": "British International Helicopters",
        "icao": "BIH",
        "callsign": "BRINTEL",
        "country": "United Kingdom"
    },
    {
        "name": "BF-Lento OY",
        "icao": "BKF",
        "callsign": "BAKERFLIGHT",
        "country": "Finland"
    },
    {
        "name": "Bangkok Airways",
        "icao": "BKP",
        "callsign": "BANGKOK AIR",
        "country": "Thailand"
    },
    {
        "name": "Blue1",
        "icao": "BLF",
        "callsign": "BLUEFIN",
        "country": "Finland"
    },
    {
        "name": "Baltic Airlines",
        "icao": "BLL",
        "callsign": "BALTIC AIRLINES",
        "country": "Russia"
    },
    {
        "name": "Bearskin Lake Air Service",
        "icao": "BLS",
        "callsign": "BEARSKIN",
        "country": "Canada"
    },
    {
        "name": "Bellview Airlines",
        "icao": "BLV",
        "callsign": "BELLVIEW AIRLINES",
        "country": "Nigeria"
    },
    {
        "name": "bmi",
        "icao": "BMA",
        "callsign": "MIDLAND",
        "country": "United Kingdom"
    },
    {
        "name": "bmibaby",
        "icao": "BMI",
        "callsign": "BABY",
        "country": "United Kingdom"
    },
    {
        "name": "Bemidji Airlines",
        "icao": "BMJ",
        "callsign": "BEMIDJI",
        "country": "United States"
    },
    {
        "name": "Blue Panorama Airlines",
        "icao": "BPA",
        "callsign": "BLUE PANOROMA",
        "country": "Italy"
    },
    {
        "name": "Budapest Aircraft Services/Manx2",
        "icao": "BPS",
        "callsign": "BASE",
        "country": "Hungary"
    },
    {
        "name": "Bering Air",
        "icao": "BRG",
        "callsign": "BERING AIR",
        "country": "United States"
    },
    {
        "name": "Brazilian Air Force",
        "icao": "BRS",
        "callsign": "BRAZILIAN AIR FORCE",
        "country": "Brazil"
    },
    {
        "name": "Belavia Belarusian Airlines",
        "icao": "BRU",
        "callsign": "BELARUS AVIA",
        "country": "Belarus"
    },
    {
        "name": "Metro Batavia",
        "icao": "BTV",
        "callsign": "BATAVIA",
        "country": "Indonesia"
    },
    {
        "name": "Berjaya Air",
        "icao": "BVT",
        "callsign": "BERJAYA",
        "country": "Malaysia"
    },
    {
        "name": "Blue Wings",
        "icao": "BWG",
        "callsign": "BLUE WINGS",
        "country": "Germany"
    },
    {
        "name": "Brit Air",
        "icao": "BZH",
        "callsign": "BRITAIR",
        "country": "France"
    },
    {
        "name": "Brussels Airlines",
        "icao": "DAT",
        "callsign": "BEE-LINE",
        "country": "Belgium"
    },
    {
        "name": "Blue Air",
        "icao": "JOR",
        "callsign": "BLUE TRANSPORT",
        "country": "Romania"
    },
    {
        "name": "British Mediterranean Airways",
        "icao": "LAJ",
        "callsign": "BEE MED",
        "country": "United Kingdom"
    },
    {
        "name": "Bulgaria Air",
        "icao": "LZB",
        "callsign": "FLYING BULGARIA",
        "country": "Bulgaria"
    },
    {
        "name": "Barents AirLink",
        "icao": "NKF",
        "callsign": "NORDFLIGHT",
        "country": "Sweden"
    },
    {
        "name": "CAL Cargo Air Lines",
        "icao": "ICL",
        "callsign": "CAL",
        "country": "Israel"
    },
    {
        "name": "Calima Aviacion",
        "icao": "CLI",
        "callsign": "CALIMA",
        "country": "Spain"
    },
    {
        "name": "Canadian Airlines",
        "icao": "CDN",
        "callsign": "CANADIAN",
        "country": "Canada"
    },
    {
        "name": "Canadian North",
        "icao": "MPE",
        "callsign": "EMPRESS",
        "country": "Canada"
    },
    {
        "name": "Cape Air",
        "icao": "KAP",
        "callsign": "CAIR",
        "country": "United States"
    },
    {
        "name": "Caribbean Airlines",
        "icao": "BWA",
        "callsign": "CARIBBEAN AIRLINES",
        "country": "Trinidad and Tobago"
    },
    {
        "name": "Carpatair",
        "icao": "KRP",
        "callsign": "CARPATAIR",
        "country": "Romania"
    },
    {
        "name": "Caspian Airlines",
        "icao": "CPN",
        "callsign": "CASPIAN",
        "country": "Iran"
    },
    {
        "name": "Cathay Pacific",
        "icao": "CPA",
        "callsign": "CATHAY",
        "country": "Hong Kong SAR of China"
    },
    {
        "name": "Cayman Airways",
        "icao": "CAY",
        "callsign": "CAYMAN",
        "country": "Cayman Islands"
    },
    {
        "name": "Cebu Pacific",
        "icao": "CEB",
        "callsign": "CEBU AIR",
        "country": "Philippines"
    },
    {
        "name": "Centralwings",
        "icao": "CLW",
        "callsign": "CENTRALWINGS",
        "country": "Poland"
    },
    {
        "name": "Charter Air",
        "icao": "CHW",
        "callsign": "CHARTER WIEN",
        "country": "Austria"
    },
    {
        "name": "Chautauqua Airlines",
        "icao": "CHQ",
        "callsign": "CHAUTAUQUA",
        "country": "United States"
    },
    {
        "name": "China Airlines",
        "icao": "CAL",
        "callsign": "DYNASTY",
        "country": "Taiwan"
    },
    {
        "name": "China Eastern Airlines",
        "icao": "CES",
        "callsign": "CHINA EASTERN",
        "country": "China"
    },
    {
        "name": "China Southern Airlines",
        "icao": "CSN",
        "callsign": "CHINA SOUTHERN",
        "country": "China"
    },
    {
        "name": "China United Airlines",
        "icao": "CUA",
        "callsign": "LIANHANG",
        "country": "China"
    },
    {
        "name": "Yunnan Airlines",
        "icao": "CYH",
        "callsign": "YUNNAN",
        "country": "China"
    },
    {
        "name": "Cimber Air",
        "icao": "CIM",
        "callsign": "CIMBER",
        "country": "Denmark"
    },
    {
        "name": "Cirrus Airlines",
        "icao": "RUS",
        "callsign": "CIRRUS AIR",
        "country": "Germany"
    },
    {
        "name": "City Airline",
        "icao": "SDR",
        "callsign": "SWEDESTAR",
        "country": "Sweden"
    },
    {
        "name": "City Connexion Airlines",
        "icao": "CIX",
        "callsign": "CONNEXION",
        "country": "Burundi"
    },
    {
        "name": "CityJet",
        "icao": "BCY",
        "callsign": "CITY-IRELAND",
        "country": "Ireland"
    },
    {
        "name": "BA CityFlyer",
        "icao": "CFE",
        "callsign": "FLYER",
        "country": "United Kingdom"
    },
    {
        "name": "Click Airways",
        "icao": "CGK",
        "callsign": "CLICK AIR",
        "country": "Kyrgyzstan"
    },
    {
        "name": "Colgan Air",
        "icao": "CJC",
        "callsign": "COLGAN",
        "country": "United States"
    },
    {
        "name": "Comair",
        "icao": "COM",
        "callsign": "COMAIR",
        "country": "United States"
    },
    {
        "name": "Comair",
        "icao": "CAW",
        "callsign": "COMMERCIAL",
        "country": "South Africa"
    },
    {
        "name": "CommutAir",
        "icao": "UCA",
        "callsign": "COMMUTAIR",
        "country": "United States"
    },
    {
        "name": "Comores Airlines",
        "icao": "CWK",
        "callsign": "CONTICOM",
        "country": "Comoros"
    },
    {
        "name": "Compass Airlines",
        "icao": "CPZ",
        "callsign": "Compass Rose",
        "country": "United States"
    },
    {
        "name": "Condor Flugdienst",
        "icao": "CFG",
        "callsign": "CONDOR",
        "country": "Germany"
    },
    {
        "name": "Consorcio Aviaxsa",
        "icao": "CHP",
        "callsign": "AVIACSA",
        "country": "Mexico"
    },
    {
        "name": "Contact Air",
        "icao": "KIS",
        "callsign": "CONTACTAIR",
        "country": "Germany"
    },
    {
        "name": "Continental Airlines",
        "icao": "COA",
        "callsign": "CONTINENTAL",
        "country": "United States"
    },
    {
        "name": "Continental Micronesia",
        "icao": "CMI",
        "callsign": "AIR MIKE",
        "country": "United States"
    },
    {
        "name": "Conviasa",
        "icao": "VCV",
        "callsign": "CONVIASA",
        "country": "Venezuela"
    },
    {
        "name": "Copa Airlines",
        "icao": "CMP",
        "callsign": "COPA",
        "country": "Panama"
    },
    {
        "name": "Copterline",
        "icao": "AAQ",
        "callsign": "COPTERLINE",
        "country": "Finland"
    },
    {
        "name": "Corendon Airlines",
        "icao": "CAI",
        "callsign": "CORENDON",
        "country": "Turkey"
    },
    {
        "name": "Corsairfly",
        "icao": "CRL",
        "callsign": "CORSAIR",
        "country": "France"
    },
    {
        "name": "Corse-Mediterranee",
        "icao": "CCM",
        "callsign": "CORSICA",
        "country": "France"
    },
    {
        "name": "Crest Aviation",
        "icao": "CAN",
        "callsign": "CREST",
        "country": "United Kingdom"
    },
    {
        "name": "Croatia Airlines",
        "icao": "CTN",
        "callsign": "CROATIA",
        "country": "Croatia"
    },
    {
        "name": "Crown Airways",
        "icao": "CRO",
        "callsign": "CROWN AIRWAYS",
        "country": "United States"
    },
    {
        "name": "Cubana de Aviación",
        "icao": "CUB",
        "callsign": "CUBANA",
        "country": "Cuba"
    },
    {
        "name": "Cyprus Airways",
        "icao": "CYP",
        "callsign": "CYPRUS",
        "country": "Cyprus"
    },
    {
        "name": "Czech Airlines",
        "icao": "CSA",
        "callsign": "CSA-LINES",
        "country": "Czech Republic"
    },
    {
        "name": "DAT Danish Air Transport",
        "icao": "DTR",
        "callsign": "DANISH",
        "country": "Denmark"
    },
    {
        "name": "Daallo Airlines",
        "icao": "DAO",
        "callsign": "DALO AIRLINES",
        "country": "Djibouti"
    },
    {
        "name": "Dalavia",
        "icao": "KHB",
        "callsign": "DALAVIA",
        "country": "Russia"
    },
    {
        "name": "Darwin Airline",
        "icao": "DWT",
        "callsign": "DARWIN",
        "country": "Switzerland"
    },
    {
        "name": "Delta Aerotaxi",
        "icao": "DEA",
        "callsign": "JET SERVICE",
        "country": "Italy"
    },
    {
        "name": "Delta Air Lines",
        "icao": "DAL",
        "callsign": "DELTA",
        "country": "United States"
    },
    {
        "name": "Denim Air",
        "icao": "DNM",
        "callsign": "DENIM",
        "country": "Netherlands"
    },
    {
        "name": "Djibouti Airlines",
        "icao": "DJB",
        "callsign": "DJIBOUTI AIR",
        "country": "Djibouti"
    },
    {
        "name": "Dniproavia",
        "icao": "UDN",
        "callsign": "DNIEPRO",
        "country": "Ukraine"
    },
    {
        "name": "Dominicana de Aviaci",
        "icao": "DOA",
        "callsign": "DOMINICANA",
        "country": "Dominican Republic"
    },
    {
        "name": "Domodedovo Airlines",
        "icao": "DMO",
        "callsign": "DOMODEDOVO",
        "country": "Russia"
    },
    {
        "name": "DonbassAero",
        "icao": "UDC",
        "callsign": "DONBASS AERO",
        "country": "Ukraine"
    },
    {
        "name": "Dragonair",
        "icao": "HDA",
        "callsign": " Hong Kong Dragon Airlines",
        "country": "DRAGON"
    },
    {
        "name": "Druk Air",
        "icao": "DRK",
        "callsign": "ROYAL BHUTAN",
        "country": "Bhutan"
    },
    {
        "name": "Dubrovnik Air",
        "icao": "DBK",
        "callsign": "SEAGULL",
        "country": "Croatia"
    },
    {
        "name": "Dutch Antilles Express",
        "icao": "DNL",
        "callsign": "DUTCH ANTILLES",
        "country": "Netherlands Antilles"
    },
    {
        "name": "dba",
        "icao": "BAG",
        "callsign": "SPEEDWAY",
        "country": "Germany"
    },
    {
        "name": "EVA Air",
        "icao": "EVA",
        "callsign": "EVA",
        "country": "Taiwan"
    },
    {
        "name": "East African",
        "icao": "UGX",
        "callsign": "CRANE",
        "country": "Uganda"
    },
    {
        "name": "Eastern Airways",
        "icao": "EZE",
        "callsign": "EASTFLIGHT",
        "country": "United Kingdom"
    },
    {
        "name": "Ecuavia",
        "icao": "ECU",
        "callsign": "ECUAVIA",
        "country": "Ecuador"
    },
    {
        "name": "Edelweiss Air",
        "icao": "EDW",
        "callsign": "EDELWEISS",
        "country": "Switzerland"
    },
    {
        "name": "Egyptair",
        "icao": "MSR",
        "callsign": "EGYPTAIR",
        "country": "Egypt"
    },
    {
        "name": "El Al Israel Airlines",
        "icao": "ELY",
        "callsign": "ELAL",
        "country": "Israel"
    },
    {
        "name": "El-Buraq Air Transport",
        "icao": "BRQ",
        "callsign": "BURAQAIR",
        "country": "Libya"
    },
    {
        "name": "Emirates",
        "icao": "UAE",
        "callsign": "EMIRATES",
        "country": "United Arab Emirates"
    },
    {
        "name": "Empresa Ecuatoriana De Aviacion",
        "icao": "EEA",
        "callsign": "ECUATORIANA",
        "country": "Ecuador"
    },
    {
        "name": "Eritrean Airlines",
        "icao": "ERT",
        "callsign": "ERITREAN",
        "country": "Eritrea"
    },
    {
        "name": "Estonian Air",
        "icao": "ELL",
        "callsign": "ESTONIAN",
        "country": "Estonia"
    },
    {
        "name": "Ethiopian Airlines",
        "icao": "ETH",
        "callsign": "ETHIOPIAN",
        "country": "Ethiopia"
    },
    {
        "name": "Etihad Airways",
        "icao": "ETD",
        "callsign": "ETIHAD",
        "country": "United Arab Emirates"
    },
    {
        "name": "Eurocypria Airlines",
        "icao": "ECA",
        "callsign": "EUROCYPRIA",
        "country": "Cyprus"
    },
    {
        "name": "Eurofly Service",
        "icao": "EEU",
        "callsign": "EUROFLY",
        "country": "Italy"
    },
    {
        "name": "Eurolot",
        "icao": "ELO",
        "callsign": "EUROLOT",
        "country": "Poland"
    },
    {
        "name": "European Air Express",
        "icao": "EAL",
        "callsign": "STAR WING",
        "country": "Germany"
    },
    {
        "name": "Eurowings",
        "icao": "EWG",
        "callsign": "EUROWINGS",
        "country": "Germany"
    },
    {
        "name": "Evergreen International Airlines",
        "icao": "EIA",
        "callsign": "EVERGREEN",
        "country": "United States"
    },
    {
        "name": "Excel Airways",
        "icao": "XLA",
        "callsign": "EXPO",
        "country": "United Kingdom"
    },
    {
        "name": "Excel Charter",
        "icao": "XEL",
        "callsign": "HELI EXCEL",
        "country": "United Kingdom"
    },
    {
        "name": "Express One International",
        "icao": "LHN",
        "callsign": "LONGHORN",
        "country": "United States"
    },
    {
        "name": "ExpressJet",
        "icao": "BTA",
        "callsign": "JET LINK",
        "country": "United States"
    },
    {
        "name": "easyJet",
        "icao": "EZY",
        "callsign": "EASY",
        "country": "United Kingdom"
    },
    {
        "name": "Far Eastern Air Transport",
        "icao": "EFA",
        "callsign": "Far Eastern",
        "country": "Taiwan"
    },
    {
        "name": "Finnair",
        "icao": "FIN",
        "callsign": "FINNAIR",
        "country": "Finland"
    },
    {
        "name": "Finncomm Airlines",
        "icao": "WBA",
        "callsign": "WESTBIRD",
        "country": "Finland"
    },
    {
        "name": "Firefly",
        "icao": "FFM",
        "callsign": "FIREFLY",
        "country": "Malaysia"
    },
    {
        "name": "First Choice Airways",
        "icao": "FCA",
        "callsign": "JETSET",
        "country": "United Kingdom"
    },
    {
        "name": "Flightline",
        "icao": "FLT",
        "callsign": "FLIGHTLINE",
        "country": "United Kingdom"
    },
    {
        "name": "Florida West International Airways",
        "icao": "FWL",
        "callsign": "FLO WEST",
        "country": "United States"
    },
    {
        "name": "AirAsia X",
        "icao": "XAX",
        "callsign": "XANADU",
        "country": "Malaysia"
    },
    {
        "name": "FlyLal",
        "icao": "LIL",
        "callsign": "LITHUANIA AIR",
        "country": "Lithuania"
    },
    {
        "name": "FlyNordic",
        "icao": "NDC",
        "callsign": "NORDIC",
        "country": "Sweden"
    },
    {
        "name": "Flybaboo",
        "icao": "BBO",
        "callsign": "BABOO",
        "country": "Switzerland"
    },
    {
        "name": "Flybe",
        "icao": "BEE",
        "callsign": "JERSEY",
        "country": "United Kingdom"
    },
    {
        "name": "Flyglobespan",
        "icao": "GSM",
        "callsign": "GLOBESPAN",
        "country": "United Kingdom"
    },
    {
        "name": "Flyhy Cargo Airlines",
        "icao": "FYH",
        "callsign": "FLY HIGH",
        "country": "Thailand"
    },
    {
        "name": "Freedom Air",
        "icao": "FRE",
        "callsign": "FREEDOM",
        "country": "United States"
    },
    {
        "name": "Freedom Airlines",
        "icao": "FRL",
        "callsign": "FREEDOM AIR",
        "country": "United States"
    },
    {
        "name": "Frontier Airlines",
        "icao": "FFT",
        "callsign": "FRONTIER FLIGHT",
        "country": "United States"
    },
    {
        "name": "Frontier Flying Service",
        "icao": "FTA",
        "callsign": "FRONTIER-AIR",
        "country": "United States"
    },
    {
        "name": "GB Airways",
        "icao": "GBL",
        "callsign": "GEEBEE AIRWAYS",
        "country": "United Kingdom"
    },
    {
        "name": "Garuda Indonesia",
        "icao": "GIA",
        "callsign": "INDONESIA",
        "country": "Indonesia"
    },
    {
        "name": "Gazpromavia",
        "icao": "GZP",
        "callsign": "GAZPROMAVIA",
        "country": "Russia"
    },
    {
        "name": "Georgian Airways",
        "icao": "TGZ",
        "callsign": "TAMAZI",
        "country": "Georgia"
    },
    {
        "name": "Georgian National Airlines",
        "icao": "GFG",
        "callsign": "NATIONAL",
        "country": "Georgia"
    },
    {
        "name": "Germania",
        "icao": "GMI",
        "callsign": "GERMANIA",
        "country": "Germany"
    },
    {
        "name": "Germanwings",
        "icao": "GWI",
        "callsign": "GERMAN WINGS",
        "country": "Germany"
    },
    {
        "name": "Ghana International Airlines",
        "icao": "GHB",
        "callsign": "GHANA AIRLINES",
        "country": "Ghana"
    },
    {
        "name": "Go Air",
        "icao": "GOW",
        "callsign": "GOAIR",
        "country": "India"
    },
    {
        "name": "GoJet Airlines",
        "icao": "GJS",
        "callsign": "GATEWAY",
        "country": "United States"
    },
    {
        "name": "Gol Transportes Aéreos",
        "icao": "GLO",
        "callsign": "GOL TRANSPORTE",
        "country": "Brazil"
    },
    {
        "name": "Golden Air",
        "icao": "GAO",
        "callsign": "GOLDEN",
        "country": "Sweden"
    },
    {
        "name": "Great Lakes Airlines",
        "icao": "GLA",
        "callsign": "LAKES AIR",
        "country": "United States"
    },
    {
        "name": "Grupo TACA",
        "icao": "TAT",
        "callsign": "TACA-COSTARICA",
        "country": "Costa Rica"
    },
    {
        "name": "Gulf Air",
        "icao": "GFA",
        "callsign": "GULF AIR",
        "country": "Oman"
    },
    {
        "name": "Gulf Air Bahrain",
        "icao": "GBA",
        "callsign": "GULF BAHRAIN",
        "country": "Bahrain"
    },
    {
        "name": "Gulfstream International Airlines",
        "icao": "GFT",
        "callsign": "GULF FLIGHT",
        "country": "United States"
    },
    {
        "name": "Hageland Aviation Services",
        "icao": "HAG",
        "callsign": "HAGELAND",
        "country": "United States"
    },
    {
        "name": "Hainan Airlines",
        "icao": "CHH",
        "callsign": "HAINAN",
        "country": "China"
    },
    {
        "name": "Hamburg International",
        "icao": "HHI",
        "callsign": "HAMBURG JET",
        "country": "Germany"
    },
    {
        "name": "TUIfly",
        "icao": "HLX",
        "callsign": "YELLOW CAB",
        "country": "Germany"
    },
    {
        "name": "Hapagfly",
        "icao": "HLF",
        "callsign": "HAPAG LLOYD",
        "country": "Germany"
    },
    {
        "name": "Hawaiian Airlines",
        "icao": "HAL",
        "callsign": "HAWAIIAN",
        "country": "United States"
    },
    {
        "name": "Heli France",
        "icao": "HFR",
        "callsign": "HELIFRANCE",
        "country": "France"
    },
    {
        "name": "Helijet",
        "icao": "JBA",
        "callsign": "HELIJET",
        "country": "Canada"
    },
    {
        "name": "Hellas Jet",
        "icao": "HEJ",
        "callsign": "HELLAS JET",
        "country": "Greece"
    },
    {
        "name": "Hello",
        "icao": "FHE",
        "callsign": "FLYHELLO",
        "country": "Switzerland"
    },
    {
        "name": "Helvetic Airways",
        "icao": "OAW",
        "callsign": "HELVETIC",
        "country": "Switzerland"
    },
    {
        "name": "Hex'Air",
        "icao": "HER",
        "callsign": "HEX AIRLINE",
        "country": "France"
    },
    {
        "name": "Highland Airways",
        "icao": "HWY",
        "callsign": "HIWAY",
        "country": "United Kingdom"
    },
    {
        "name": "Hokkaido International Airlines",
        "icao": "ADO",
        "callsign": "AIR DO",
        "country": "Japan"
    },
    {
        "name": "Hong Kong Airlines",
        "icao": "CRK",
        "callsign": "BAUHINIA",
        "country": "Hong Kong SAR of China"
    },
    {
        "name": "Hong Kong Express Airways",
        "icao": "HKE",
        "callsign": "HONGKONG SHUTTLE",
        "country": "Hong Kong SAR of China"
    },
    {
        "name": "Horizon Air",
        "icao": "QXE",
        "callsign": "HORIZON AIR",
        "country": "United States"
    },
    {
        "name": "Iberia Airlines",
        "icao": "IBE",
        "callsign": "IBERIA",
        "country": "Spain"
    },
    {
        "name": "Ibex Airlines",
        "icao": "IBX",
        "callsign": "IBEX",
        "country": "Japan"
    },
    {
        "name": "Icar Air",
        "icao": "RAC",
        "callsign": "TUZLA AIR",
        "country": "Bosnia and Herzegovina"
    },
    {
        "name": "Icelandair",
        "icao": "ICE",
        "callsign": "ICEAIR",
        "country": "Iceland"
    },
    {
        "name": "Imair Airlines",
        "icao": "ITX",
        "callsign": "IMPROTEX",
        "country": "Azerbaijan"
    },
    {
        "name": "IndiGo Airlines",
        "icao": "IGO",
        "callsign": "IFLY",
        "country": "India"
    },
    {
        "name": "Indian Airlines",
        "icao": "IAC",
        "callsign": "INDAIR",
        "country": "India"
    },
    {
        "name": "Indigo",
        "icao": "IBU",
        "callsign": "INDIGO BLUE",
        "country": "United States"
    },
    {
        "name": "Indonesia AirAsia",
        "icao": "AWQ",
        "callsign": "WAGON AIR",
        "country": "Indonesia"
    },
    {
        "name": "Indonesian Airlines",
        "icao": "IAA",
        "callsign": "INDO LINES",
        "country": "Indonesia"
    },
    {
        "name": "Interair South Africa",
        "icao": "ILN",
        "callsign": "INLINE",
        "country": "South Africa"
    },
    {
        "name": "Interavia Airlines",
        "icao": "SUW",
        "callsign": "ASTAIR",
        "country": "Russia"
    },
    {
        "name": "Interlink Airlines",
        "icao": "ITK",
        "callsign": "INTERLINK",
        "country": "South Africa"
    },
    {
        "name": "Intersky",
        "icao": "ISK",
        "callsign": "INTERSKY",
        "country": "Austria"
    },
    {
        "name": "Iran Air",
        "icao": "IRA",
        "callsign": "IRANAIR",
        "country": "Iran"
    },
    {
        "name": "Iraqi Airways",
        "icao": "IAW",
        "callsign": "IRAQI",
        "country": "Iraq"
    },
    {
        "name": "Islas Airways",
        "icao": "ISW",
        "callsign": "PINTADERA",
        "country": "Spain"
    },
    {
        "name": "Israir",
        "icao": "ISR",
        "callsign": "ISRAIR",
        "country": "Israel"
    },
    {
        "name": "Itek Air",
        "icao": "IKA",
        "callsign": "ITEK-AIR",
        "country": "Kyrgyzstan"
    },
    {
        "name": "JAL Express",
        "icao": "JEX",
        "callsign": "JANEX",
        "country": "Japan"
    },
    {
        "name": "JALways",
        "icao": "JAZ",
        "callsign": "JALWAYS",
        "country": "Japan"
    },
    {
        "name": "Japan Airlines",
        "icao": "JAL",
        "callsign": "JAPANAIR",
        "country": "Japan"
    },
    {
        "name": "Japan Airlines Domestic",
        "icao": "JAL",
        "callsign": "J-BIRD",
        "country": "Japan"
    },
    {
        "name": "Japan Asia Airways",
        "icao": "JAA",
        "callsign": "ASIA",
        "country": "Japan"
    },
    {
        "name": "Japan Transocean Air",
        "icao": "JTA",
        "callsign": "JAI OCEAN",
        "country": "Japan"
    },
    {
        "name": "Jazeera Airways",
        "icao": "JZR",
        "callsign": "JAZEERA",
        "country": "Kuwait"
    },
    {
        "name": "Jeju Air",
        "icao": "JJA",
        "callsign": "JEJU AIR",
        "country": "Republic of Korea"
    },
    {
        "name": "Jet Airways",
        "icao": "JAI",
        "callsign": "JET AIRWAYS",
        "country": "India"
    },
    {
        "name": "Jetstar Asia Airways",
        "icao": "JSA",
        "callsign": "JETSTAR ASIA",
        "country": "Singapore"
    },
    {
        "name": "Jet2.com",
        "icao": "EXS",
        "callsign": "CHANNEX",
        "country": "United Kingdom"
    },
    {
        "name": "Jet4You",
        "icao": "JFU",
        "callsign": "ARGAN",
        "country": "Morocco"
    },
    {
        "name": "JetBlue Airways",
        "icao": "JBU",
        "callsign": "JETBLUE",
        "country": "United States"
    },
    {
        "name": "Jetairfly",
        "icao": "JAF",
        "callsign": "BEAUTY",
        "country": "Belgium"
    },
    {
        "name": "Jetflite",
        "icao": "JEF",
        "callsign": "JETFLITE",
        "country": "Finland"
    },
    {
        "name": "Jetstar Airways",
        "icao": "JST",
        "callsign": "JETSTAR",
        "country": "Australia"
    },
    {
        "name": "Juneyao Airlines",
        "icao": "DKH",
        "callsign": "JUNEYAO AIRLINES",
        "country": "China"
    },
    {
        "name": "KD Avia",
        "icao": "KNI",
        "callsign": "KALININGRAD AIR",
        "country": "Russia"
    },
    {
        "name": "KLM Cityhopper",
        "icao": "KLC",
        "callsign": "CITY",
        "country": "Netherlands"
    },
    {
        "name": "KLM Royal Dutch Airlines",
        "icao": "KLM",
        "callsign": "KLM",
        "country": "Netherlands"
    },
    {
        "name": "Kam Air",
        "icao": "KMF",
        "callsign": "KAMGAR",
        "country": "Afghanistan"
    },
    {
        "name": "Kavminvodyavia",
        "icao": "MVD",
        "callsign": "AIR MINVODY",
        "country": "Russia"
    },
    {
        "name": "Kendell Airlines",
        "icao": "KDA",
        "callsign": "KENDELL",
        "country": "Australia"
    },
    {
        "name": "Kenmore Air",
        "icao": "KEN",
        "callsign": "KENMORE",
        "country": "United States"
    },
    {
        "name": "Kenya Airways",
        "icao": "KQA",
        "callsign": "KENYA",
        "country": "Kenya"
    },
    {
        "name": "Kingfisher Airlines",
        "icao": "KFR",
        "callsign": "KINGFISHER",
        "country": "India"
    },
    {
        "name": "Kish Air",
        "icao": "IRK",
        "callsign": "KISHAIR",
        "country": "Iran"
    },
    {
        "name": "Kogalymavia Air Company",
        "icao": "KGL",
        "callsign": "KOGALYM",
        "country": "Russia"
    },
    {
        "name": "Korean Air",
        "icao": "KAL",
        "callsign": "KOREANAIR",
        "country": "Republic of Korea"
    },
    {
        "name": "Kosmos",
        "icao": "KSM",
        "callsign": "KOSMOS",
        "country": "Russia"
    },
    {
        "name": "Krasnojarsky Airlines",
        "icao": "KJC",
        "callsign": "KRASNOJARSKY AIR",
        "country": "Russia"
    },
    {
        "name": "Kuban Airlines",
        "icao": "KIL",
        "callsign": "AIR KUBAN",
        "country": "Russia"
    },
    {
        "name": "Kuwait Airways",
        "icao": "KAC",
        "callsign": "KUWAITI",
        "country": "Kuwait"
    },
    {
        "name": "Kuzu Airlines Cargo",
        "icao": "KZU",
        "callsign": "KUZU CARGO",
        "country": "Turkey"
    },
    {
        "name": "LACSA",
        "icao": "LRC",
        "callsign": "LACSA",
        "country": "Costa Rica"
    },
    {
        "name": "LAN Airlines",
        "icao": "LAN",
        "callsign": "LAN",
        "country": "Chile"
    },
    {
        "name": "LAN Argentina",
        "icao": "DSM",
        "callsign": "LAN AR",
        "country": "Argentina"
    },
    {
        "name": "LAN Express",
        "icao": "LXP",
        "callsign": "LANEX",
        "country": "Chile"
    },
    {
        "name": "LAN Peru",
        "icao": "LPE",
        "callsign": "LANPERU",
        "country": "Peru"
    },
    {
        "name": "LOT Polish Airlines",
        "icao": "LOT",
        "callsign": "POLLOT",
        "country": "Poland"
    },
    {
        "name": "LTE International Airways",
        "icao": "LTE",
        "callsign": "FUN JET",
        "country": "Spain"
    },
    {
        "name": "LTU Austria",
        "icao": "LTO",
        "callsign": "BILLA TRANSPORT",
        "country": "Austria"
    },
    {
        "name": "Lao Airlines",
        "icao": "LAO",
        "callsign": "LAO",
        "country": "Lao Peoples Democratic Republic"
    },
    {
        "name": "LatCharter",
        "icao": "LTC",
        "callsign": "LATCHARTER",
        "country": "Latvia"
    },
    {
        "name": "Lauda Air",
        "icao": "LDA",
        "callsign": "LAUDA AIR",
        "country": "Austria"
    },
    {
        "name": "Leeward Islands Air Transport",
        "icao": "LIA",
        "callsign": "LIAT",
        "country": "Antigua and Barbuda"
    },
    {
        "name": "Libyan Arab Airlines",
        "icao": "LAA",
        "callsign": "LIBAIR",
        "country": "Libya"
    },
    {
        "name": "Linhas A",
        "icao": "LAM",
        "callsign": "MOZAMBIQUE",
        "country": "Mozambique"
    },
    {
        "name": "Lion Mentari Airlines",
        "icao": "LNI",
        "callsign": "LION INTER",
        "country": "Indonesia"
    },
    {
        "name": "Luftfahrtgesellschaft Walter",
        "icao": "LGW",
        "callsign": "WALTER",
        "country": "Germany"
    },
    {
        "name": "Lufthansa",
        "icao": "DLH",
        "callsign": "LUFTHANSA",
        "country": "Germany"
    },
    {
        "name": "Lufthansa Cargo",
        "icao": "GEC",
        "callsign": "LUFTHANSA CARGO",
        "country": "Germany"
    },
    {
        "name": "Lufthansa CityLine",
        "icao": "CLH",
        "callsign": "HANSALINE",
        "country": "Germany"
    },
    {
        "name": "Lufttransport",
        "icao": "LTR",
        "callsign": "LUFT TRANSPORT",
        "country": "Norway"
    },
    {
        "name": "Luxair",
        "icao": "LGL",
        "callsign": "LUXAIR",
        "country": "Luxembourg"
    },
    {
        "name": "L",
        "icao": "LPR",
        "callsign": "LAPA",
        "country": "Argentina"
    },
    {
        "name": "MasAir",
        "icao": "MAA",
        "callsign": "MAS CARGA",
        "country": "Mexico"
    },
    {
        "name": "MAT Macedonian Airlines",
        "icao": "MAK",
        "callsign": "MAKAVIO",
        "country": "Macedonia"
    },
    {
        "name": "MIAT Mongolian Airlines",
        "icao": "MGL",
        "callsign": "MONGOL AIR",
        "country": "Mongolia"
    },
    {
        "name": "MNG Airlines",
        "icao": "MNB",
        "callsign": "BLACK SEA",
        "country": "Turkey"
    },
    {
        "name": "Mahan Air",
        "icao": "IRM",
        "callsign": "MAHAN AIR",
        "country": "Iran"
    },
    {
        "name": "Malaysia Airlines",
        "icao": "MAS",
        "callsign": "MALAYSIAN",
        "country": "Malaysia"
    },
    {
        "name": "Malmo Aviation",
        "icao": "SCW",
        "callsign": "SCANWING",
        "country": "Sweden"
    },
    {
        "name": "Malmö Aviation",
        "icao": "SCW",
        "callsign": "Scanwings",
        "country": "Sweden"
    },
    {
        "name": "Malta Air Charter",
        "icao": "MAC",
        "callsign": "MALTA CHARTER",
        "country": "Malta"
    },
    {
        "name": "Malév",
        "icao": "MAH",
        "callsign": "MALEV",
        "country": "Hungary"
    },
    {
        "name": "Mandala Airlines",
        "icao": "MDL",
        "callsign": "MANDALA",
        "country": "Indonesia"
    },
    {
        "name": "Mandarin Airlines",
        "icao": "MDA",
        "callsign": "Mandarin",
        "country": "Taiwan"
    },
    {
        "name": "Mango",
        "icao": "MNO",
        "callsign": "TULCA",
        "country": "South Africa"
    },
    {
        "name": "Martinair",
        "icao": "MPH",
        "callsign": "MARTINAIR",
        "country": "Netherlands"
    },
    {
        "name": "Maxair",
        "icao": "MXL",
        "callsign": "MAXAIR",
        "country": "Sweden"
    },
    {
        "name": "Maya Island Air",
        "icao": "MYD",
        "callsign": "MYLAND",
        "country": "Belize"
    },
    {
        "name": "Meridiana",
        "icao": "ISS",
        "callsign": "MERAIR",
        "country": "Italy"
    },
    {
        "name": "Merpati Nusantara Airlines",
        "icao": "MNA",
        "callsign": "MERPATI",
        "country": "Indonesia"
    },
    {
        "name": "Mesa Airlines",
        "icao": "ASH",
        "callsign": "AIR SHUTTLE",
        "country": "United States"
    },
    {
        "name": "Mesaba Airlines",
        "icao": "MES",
        "callsign": "MESABA",
        "country": "United States"
    },
    {
        "name": "Mexicana de Aviaci",
        "icao": "MXA",
        "callsign": "MEXICANA",
        "country": "Mexico"
    },
    {
        "name": "Middle East Airlines",
        "icao": "MEA",
        "callsign": "CEDAR JET",
        "country": "Lebanon"
    },
    {
        "name": "Midway Airlines",
        "icao": "MDW",
        "callsign": "MIDWAY",
        "country": "United States"
    },
    {
        "name": "Moldavian Airlines",
        "icao": "MDV",
        "callsign": "MOLDAVIAN",
        "country": "Moldova"
    },
    {
        "name": "Monarch Airlines",
        "icao": "MON",
        "callsign": "MONARCH",
        "country": "United Kingdom"
    },
    {
        "name": "Montenegro Airlines",
        "icao": "MGX",
        "callsign": "MONTAIR",
        "country": "Montenegro"
    },
    {
        "name": "Morningstar Air Express",
        "icao": "MAL",
        "callsign": "MORNINGSTAR",
        "country": "Canada"
    },
    {
        "name": "Moskovia Airlines",
        "icao": "GAI",
        "callsign": "GROMOV AIRLINE",
        "country": "Russia"
    },
    {
        "name": "Motor Sich",
        "icao": "MSI",
        "callsign": "MOTOR SICH",
        "country": "Ukraine"
    },
    {
        "name": "MyTravel Airways",
        "icao": "MYT",
        "callsign": "KESTREL",
        "country": "United Kingdom"
    },
    {
        "name": "Myanma Airways",
        "icao": "UBA",
        "callsign": "UNIONAIR",
        "country": "Myanmar"
    },
    {
        "name": "Myanmar Airways International",
        "icao": "MMM",
        "callsign": "assignment postponed",
        "country": "Myanmar"
    },
    {
        "name": "Myflug",
        "icao": "MYA",
        "callsign": "MYFLUG",
        "country": "Iceland"
    },
    {
        "name": "Nasair",
        "icao": "NAS",
        "callsign": "NASAIRWAYS",
        "country": "Eritrea"
    },
    {
        "name": "National Jet Systems",
        "icao": "NJS",
        "callsign": "NATIONAL JET",
        "country": "Australia"
    },
    {
        "name": "Nationwide Airlines",
        "icao": "NTW",
        "callsign": "NATIONWIDE",
        "country": "South Africa"
    },
    {
        "name": "Nauru Air Corporation",
        "icao": "RON",
        "callsign": "AIR NAURU",
        "country": "Nauru"
    },
    {
        "name": "Nepal Airlines",
        "icao": "RNA",
        "callsign": "ROYAL NEPAL",
        "country": "Nepal"
    },
    {
        "name": "NetJets",
        "icao": "EJA",
        "callsign": "EXECJET",
        "country": "United States"
    },
    {
        "name": "New England Airlines",
        "icao": "NEA",
        "callsign": "NEW ENGLAND",
        "country": "United States"
    },
    {
        "name": "NextJet",
        "icao": "NTJ",
        "callsign": "NEXTJET",
        "country": "Sweden"
    },
    {
        "name": "Niki",
        "icao": "NLY",
        "callsign": "FLYNIKI",
        "country": "Austria"
    },
    {
        "name": "Nok Air",
        "icao": "NOK",
        "callsign": "NOK AIR",
        "country": "Thailand"
    },
    {
        "name": "Norfolk County Flight College",
        "icao": "NCF",
        "callsign": "COUNTY",
        "country": "United Kingdom"
    },
    {
        "name": "North American Airlines",
        "icao": "NTM",
        "callsign": "NORTHAM",
        "country": "Canada"
    },
    {
        "name": "North American Charters",
        "icao": "HMR",
        "callsign": "HAMMER",
        "country": "Canada"
    },
    {
        "name": "Northwest Airlines",
        "icao": "NWA",
        "callsign": "NORTHWEST",
        "country": "United States"
    },
    {
        "name": "Northwestern Air",
        "icao": "PLR",
        "callsign": "POLARIS",
        "country": "Canada"
    },
    {
        "name": "Norwegian Air Shuttle",
        "icao": "NAX",
        "callsign": "NOR SHUTTLE",
        "country": "Norway"
    },
    {
        "name": "Norwegian Aviation College",
        "icao": "TFN",
        "callsign": "SPRIT",
        "country": "Norway"
    },
    {
        "name": "Nouvel Air Tunisie",
        "icao": "LBT",
        "callsign": "NOUVELAIR",
        "country": "Tunisia"
    },
    {
        "name": "Novair",
        "icao": "NVR",
        "callsign": "NAVIGATOR",
        "country": "Sweden"
    },
    {
        "name": "Nas Air",
        "icao": "KNE",
        "callsign": "NAS EXPRESS",
        "country": "Saudi Arabia"
    },
    {
        "name": "Oasis Hong Kong Airlines",
        "icao": "OHK",
        "callsign": "OASIS",
        "country": "Hong Kong"
    },
    {
        "name": "Ocean Air",
        "icao": "BCN",
        "callsign": "BLUE OCEAN",
        "country": "Mauritania"
    },
    {
        "name": "Oceanair",
        "icao": "ONE",
        "callsign": "OCEANAIR",
        "country": "Brazil"
    },
    {
        "name": "Olympic Airlines",
        "icao": "OAL",
        "callsign": "OLYMPIC",
        "country": "Greece"
    },
    {
        "name": "Oman Air",
        "icao": "OMA",
        "callsign": "OMAN AIR",
        "country": "Oman"
    },
    {
        "name": "Omni Air International",
        "icao": "OAE",
        "callsign": "OMNI-EXPRESS",
        "country": "United States"
    },
    {
        "name": "One Two Go Airlines",
        "icao": "OTG",
        "callsign": "THAI EXPRESS",
        "country": "Thailand"
    },
    {
        "name": "Onur Air",
        "icao": "OHY",
        "callsign": "ONUR AIR",
        "country": "Turkey"
    },
    {
        "name": "Orenburg Airlines",
        "icao": "ORB",
        "callsign": "ORENBURG",
        "country": "Russia"
    },
    {
        "name": "Orient Thai Airlines",
        "icao": "OEA",
        "callsign": "ORIENT THAI",
        "country": "Thailand"
    },
    {
        "name": "Origin Pacific Airways",
        "icao": "OGN",
        "callsign": "ORIGIN",
        "country": "New Zealand"
    },
    {
        "name": "Ostfriesische Lufttransport",
        "icao": "OLT",
        "callsign": "OLTRA",
        "country": "Germany"
    },
    {
        "name": "Overland Airways",
        "icao": "OLA",
        "callsign": "OVERLAND",
        "country": "Nigeria"
    },
    {
        "name": "Ozjet Airlines",
        "icao": "OZJ",
        "callsign": "AUSJET",
        "country": "Australia"
    },
    {
        "name": "PAN Air",
        "icao": "PNR",
        "callsign": "SKYJET",
        "country": "Spain"
    },
    {
        "name": "PB Air",
        "icao": "PBA",
        "callsign": "PEEBEE AIR",
        "country": "Thailand"
    },
    {
        "name": "PLUNA",
        "icao": "PUA",
        "callsign": "PLUNA",
        "country": "Uruguay"
    },
    {
        "name": "PMTair",
        "icao": "PMT",
        "callsign": "MULTITRADE",
        "country": "Cambodia"
    },
    {
        "name": "Jetstar Pacific",
        "icao": "PIC",
        "callsign": "PACIFIC AIRLINES",
        "country": "Vietnam"
    },
    {
        "name": "Pacific Coastal Airline",
        "icao": "PCO",
        "callsign": "PASCO",
        "country": "Canada"
    },
    {
        "name": "Pacific East Asia Cargo Airlines",
        "icao": "PEC",
        "callsign": "PAC-EAST CARGO",
        "country": "Philippines"
    },
    {
        "name": "Pacific Island Aviation",
        "icao": "PSA",
        "callsign": "PACIFIC ISLE",
        "country": "United States"
    },
    {
        "name": "Pacific Wings",
        "icao": "NMI",
        "callsign": "TSUNAMI",
        "country": "United States"
    },
    {
        "name": "Pakistan International Airlines",
        "icao": "PIA",
        "callsign": "PAKISTAN",
        "country": "Pakistan"
    },
    {
        "name": "Paramount Airways",
        "icao": "PMW",
        "callsign": "PARAWAY",
        "country": "India"
    },
    {
        "name": "Passaredo Transportes Aereos",
        "icao": "PTB",
        "callsign": "PASSAREDO",
        "country": "Brazil"
    },
    {
        "name": "Pegasus Airlines",
        "icao": "PGT",
        "callsign": "SUNTURK",
        "country": "Turkey"
    },
    {
        "name": "Peninsula Airways",
        "icao": "PEN",
        "callsign": "PENINSULA",
        "country": "United States"
    },
    {
        "name": "Philippine Airlines",
        "icao": "PAL",
        "callsign": "PHILIPPINE",
        "country": "Philippines"
    },
    {
        "name": "Piedmont Airlines (1948-1989)",
        "icao": "PDT",
        "callsign": "PIEDMONT",
        "country": "United States"
    },
    {
        "name": "Pinnacle Airlines",
        "icao": "FLG",
        "callsign": "FLAGSHIP",
        "country": "United States"
    },
    {
        "name": "Polet",
        "icao": "POT",
        "callsign": "POLET",
        "country": "Russia"
    },
    {
        "name": "Polynesian Airlines",
        "icao": "PAO",
        "callsign": "POLYNESIAN",
        "country": "Samoa"
    },
    {
        "name": "Porter Airlines",
        "icao": "POE",
        "callsign": "PORTER AIR",
        "country": "Canada"
    },
    {
        "name": "Portugalia",
        "icao": "PGA",
        "callsign": "PORTUGALIA",
        "country": "Portugal"
    },
    {
        "name": "Potomac Air",
        "icao": "PDC",
        "callsign": "DISTRICT",
        "country": "United States"
    },
    {
        "name": "Precision Air",
        "icao": "PRF",
        "callsign": "PRECISION AIR",
        "country": "Tanzania"
    },
    {
        "name": "Privatair",
        "icao": "PTI",
        "callsign": "PRIVATAIR",
        "country": "Switzerland"
    },
    {
        "name": "Qantas",
        "icao": "QFA",
        "callsign": "QANTAS",
        "country": "Australia"
    },
    {
        "name": "Qatar Airways",
        "icao": "QTR",
        "callsign": "QATARI",
        "country": "Qatar"
    },
    {
        "name": "Kinloss Flying Training Unit",
        "icao": "KIN",
        "callsign": "KINLOSS",
        "country": "United Kingdom"
    },
    {
        "name": "Regional Express",
        "icao": "RXA",
        "callsign": "REX",
        "country": "Australia"
    },
    {
        "name": "Republic Airlines",
        "icao": "RPA",
        "callsign": "BRICKYARD",
        "country": "United States"
    },
    {
        "name": "Republic Express Airlines",
        "icao": "RPH",
        "callsign": "PUBLIC EXPRESS",
        "country": "Indonesia"
    },
    {
        "name": "Royal Air Maroc",
        "icao": "RAM",
        "callsign": "ROYALAIR MAROC",
        "country": "Morocco"
    },
    {
        "name": "Royal Brunei Airlines",
        "icao": "RBA",
        "callsign": "BRUNEI",
        "country": "Brunei"
    },
    {
        "name": "Royal Jordanian",
        "icao": "RJA",
        "callsign": "JORDANIAN",
        "country": "Jordan"
    },
    {
        "name": "Royal Nepal Airlines",
        "icao": "RNA",
        "callsign": "ROYAL NEPAL",
        "country": "Nepal"
    },
    {
        "name": "Royal Phnom Penh Airways",
        "icao": "PPW",
        "callsign": "PHNOM-PENH AIR",
        "country": "Cambodia"
    },
    {
        "name": "Rusline",
        "icao": "RLU",
        "callsign": "RUSLINE AIR",
        "country": "Russia"
    },
    {
        "name": "Rwandair Express",
        "icao": "RWD",
        "callsign": "RWANDAIR",
        "country": "Rwanda"
    },
    {
        "name": "Ryan Air Services",
        "icao": "RYA",
        "callsign": "RYAN AIR",
        "country": "United States"
    },
    {
        "name": "Ryan International Airlines",
        "icao": "RYN",
        "callsign": "RYAN INTERNATIONAL",
        "country": "United States"
    },
    {
        "name": "Ryanair",
        "icao": "RYR",
        "callsign": "RYANAIR",
        "country": "Ireland"
    },
    {
        "name": "Régional",
        "icao": "RAE",
        "callsign": "REGIONAL EUROPE",
        "country": "France"
    },
    {
        "name": "SATA International",
        "icao": "RZO",
        "callsign": "AIR AZORES",
        "country": "Portugal"
    },
    {
        "name": "South African Airways",
        "icao": "SAA",
        "callsign": "SPRINGBOK",
        "country": "South Africa"
    },
    {
        "name": "Shaheen Air International",
        "icao": "SAI",
        "callsign": "SHAHEEN AIR",
        "country": "Pakistan"
    },
    {
        "name": "Scandinavian Airlines System",
        "icao": "SAS",
        "callsign": "SCANDINAVIAN",
        "country": "Sweden"
    },
    {
        "name": "ScotAirways",
        "icao": "SAY",
        "callsign": "SUCKLING",
        "country": "United Kingdom"
    },
    {
        "name": "S7 Airlines",
        "icao": "SBI",
        "callsign": "SIBERIAN AIRLINES",
        "country": "Russia"
    },
    {
        "name": "Seaborne Airlines",
        "icao": "SBS",
        "callsign": "SEABORNE",
        "country": "United States"
    },
    {
        "name": "Scenic Airlines",
        "icao": "SCE",
        "callsign": "SCENIC",
        "country": "United States"
    },
    {
        "name": "SriLankan Airlines",
        "icao": "ALK",
        "callsign": "SRILANKAN",
        "country": "Sri Lanka"
    },
    {
        "name": "Sun Country Airlines",
        "icao": "SCX",
        "callsign": "SUN COUNTRY",
        "country": "United States"
    },
    {
        "name": "Southeast Air",
        "icao": "SEA",
        "callsign": "SOUTHEAST AIR",
        "country": "United States"
    },
    {
        "name": "Sky Express",
        "icao": "SEH",
        "callsign": "AIR CRETE",
        "country": "Greece"
    },
    {
        "name": "Spicejet",
        "icao": "SEJ",
        "callsign": "SPICEJET",
        "country": "India"
    },
    {
        "name": "Star Flyer",
        "icao": "SFJ",
        "callsign": "STARFLYER",
        "country": "Japan"
    },
    {
        "name": "Skagway Air Service",
        "icao": "SGY",
        "callsign": "SKAGWAY AIR",
        "country": "United States"
    },
    {
        "name": "SATA Air Acores",
        "icao": "SAT",
        "callsign": "SATA",
        "country": "Portugal"
    },
    {
        "name": "Singapore Airlines",
        "icao": "SIA",
        "callsign": "SINGAPORE",
        "country": "Singapore"
    },
    {
        "name": "Sibaviatrans",
        "icao": "SIB",
        "callsign": "SIBAVIA",
        "country": "Russia"
    },
    {
        "name": "Skynet Airlines",
        "icao": "SIH",
        "callsign": "BLUEJET",
        "country": "Ireland"
    },
    {
        "name": "Sriwijaya Air",
        "icao": "SJY",
        "callsign": "SRIWIJAYA",
        "country": "Indonesia"
    },
    {
        "name": "Sama Airlines",
        "icao": "SMY",
        "callsign": "NAJIM",
        "country": "Saudi Arabia"
    },
    {
        "name": "Singapore Airlines Cargo",
        "icao": "SQC",
        "callsign": "SINGCARGO",
        "country": "Singapore"
    },
    {
        "name": "Siem Reap Airways",
        "icao": "SRH",
        "callsign": "SIEMREAP AIR",
        "country": "Cambodia"
    },
    {
        "name": "South East Asian Airlines",
        "icao": "SRQ",
        "callsign": "SEAIR",
        "country": "Philippines"
    },
    {
        "name": "Skyservice Airlines",
        "icao": "SSV",
        "callsign": "SKYTOUR",
        "country": "Canada"
    },
    {
        "name": "Servicios de Transportes A",
        "icao": "STU",
        "callsign": "FUEGUINO",
        "country": "Argentina"
    },
    {
        "name": "Sudan Airways",
        "icao": "SUD",
        "callsign": "SUDANAIR",
        "country": "Sudan"
    },
    {
        "name": "Saudi Arabian Airlines",
        "icao": "SVA",
        "callsign": "SAUDIA",
        "country": "Saudi Arabia"
    },
    {
        "name": "Southwest Airlines",
        "icao": "SWA",
        "callsign": "SOUTHWEST",
        "country": "United States"
    },
    {
        "name": "Southern Winds Airlines",
        "icao": "SWD",
        "callsign": "SOUTHERN WINDS",
        "country": "Argentina"
    },
    {
        "name": "Swiss International Air Lines",
        "icao": "SWR",
        "callsign": "SWISS",
        "country": "Switzerland"
    },
    {
        "name": "Swissair",
        "icao": "SWR",
        "callsign": "Swissair",
        "country": "Switzerland"
    },
    {
        "name": "Swiss European Air Lines",
        "icao": "SWU",
        "callsign": "EUROSWISS",
        "country": "Switzerland"
    },
    {
        "name": "Swe Fly",
        "icao": "SWV",
        "callsign": "FLYING SWEDE",
        "country": "Sweden"
    },
    {
        "name": "SunExpress",
        "icao": "SXS",
        "callsign": "SUNEXPRESS",
        "country": "Turkey"
    },
    {
        "name": "Syrian Arab Airlines",
        "icao": "SYR",
        "callsign": "SYRIANAIR",
        "country": "Syrian Arab Republic"
    },
    {
        "name": "Skywalk Airlines",
        "icao": "SYX",
        "callsign": "SKYWAY-EX",
        "country": "United States"
    },
    {
        "name": "Shandong Airlines",
        "icao": "CDG",
        "callsign": "SHANDONG",
        "country": "China"
    },
    {
        "name": "SAS Braathens",
        "icao": "CNO",
        "callsign": "SCANOR",
        "country": "Norway"
    },
    {
        "name": "Spring Airlines",
        "icao": "CQH",
        "callsign": "AIR SPRING",
        "country": "China"
    },
    {
        "name": "Sichuan Airlines",
        "icao": "CSC",
        "callsign": "SI CHUAN",
        "country": "China"
    },
    {
        "name": "Shanghai Airlines",
        "icao": "CSH",
        "callsign": "SHANGHAI AIR",
        "country": "China"
    },
    {
        "name": "Shenzhen Airlines",
        "icao": "CSZ",
        "callsign": "SHENZHEN AIR",
        "country": "China"
    },
    {
        "name": "Sun D'Or",
        "icao": "ERO",
        "callsign": "ECHO ROMEO",
        "country": "Israel"
    },
    {
        "name": "SkyEurope",
        "icao": "ESK",
        "callsign": "RELAX",
        "country": "Slovakia"
    },
    {
        "name": "Sky Europe Airlines",
        "icao": "HSK",
        "callsign": "MATRA",
        "country": "Slovakia"
    },
    {
        "name": "Spanair",
        "icao": "JKK",
        "callsign": "SPANAIR",
        "country": "Spain"
    },
    {
        "name": "Spirit Airlines",
        "icao": "NKS",
        "callsign": "SPIRIT WINGS",
        "country": "United States"
    },
    {
        "name": "SATENA",
        "icao": "NSE",
        "callsign": "SATENA",
        "country": "Colombia"
    },
    {
        "name": "Skywest Airlines",
        "icao": "OZW",
        "callsign": "OZWEST",
        "country": "Australia"
    },
    {
        "name": "Santa Barbara Airlines",
        "icao": "BBR",
        "callsign": "SANTA BARBARA",
        "country": "Venezuela"
    },
    {
        "name": "Sky Airline",
        "icao": "SKU",
        "callsign": "AEROSKY",
        "country": "Chile"
    },
    {
        "name": "SkyWest",
        "icao": "SKW",
        "callsign": "SKYWEST",
        "country": "United States"
    },
    {
        "name": "Skyways Express",
        "icao": "SKX",
        "callsign": "SKY EXPRESS",
        "country": "Sweden"
    },
    {
        "name": "Skymark Airlines",
        "icao": "SKY",
        "callsign": "SKYMARK",
        "country": "Japan"
    },
    {
        "name": "SilkAir",
        "icao": "SLK",
        "callsign": "SILKAIR",
        "country": "Singapore"
    },
    {
        "name": "Surinam Airways",
        "icao": "SLM",
        "callsign": "SURINAM",
        "country": "Suriname"
    },
    {
        "name": "Sterling Airlines",
        "icao": "SNB",
        "callsign": "STERLING",
        "country": "Denmark"
    },
    {
        "name": "Skynet Asia Airways",
        "icao": "SNJ",
        "callsign": "NEWSKY",
        "country": "Japan"
    },
    {
        "name": "Solomon Airlines",
        "icao": "SOL",
        "callsign": "SOLOMON",
        "country": "Solomon Islands"
    },
    {
        "name": "Southern Airways",
        "icao": "SOU",
        "callsign": "SOUTHERN EXPRESS",
        "country": "United States"
    },
    {
        "name": "Saratov Aviation Division",
        "icao": "SOV",
        "callsign": "SARATOV AIR",
        "country": "Russia"
    },
    {
        "name": "Sat Airlines",
        "icao": "SOZ",
        "callsign": "SATCO",
        "country": "Kazakhstan"
    },
    {
        "name": "South Pacific Island Airways",
        "icao": "SPI",
        "callsign": "SOUTH PACIFIC",
        "country": "United States"
    },
    {
        "name": "Shuttle America",
        "icao": "TCF",
        "callsign": "MERCURY",
        "country": "United States"
    },
    {
        "name": "Scat Air",
        "icao": "VSV",
        "callsign": "VLASTA",
        "country": "Kazakhstan"
    },
    {
        "name": "TAME",
        "icao": "TAE",
        "callsign": "TAME",
        "country": "Ecuador"
    },
    {
        "name": "TAM Brazilian Airlines",
        "icao": "TAM",
        "callsign": "TAM",
        "country": "Brazil"
    },
    {
        "name": "TAP Portugal",
        "icao": "TAP",
        "callsign": "AIR PORTUGAL",
        "country": "Portugal"
    },
    {
        "name": "Tunisair",
        "icao": "TAR",
        "callsign": "TUNAIR",
        "country": "Tunisia"
    },
    {
        "name": "Thai Air Cargo",
        "icao": "TCG",
        "callsign": "THAI CARGO",
        "country": "Thailand"
    },
    {
        "name": "Thomas Cook Airlines",
        "icao": "TCW",
        "callsign": "THOMAS COOK",
        "country": "Belgium"
    },
    {
        "name": "Thomas Cook Airlines",
        "icao": "TCX",
        "callsign": "KESTREL",
        "country": "United Kingdom"
    },
    {
        "name": "Trigana Air Service",
        "icao": "TGN",
        "callsign": "TRIGANA",
        "country": "Indonesia"
    },
    {
        "name": "Tiger Airways",
        "icao": "TGW",
        "callsign": "GO CAT",
        "country": "Singapore"
    },
    {
        "name": "Tiger Airways Australia",
        "icao": "TGW",
        "callsign": "GO CAT",
        "country": "Australia"
    },
    {
        "name": "Thai Airways International",
        "icao": "THA",
        "callsign": "THAI",
        "country": "Thailand"
    },
    {
        "name": "Turk Hava Kurumu Hava Taksi Isletmesi",
        "icao": "THK",
        "callsign": "HUR KUS",
        "country": "Turkey"
    },
    {
        "name": "Thai AirAsia",
        "icao": "AIQ",
        "callsign": "THAI ASIA",
        "country": "Thailand"
    },
    {
        "name": "Turkish Airlines",
        "icao": "THY",
        "callsign": "TURKAIR",
        "country": "Turkey"
    },
    {
        "name": "Tajikistan International Airlines",
        "icao": "TIL",
        "callsign": "TIL",
        "country": "Tajikistan"
    },
    {
        "name": "Twin Jet",
        "icao": "TJT",
        "callsign": "TWINJET",
        "country": "France"
    },
    {
        "name": "Translift Airways",
        "icao": "TLA",
        "callsign": "TRANSLIFT",
        "country": "Ireland"
    },
    {
        "name": "Trans Mediterranean Airlines",
        "icao": "TMA",
        "callsign": "TANGO LIMA",
        "country": "Lebanon"
    },
    {
        "name": "Tiara Air",
        "icao": "TNM",
        "callsign": "TIARA",
        "country": "Aruba"
    },
    {
        "name": "Thomsonfly",
        "icao": "TOM",
        "callsign": "TOMSON",
        "country": "United Kingdom"
    },
    {
        "name": "Tropic Air",
        "icao": "TOS",
        "callsign": "TROPISER",
        "country": "Belize"
    },
    {
        "name": "TAMPA",
        "icao": "TPA",
        "callsign": "TAMPA",
        "country": "Colombia"
    },
    {
        "name": "TransAsia Airways",
        "icao": "TNA",
        "callsign": "TransAsia",
        "country": "Taiwan"
    },
    {
        "name": "Transavia Holland",
        "icao": "TRA",
        "callsign": "TRANSAVIA",
        "country": "Netherlands"
    },
    {
        "name": "TACV",
        "icao": "TCV",
        "callsign": "CABOVERDE",
        "country": "Portugal"
    },
    {
        "name": "Transwest Air",
        "icao": "ABS",
        "callsign": "ATHABASKA",
        "country": "Canada"
    },
    {
        "name": "Transaero Airlines",
        "icao": "TSO",
        "callsign": "TRANSOVIET",
        "country": "Russia"
    },
    {
        "name": "Turkmenistan Airlines",
        "icao": "TUA",
        "callsign": "TURKMENISTAN",
        "country": "Turkmenistan"
    },
    {
        "name": "Travel Service",
        "icao": "TVS",
        "callsign": "SKYTRAVEL",
        "country": "Czech Republic"
    },
    {
        "name": "TUIfly Nordic",
        "icao": "BLX",
        "callsign": "BLUESCAN",
        "country": "Sweden"
    },
    {
        "name": "TAAG Angola Airlines",
        "icao": "DTA",
        "callsign": "DTA",
        "country": "Angola"
    },
    {
        "name": "Turkish Air Force",
        "icao": "HVK",
        "callsign": "TURKISH AIRFORCE",
        "country": "Turkey"
    },
    {
        "name": "TAM Mercosur",
        "icao": "LAP",
        "callsign": "PARAGUAYA",
        "country": "Paraguay"
    },
    {
        "name": "Trans States Airlines",
        "icao": "LOF",
        "callsign": "WATERSKI",
        "country": "United States"
    },
    {
        "name": "Tarom",
        "icao": "ROT",
        "callsign": "TAROM",
        "country": "Romania"
    },
    {
        "name": "Turan Air",
        "icao": "URN",
        "callsign": "TURAN",
        "country": "Azerbaijan"
    },
    {
        "name": "TRIP Linhas A",
        "icao": "TIB",
        "callsign": "TRIP",
        "country": "Brazil"
    },
    {
        "name": "USA3000 Airlines",
        "icao": "GWY",
        "callsign": "GETAWAY",
        "country": "United States"
    },
    {
        "name": "United Airlines",
        "icao": "UAL",
        "callsign": "UNITED",
        "country": "United States"
    },
    {
        "name": "United Air Charters",
        "icao": "UAC",
        "callsign": "UNITAIR",
        "country": "Zimbabwe"
    },
    {
        "name": "Ural Airlines",
        "icao": "SVR",
        "callsign": "SVERDLOVSK AIR",
        "country": "Russia"
    },
    {
        "name": "UM Airlines",
        "icao": "UKM",
        "callsign": "UKRAINE MEDITERRANEE",
        "country": "Ukraine"
    },
    {
        "name": "US Airways",
        "icao": "USA",
        "callsign": "U S AIR",
        "country": "United States"
    },
    {
        "name": "US Helicopter",
        "icao": "USH",
        "callsign": "US-HELI",
        "country": "United States"
    },
    {
        "name": "UTair Aviation",
        "icao": "UTA",
        "callsign": "UTAIR",
        "country": "Russia"
    },
    {
        "name": "United States Air Force",
        "icao": "AIO",
        "callsign": "AIR CHIEF",
        "country": "United States"
    },
    {
        "name": "Uzbekistan Airways",
        "icao": "UZB",
        "callsign": "UZBEK",
        "country": "Uzbekistan"
    },
    {
        "name": "Ukraine International Airlines",
        "icao": "AUI",
        "callsign": "UKRAINE INTERNATIONAL",
        "country": "Ukraine"
    },
    {
        "name": "Valuair",
        "icao": "VLU",
        "callsign": "VALUAIR",
        "country": "Singapore"
    },
    {
        "name": "Vasco Air",
        "icao": "VFC",
        "callsign": "VASCO AIR",
        "country": "Vietnam"
    },
    {
        "name": "Vietnam Airlines",
        "icao": "HVN",
        "callsign": "VIET NAM AIRLINES",
        "country": "Vietnam"
    },
    {
        "name": "VIM Airlines",
        "icao": "MOV",
        "callsign": "MOV AIR",
        "country": "Russia"
    },
    {
        "name": "Volaris",
        "icao": "VOI",
        "callsign": "VOLARIS",
        "country": "Mexico"
    },
    {
        "name": "Volga-Dnepr Airlines",
        "icao": "VDA",
        "callsign": "VOLGA-DNEPR",
        "country": "Russia"
    },
    {
        "name": "Virgin America",
        "icao": "VRD",
        "callsign": "REDWOOD",
        "country": "United States"
    },
    {
        "name": "Virgin Express",
        "icao": "VEX",
        "callsign": "VIRGIN EXPRESS",
        "country": "Belgium"
    },
    {
        "name": "Virgin Nigeria Airways",
        "icao": "VGN",
        "callsign": "VIRGIN NIGERIA",
        "country": "Nigeria"
    },
    {
        "name": "Virgin Atlantic Airways",
        "icao": "VIR",
        "callsign": "VIRGIN",
        "country": "United Kingdom"
    },
    {
        "name": "Viva Macau",
        "icao": "VVM",
        "callsign": "JACKPOT",
        "country": "Macao"
    },
    {
        "name": "Volare Airlines",
        "icao": "VLE",
        "callsign": "VOLA",
        "country": "Italy"
    },
    {
        "name": "Vueling Airlines",
        "icao": "VLG",
        "callsign": "VUELING",
        "country": "Spain"
    },
    {
        "name": "Vladivostok Air",
        "icao": "VLK",
        "callsign": "VLADAIR",
        "country": "Russia"
    },
    {
        "name": "Varig Log",
        "icao": "VLO",
        "callsign": "VELOG",
        "country": "Brazil"
    },
    {
        "name": "Virgin Australia",
        "icao": "VOZ",
        "callsign": "VIRGIN",
        "country": "Australia"
    },
    {
        "name": "VRG Linhas Aereas",
        "icao": "VRN",
        "callsign": "VARIG",
        "country": "Brazil"
    },
    {
        "name": "VASP",
        "icao": "VSP",
        "callsign": "VASP",
        "country": "Brazil"
    },
    {
        "name": "VLM Airlines",
        "icao": "VLM",
        "callsign": "RUBENS",
        "country": "Belgium"
    },
    {
        "name": "WebJet Linhas A",
        "icao": "WEB",
        "callsign": "WEB-BRASIL",
        "country": "Brazil"
    },
    {
        "name": "Welcome Air",
        "icao": "WLC",
        "callsign": "WELCOMEAIR",
        "country": "Austria"
    },
    {
        "name": "WestJet",
        "icao": "WJA",
        "callsign": "WESTJET",
        "country": "Canada"
    },
    {
        "name": "Western Airlines",
        "icao": "WAL",
        "callsign": "WESTERN",
        "country": "United States"
    },
    {
        "name": "Widerøe",
        "icao": "WIF",
        "callsign": "WIDEROE",
        "country": "Norway"
    },
    {
        "name": "Wind Jet",
        "icao": "JET",
        "callsign": "GHIBLI",
        "country": "Italy"
    },
    {
        "name": "Wings Air",
        "icao": "WON",
        "callsign": "WINGS ABADI",
        "country": "Indonesia"
    },
    {
        "name": "Wizz Air",
        "icao": "WZZ",
        "callsign": "WIZZ AIR",
        "country": "Hungary"
    },
    {
        "name": "Wizz Air Hungary",
        "icao": "WVL",
        "callsign": "WIZZBUL",
        "country": "Bulgaria"
    },
    {
        "name": "World Airways",
        "icao": "WOA",
        "callsign": "WORLD",
        "country": "United States"
    },
    {
        "name": "XL Airways France",
        "icao": "SEU",
        "callsign": "STARWAY",
        "country": "France"
    },
    {
        "name": "Xiamen Airlines",
        "icao": "CXA",
        "callsign": "XIAMEN AIR",
        "country": "China"
    },
    {
        "name": "Yamal Airlines",
        "icao": "LLM",
        "callsign": "YAMAL",
        "country": "Russia"
    },
    {
        "name": "Yemenia",
        "icao": "IYE",
        "callsign": "YEMENI",
        "country": "Yemen"
    },
    {
        "name": "Yuzhmashavia",
        "icao": "UMK",
        "callsign": "YUZMASH",
        "country": "Ukraine"
    },
    {
        "name": "Zanair",
        "icao": "TAN",
        "callsign": "ZANAIR",
        "country": "Tanzania"
    },
    {
        "name": "Zoom Airlines",
        "icao": "OOM",
        "callsign": "ZOOM",
        "country": "Canada"
    },
    {
        "name": "Sky Express",
        "icao": "SXR",
        "callsign": "SKYSTORM",
        "country": "Russia"
    },
    {
        "name": "Air Busan",
        "icao": "ABL",
        "callsign": "Air Busan",
        "country": "Republic of Korea"
    },
    {
        "name": "Air Kazakhstan",
        "icao": "KZK",
        "callsign": "Kazakh",
        "country": "Kazakhstan"
    },
    {
        "name": "Japan Air System",
        "icao": "JAS",
        "callsign": "Air System",
        "country": "Japan"
    },
    {
        "name": "United Airways",
        "icao": "UBD",
        "callsign": "UNITED BANGLADESH",
        "country": "Bangladesh"
    },
    {
        "name": "Fly540",
        "icao": "FFV",
        "callsign": "SWIFT TANGO",
        "country": "Kenya"
    },
    {
        "name": "Transavia France",
        "icao": "TVF",
        "callsign": "FRENCH SUN",
        "country": "France"
    },
    {
        "name": "Uni Air",
        "icao": "UIA",
        "callsign": "Glory",
        "country": "Taiwan"
    },
    {
        "name": "Red Wings",
        "icao": "RWZ",
        "callsign": "AIR RED",
        "country": "Russia"
    },
    {
        "name": "Gabon Airlines",
        "icao": "GBK",
        "callsign": "GABON AIRLINES",
        "country": "Gabon"
    },
    {
        "name": "MCA Airlines",
        "icao": "MCA",
        "callsign": "CALSON",
        "country": "Sweden"
    },
    {
        "name": "Maldivo Airlines",
        "icao": "MAV",
        "callsign": "Maldivo",
        "country": "Maldives"
    },
    {
        "name": "Eastar Jet",
        "icao": "ESR",
        "callsign": "Eastar",
        "country": "South Korea"
    },
    {
        "name": "Jin Air",
        "icao": "JNA",
        "callsign": "Jin Air",
        "country": "South Korea"
    },
    {
        "name": "Baltic Air lines",
        "icao": "BA1",
        "callsign": "Baltic",
        "country": "Latvia"
    },
    {
        "name": "Ciel Canadien",
        "icao": "YCC",
        "callsign": "Ciel",
        "country": "Canada"
    },
    {
        "name": "Canadian National Airways",
        "icao": "YCP",
        "callsign": "CaNational",
        "country": "Canada"
    },
    {
        "name": "Epic Holiday",
        "icao": "4AA",
        "callsign": "Epic",
        "country": "United States"
    },
    {
        "name": "Indochina Airlines",
        "icao": "AXC",
        "callsign": "Airspup",
        "country": "Vietnam"
    },
    {
        "name": "German Air Force - FLB",
        "icao": "FLB",
        "callsign": "FLB",
        "country": "Germany"
    },
    {
        "name": "Line Blue",
        "icao": "LBL",
        "callsign": "Bluebird",
        "country": "Germany"
    },
    {
        "name": "Texas Wings",
        "icao": "TXW",
        "callsign": "TXW",
        "country": "United States"
    },
    {
        "name": "Dennis Sky",
        "icao": "DSY",
        "callsign": "DSY",
        "country": "Israel"
    },
    {
        "name": "Atifly",
        "icao": "A1F",
        "callsign": "atifly",
        "country": "United States"
    },
    {
        "name": "CanXpress",
        "icao": "CA1",
        "callsign": "CAX",
        "country": "Canada"
    },
    {
        "name": "Sharp Airlines",
        "icao": "SHA",
        "callsign": "SHARP",
        "country": "Australia"
    },
    {
        "name": "World Experience Airline",
        "icao": "WE1",
        "callsign": "WEA",
        "country": "Canada"
    },
    {
        "name": "Locair",
        "icao": "LOC",
        "callsign": "LOCAIR",
        "country": "United States"
    },
    {
        "name": "SeaPort Airlines",
        "icao": "SQH",
        "callsign": "SASQUATCH",
        "country": "United States"
    },
    {
        "name": "Enerjet",
        "icao": "ENJ",
        "callsign": "ENERJET AIR",
        "country": "Canada"
    },
    {
        "name": "MexicanaLink",
        "icao": "MXI",
        "callsign": "LINK",
        "country": "Mexico"
    },
    {
        "name": "Orbest",
        "icao": "OBS",
        "callsign": "ORBEST",
        "country": "Portugal"
    },
    {
        "name": "SVG Air",
        "icao": "SVG",
        "callsign": "Grenadines",
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "name": "Sol Lineas Aereas",
        "icao": "OLS",
        "callsign": "FLIGHT SOL",
        "country": "Argentina"
    },
    {
        "name": "Regional Paraguaya",
        "icao": "REP",
        "callsign": "REGIOPAR",
        "country": "Paraguay"
    },
    {
        "name": "Transportes Aereos Cielos Andinos",
        "icao": "NDN",
        "callsign": "ANDINOS",
        "country": "Peru"
    },
    {
        "name": "EasyFly",
        "icao": "EFY",
        "callsign": "EASYFLY",
        "country": "Colombia"
    },
    {
        "name": "Andalus Lineas Aereas",
        "icao": "ANU",
        "callsign": "Andalus",
        "country": "Spain"
    },
    {
        "name": "Air 26",
        "icao": "DCD",
        "callsign": "DUCARD",
        "country": "Angola"
    },
    {
        "name": "Mauritania Airways",
        "icao": "MTW",
        "callsign": "MAURITANIA AIRWAYS",
        "country": "Mauritania"
    },
    {
        "name": "CEIBA Intercontinental",
        "icao": "CEL",
        "callsign": "CEIBA LINE",
        "country": "Equatorial Guinea"
    },
    {
        "name": "AlMasria Universal Airlines",
        "icao": "LMU",
        "callsign": "ALMASRIA",
        "country": "Egypt"
    },
    {
        "name": "EgyptAir Express",
        "icao": "MSE",
        "callsign": "EGYPTAIR EXPRESS",
        "country": "Egypt"
    },
    {
        "name": "KoralBlue Airlines",
        "icao": "KBR",
        "callsign": "KORAL BLUE",
        "country": "Egypt"
    },
    {
        "name": "Wind Rose Aviation",
        "icao": "WRC",
        "callsign": "WIND ROSE",
        "country": "Ukraine"
    },
    {
        "name": "Sevenair",
        "icao": "SEN",
        "callsign": "SEVENAIR",
        "country": "Tunisia"
    },
    {
        "name": "Hellenic Imperial Airways",
        "icao": "IMP",
        "callsign": "IMPERIAL",
        "country": "Greece"
    },
    {
        "name": "Amsterdam Airlines",
        "icao": "AAN",
        "callsign": "AMSTEL",
        "country": "Netherlands"
    },
    {
        "name": "STP Airways",
        "icao": "STP",
        "callsign": "SAOTOME AIRWAYS",
        "country": "Sao Tome and Principe"
    },
    {
        "name": "Skyjet Airlines",
        "icao": "SJU",
        "callsign": "SKYJET",
        "country": "Uganda"
    },
    {
        "name": "Euroline",
        "icao": "MJX",
        "callsign": "GEO-LINE",
        "country": "Georgia"
    },
    {
        "name": "Turkuaz Airlines",
        "icao": "TRK",
        "callsign": "TURKU",
        "country": "Turkey"
    },
    {
        "name": "Viking Hellas",
        "icao": "VKH",
        "callsign": "DELPHI",
        "country": "Greece"
    },
    {
        "name": "Norlandair",
        "icao": "FNA",
        "callsign": "NORLAND",
        "country": "Iceland"
    },
    {
        "name": "Flugfelag Vestmannaeyja",
        "icao": "FVM",
        "callsign": "ELEGANT",
        "country": "Iceland"
    },
    {
        "name": "Gadair European Airlines",
        "icao": "GDR",
        "callsign": "GADAIR",
        "country": "Spain"
    },
    {
        "name": "Spirit of Manila Airlines",
        "icao": "MNP",
        "callsign": "MANILA SKY",
        "country": "Philippines"
    },
    {
        "name": "Chongqing Airlines",
        "icao": "CQN",
        "callsign": "CHONG QING",
        "country": "China"
    },
    {
        "name": "Grand China Air",
        "icao": "GDC",
        "callsign": "GRAND CHINA",
        "country": "China"
    },
    {
        "name": "West Air China",
        "icao": "CHB",
        "callsign": "WEST CHINA",
        "country": "China"
    },
    {
        "name": "Joy Air",
        "icao": "JOY",
        "callsign": "JOY AIR",
        "country": "China"
    },
    {
        "name": "Jagson Airlines",
        "icao": "JGN",
        "callsign": "JAGSON",
        "country": "India"
    },
    {
        "name": "Fars Air Qeshm",
        "icao": "QFZ",
        "callsign": "FARS AIR",
        "country": "Iran"
    },
    {
        "name": "Jupiter Airlines",
        "icao": "JPU",
        "callsign": "JUPITERAIR",
        "country": "United Arab Emirates"
    },
    {
        "name": "Eznis Airways",
        "icao": "EZA",
        "callsign": "EZNIS",
        "country": "Mongolia"
    },
    {
        "name": "Pacific Flier",
        "icao": "PFL",
        "callsign": "KOROR",
        "country": "Palau"
    },
    {
        "name": "Parmiss Airlines (IPV)",
        "icao": "IPV",
        "callsign": "IPV",
        "country": "Iran"
    },
    {
        "name": "EuropeSky",
        "icao": "EUV",
        "callsign": "EuropeSky",
        "country": "Germany"
    },
    {
        "name": "BRAZIL AIR",
        "icao": "BZE",
        "callsign": "BRAZIL AIR",
        "country": "Brazil"
    },
    {
        "name": "KSY",
        "icao": "KSY",
        "callsign": "KSY",
        "country": "Greece"
    },
    {
        "name": "SOCHI AIR",
        "icao": "KOL",
        "callsign": "SLOW FROG",
        "country": "Russia"
    },
    {
        "name": "Wizz Air Ukraine",
        "icao": "WAU",
        "callsign": "WIZZAIR UKRAINE",
        "country": "Ukraine"
    },
    {
        "name": "Tom\\\\'s & co airliners",
        "icao": "T&O",
        "callsign": "T&",
        "country": "France"
    },
    {
        "name": "LSM Airlines",
        "icao": "LOO",
        "callsign": "slowbird",
        "country": "Russia"
    },
    {
        "name": "LionXpress",
        "icao": "LIX",
        "callsign": "LIX",
        "country": "Cameroon"
    },
    {
        "name": "Domenican Airlines",
        "icao": "MDO",
        "callsign": "Domenican",
        "country": "Dominican Republic"
    },
    {
        "name": "ConneX European Airline",
        "icao": "2CO",
        "callsign": "ConneX",
        "country": "Austria"
    },
    {
        "name": "LSM AIRLINES ",
        "icao": "YZZ",
        "callsign": "Moscow frog ",
        "country": "Russia"
    },
    {
        "name": "Zabaykalskii Airlines",
        "icao": "ZZZ",
        "callsign": "Lakeair",
        "country": "Russia"
    },
    {
        "name": "CBM America",
        "icao": "XBM",
        "callsign": "AIRMAX",
        "country": "United States"
    },
    {
        "name": "Marysya Airlines",
        "icao": "1QA",
        "callsign": "MARSHAK AIR",
        "country": "Russia"
    },
    {
        "name": "Black Stallion Airways",
        "icao": "BSA",
        "callsign": "Stallion",
        "country": "United States"
    },
    {
        "name": "Solar Air",
        "icao": "SRB",
        "callsign": "Solar Air",
        "country": "Thailand"
    },
    {
        "name": "Air Mekong",
        "icao": "MKG",
        "callsign": "Air Mekong",
        "country": "Vietnam"
    },
    {
        "name": "Air Hamburg (AHO)",
        "icao": "AHO",
        "callsign": "Air Hamburg",
        "country": "Germany"
    },
    {
        "name": "ZABAIKAL AIRLINES",
        "icao": "ZTT",
        "callsign": "BAIKAL ",
        "country": "Russia"
    },
    {
        "name": "Fly Brasil",
        "icao": "FBL",
        "callsign": "FBL",
        "country": "Brazil"
    },
    {
        "name": "Himalayan Airlines",
        "icao": "HYM",
        "callsign": "Himalayan",
        "country": "Nepal"
    },
    {
        "name": "Indya Airline Group",
        "icao": "IG1",
        "callsign": "Indya1",
        "country": "India"
    },
    {
        "name": "Turkish Wings Domestic",
        "icao": "TWD",
        "callsign": "TWD",
        "country": "Turkey"
    },
    {
        "name": "Sky Regional",
        "icao": "SKV",
        "callsign": "Sky Regional",
        "country": "Canada"
    },
    {
        "name": "LSM International ",
        "icao": "UWW",
        "callsign": "moose",
        "country": "Russia"
    },
    {
        "name": "Luchsh Airlines ",
        "icao": "LJJ",
        "callsign": "russian sky",
        "country": "Russia"
    },
    {
        "name": "Mongolian International Air Lines ",
        "icao": "ZTF",
        "callsign": "Mongol_AIr ",
        "country": "Mongolia"
    },
    {
        "name": "Tway Airlines",
        "icao": "TWB",
        "callsign": "TWAY AIR",
        "country": "South Korea"
    },
    {
        "name": "NEXT Brasil",
        "icao": "NXB",
        "callsign": "XB",
        "country": "Brazil"
    },
    {
        "name": "AeroWorld ",
        "icao": "WER",
        "callsign": "sovet",
        "country": "Russia"
    },
    {
        "name": "Usa Sky Cargo",
        "icao": "ES2",
        "callsign": "USKY",
        "country": "United States"
    },
    {
        "name": "Hankook Airline",
        "icao": "HNX",
        "callsign": "HNX",
        "country": "South Korea"
    },
    {
        "name": "Marusya Airways",
        "icao": "MRS",
        "callsign": "snowball",
        "country": "Russia"
    },
    {
        "name": "Era Alaska",
        "icao": "ERR",
        "callsign": "ERAH",
        "country": "United States"
    },
    {
        "name": "AirRussia",
        "icao": "RRJ",
        "callsign": "russiancloud",
        "country": "Russia"
    },
    {
        "name": "Carpatair Flight Training",
        "icao": "SMW",
        "callsign": "Smartwings",
        "country": "Romania"
    },
    {
        "name": "I-Fly",
        "icao": "RSY",
        "callsign": "RUSSIAN SKY",
        "country": "Russia"
    },
    {
        "name": "Whitejets",
        "icao": "WTJ",
        "callsign": "WHITEJET",
        "country": "Brazil"
    },
    {
        "name": "VickJet",
        "icao": "VKJ",
        "callsign": "Vickjet",
        "country": "France"
    },
    {
        "name": "Salsa d\\\\'Haiti",
        "icao": "SLC",
        "callsign": "SALSA",
        "country": "Haiti"
    },
    {
        "name": "Kan Air",
        "icao": "KND",
        "callsign": "Kan Air",
        "country": "Thailand"
    },
    {
        "name": "Air Cudlua",
        "icao": "CUD",
        "callsign": "Cudlua",
        "country": "United Kingdom"
    },
    {
        "name": "12 North",
        "icao": "N12",
        "callsign": "12N",
        "country": "India"
    },
    {
        "name": "Orbit Airlines",
        "icao": "OBT",
        "callsign": "Orbit",
        "country": "United States"
    },
    {
        "name": "Asian Wings Airways",
        "icao": "AWM",
        "callsign": "Asian Star",
        "country": "Burma"
    },
    {
        "name": "Eagles Airlines",
        "icao": "EGS",
        "callsign": "EAGLES",
        "country": "Italy"
    },
    {
        "name": "Medallion Air",
        "icao": "MDP",
        "callsign": "MEDALS",
        "country": "Romania"
    },
    {
        "name": "Georgian International Airlines",
        "icao": "GNN",
        "callsign": "GEO-LINE",
        "country": "Georgia"
    },
    {
        "name": "Nile Air",
        "icao": "NIA",
        "callsign": "NILEBIRD",
        "country": "Egypt"
    },
    {
        "name": "Copenhagen Express",
        "icao": "CX0",
        "callsign": "Copex",
        "country": "Denmark"
    },
    {
        "name": "Air Indus",
        "icao": "AI0",
        "callsign": "AIPL",
        "country": "Pakistan"
    },
    {
        "name": "Orbit International Airlines",
        "icao": "OAI",
        "callsign": "OA",
        "country": "United States"
    },
    {
        "name": "Orbit Regional Airlines",
        "icao": "OAR",
        "callsign": "OA",
        "country": "United States"
    },
    {
        "name": "Volotea",
        "icao": "VOO",
        "callsign": "Volotea",
        "country": "Spain"
    },
    {
        "name": "Russia State Transport",
        "icao": "RSD",
        "callsign": "STATE AERO",
        "country": "Russia"
    },
    {
        "name": "Malaysia Wings",
        "icao": "MWI",
        "callsign": "MWI",
        "country": "Malaysia"
    },
    {
        "name": "Michael Airlines",
        "icao": "MJG",
        "callsign": "MJG",
        "country": "Puerto Rico"
    },
    {
        "name": "Korongo Airlines",
        "icao": "KGO",
        "callsign": "KORONGO",
        "country": "Congo (Kinshasa)"
    },
    {
        "name": "Aws express",
        "icao": "666",
        "callsign": "aws",
        "country": "United States"
    },
    {
        "name": "Nordic Global Airlines",
        "icao": "NGB",
        "callsign": "Nordic Global",
        "country": "Finland"
    },
    {
        "name": "Zenith International Airline",
        "icao": "ZNA",
        "callsign": "ZENITH",
        "country": "Thailand"
    },
    {
        "name": "Orbit Airlines Azerbaijan",
        "icao": "OAB",
        "callsign": "Orbitaz",
        "country": "Azerbaijan"
    },
    {
        "name": "Flying kangaroo Airline",
        "icao": "FKA",
        "callsign": "Skippy",
        "country": "Australia"
    },
    {
        "name": "VietJet Air",
        "icao": "VJC",
        "callsign": "VIETJETAIR",
        "country": "Vietnam"
    },
    {
        "name": "Vision Airlines (V2)",
        "icao": "RBY",
        "callsign": "RUBY",
        "country": "United States"
    },
    {
        "name": "AirAsia Japan",
        "icao": "WAJ",
        "callsign": "WING ASIA",
        "country": "Japan"
    },
    {
        "name": "Royal Airways",
        "icao": "RAW",
        "callsign": "RAW",
        "country": "United States"
    },
    {
        "name": "FlyHigh Airlines Ireland (FH)",
        "icao": "FHI",
        "callsign": "FLYHIRELAND",
        "country": "Ireland"
    },
    {
        "name": "Hebei Airlines",
        "icao": "HBH",
        "callsign": "Hebei Air",
        "country": "China"
    },
    {
        "name": "Air KBZ",
        "icao": "KBZ",
        "callsign": "Air KBZ",
        "country": "Burma"
    },
    {
        "name": "T.J. Air",
        "icao": "TJA",
        "callsign": "T.J. Air",
        "country": "United States"
    },
    {
        "name": "Nesma Airlines",
        "icao": "NMA",
        "callsign": "Nesma Airlines",
        "country": "Egypt"
    },
    {
        "name": "East Horizon",
        "icao": "EHN",
        "callsign": "EAST HORIZON",
        "country": "Afghanistan"
    },
    {
        "name": "Air Majoro",
        "icao": "MJP",
        "callsign": "Air Majoro",
        "country": "Peru"
    },
    {
        "name": "Rotana Jet",
        "icao": "RJD",
        "callsign": "ROTANA",
        "country": "United Arab Emirates"
    },
    {
        "name": "SOCHI AIR CHATER",
        "icao": "QER",
        "callsign": "russian doll",
        "country": "Russia"
    },
    {
        "name": "Malindo Air",
        "icao": "MXD",
        "callsign": "Malindo",
        "country": "Malaysia"
    },
    {
        "name": "Hermes Airlines",
        "icao": "HRM",
        "callsign": "HERMES",
        "country": "Greece"
    },
    {
        "name": "Maryland Air",
        "icao": "M1F",
        "callsign": "Maryland Flight",
        "country": "United States"
    },
    {
        "name": "Flybe Finland Oy",
        "icao": "FCM",
        "callsign": "FINNCOMM",
        "country": "Finland"
    },
    {
        "name": "Apache Air",
        "icao": "IWA",
        "callsign": "APACHE",
        "country": "United States"
    },
    {
        "name": "Jettor Airlines",
        "icao": "JTO",
        "callsign": "JETHAPPY",
        "country": "Hong Kong"
    },
    {
        "name": "Golden Myanmar Airlines",
        "icao": "GMR",
        "callsign": "Golden Myanmar",
        "country": "Burma"
    },
    {
        "name": "Eastern Atlantic Virtual Airlines",
        "icao": "EAV",
        "callsign": "EAVA",
        "country": "United States"
    },
    {
        "name": "Comfort Express Virtual Charters Albany",
        "icao": "EVC",
        "callsign": "Comfort Express",
        "country": "United States"
    },
    {
        "name": "FLYJET",
        "icao": "FYJ",
        "callsign": "Fast Jet",
        "country": "Poland"
    },
    {
        "name": "XAIR USA",
        "icao": "XAU",
        "callsign": "XAIR",
        "country": "United States"
    },
    {
        "name": "XPTO",
        "icao": "XPT",
        "callsign": "XPTO",
        "country": "Portugal"
    },
    {
        "name": "BBN-Airways",
        "icao": "EGH",
        "callsign": "BBN",
        "country": "United Kingdom"
    },
    {
        "name": "Air Serbia",
        "icao": "ASL",
        "callsign": "AIR SERBIA",
        "country": "Serbia"
    },
    {
        "name": "Skyline Ulasim Ticaret A.S.",
        "icao": "KCU",
        "callsign": "Kocoglu",
        "country": "Turkey"
    },
    {
        "name": "Air Lituanica",
        "icao": "LTU",
        "callsign": "LITUANICA",
        "country": "Lithuania"
    },
    {
        "name": "Envoy Air",
        "icao": "ENY",
        "callsign": "Envoy",
        "country": "United States"
    },
    {
        "name": "Rainbow Air (RAI)",
        "icao": "RAB",
        "callsign": "Rainbow",
        "country": "United States"
    },
    {
        "name": "Rainbow Air Canada",
        "icao": "RAY",
        "callsign": "Rainbow CAN",
        "country": "Canada"
    },
    {
        "name": "Rainbow Air Polynesia",
        "icao": "RPO",
        "callsign": "Rainbow Air",
        "country": "United States"
    },
    {
        "name": "Rainbow Air Euro",
        "icao": "RUE",
        "callsign": "Rainbow Air",
        "country": "United Kingdom"
    },
    {
        "name": "Rainbow Air US",
        "icao": "RNY",
        "callsign": "Rainbow Air",
        "country": "United States"
    },
    {
        "name": "Dobrolet",
        "icao": "DOB",
        "callsign": "DOBROLET",
        "country": "Russia"
    },
    {
        "name": "Spike Airlines",
        "icao": "SAL",
        "callsign": "Spike Air",
        "country": "United States"
    },
    {
        "name": "Go2Sky",
        "icao": "RLX",
        "callsign": "RELAX",
        "country": "Slovakia"
    },
    {
        "name": "FlyPortugal",
        "icao": "FPT",
        "callsign": "FlyPortugal",
        "country": "Portugal"
    },
    {
        "name": "Dense Airways",
        "icao": "DWA",
        "callsign": "DENSE",
        "country": "United States"
    },
    {
        "name": "Dense Connection",
        "icao": "DC2",
        "callsign": "DC2",
        "country": "United States"
    },
    {
        "name": "Jet Suite",
        "icao": "RSP",
        "callsign": "Red Stripe",
        "country": "United States"
    },
    {
        "name": "Fly Jamaica Airways",
        "icao": "FJM",
        "callsign": "Greenheart",
        "country": "Jamaica"
    },
    {
        "name": "SOCHI AIR EXPRESS",
        "icao": "SAE",
        "callsign": "ADLER EXPRESS",
        "country": "Russia"
    },
    {
        "name": "Fly Romania",
        "icao": "OTJ",
        "callsign": "TENDER AIR",
        "country": "Romania"
    },
    {
        "name": "Fly Africa Zimbabwe",
        "icao": "FZW",
        "callsign": "Fresh Express",
        "country": "Zimbabwe"
    },
    {
        "name": "San Dima Air",
        "icao": "SDI",
        "callsign": "FAREFLIGHT",
        "country": "United States"
    },
    {
        "name": "Hebradran Air Services",
        "icao": "HBR",
        "callsign": "Hebradran",
        "country": "United Kingdom"
    },
    {
        "name": "Pobeda",
        "icao": "PBD",
        "callsign": "POBEDA",
        "country": "Russia"
    },
    {
        "name": "City Airways",
        "icao": "GTA",
        "callsign": "CITY AIR",
        "country": "Thailand"
    },
    {
        "name": "Norwegian Long Haul AS",
        "icao": "NLH",
        "callsign": "NORSTAR",
        "country": "Norway"
    },
    {
        "name": "TransNusa Air",
        "icao": "TNU",
        "callsign": "TRANSNUSA",
        "country": "Indonesia"
    },
    {
        "name": "Sky Angkor Airlines (ZA)",
        "icao": "SWM",
        "callsign": "SKY ANGKOR",
        "country": "Cambodia"
    },
    {
        "name": "Mann Yadanarpon Airlines",
        "icao": "MYP",
        "callsign": "MANN ROYAL",
        "country": "Burma"
    },
    {
        "name": "REXAIR VIRTUEL",
        "icao": "RXR",
        "callsign": "Rexair",
        "country": "France"
    },
    {
        "name": "WestJet Encore",
        "icao": "WEN",
        "callsign": "Encore",
        "country": "Canada"
    },
    {
        "name": "Sky Regional Airlines",
        "icao": "SKV",
        "callsign": "Maple",
        "country": "Canada"
    },
    {
        "name": "Cello Aviation",
        "icao": "CLJ",
        "callsign": "CELLOJET",
        "country": "United Kingdom"
    },
    {
        "name": "Aeronautica Militare",
        "icao": "IAM",
        "callsign": "Italian Airforce",
        "country": "Italy"
    },
    {
        "name": "Bassaka airlines",
        "icao": "BSX",
        "callsign": "5B",
        "country": "Cambodia"
    },
    {
        "name": "Jetstar Japan ",
        "icao": "JJP",
        "callsign": "ORANGE LINER",
        "country": "Japan"
    },
    {
        "name": "AtlasGlobal Ukraine",
        "icao": "UJX",
        "callsign": "Atlas Ukraine",
        "country": "Ukraine"
    },
    {
        "name": "Boliviana de Aviacion (OB)",
        "icao": "BOV",
        "callsign": "BOLIVIANA",
        "country": "Bolivia"
    },
    {
        "name": "Norwegian Air International (D8)",
        "icao": "IBK",
        "callsign": "NORTRANS",
        "country": "Norway"
    },
    {
        "name": "Indonesa Air Aisa X",
        "icao": "IDX",
        "callsign": "Red Phoenix",
        "country": "Indonesia"
    },
    {
        "name": "Jota Aviation",
        "icao": "ENZ",
        "callsign": "ENZO",
        "country": "United Kingdom"
    },
    {
        "name": "COBALT",
        "icao": "FCB",
        "callsign": "COBALT",
        "country": "Cyprus"
    },
    {
        "name": "Southern Airways Express",
        "icao": "LTD",
        "callsign": "LIGHTSPEED",
        "country": "United States"
    },
    {
        "name": "University of Birmingham Air Squadron (RAF)",
        "icao": "UAY",
        "callsign": "UAY",
        "country": "United Kingdom"
    },
    {
        "name": "ViaAir",
        "icao": "SRY",
        "callsign": "Stingray",
        "country": "United States"
    },
    {
        "name": "All America BOPY",
        "icao": "PYB",
        "callsign": "BOPY",
        "country": "Paraguay"
    },
    {
        "name": "Thai Vietjet Air",
        "icao": "TVJ",
        "callsign": "THAIVIET JET",
        "country": "Thailand"
    },
    {
        "name": "GX Airlines",
        "icao": "CBG",
        "callsign": "SPRAY",
        "country": "China"
    },
    {
        "name": "Svyaz Rossiya",
        "icao": "SJM",
        "callsign": "RussianConnecty",
        "country": "Russia"
    }
]

export default airlines;