"use strict";
let paragraphs = document.body.querySelectorAll('p');
paragraphs.forEach((pararaph, index) => {
    pararaph.innerText = `kandidat ${index+1}`;
});
