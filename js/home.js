// Variables

const urlParams = new URLSearchParams(window.location.search);
let showAllMemberships = urlParams.get('showAllMemberships');


// Show certain memberships

if (showAllMemberships !== true || showAllMemberships == !null || showAllMemberships !== undefined){
    if (showAllMemberships == 'false') {
        document.getElementById('regular-memberships').remove();
    }
}