class TopNav extends React.Component{
    render(){
        return(
            <div>
                <ul className="topnav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    }
}


class Page extends React.Component{
    render(){
        return(
            <div>
            <TopNav/>
            <div>
             <h1>Hello React!</h1>
            </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Page/>,
    document.getElementById("main")
);