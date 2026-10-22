// const pizza = new Promise((resolve,reject)=>{
//   const delivered = Math.random()>0.5? true: false;

//   if(delivered){
//     resolve("Pizza delivered!");
//   }else{
//     reject("Pizza not delivered!");
//   }
// })

// pizza.then(response=>{
//   console.log(response);
// }).catch(e=>{
//   console.log(e)
// })

//fetch

// const img=fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
//   .then((result) => {
//     const data = result.json();
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//     return data.map((el)=>{
//       let image = document.createElement("img")
//       image.src = el.url
//       image.height = 100
//       image.width = 100
//       document.body.appendChild(image)
//     })
//   })
//   .catch((e) => {
//     console.log(error);
//   });

// const div = document.createElement("div")
// setTimeout(() => {
//   img.map((el)=>{
//   let image = document.createElement("img")
//   image.src = el.url
//   image.height = 100
//   image.width = 100
//   document.body.appendChild(img)
// })
// }, 2000);

// document.body.appendChild(div)

//async/await

async function getImage() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=20",
    );
    // console.log(response)
    const data = await response.json();
    data.map((el) => {
      let image = document.createElement("img");
      image.src = el.url;
      image.height = 100;
      image.width = 100;
      document.body.appendChild(image);
    });
  } catch (error) {
    console.log("Couldn't fetch the data");
  }
}

getImage();
