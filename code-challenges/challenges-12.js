'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
    // write your code here
    return (arr.filter((arr) => arr % 2 !== 0));
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// optional:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// let filterArray;
const cvsFiltration = (arr) => {
    // write your code here
    let filterArray=arr.filter(n =>{
        return filterArray.yearsOfExperience>4 && filterArray.tech ==="JS";}).map(filterArray=>{
            return {fullName :`${filterArray.firstName} ${filterArray.LastName}`, tech:filterArray.tech }
        })

    // for (let i = 0; i < arr.length; i++) {
        // if (arr[i].yearsOfExperience > 4) {
//const filteredData = cvData.filter(item => item.confidence > 0.8);
        //    const filtrcv= applicantArray.filter(item => item.yearsOfExperience >4);

    //         if (arr[i].firstName == null) {
    //             fullName = arr[i].lastName;
    //             //just print lastName
    //             console.log("firstNameNull");
    //         } else if (arr[i].lastName == null) {
    //             fullName = arr[i].firstName;//just print firstName
    //             console.log("lastNameNull");
    //         } else {
    //             // Do the concatination for fullName
    //             fullName = arr[i].firstName + " " + arr[i].lastName;
    //             //fullName = `${arr[i].firstName} ${arr[i].lastName}`;
    //             console.log("fullName");
    //         }
    //         let tech = arr[i].tech;
    //         let object = {
    //             "fullName": fullName,
    //             "tech": tech

    //         };
    //         applicantArray.push(object,applicantArray.filter(arr[i].yearsOfExperience >4));
    //     }
    // }
    
    return  filterArray;  
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// optional:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

const skillComparison = (arr1, arr2) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

