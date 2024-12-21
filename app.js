var identity = 'Vence Uchiha';
var career = 'Shinobi';
var description = 'A Sharingan user'
const interests = ['Learning Uchiha history', 'Shurikens', 'Using Genjutsu', 'Training'];

console.log('Name: ' + identity.toUpperCase());
console.log('Career: ' + career);
console.log('Description: ' + description);

console.log('');

console.log('My Interests:');
for (i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i]);
}

console.log('');

var companyName = 'Konoha';
var jobTitle = 'S-Rank Jonin'
var jobDescription = 'As an elite shinobi, I serve as military captains and expertise in at least two types of elemental chakra. I often get assigned A or S-rank missions.'

console.log('My Previous Experience:');
displayPosition(companyName, jobTitle, jobDescription);

console.log('');

console.log('My Skills:');

var skillName = 'Swordsmanship';
var isCool = true;

displaySkill(skillName, true);


function displayPosition(companyName, jobTitle, jobDescription) {
    console.log('* ' + companyName);
    console.log('* ' + jobTitle);
    console.log('* ' + jobDescription);
}

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log('* BAM: ' + skillName);
    } else {
        console.log('* ' + skillName);
    }

}