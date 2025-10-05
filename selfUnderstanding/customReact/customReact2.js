function myCustomReander(reactElement,myContainer){
    const mydomElement = document.createElement(reactElement.mytype);
    mydomElement.innerHTML = reactElement.mychildren;
    mydomElement.setAttribute('href', reactElement.myprops.myhref);
    mydomElement.setAttribute('target', reactElement.myprops.mytarget);

    myContainer.appendChild(mydomElement);
}

const reactElement = {
    mytype: "a",
    myprops: {
        myhref: "https://www.linkedin.com/in/sa-hil-murtuza/",
        mytarget: "_blank",
    },
    mychildren: "Click here to again visit my linkedin profile"
}
const mymainContainer = document.getElementById("root");

myCustomReander(reactElement, mymainContainer);