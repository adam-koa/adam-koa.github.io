
// document.getElementById("capstone-content").className = "project-content active-project-content";
// document.getElementById("thesis-content").className = "project-content inactive-project-content";
// document.getElementById("launcher-content").className = "project-content inactive-project-content";
// document.getElementById("oscilloscope-content").className = "project-content inactive-project-content";


// This will activate a new project for viewing
function activateProject(element){

    // first change whatever project is already active to inactive
    let activeElement = document.getElementsByClassName("project-header active-project-header")[0];
    activeElement.className = "project-header inactive-project-header";

    let activeElementContent = document.getElementsByClassName("project-content active-project-content")[0];
    activeElementContent.className = "project-content inactive-project-content";

    // now change the selected element to being active
    element.className = "project-header active-project-header";
    let newElementContent;

    switch(element.id){

        case "capstone-header":
            newElementContent = document.getElementById("capstone-content");
            // newElementContent.display = "flex";
            newElementContent.className = "project-content active-project-content";
            break;

        case "thesis-header":
            newElementContent = document.getElementById("thesis-content");
            // newElementContent.display = "flex";
            newElementContent.className = "project-content active-project-content";
            break;

        case "launcher-header":
            newElementContent = document.getElementById("launcher-content");
            // newElementContent.display = "flex";
            newElementContent.className = "project-content active-project-content";
            break;

        case "oscilloscope-header":
            newElementContent = document.getElementById("oscilloscope-content");
            // newElementContent.display = "flex";
            newElementContent.className = "project-content active-project-content";
            break;

        case "website-header":
            newElementContent = document.getElementById("website-content");
            // newElementContent.display = "flex";
            newElementContent.className = "project-content active-project-content";
            break;

        default:
            console.log("Something went wrong with selecting a project!");
            break;
    }

    // var flkty = new Flickity('.main-carousel');
    // flkty.resize();

    // somewhat inefficient to load JQuery just for this, but it's the only way that works
    // resizes all the carousels so that the new one properly loads
    var $carousel = $(".main-carousel").flickity();
    $carousel.flickity('resize');
}