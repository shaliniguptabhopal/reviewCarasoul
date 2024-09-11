let review = [
  {
    id:"review1",
    fullName: "Raj",
    designation: "Web developer",
    img: "./image/first.jpg",
    massage: "I’ve noticed how clearly you communicate complex concepts to clients. I really admire this ability.",
  },
  {
    id:"review2",
    fullName: "sejal",
    designation: "Full stack Developer",
    img: "./image/img2.jfif",
    massage: "Jane has consistently exceeded the sales targets set for the past four quarters, demonstrating exceptional skill and tenacity in her role. Her ability to generate leads and convert them into sales far exceeds our initial expectations. Not only does Jane excel in her personal performance",
  },
  {
    id:"review3",
    fullName: "Mark",
    designation: "Graphic Designer",
    img: "./image/img1.webp",
    massage: "Susan consistently acknowledges the efforts and achievements of her team members, fostering a positive and motivated work environment. Her exceptional ability to recognize and appreciate the contributions of others has not only boosted team morale but also increased productivity levels.",
  },
  {
    id:"review4",
    fullName: "John",
    designation: "BDM",
    img: "./image/last.jpg",
    massage: "Despite his technical expertise, Robert tends to work independently and misses out on the benefits of teamwork and collaboration.",
  }
];
let reviewImg = document.getElementById("review-img");
let reviewName = document.getElementById("review-name");
let reviewJob = document.getElementById("review-job");
let reviewMsg = document.getElementById("review-msg");

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let random = document.querySelector("#random");

let current = 0;

window.addEventListener("DOMContentLoaded",function(){
  show()
  console.log("hello")
})
const show=()=>{
  const item = review[current];
  reviewImg.src =  item.img;
  reviewName.textContent = item.fullName;
  reviewJob.textContent = item.designation;
  reviewMsg.textContent = item.massage

}
next.addEventListener("click",function(){
  current++
  if(current > review.length-1){
    current=0;
  }
  show()
})
prev.addEventListener("click",function(){
  current--
  if(current < 0){
    current=review.length-1;
  }
  show()
})
random.addEventListener("click",function(){
  current=Math.floor(Math.random()*review.length)
  show()
})