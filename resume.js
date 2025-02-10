// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");

function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
}

function handleClick(event, section, link) {
    if (window.innerWidth > 1040) {
        event.preventDefault();
        removeClass();
        section.classList.add('view');
        link.classList.add('selected');
    }
}

getAbout.addEventListener('click', function (e) {
    handleClick(e, about, getAbout);
});
getResume.addEventListener('click', function (e) {
    handleClick(e, resume, getResume);
});
getContact.addEventListener('click', function (e) {
    handleClick(e, contact, getContact);
});
