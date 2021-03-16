let container = document.getElementById('myDiv');
let imgTag = document.createElement("img");
imgTag.src = "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
imgTag.style.width = "150px";
container.appendChild(imgTag);


let header = document.createElement("h3");
// let headerText = document.createTextNode("Історія про степлер");
// // header.appendChild(headerText);                                             альтернатива
header.innerText = "Історія про степлер";
container.appendChild(header);


let article = document.createElement("p");
article.innerText = "Progressively create real-time initiatives whereas wireless alignments. Phosfluorescently aggregate best-of-breed process improvements through focused strategic theme areas. Proactively whiteboard value-added content after multimedia based niche markets. Uniquely e-enable customer directed web services whereas backend systems. Assertively grow client-centered paradigms before technically sound sources.\n" +
    "\n" +
    "Proactively fabricate future-proof alignments via distinctive vortals. Assertively productize exceptional \"outside the box\" thinking after highly efficient benefits. Compellingly incubate cross-media alignments and premier solutions. Credibly generate customer directed communities vis-a-vis alternative catalysts for change. Proactively supply turnkey methods of empowerment vis-a-vis granular markets.\n" +
    "\n" +
    "Dynamically expedite turnkey synergy before dynamic catalysts for change. Assertively scale team building relationships and distinctive services. Credibly strategize standardized deliverables and web-enabled growth strategies. Professionally empower cutting-edge action items with team building technologies. Synergistically incubate intuitive.";
container.appendChild(article);
