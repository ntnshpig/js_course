for (let i = 0; i <= 100; i++){
    if(i%3 === 0){
        console.log(i)
    }
}

let user_age = +prompt("How old are you?")
for (let i = 1; i <= user_age; i++){
    console.log(`Congratulation! ${i}`)
}

let user_nickname = prompt("What is your nickname?")
if(user_nickname === "admin") {
    console.log("This user is admin")
} else if (user_nickname === "Nikolay") {
    console.log("Hello, director!")
} else {
    console.log("Hello!")
}