
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    <!--    To make tab contents disappear-->
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        // to make the color appear when tab is clicked
        event.currentTarget.classList.add("active-link");
        //      to make the tab content of specific tabs appear and the others remain hidden
        document.getElementById(tabname).classList.add("active-tab");

    }

