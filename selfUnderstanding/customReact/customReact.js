
function coustomRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for(props in reactElement.props){
        if(props == 'childeren') continue;
        domElement.setAttribute(props, reactElement.props[props]);
        container.appendChild(domElement);
    }
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.linkedin.com/in/sahil-murtuza/",
        target: "_blank",
    },
    Children: "Click here to visit my linkedin profile"
}

const mainContainer = document.getElementById("root");


coustomRender(reactElement, mainContainer);