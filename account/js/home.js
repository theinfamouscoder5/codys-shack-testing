console.log(`
    /////    |||||||||||    /////    |||||    !
   |             | |       |     |   |   |    !
   |             | |       |     |   |   |    !
   |  ///        | |       |     |   |||||    !
         |       | |       |     |   |        !
   | /////       |||        /////   |        !

   Keep your account safe! Do not send any information from
   here to anyone or paste any text here.

   If someone is asking you to copy or paste text here, then
   you're giving someone access to your account, memberships,
   games, and more.`);

// Variables

const urlParams = new URLSearchParams(window.location.search);
let nextURL = urlParams.get('nexturl');
let authTitle = document.getElementById('auth-title');
let authBox = document.getElementById('auth-box')

// Inserting fetched HTML, depending on if the user is logged in or not

if (localStorage.getItem('username') !== null && localStorage.getItem('userid') !== null && nextURL !== null) {
    let username = localStorage.getItem('username');
    let userid = localStorage.getItem('userid');
    if (username !== null && userid !== null){
       authTitle.innerHTML = 'Choose an Account';
        
        fetch('auth-pages/select-account.html')
        .then((res)=>{
            if(res.ok){
            return(res.text());
            }else{
            console.error(`home.js: Fetch error ${res.status}`);
            }
        })
        .then((text)=>{
            authBox.innerHTML = text;
            document.getElementById('account-name').innerHTML = username;
            document.getElementById('account-box-button').setAttribute('onclick', 'window.location = "'+nextURL+'";')
        })
        .catch((err)=>{
            console.error(err.stack);
        })
    }
}

setTimeout(() => {
    authTitle.innerHTML = 'Something Went Wrong';

    fetch('auth-pages/authtoken-expired.html')
    .then((res)=>{
        if(res.ok){
        return(res.text());
        }else{
        console.error(`home.js: Fetch error ${res.status}`);
        }
    })
    .then((text)=>{
        authBox.innerHTML = text;
        document.getElementById('account-name').innerHTML = username;
        document.getElementById('account-box-button').setAttribute('onclick', 'window.location = "'+nextURL+'";')
    })
    .catch((err)=>{
        console.error(err.stack);
    })
}, "5000");