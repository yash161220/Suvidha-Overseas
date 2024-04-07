const about = document.querySelector('.About-Us');
const aboutuspg = document.querySelector('.aboutus');

const navWhySuvidhapg = document.querySelector('.nav-Why-Suvidha');
const WhySuvidhapg = document.querySelector('.Why-Suvidha');

const service = document.querySelector('.Services');
const servicepg = document.querySelector('.srvc-page-3');

const gotohome = document.querySelector('.home-link'); 


const mainhero = document.querySelector('.main-hero-container');
const pg1 = document.querySelector('.page-1');
const pg2 = document.querySelector('.page-2');
const pg3 = document.querySelector('.page-3');
const pg4 = document.querySelector('.page-4');
const foot = document.querySelector('.footer');



const contactusbuttn = document.querySelector('.nav-contact');
const contactus = document.querySelector('.contactusform');



const virtual1 = document.querySelector('.exam-item-1');
const virtual2 = document.querySelector('.exam-item-2');
const virtual3 = document.querySelector('.exam-item-3');
const virtual4 = document.querySelector('.exam-item-4');

const virtualUSA = document.querySelector('.virtual-USA');
const virtualENGLAND = document.querySelector('.virtual-ENGLAND');
const virtualGERMANY = document.querySelector('.virtual-GERMANY');
const virtualNEWZ = document.querySelector('.virtual-NEW-Z');

const virtual1buttn = document.querySelector('.abroad-bttn-1');
const virtual2buttn = document.querySelector('.abroad-bttn-2');
const virtual3buttn = document.querySelector('.abroad-bttn-3');
const virtual4buttn = document.querySelector('.abroad-bttn-4');

const srvcbuttn1 = document.querySelector('.abroad-bttn-srvc1');
const srvcbuttn2 = document.querySelector('.abroad-bttn-srvc2');
const srvcbuttn3 = document.querySelector('.abroad-bttn-srvc3');
const srvcbuttn4 = document.querySelector('.abroad-bttn-srvc4');
const srvcbuttn5 = document.querySelector('.abroad-bttn-srvc5');
const srvcbuttn6 = document.querySelector('.abroad-bttn-srvc6');

const herobuttnsrvc1 = document.querySelector('.srvc100');



const footlinkhome = document.querySelector('.page-01-p');
const footlinkcontacus1 = document.querySelector('.page-02-p');
const footlinkservice = document.querySelector('.page-03-p');
const footlinkcontacus2 = document.querySelector('.page-04-p');




mainhero.classList.add("active");
pg1.classList.add("active");
pg2.classList.add("active");
pg3.classList.add("active");
pg4.classList.add("active");

foot.classList.add("active");

aboutuspg.classList.remove("active");
WhySuvidhapg.classList.remove("active");
servicepg.classList.remove("active");
contactus.classList.remove("active");






function abouthandler(event) {
    event.preventDefault(); // Prevent default anchor tag behavior muuh aa 
    aboutuspg.classList.add("active");
    foot.classList.add("active");

    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    WhySuvidhapg.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}


function WhySuvidhapghandler(event) {
    event.preventDefault();
    WhySuvidhapg.classList.add("active");
    foot.classList.add("active");

    aboutuspg.classList.remove("active");
    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}



function servicehandler(event) {
    event.preventDefault(); // Prevent default anchor tag behavior muuh aa 

    // footlinkservice.scrollIntoView({ behavior: 'smooth', block: 'start' });

    servicepg.classList.add("active");
    foot.classList.add("active");

    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}

function homehandler(event) {
    event.preventDefault(); 
    mainhero.classList.add("active");
    pg1.classList.add("active");
    pg2.classList.add("active");
    pg3.classList.add("active");
    pg4.classList.add("active");
    foot.classList.add("active");

    servicepg.classList.remove("active");
    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    contactus.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}

about.addEventListener("click", abouthandler);
navWhySuvidhapg.addEventListener("click", WhySuvidhapghandler);

service.addEventListener("click", servicehandler);
srvcbuttn1.addEventListener("click", servicehandler);
srvcbuttn2.addEventListener("click", servicehandler);
srvcbuttn3.addEventListener("click", servicehandler);
srvcbuttn4.addEventListener("click", servicehandler);
srvcbuttn5.addEventListener("click", servicehandler);
srvcbuttn6.addEventListener("click", servicehandler);

footlinkservice.addEventListener("click", servicehandler);
// scrollToSection("id-page-01-p");
herobuttnsrvc1.addEventListener("click", servicehandler);

gotohome.addEventListener("click", homehandler);
footlinkhome.addEventListener("click", homehandler);








// const contactusbuttn = document.querySelector('.nav-contact');
// const contactus = document.querySelector('.contactusform');

function contacthandler(event) {
    event.preventDefault(); // Prevent default anchor tag behavior muuh aa 
    contactus.classList.add("active");
    // foot.classList.add("active");

    foot.classList.remove("active");
    servicepg.classList.remove("active");
    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}

contactusbuttn.addEventListener("click", contacthandler);
footlinkcontacus1.addEventListener("click", contacthandler);
footlinkcontacus2.addEventListener("click", contacthandler);





function virtual1handler(event) {
    event.preventDefault(); 
    virtualUSA.classList.add("active");

    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    foot.classList.remove("active");

    virtualNEWZ.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}

function virtual2handler(event) {
    event.preventDefault(); 
    virtualENGLAND.classList.add("active");

    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    foot.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualNEWZ.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}

function virtual3handler(event) {
    event.preventDefault(); 
    virtualGERMANY.classList.add("active");

    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    foot.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualNEWZ.classList.remove("active");
}

function virtual4handler(event) {
    event.preventDefault(); 
    virtualNEWZ.classList.add("active");

    aboutuspg.classList.remove("active");
    WhySuvidhapg.classList.remove("active");
    servicepg.classList.remove("active");
    mainhero.classList.remove("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    contactus.classList.remove("active");

    foot.classList.remove("active");

    virtualUSA.classList.remove("active");
    virtualENGLAND.classList.remove("active");
    virtualGERMANY.classList.remove("active");
}









virtual1.addEventListener("click", virtual1handler);
virtual2.addEventListener("click", virtual2handler);
virtual3.addEventListener("click", virtual3handler);
virtual4.addEventListener("click", virtual4handler);

virtual1buttn.addEventListener("click", virtual1handler);
virtual2buttn.addEventListener("click", virtual2handler);
virtual3buttn.addEventListener("click", virtual3handler);
virtual4buttn.addEventListener("click", virtual4handler);



function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);


