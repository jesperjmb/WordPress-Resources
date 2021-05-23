//Add the following js snippet to remove the NitroPack footer and branding from any page
//Please only use this snippet for development/staging. While it can be used for a live site consider instead buying the NitroPack Pro version to support the developers.

document.addEventListener("DOMContentLoaded", function () {
    let divc = document.querySelectorAll('div[style]');
    for (let i = 0, len = divc.length; i < len; i++) {
        let actdisplay = window.getComputedStyle(divc[i], null).display;
        let actclear = window.getComputedStyle(divc[i], null).clear;

        if (actdisplay == 'block' && actclear == 'both') {
            divc[i].remove();
        }
    }
});
