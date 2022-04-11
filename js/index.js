// Start header
// SELECTORS
const ulHead = document.querySelector("header>ul");
const menubtn = document.querySelector("header>span[name='menu']");
const links_head = document.querySelectorAll("ul>li>a");
const scetions = document.querySelectorAll("section");

//button
menubtn.addEventListener("click", () => {
    ulHead.classList.toggle("openul");
});

links_head.forEach((item) => {
    item.addEventListener("click", () => {
        if (ulHead.classList.contains("openul")) {
            ulHead.classList.remove("openul");
        }
    });
});

//show & heddin header
window.addEventListener("scroll", function() {
    if (this.scrollY >= 90 && this.window.scrollY <= 620) {
        ulHead.style.opacity = "0";
    } else {
        ulHead.style.opacity = "1";
    }
    if (this.scrollY >= 620) {
        ulHead.classList.add("showUl");
    } else {
        ulHead.classList.remove("showUl");
    }
    //asctive the link when scrolling
    ActiveSection();
});

//detected the section when it on vewport user screen
function ActiveSection() {
    const smallCircle = document.querySelector(".circle_sm");
    const LargeCircle = document.querySelector(".circle_lg");
    //controlling
    scetions.forEach((sec) => {
        let Rect = sec.getBoundingClientRect();
        if (Rect.top >= -50 && Rect.top <= 250) {
            let sec_id = sec.id;
            //call back F that active link
            ActiveLink(sec_id);
            smallCircle.classList.add("circleSmall");
            LargeCircle.classList.add("circleLarge");
        }
    });
}

// Function asctive link scrolling
function ActiveLink(secid) {
    for (let i = 0; i < links_head.length; i++) {
        const el = links_head[i];
        el.classList.remove("light");
    }
    let active_link = document.querySelector(`ul>li>a[href="#${secid}"]`);
    active_link.classList.add("light");
}
// End header

//Start Skills progress
let divSkills = document.querySelector(".skills");
let spanProgress = document.querySelectorAll(".progress>div>.ProgBg>span ");

window.addEventListener("scroll", function() {
    if (this.scrollY >= divSkills.offsetTop - 250) {
        spanProgress.forEach((item) => {
            item.style.width = `${item.dataset.width}`;
        });
    }
});

//End Skills progress

//Start Footer
const btn = document.getElementById("ToUp");
const Contact = document.querySelector("#contact");
//show
window.addEventListener("scroll", function() {
    if (this.scrollY >= Contact.offsetTop - 50) {
        btn.classList.add("OpenArrowFoot");
    }
});
//translate
btn.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 500);
});
//End Footer