let createProfile = function(user){
    let newDiv = document.createElement('div');
    let profilePic = document.createElement('img');
    let ul = document.createElement('ul');
    let nameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    let sizeLi = document.createElement('li');
    let opisLi = document.createElement('li');
    

    let nameTxt = document.createTextNode(user.name);
    let emailTxt = document.createTextNode(user.email);
    let sizeTxt = document.createTextNode(user.size);
    let opisTxt = document.createTextNode(user.opis);

    profilePic.src = user.profilePicture;

    nameLi.appendChild(nameTxt);
    emailLi.appendChild(emailTxt);
    sizeLi.appendChild(sizeTxt);
    opisLi.appendChild(opisTxt)

    ul.appendChild(nameLi);
    ul.appendChild(emailLi);
    ul.appendChild(sizeLi);
    ul.appendChild(opisLi);
    
    newDiv.appendChild(profilePic);
    newDiv.appendChild(ul);

    newDiv.classList.toggle('user');
    //newDiv.className = "user"
    let content = document.getElementById('content');

    content.appendChild(newDiv);
}

let createElementsFromJson = function(users){
    for(let user of users){
        createProfile(user)
    }
}

fetch('users.json').then( (response)=>response.json()  )
                    .then( (users)=> createElementsFromJson(users) );
