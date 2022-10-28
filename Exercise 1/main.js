
// Iteration 1

let hacker1 = "Pacoh"

console.log("The driver's name is ", hacker1,);

let hacker2 = "Otto"

console.log("The navigator's name is", hacker2);

// Iteration 2

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length, "characters.")
}

else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.")
}

else {
    console.log("wow, you both have equally long names, ", hacker1.length, "characters");
}

// Iteration 3

console.log(hacker1.toUpperCase().split('').join(" "));

console.log(hacker2.split("").reverse().join(""));

const lexicographic = [hacker1, hacker2]

if (hacker1.localeCompare(hacker2) <= -1) {
    console.log("The driver's name goes firts");
}
else if (hacker1.localeCompare(hacker2) >= 1) {
    console.log("Yo, the navigator goes firts definitely");
}
else {
    console.log('What?! you both have the same name');
}

// Bonus 1

const p = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta maxime quia optio reiciendis mollitia, illo consectetur ratione cumque neque dolorum aspernatur ex nulla architecto eaque velit similique temporibus officiis tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis, alias perferendis odio consequuntur vel quod! Laborum libero dignissimos eligendi totam, corporis repellendus, accusantium ut nisi expedita nostrum ratione aliquid Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, nam, praesentium ut culpa placeat quas aut nemo similique ad dolore vel voluptate, quae tempore facilis architecto reprehenderit atque molestias eos."

console.log(p.length)



