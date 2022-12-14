# JS_Promises

What is a Promise?

-> Promise is a placeholder that temporary holds a undefined while async task is performed once the task is completed the undefined is replaced by the result of the task.

-> It is an object representing eventual completion or failure of an asyncronous operation.

-> It helps us to get rid of callback hell and gives us more control over the code, we dont need to rely on other function.

-> The response of promise is immutable and it also makes the code more readable.

---

## Task 1

### API used - https://api.github.com/users/gavandivya

---

### Output of API

{
"login": "gavandivya",

"id": 49062060,

"node_id": "MDQ6VXNlcjQ5MDYyMDYw",

"avatar_url": "https://avatars.githubusercontent.com/u/49062060?v=4",

"gravatar_id": "",

"url": "https://api.github.com/users/gavandivya",

"html_url": "https://github.com/gavandivya",

"followers_url": "https://api.github.com/users/gavandivya/followers",

"following_url": "https://api.github.com/users/gavandivya/following{/other_user}",

"gists_url": "https://api.github.com/users/gavandivya/gists{/gist_id}",

"starred_url": "https://api.github.com/users/gavandivya/starred{/owner}{/repo}",

"subscriptions_url": "https://api.github.com/users/gavandivya/subscriptions",

"organizations_url": "https://api.github.com/users/gavandivya/orgs",

"repos_url": "https://api.github.com/users/gavandivya/repos",

"events_url": "https://api.github.com/users/gavandivya/events{/privacy}",

"received_events_url": "https://api.github.com/users/gavandivya/received_events",

"type": "User",

"site_admin": false,

"name": "Divya R. Gavandi",

"company": "IL",

"blog": "https://www.linkedin.com/in/divya-gavandi/",

"location": "Mumbai ",

"email": null,

"hireable": null,

"bio": "You didn't come this far only to come this far.",

"twitter_username": "gavandivya19",

"public_repos": 27,

"public_gists": 0,

"followers": 15,

"following": 30,

"created_at": "2019-03-29T09:47:14Z",

"updated_at": "2022-11-03T08:39:07Z"
}

You can use any API from the above URL provided.

---

## Code for Three States of Promises

const showPromise = fetch("https://api.github.com/users/gavandivya");

console.info(showPromise);

const showRejectedPromise = fetch("https://github.com/gavandivya"); //used just for rejecting purpose

showPromise.then(function () {

console.info(showPromise)
});

setTimeout(function () {

console.info(showPromise);

}, 6000);

setTimeout(function () {

console.info(showRejectedPromise);

}, 6000);

## Output

![](<https://github.com/gavandivya/JS_Promises/raw/main/promise(4).jpeg>)

---

![](<https://github.com/gavandivya/JS_Promises/raw/main/promise(5).jpeg>)

---

## Task 2 - Implementing our own promise by writing consumer and producer part

## Output of all the .then() when all the promises get resolved

![](<https://github.com/gavandivya/JS_Promises/raw/main/promise(3).jpeg>)

---

## Output of all the .catch() when all the promises get rejected

![](<https://github.com/gavandivya/JS_Promises/raw/main/promise(1).jpeg>)

---
