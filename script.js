
let loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
  // Create an h1 element and set its innerHTML
  let h1Element = document.createElement("h1");
  h1Element.innerHTML = "script loaded with src: " + value;
  
  // Append the h1 element to the body
  document.body.appendChild(h1Element);
 
}).catch((error) => {
  console.log("pintu");
   console.log("script failed with " + error );
});
