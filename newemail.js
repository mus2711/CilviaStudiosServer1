const email = Object.create(null);

email.init = function(i) {
    const el = function (id) {
        return document.getElementById(id);
    };

    const textbox = el("email-here");
    var counter = i;
    console.log(counter);

    if (counter === 0) {
        textbox.value = "";
    }

    el("email-here").onclick = function () {
        counter += 1;
        console.log(counter);
    };
    
    el("subscribe-button").onclick = async function () {

        const getData = async function() {
            const response = await fetch("/api");
            let emails = await response.json();
            return emails;
        }

        const theEmails = async function() { 
            let emailList = await getData();
            return emailList;
        };

        let testObj = await theEmails();
        let emailArray = Object.values(testObj)[0];
        console.log(emailArray);

        var subscriber = textbox.value;
        textbox.style.color = "inherit";
        const emailcheck = async function() {
            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            const alreadySigned = function () {
                textbox.value = "already signed up!";
                textbox.style.color = "#f80";
                const returnBox = function()  {
                    textbox.style.color = "inherit";
                    textbox.value = "";
                };
                setTimeout(returnBox,600);
            };

            const invalidEmail = function () {
                textbox.style.color = "#f30";
                alert("invalid email");
                const returnColor = function()  {
                    textbox.style.color = "inherit";
                };
                setTimeout(returnColor,100);
            };
            if (expression.test(String(subscriber).toLowerCase()) === true) {
                if ((emailArray.includes(subscriber)) === false) {
                    console.log("done");
                    const data = {subscriber};
                    const options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    };

                    const response = await fetch("/api", options);
                    const json = await response.json();
                    console.log(json);
                    textbox.value = "";
                }
                else {
                    setTimeout(alreadySigned, 100);
                }
            } else {
                setTimeout(invalidEmail, 0);
            }
        };

        emailcheck();


    };

};

export default Object.freeze(email);


// function emailIsValid (email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }