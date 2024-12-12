let releaseContainer = document.getElementById("release-content");
if(releaseContainer!==""&&releaseContainer!==null&&releaseContainer!==undefined){
    
    fetch('../../codys-shack/releases/current.txt')
      .then(response => response.text())
      .then(content => {
        const releaseId = content.trim(); // get the ID from the file
        fetch(`../../codys-shack/releases/${releaseId}.html`) // append ".html" to the ID
          .then((res)=>{
            if(res.ok){
              return(res.text());
            }else{
              console.error(`navbar.js: Fetch error ${res.status}`);
            }
          })
          .then((text)=>{
            releaseContainer.innerHTML = text;
          })
          .catch((err)=>{
            console.error(err.stack);
          })
      })
    // releaseContainer.innerHTML=""
}else{
    console.error("navbar.js: No releaseContainer element");
}