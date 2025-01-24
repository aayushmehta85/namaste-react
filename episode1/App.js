// const heading = React.createElement('h1',{id:'heading'},"Welcome to the world of React");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement('div', { id: "child1" }, [
        React.createElement("h1", {}, "This is heading h1"), 
        React.createElement("h2", {}, "This is heading h2")
    ]),
    React.createElement('div', { id: "child2" }, [
        React.createElement("h1", {}, "This is heading h1"), 
        React.createElement("h2", {}, "This is heading h2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
