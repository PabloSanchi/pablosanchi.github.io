const $ = (name) => document.querySelector(name);
btn = $("#btn-doc");
doc = $("#doc");
notMobile = $("#notMobile");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (doc.style.display == "none") {
    doc.style.display = "block";
    doc.style.width = "100%";
    // doc.style.height = "100%";
    doc.style.maxHeight = "1250px";
    doc.style.padding = "2rem";
    btn.innerHTML = "Hide";
  } else {
    doc.style.display = "none";
    btn.innerHTML = "Show";
  }
});

// document.onscroll = function () {
//   var pos = getVerticalScrollPercentage(document.body);
//   // document.body.innerHTML = "<span>" + Math.round(pos) + "%<span>"
//   // console.log(pos);
// };

// function getVerticalScrollPercentage(elm) {
//   var p = elm.parentNode;
//   return (
//     ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
//   );
// }
