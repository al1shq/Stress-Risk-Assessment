function calcNature() {
    let nature = 0;

    for (let i = 1; i <= 20; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          nature += parseInt(selectedInput.getAttribute('data-nature'), 10);
        }
      }
    
    localStorage.setItem("natureScore", nature); // Store the score in localStorage
}

function calcLV() {
    let LV = 0;

    for (let i = 1; i <= 20; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          LV += parseInt(selectedInput.value, 10)
        }
      }

    localStorage.setItem("LVScore", LV); // Store the score in localStorage
}

function calcPsych() {
    let psych = 0;

    for (let i = 1; i <= 5; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          psych += parseInt(selectedInput.value, 10)
        }
      }
    
    localStorage.setItem("psychScore", psych); // Store the score in localStorage
}

function calcFamily() {
    let family = 0;

    for (let i = 6; i <= 10; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          family += parseInt(selectedInput.value, 10)
        }
      }
    
    localStorage.setItem("familyScore", family); // Store the score in localStorage
}

function calcAcademic() {
    let academic = 0;

    for (let i = 11; i <= 15; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          academic += parseInt(selectedInput.value, 10)
        }
      }
    
    localStorage.setItem("academicScore", academic); // Store the score in localStorage
}

function calcHealth() {
    let health = 0;

    for (let i = 16; i <= 20; i++) {
        let selectedInput = document.querySelector(`input[name="q${i}"]:checked`)
        if (selectedInput) {
          health += parseInt(selectedInput.value, 10)
        }
      }
    
    localStorage.setItem("healthScore", health); // Store the score in localStorage
    window.location.href = "Results.html"; // Navigate after functions complete
}

function changeText() {

    let nature = Number(localStorage.getItem("natureScore"));
    let LV = Number(localStorage.getItem("LVScore"));
    let psych = Number(localStorage.getItem("psychScore"));
    let family = Number(localStorage.getItem("familyScore"));
    let academic = Number(localStorage.getItem("academicScore"));
    let health = Number(localStorage.getItem("healthScore"));

    //changing the nature label
    if (nature > 10){
        document.getElementById("nature").innerText = "Distress";
        nature = nature / 20 * 100;
        nature = Math.round(nature);
        document.getElementById("nature2").innerText = "Your responses indicate that your stress levels lean more towards Distress by " + nature + "%.";
        }
        
        if (nature < 10) {
        document.getElementById("nature").innerText = "Eustress";
        nature = (20 - nature) / 20 * 100;
        nature = Math.round(nature);
        document.getElementById("nature2").innerText = "Your responses indicate that your stress levels lean more towards Eustress by " + nature + "%.";
        }
        
        if (nature === 10) {
        document.getElementById("nature").innerText = "Balanced";
        document.getElementById("nature2").innerText = "Your responses indicate that your stress levels are a balanced blend of both Eustress and Distress, each having a score of 50%.";
        }

        //chaning the LV label

        if (LV <= 30) {
            document.getElementById("LV").innerText = "Acute Stress";
            document.getElementById("LV2").innerText = 'It is likely that you are experiencing Acute stress. ';
        }

        if (LV > 30 && LV <= 65) {
            document.getElementById("LV").innerText = "Episodic Acute Stress";
            document.getElementById("LV2").innerText = "It is likely that you are experiencing Episodic Acute stress."
            }


        if (LV > 65) {
            document.getElementById("LV").innerText = "Chronic Stress";
            document.getElementById("LV2").innerHTML = "It is likely that you are experiencing Chronic stress.";
        }
        
        //changing the psych risk label

        psych = psych / 20 * 100;
        psych = Math.round(psych);

        if (psych <= 25) {
            document.getElementById("psych").innerText = "PyschoSocial: Low Risk";
        }

        if (psych > 25 && psych <= 50) {
            document.getElementById("psych").innerText = "PyschoSocial: Mild Risk";
        }

        if (psych > 50 && psych <= 75) {
            document.getElementById("psych").innerText = "PyschoSocial: Moderate Risk";
        }

        if (psych > 75) {
            document.getElementById("psych").innerText = "PyschoSocial: Severe Risk";
        }

        //changing the family risk label

        family = family / 20 * 100;
        family = Math.round(family);

        if (family <= 25) {
            document.getElementById("family").innerText = "Family: Low Risk";
        }

        if (family > 25 && family <= 50) {
            document.getElementById("family").innerText = "Family: Mild Risk";
        }

        if (family > 50 && family <= 75) {
            document.getElementById("family").innerText = "Family: Moderate Risk";
        }

        if (family > 75) {
            document.getElementById("family").innerText = "Family: Severe Risk";
        }


        //changing the academic risk label

        academic = academic / 20 * 100;
        academic = Math.round(academic);

        if (academic <= 25) {
            document.getElementById("academic").innerText = "Academic: Low Risk";
        }

        if (academic > 25 && academic <= 50) {
            document.getElementById("academic").innerText = "Academic: Mild Risk";
        }

        if (academic > 50 && academic <= 75) {
            document.getElementById("academic").innerText = "Academic: Moderate Risk";
        }

        if (academic > 75) {
            document.getElementById("academic").innerText = "Academic: Severe Risk";
        }

        //changing the health risk label

        health = health / 20 * 100;
        health = Math.round(health);

        if (health <= 25) {
            document.getElementById("health").innerText = "Lifestyle: Low Risk";
        }

        if (health > 25 && health <= 50) {
            document.getElementById("health").innerText = "Lifestle: Mild Risk";
        }

        if (health > 50 && health <= 75) {
            document.getElementById("health").innerText = "Lifestyle: Moderate Risk";
        }

        if (health > 75) {
            document.getElementById("health").innerText = "Lifestyle: Severe Risk";
        }




}


document.addEventListener('DOMContentLoaded', function() {
    // Check if the current page's URL matches a specific one
    if (window.location.pathname.includes('Results.html')) {
        changeText();
    }
});
