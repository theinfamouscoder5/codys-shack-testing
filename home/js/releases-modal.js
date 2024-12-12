Modal.initElements();
  let myModal = new Modal({ element: document.querySelector('.myModal') });

function getCookieByName(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

function verifyRelease(){
    const currentId = document.getElementById('rel-id').innerHTML;
    const acceptedId = getCookieByName('releaseAcceptedId');
    
    if (acceptedId !== currentId){
        myModal.open();
    }
}

const myTimeout = setTimeout(verifyRelease, 500);