const flags = {
  af: "Afghanistan",
  ax: "Åland Islands",
  al: "Albania",
  dz: "Algeria",
  as: "American Samoa",
  ad: "Andorra",
  ao: "Angola",
  ai: "Anguilla",
  aq: "Antarctica",
  ag: "Antigua and Barbuda",
  ar: "Argentina",
  am: "Armenia",
  aw: "Aruba",
  au: "Australia",
  at: "Austria",
  az: "Azerbaijan",
  bs: "Bahamas",
  bh: "Bahrain",
  bd: "Bangladesh",
  bb: "Barbados",
  by: "Belarus",
  be: "Belgium",
  bz: "Belize",
  bj: "Benin",
  bm: "Bermuda",
  bt: "Bhutan",
  bo: "Bolivia",
  ba: "Bosnia and Herzegovina",
  bw: "Botswana",
  br: "Brazil",
  bn: "Brunei",
  bg: "Bulgaria",
  bf: "Burkina Faso",
  bi: "Burundi",
  kh: "Cambodia",
  cm: "Cameroon",
  ca: "Canada",
  cv: "Cape Verde",
  ky: "Cayman Islands",
  cf: "Central African Republic",
  td: "Chad",
  cl: "Chile",
  cn: "China",
  co: "Colombia",
  km: "Comoros",
  cg: "Congo",
  cd: "Democratic Republic of the Congo",
  cr: "Costa Rica",
  ci: "Côte d'Ivoire",
  hr: "Croatia",
  cu: "Cuba",
  cy: "Cyprus",
  cz: "Czech Republic",
  dk: "Denmark",
  dj: "Djibouti",
  dm: "Dominica",
  do: "Dominican Republic",
  ec: "Ecuador",
  eg: "Egypt",
  sv: "El Salvador",
  gq: "Equatorial Guinea",
  er: "Eritrea",
  ee: "Estonia",
  et: "Ethiopia",
  fj: "Fiji",
  fi: "Finland",
  fr: "France",
  ga: "Gabon",
  gm: "Gambia",
  ge: "Georgia",
  de: "Germany",
  gh: "Ghana",
  gi: "Gibraltar",
  gr: "Greece",
  gl: "Greenland",
  gd: "Grenada",
  gu: "Guam",
  gt: "Guatemala",
  gn: "Guinea",
  gw: "Guinea-Bissau",
  gy: "Guyana",
  ht: "Haiti",
  hn: "Honduras",
  hk: "Hong Kong",
  hu: "Hungary",
  is: "Iceland",
  in: "India",
  id: "Indonesia",
  ir: "Iran",
  iq: "Iraq",
  ie: "Ireland",
  il: "Israel",
  it: "Italy",
  jm: "Jamaica",
  jp: "Japan",
  jo: "Jordan",
  kz: "Kazakhstan",
  ke: "Kenya",
  ki: "Kiribati",
  kp: "North Korea",
  kr: "South Korea",
  kw: "Kuwait",
  kg: "Kyrgyzstan",
  la: "Laos",
  lv: "Latvia",
  lb: "Lebanon",
  ls: "Lesotho",
  lr: "Liberia",
  ly: "Libya",
  li: "Liechtenstein",
  lt: "Lithuania",
  lu: "Luxembourg",
  mo: "Macao",
  mk: "North Macedonia",
  mg: "Madagascar",
  mw: "Malawi",
  my: "Malaysia",
  mv: "Maldives",
  ml: "Mali",
  mt: "Malta",
  mh: "Marshall Islands",
  mr: "Mauritania",
  mu: "Mauritius",
  mx: "Mexico",
  fm: "Micronesia",
  md: "Moldova",
  mc: "Monaco",
  mn: "Mongolia",
  me: "Montenegro",
  ma: "Morocco",
  mz: "Mozambique",
  mm: "Myanmar",
  na: "Namibia",
  nr: "Nauru",
  np: "Nepal",
  nl: "Netherlands",
  nz: "New Zealand",
  ni: "Nicaragua",
  ne: "Niger",
  ng: "Nigeria",
  no: "Norway",
  om: "Oman",
  pk: "Pakistan",
  pw: "Palau",
  ps: "Palestine",
  pa: "Panama",
  pg: "Papua New Guinea",
  py: "Paraguay",
  pe: "Peru",
  ph: "Philippines",
  pl: "Poland",
  pt: "Portugal",
  pr: "Puerto Rico",
  qa: "Qatar",
  ro: "Romania",
  ru: "Russia",
  rw: "Rwanda",
  sa: "Saudi Arabia",
  sn: "Senegal",
  rs: "Serbia",
  sc: "Seychelles",
  sl: "Sierra Leone",
  sg: "Singapore",
  sk: "Slovakia",
  si: "Slovenia",
  sb: "Solomon Islands",
  so: "Somalia",
  za: "South Africa",
  es: "Spain",
  lk: "Sri Lanka",
  sd: "Sudan",
  sr: "Suriname",
  se: "Sweden",
  ch: "Switzerland",
  sy: "Syria",
  tw: "Taiwan",
  tj: "Tajikistan",
  tz: "Tanzania",
  th: "Thailand",
  tl: "Timor-Leste",
  tg: "Togo",
  to: "Tonga",
  tt: "Trinidad and Tobago",
  tn: "Tunisia",
  tr: "Turkey",
  tm: "Turkmenistan",
  tv: "Tuvalu",
  ug: "Uganda",
  ua: "Ukraine",
  ae: "United Arab Emirates",
  gb: "United Kingdom",
  us: "United States",
  uy: "Uruguay",
  uz: "Uzbekistan",
  vu: "Vanuatu",
  ve: "Venezuela",
  vn: "Vietnam",
  vi: "Virgin Islands",
  wf: "Wallis and Futuna",
  eh: "Western Sahara",
  ye: "Yemen",
  zm: "Zambia",
  zw: "Zimbabwe"
};

const names = Object.keys(flags);

const nameEl = document.getElementById("name");
const scoreEl = document.getElementById("score");
const lifeEl = document.getElementById("life");
const qnEl = document.getElementById("qus");
const hsEl = document.getElementById("highScore");

const elem1 = document.getElementById("elem1");
const elem2 = document.getElementById("elem2");
const elem3 = document.getElementById("elem3");
const elem4 = document.getElementById("elem4");

let score = parseInt(localStorage.getItem("score")) || 0;
let life = parseInt(localStorage.getItem("life")) || 3;
let qn = parseInt(localStorage.getItem("qus")) || 1;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

scoreEl.innerHTML = score;
lifeEl.innerHTML = life;
qnEl.innerHTML = qn;
hsEl.innerHTML = highScore;

let correctAnswer = "";

function randomCountry() {
    return names[Math.floor(Math.random() * names.length)];
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    let correct = randomCountry();
    
    let options = [correct];
    
    while (options.length < 4) {
        let random = randomCountry();
        
        if (!options.includes(random)) {
            options.push(random);
        }
    }
    
    options = shuffle(options);
    
    correctAnswer = `
    <img src="Flag/${correct}.png" width="150px">
  `;
    
    nameEl.innerHTML = flags[correct];
    
    const optionHTML = options.map(code => {
        return `<img src="Flag/${code}.png" width="150px">`;
    });
    
    elem1.innerHTML = optionHTML[0];
    elem2.innerHTML = optionHTML[1];
    elem3.innerHTML = optionHTML[2];
    elem4.innerHTML = optionHTML[3];
    
    attachEvents();
}

function attachEvents() {
    [elem1, elem2, elem3, elem4].forEach(el => {
        el.onclick = () => {
            if (el.innerHTML === correctAnswer) {
                score += 10;
                
                el.style.backgroundColor = "rgb(93,252,79)";
            } else {
                life -= 1;
                
                el.style.backgroundColor = "rgb(240,65,65)";
            }
            
            scoreEl.innerHTML = score;
            lifeEl.innerHTML = life;
            
            localStorage.setItem("score", score);
            localStorage.setItem("life", life);
            
            setTimeout(() => {
                if (life <= 0) {
                    alert("Game Over!");
                    
                    localStorage.setItem("score", 0);
                    localStorage.setItem("life", 3);
                    localStorage.setItem("qus", 1);
                    if (score >= highScore) {
                        highScore = score;
                        localStorage.setItem("highScore", highScore);
                    }
                    
                    location.reload();
                } else {
                    qn += 1;
                    
                    qnEl.innerHTML = qn;
                    
                    localStorage.setItem("qus", qn);
                    
                    elem1.style.backgroundColor = "";
                    elem2.style.backgroundColor = "";
                    elem3.style.backgroundColor = "";
                    elem4.style.backgroundColor = "";
                    
                    loadQuestion();
                }
            }, 500);
        };
    });
}

loadQuestion();