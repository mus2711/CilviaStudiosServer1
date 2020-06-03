const access = Object.create(null);

access.init = function () {
    const el = function (id) {
        return document.getElementById(id);
    };
    
    el("CilviaOne").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("CilviaOnelink").click();
            break;
        }
    });
    
    
    el("tglist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("tg").click();
            break;
        }
    });
    
    el("mslist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("ms").click();
            break;
        }
    });
    
    el("cslist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("cs").click();
            break;
        }
    });
    el("dhlist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("dh").click();
            break;
        }
    });
    el("ublist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("").click();
            break;
        }
    });
    
    el("mailelement").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("maillink").click();
            break;
        }
    });
    
    el("numberelement").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("numberlink").click();
            break;
        }
    });
};

export default Object.freeze(access);
