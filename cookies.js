/* 
Once someone is on the site this js code will launch the button asking for cookie permission 
If the cookie already exists on the system then the launcher will not show up as the cookie has already been accepted/denied
If it is the users first time or the cookie has expired then it will ask the user again if they would like to accept/deny 
Some cookies expire after the user leaves the site so they onlyn last for the session and the user will be prompted again 

The cookie itself can ask for a user prompt such as a name and this data can be stored in the cookie to be remembered for later
There are some platforms like Monsito and One trust that do the cookie part for you and ensure it is compliant, though its not free 
So far the cookies we create separately are deleted but the google analytics cookies remain and they are not essential 
GA cookies remain so these analytics appear to stay on the site 
Now the banner will not appear if the saved cookie exists in the browser 

so the website cookies should be working because as I have checked for the other sites 
they also keep the _ga, _gat, etc cookies which are all google analytic cookies 
companies like dell, razer, discord, etc keep these cookies 
after they delete the non essential cookies such as marketing or ads, but the current site as it is now
has none of those types of cookies 

github git ignore remove

rm .gitignore
del .gititgnore
git add .
git commit -m "removed"
git push
*/

/* if any of these cookies exist (meaning user has given consent) then the banner will not pop up */
if (document.cookie.includes("FYI_Name_Check")) {
  cookieBox.classList.remove("show");
}

if (document.cookie.includes("FYI_Example_Cookie"))
{
  cookieBox.classList.remove("show");
}

const cookieBox = document.querySelector(".wrapper-cookie");
const buttons = document.querySelectorAll(".button-cookie");


const executeCodes = () => {
// Check if cookie contains FYI name check cookie once the website is active
if (document.cookie.includes("FYI_Name_Check")) {
cookieBox.classList.remove("show");
} 
else 
{
cookieBox.classList.add("show");
}
// checks if fyi example cookie exists 
if (document.cookie.includes("FYI_Example_Cookie"))
{
  cookieBox.classList.remove("show");
}
else
{
  cookieBox.classList.add("show");
}


buttons.forEach((button) => {
button.addEventListener("click", () => {
cookieBox.classList.remove("show");


if (button.id == "acceptBtn-cookie") {
  // Set the cookie to expire at the end of the session
  document.cookie = "cookieBy=FYI_Name_Check; expires=0";
  document.cookie = "cookieBy=FYI_Example_Cookie; expires= 0";
  // document.cookie = "cookieBy=userName; expires= 0";
  // Get the user's name and store it in a cookie
  const name = prompt("Please enter your name:");
  document.cookie = "userName=${name}; expires=0";
} 

else {
  // Delete the cookies because this date has already passed 
  document.cookie = "cookieBy=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
  document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";

/* these cookies are google analytic cookies and they are set to false/null to not track this data */
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

gat('set', 'anonymizeIp', true);
gat('set', 'displayFeaturesTask', null);
gat('set', 'useAmpClientId', null);
gat('set', 'allowAdFeatures', false);
gat('set', 'allowLinker', false);

gtag('set', 'anonymizeIp', true);
gtag('set', 'displayFeaturesTask', null);
gtag('set', 'useAmpClientId', null);
gtag('set', 'allowAdFeatures', false);
gtag('set', 'allowLinker', false);

JAR('set', 'anonymizeIp', true);
JAR('set', 'displayFeaturesTask', null);
JAR('set', 'useAmpClientId', null);
JAR('set', 'allowAdFeatures', false);
JAR('set', 'allowLinker', false);

cf('set', 'anonymizeIp', true);
cf('set', 'displayFeaturesTask', null);
cf('set', 'useAmpClientId', null);
cf('set', 'allowAdFeatures', false);
cf('set', 'allowLinker', false);
/* _ga, _gid, _gat, _gat_gtag, 1P_JAR __cf_bm */

document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gtag=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gat; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "__cf_bm; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "JAR; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure";
/* google fonts, google analytics, gtag manager, google ads */

}
});
});
};


function deleteCookies() {
    var theCookies = document.cookie.split(';');
    for (var i = 0 ; i < theCookies.length; i++) {
        document.cookie = theCookies[i].split('=')[0] + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 PST; secure;";
    }
}


deleteCookies();
document.cookie = "_ga=; expires= Wed, 19 April 2023 2:59 UTC; path=/; secure";
document.cookie = "ga; expires= Wed, 19 April 2023 2:59 UTC; path=/; secure";
document.cookie = "_ga; expires= Wed, 19 April 2023 2:59 UTC; path=/; secure";

document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "_gat=; expires=Thu, 01 Jan 2000 00:00::00 UTC; path=/;";

window.addEventListener("load", executeCodes);



/* 
In this code, the executeCodes function now checks if the FYI cookie is present. 
If it is, then the consent box is hidden. If it's not, the consent box is displayed.
When the "Accept" button is clicked, the FYI
cookie is set to expire at the end of the session. 
When the "Decline" button is clicked then none of the cookies created by the site should be stored unless 
they are 'essential; for the site to function 
*/