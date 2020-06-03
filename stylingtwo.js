const styling = Object.create(null);

styling.init = function() {
    const el = function (id) {
        return document.getElementById(id);
    };

    function openNav() {
        const elements = document.getElementsByClassName("nav-list");
        for (var i= 0; i < elements.length; i++) {
            elements[i].style.color = "#ffffff"
        }
        document.getElementById("sideNavigation").style.width = "50%";
        for (let item of elements) {
            item.style= (null)
        }
    }

    function closeNav() {
        const elements = document.getElementsByClassName("nav-list");
        for (var i= 0; i < elements.length; i++) {
            elements[i].style.color = "#000000"
        }
        document.getElementById("sideNavigation").style.width = "0%";
    }

    el("circle-base").addEventListener("click", openNav)
    el("circle-nav").addEventListener("click", closeNav)

}

export default Object.freeze(styling);

