const url = "https://api.github.com/users";
const searchInput=document.getElementById("input");
const searchButton=document.getElementById("button");
const searchProfile=document.getElementById("button1");
const profile=document.getElementById("profile");

const fetchProfile = async () => {
    const username = searchInput.value;
    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();
        if(data.bio)
        {
            profile.innerHTML=generate(data);
        }
        else{
            profile.innerHTML="No data Found";
        }
        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
};

const generate = (profile) =>{
    
    return (`<div class="profile">
    <div class="top">
        <div class="left">
            <div class="avatar">
                <img src="${profile.avatar_url}"/>
            </div>
            <div class="desc1">
                <h1>
                ${profile.name}
                </h1>
                <h2>
                ${profile.login}
                </h2>
            </div>
        </div>
        <div class="left">
        <a href="${profile.repos_url}"
            <button id="button1">Check Profile</button>
            </a>
        </div>
    </div>

    <div class="about">
        <h2>About</h2>
        <p>${profile.bio}</p>
    </div>

    <div class="status">
        <div class="status-item">
        <h3>Followers</h3>
        <p>${profile.followers}</p>
    </div>
    <div class="status-item">
        <h3>Following</h3>
        <p>${profile.following}</p>
    </div>
    <div class="status-item">
        <h3>Repositories</h3>
        <p>${profile.public_repos}</p>
    </div>
    </div>
</div>`)

}
searchButton.addEventListener("click" , fetchProfile);
