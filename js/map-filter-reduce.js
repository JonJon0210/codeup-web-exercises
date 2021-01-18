"use strict";

$(document).ready(function() {


    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    const langFil = users.filter(user => user.languages.length >= 3)
    console.log(langFil)

    const email = users.map(user => user.email)
    console.log(email)

    const experience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    console.log(experience + " total years experience, average " + (experience/users.length) + " years experience" +
        " per user");

    const longestEmailUser = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0]);
    console.log(longestEmailUser.name + " Has the longest email address, with: " + longestEmailUser.email);





})