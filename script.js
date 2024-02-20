const menu_items = (document.querySelectorAll("#menu button"));
const menu_items2 = (document.querySelectorAll("#menu1 button"));

const hideitems = document.querySelectorAll("#menu div")[0];
const hideitems2 = document.querySelectorAll("#menu1 div")[0];

menu_items.forEach(function (item) {
    item.addEventListener("mouseenter", displayit);
    item.addEventListener("mouseleave", disappear);
})

menu_items2.forEach(function (item) {
    item.addEventListener("mouseenter", displayit1);
    item.addEventListener("mouseleave", disappear1);
})

function displayit() {
    hideitems.classList.remove("invisible");
}

function disappear() {
    hideitems.classList.add("invisible");
}

function displayit1() {
    hideitems2.classList.remove("invisible");
}

function disappear1() {
    hideitems2.classList.add("invisible");
}