// TODO: add code here
window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then((response) => { 
        response.json().then((astronauts) => {
            console.log(astronauts);
            let bios = '';
            const container = document.getElementById("container");
            for (person of astronauts) {
                bios += `
                    <div class ="astronaut">
                        <div class = "bio">
                            <h3>${person.firstName} ${person.lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${person.hoursInSpace}</li>
                                <li>Active: ${person.active}</li>
                                <li>Skills: ${person.skills.join(", ")}</li>
                            </ul>
                        </div>  
                        <img class = "avatar" src = ${person.picture}>  
                    </div>
                    `;
            container.innerHTML = bios;
            };
        });  
    });
});