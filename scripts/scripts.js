const itemElement = document.querySelector(".item1");

itemElement.addEventListener('mouseover', function(){
    const iconElement = document.querySelector(".icon");
    const imgElement = document.querySelector(".icon img");
    iconElement.setAttribute("class", "changePosition");
    imgElement.setAttribute("class", "changeImgPosition");

})

itemElement.addEventListener('mouseout', function(){
    const iconElement = document.querySelector(".changePosition");
    const imgElement = document.querySelector(".changeImgPosition");
    iconElement.setAttribute("class", "icon");
    // imgElement.setAttribute("class", "icon");
})

const itemElement2 = document.querySelector(".item2");

itemElement2.addEventListener('mouseover', function(){
    const iconElement = document.querySelector(".icon2");
    const imgElement = document.querySelector(".icon2 img");
    iconElement.setAttribute("class", "changePosition");
    imgElement.setAttribute("class", "changeImgPosition");

});
itemElement2.addEventListener('mouseout', function(){
    const iconElement = document.querySelector(".changePosition");
    const imgElement = document.querySelector(".changeImgPosition");
    iconElement.setAttribute("class", "icon2");
    // imgElement.setAttribute("class", "icon");
});