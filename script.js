"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month',
    },
        showAgeAndLangs: function (plan) {
            const {age} = plan;
            const {languages} = plan.skills;
            let str = `Мне ${age} и я вледею языками: `;

            languages.forEach(function(lang) {
                str += `${lang.toUpperCase()} `;
            });

            return console.log(str);

        } 
    };

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    let result = plan['skills']['exp'];
    return result;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
       let str ='';
       const {programmingLangs} = plan.skills;
       for(let key in programmingLangs) {
           str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
       } 
       return str;
}
console.log(showProgrammingLangs(personalPlanPeter));