let kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.2,
  names: ["x", "y"],
});

// select circle element
const circle = document.getElementById("circle");

// set handler on kinet tick event
kinet.on("tick", function (instances) {
  circle.style.transform = `translate3d(${instances.x.current}px, ${
    instances.y.current
  }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
    instances.y.velocity / 2
  }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener("mousemove", function (event) {
  kinet.animate("x", event.clientX - window.innerWidth / 2);
  kinet.animate("y", event.clientY - window.innerHeight / 2);
});

// log
kinet.on("start", function () {
  console.log("start");
});

kinet.on("end", function () {
  console.log("end");
});



//for hover sound
let specifics = document.querySelectorAll(".skills_list");

let audios = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"];

for(i = 0; i < specifics.length; i++){
	let specific = specifics[i];
  
  let audio = document.createElement("audio");
  audio.src = audios[i];
  document.body.appendChild(audio);

  specific.onmouseover = () => {
    audio.play();
  }
  specific.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
  }
}


// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let username = document.getElementById("name");
//   let password = document.getElementById("email");
//   let message = document.getElementById("message");

//   console.log(username, password, message);

//   if (username.value == "" || password.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a username of ${username.value} and password of ${password.value}`
//     );

//     username.value = "";
//     password.value = "";
//   }
// });

const submitForm = (e) => {
  e.preventDefault();
  console.log("dddddddd")
}