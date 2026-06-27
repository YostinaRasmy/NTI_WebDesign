var courses = ["html","css","js"]
var user = prompt("what courses do you need? ")
if(courses.includes(user)){
    alert("course found , thank you")
}
else{
    alert("sorry not found")
    courses.push(user)
}
console.log(courses)