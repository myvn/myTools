let arr = [
  { name: "rose", age: 33 },
  { name: "jack", age: 33 }
];
let aaaa = arr.find(item => {
  return item.name === "rose";
});
console.log(aaaa);
console.log(aaaa);


function setGrayscale(num = 100, domId) {
  let html_box = document.getElementById(`${domId ?? "app"}`);
  if (html_box) {
    html_box.style.filter = `grayscale(${num}%)`;
  } else {
    console.log(`没有id为${domId}的dom对象`);
  }
}
