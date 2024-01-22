// ReactDom.render(<p>Hello World From react</p>, document.getElementById("root"));

// ReactDom.render(
//     <div>
//         <h1>React Course</h1>
//         <p>We will learn reat in this course </p>
//     </div>
// , document.getElementById("root"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>React Course</h1>
        <p>We will learn react in this course</p>
    </div>
)