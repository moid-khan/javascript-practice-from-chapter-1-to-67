// 2. Suppose in your webpage there is content area in which you have entered your item details,
// but user can only see some details on first look.
// When user clicks on “Read more” button, full detail of that particular item will be displayed.

var para =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo deleniti unde cumque nisi facere hic.Libero id quos tenetur blanditiis, error harum, explicabo, rerum itaque nostrum quae nesciunt voluptatem";

function fullPara() {
  var p = document.getElementById("para");
  p.innerHTML = para;
}
