

const GITHUB_API_URL = "https:/api.github.com/users?per_page=100"
const fetchGithubUsers = async() => {
    let users;
    try {
        const githubData = await fetch(GITHUB_API_URL);
        users = await githubData.json();
        // console.log("Users fetched from github", users);
    } catch (error) {
        console.log("Error in fetching the github data",error);
    }
    // console.log(users);
    const container = document.querySelector('#top')
    users.forEach(user => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<img src = ${user.avatar_url}></img>
                            <h1>Name: ${user.login}</h1>
                            <a href = ${user.html_url}>HTML URL</a>`
        container.appendChild(card)
    })
}

//api data structure
// avatar_url
// : 
// "https://avatars.githubusercontent.com/u/1?v=4"
// events_url
// : 
// "https://api.github.com/users/mojombo/events{/privacy}"
// followers_url
// : 
// "https://api.github.com/users/mojombo/followers"
// following_url
// : 
// "https://api.github.com/users/mojombo/following{/other_user}"
// gists_url
// : 
// "https://api.github.com/users/mojombo/gists{/gist_id}"
// gravatar_id
// : 
// ""
// html_url
// : 
// "https://github.com/mojombo"
// id
// : 
// 1
// login
// : 
// "mojombo"
// node_id
// : 
// "MDQ6VXNlcjE="
// organizations_url
// : 
// "https://api.github.com/users/mojombo/orgs"
// received_events_url
// : 
// "https://api.github.com/users/mojombo/received_events"
// repos_url
// : 
// "https://api.github.com/users/mojombo/repos"
// site_admin
// : 
// false
// starred_url
// : 
// "https://api.github.com/users/mojombo/starred{/owner}{/repo}"
// subscriptions_url
// : 
// "https://api.github.com/users/mojombo/subscriptions"
// type
// : 
// "User"
// url
// : 
// "https://api.github.com/users/mojombo"
// user_view_type
// : 
// "public"