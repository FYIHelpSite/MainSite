/* 
Once someone is on the site this js code will launch the button asking for cookie permission 
If the cookie already exists on the system then the launcher will not show up as the cookie has already been accepted/denied
If it is the users first time or the cookie has expired then it will ask the user again if they would like to accept/deny
The cookies expire at the end of a users session 
The cookie itself can ask for a user prompt such as a name and this data can be stored in the cookie to be remembered for later

these are session cookies because they only last during the session 

there are some platforms like Monsito abd One trust that do the cookie part for you and ensure it is compliant, though its not free 
*/

const cookieBox = document.querySelector(".wrapper-cookie");
const buttons = document.querySelectorAll(".button-cookie");

const executeCodes = () => {
// Check if cookie contains coding lab cookie once the website is active
if (document.cookie.includes("FYI_Name_Check")) {
cookieBox.classList.remove("show");
} else {
cookieBox.classList.add("show");
}

buttons.forEach((button) => {
button.addEventListener("click", () => {
cookieBox.classList.remove("show");

if (button.id == "acceptBtn-cookie") {
  // Set the cookie to expire at the end of the session
  document.cookie = "cookieBy=FYI_Name_Check; expires=0";
  // document.cookie = "cookieBy=userName; expires= 0";
  // Get the user's name and store it in a cookie
  const name = prompt("Please enter your name:");
  document.cookie = "userName=${name}; expires=0";

} else {
  // Delete the cookies because this date has already passed 
  document.cookie = "cookieBy=; expires=Thu, 01 Jan 1970 00:00:00 PST;";
  document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 PST;";
ga('set', 'anonymizeIp', true);
ga('set', 'displayFeaturesTask', null);
ga('set', 'useAmpClientId', null);
ga('set', 'allowAdFeatures', false);
ga('set', 'allowLinker', false);
gid('set', 'anonymizeIp', true);
gid('set', 'displayFeaturesTask', null);
gid('set', 'useAmpClientId', null);
gid('set', 'allowAdFeatures', false);
gid('set', 'allowLinker', false);

}
});
});
};


function deleteCookies() {
    var theCookies = document.cookie.split(';');
    for (var i = 0 ; i < theCookies.length; i++) {
        document.cookie = theCookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


window.addEventListener("load", executeCodes);

/* In this code, the executeCodes function now checks if the "codinglab" cookie is present. 
If it is, then the consent box is hidden. If it's not, the consent box is displayed. When the "Accept" button is clicked, the "codinglab" 
cookie is set to expire at the end of the session. When the "Decline" button is clicked */