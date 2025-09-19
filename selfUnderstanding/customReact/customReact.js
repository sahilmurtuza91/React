
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    for (const prop in reactElement.props) {
        if(prop==="children")continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement={
    type:"a",
    props:{
        href:"https://www.linkedin.com/in/sahil-murtuza/",
        target:"_blank",
    },
    Children:"Click here to visit my linkedin page"
}

const mainConatiner=document.getElementById('root');
customRender(reactElement,mainConatiner);
