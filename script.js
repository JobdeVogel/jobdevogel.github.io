// DEVELOPED BY JOB DE VOGEL
// Hide navbar background
function scrollAnimations(){
    // Move timeline
    const intBoxTop = document.querySelector('.int-box-top');
    const intTop = intBoxTop.getBoundingClientRect().bottom;
    
    const intBoxBottom = document.querySelector('.int-box-bottom');
    const intBottom = intBoxBottom.getBoundingClientRect().top;
    
    const timelineTitleFixed = document.querySelector('.timeline-title-fixed');
    const timeline = timelineTitleFixed.getBoundingClientRect().bottom;

    const timelineTitleTop = document.querySelector('.timeline-title-top');
    const timelineTitleBottom = document.querySelector('.timeline-title-bottom');

    if ((timeline > intTop) && (timeline < intBottom)){
        timelineTitleTop.style.visibility = 'hidden';
        timelineTitleBottom.style.visibility = 'hidden';

        timelineTitleFixed.style.visibility = 'visible';
    }else{
        timelineTitleTop.style.visibility = 'visible';
        timelineTitleBottom.style.visibility = 'visible';

        timelineTitleFixed.style.visibility = 'hidden';
    }

    // Let experience and education boxes appear
    const intersectionLine = document.querySelector('.intersection');
    const lineBottom = intersectionLine.getBoundingClientRect().bottom;

    const experienceBoxes = document.querySelectorAll('.experience');
    const educationBoxes = document.querySelectorAll('.education');

    var visibleEdu = 0;
    var visibleExp = 0;

    var finished = false;
    
    if (finished == false){
        for (var i=0; i<experienceBoxes.length; i++){
            const experienceBoxTop = experienceBoxes[i].getBoundingClientRect().top;

            if (experienceBoxTop < lineBottom){
                experienceBoxes[i].style.opacity = '1';
                visibleExp += 1;
            } else{
                experienceBoxes[i].style.opacity = '0';
            }
        }

        for (var i=0; i<educationBoxes.length; i++){
            const educationBoxTop = educationBoxes[i].getBoundingClientRect().top;

            if (educationBoxTop < lineBottom){
                educationBoxes[i].style.opacity = '1';
                visibleEdu += 1;
            } else{
                educationBoxes[i].style.opacity = '0';
            }
        }
    }
    

    // Hide background navbar
    if(window.scrollY > window.innerHeight / 3){
        document.getElementById('nb').classList.add('change-color');
    }else{
        document.getElementById('nb').classList.remove('change-color');
    }
}

window.addEventListener('scroll', scrollAnimations);

// Manual carousel credits @w3school
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

addInformation('questions-experienced', 'answers-experienced', 'visible', 'invisible');
addInformation('questions-starter', 'answers-starter', 'visible', 'invisible');

function addInformation(input, result, visibleStyle, invisibleStyle){
    // Question and answer for software/skills information
    const questions = document.getElementById(input);
    const answers = document.getElementById(result);
    const widthFactor = .5;

    var infoVisible = false;
    var tempInfoVisible= false;
    var visibleQuestion;
    var infoScreen;

    // If scroll is at page skills...
        // Example selection    

        // Manual selection
    //

    // Make a function, one for left bar, with questions input answers input
    for(let i = 0; i < questions.children.length; i++){   
        // If user hovers over software type, show the explanation
        questions.children[i].addEventListener("mouseover", function(){
            if (infoVisible == false){
                const pLength = answers.children[i].innerText.length;
                const factor = 220 + (Math.max(pLength - 519, 0)) * widthFactor;

                answers.children[i].style.width = factor + 'px';
                answers.children[i].classList.remove(invisibleStyle);
                answers.children[i].classList.add(visibleStyle);

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '500';
                questions.children[i].style.textDecoration = 'none';

                tempInfoVisible = true;
            }      
        })

        // If user moves out software type, hide the explanation
        questions.children[i].addEventListener("mouseout", function(){
            if (infoVisible == false && tempInfoVisible == true){
                answers.children[i].classList.remove(visibleStyle);
                answers.children[i].classList.add(invisibleStyle);

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '100';

                tempInfoVisible = false;
            }      
        })
        
        // If user clicks on software type, keep the explanation
        questions.children[i].addEventListener("click", function(){
            if(infoVisible == true && questions.children[i] == visibleQuestion){
                infoScreen.classList.remove(visibleStyle);
                infoScreen.classList.add(invisibleStyle);
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';
            }else if(infoVisible == true){
                infoScreen.classList.remove(visibleStyle);
                infoScreen.classList.add(invisibleStyle);
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '500';

                
                const pLength = answers.children[i].innerText.length;
                const factor = 220 + (Math.max(pLength - 519, 0)) * widthFactor;

                answers.children[i].style.width = factor + 'px';
                answers.children[i].classList.remove(invisibleStyle);
                answers.children[i].classList.add(visibleStyle);
                
            }

            infoVisible = true;
            tempInfoVisible = false;
            infoScreen = answers.children[i];
            visibleQuestion = questions.children[i];
        })
        
        // If user clicks outside questions, hide the explanation
        document.addEventListener("click", function(event){
            if (infoVisible == true){
                var isClickOnQuestion = visibleQuestion.contains(event.target);
                var isClickOnAnswer = infoScreen.contains(event.target);
                
                if (!isClickOnQuestion && !isClickOnAnswer){
                    infoScreen.classList.remove(visibleStyle);
                    infoScreen.classList.add(invisibleStyle);
                    visibleQuestion.style.transition = 'font-weight .2s';
                    visibleQuestion.style.fontWeight = '100';

                    infoVisible = false;
                }
            }
        })
    }
}

/************** PAGES ***************/
const pages = ['.about-page-container', '.anim-page-container', '.comp-page-container', '.prog-page-container'];
const pageOpenButtons = ['about-button', 'anim-button', 'comp-button', 'prog-button'];
const pageCloseButtons = ['.about-close-button', '.anim-close-button', '.comp-close-button', '.prog-close-button'];
const aboutBackgrounds = ['.about-background', '.anim-background', '.comp-background', '.prog-background'];

var visiblePage;
var visibleIndex;

pages.forEach((page, index) =>{
        const pageDiv = document.querySelector(page);
        const pageOpenButton = document.getElementById(pageOpenButtons[index]);
        const pageCloseButton = document.querySelector(pageCloseButtons[index]);
        const pageBackground = document.querySelector(aboutBackgrounds[index]);
        const pageSwipeButtons = document.getElementById('page-buttons');

        pageOpenButton.addEventListener("click", function(){
            pageDiv.style.display = 'block';
            pageSwipeButtons.style.display = 'block';
            visiblePage = pageDiv;
            visibleIndex = index;
        });

        pageCloseButton.addEventListener("click", function(){
            pageDiv.style.display = 'none';
            pageSwipeButtons.style.display = 'none';
        });

        pageBackground.addEventListener("click", function(){
            pageDiv.style.display = 'none';
            pageSwipeButtons.style.display = 'none';
        });
});

const nextPage = document.querySelector('.nextPage');
const prevPage = document.querySelector('.prevPage');

nextPage.addEventListener("click", function(){
    visiblePage.style.display = 'none';
    document.querySelector(pages[(visibleIndex + 1) % pages.length]).style.display = 'block';
    visiblePage = document.querySelector(pages[(visibleIndex + 1) % pages.length]);
    visibleIndex = (visibleIndex + 1) % pages.length;
});

prevPage.addEventListener("click", function(){
    visiblePage.style.display = 'none';
    var tempIndex = visibleIndex - 1;

    if (tempIndex < 0){
        tempIndex = pages.length - 1;
    }

    document.querySelector(pages[tempIndex]).style.display = 'block';
    visiblePage = document.querySelector(pages[tempIndex]);
    visibleIndex = tempIndex;
});