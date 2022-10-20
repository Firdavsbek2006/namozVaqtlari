// Selector
const $ = function(e){
    return document.querySelector(e);
}

// Select All
const $a = function(e){
    return document.querySelectorAll(e);
}

// Dynamic Element
const createElement = (tagName, className, content)=>{
    const newElement = document.createElement(tagName);
    newElement.setAttribute("class", className);
    newElement.innerHtml=content;

    return newElement;
}