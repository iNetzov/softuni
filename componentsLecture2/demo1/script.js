


const rootEl = document.querySelector('#root');

const rootReactEl = ReactDOM.createRoot(rootEl);

// This is react element
const headerReactElement = React.createElement('h1', null, 'Hello World');





// This is react component
//Functional component is function that returns React Element
function HeaderWithReactElement() {
    const headerEl = React.createElement('h1', null, 'Hello World');
    const subHeader = React.createElement('h2', null, "hello Workd2");
    const divReactEl = React.createElement('div', null, headerEl, subHeader);
    return divReactEl;
}
// NOTE: function HeaderWithReactElement will return the following:
// <div>
//     <h1></h1>
//     <h2></h2>
// </div>

//returning React fragment
function HeaderWithReactFragment() {
    const headerEl = React.createElement('h1', null, 'Hello World Fragment');
    const subHeader = React.createElement('h2', null, "hello Workd2     fragment" );
    const reactFragment = React.createElement(React.Fragment, {}, headerEl, subHeader);
    return reactFragment;
}


//PICK ONE OF THEM
rootReactEl.render(React.createElement(HeaderWithReactFragment));
rootReactEl.render(React.createElement(HeaderWithReactFragment));
//PICK ONE OF THEM
