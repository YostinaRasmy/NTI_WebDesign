const users = [];
let addMore = true;

function addUser(){
    while (addMore) {
        const name = prompt("Enter user name:");
        const id = Number(prompt("Enter user id:"));
        const balance = Number(prompt("Enter balance:"));

        let idExists =false

        for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            idExists =true
            alert("enter new id")
            users.pop({
                name,
                id,
                balance,
            })
            return;
        }
        }
    users.push({
        name: name,
        id: id,
        balance: balance
    });
    
        addMore = prompt("Do you want to add another user?");
    }
}
let p = addUser()
console.log(users);



function withdraw(){
    const id = Number(prompt("Enter your id:"));

    let idExists = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            idExists =true;
            const money= Number(prompt("enter money you want to take:"))

            if(users[i].balance < money){
                alert("you don't have enough money :(")
                return;
            }

            users[i].balance = users[i].balance - money;
            alert("your new balance is:" + users[i].balance);
            console.log(users);
            return;
        }
    }
    if(!idExists){
        alert("not found");
    }

}

console.log(users);
let g = withdraw()



function transfer(){
    const senderid = Number(prompt("Enter sender id:"));
    const receiverid = Number(prompt("Enter receiver id:"));
    const money= Number(prompt("enter money you want to send:"))


    let sender= null;
    let receiver= null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === senderid ){
            sender = users[i];
        }
        if(users[i].id === receiverid){
            receiver = users[i];
        }
    }
    if(!sender || !receiver){
        alert("not found :( ")
        return
    }
    if (sender.balance < money) {
        alert("you don't have enough money :(");
        return;
    }
    sender.balance = sender.balance - money;
    receiver.balance = receiver.balance + money;

    alert(sender.name + " balance is " + sender.balance);
    alert(receiver.name + " balance is " + receiver.balance);
    // console.log(users);
}

console.log(users);
let t = transfer()

function deleteUser(){
    const id = Number(prompt("Enter user id:"));
    let idExists = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            idExists =true;
            alert("goodbye "+ users[i].name)
            users.splice(i,1);
        }
    }
}

console.log(users);

let d = deleteUser()