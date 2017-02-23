class TopNav extends React.Component{
    render(){
        return(
            <div className="have-margins" id="topnav">
                <ul className="topnav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    }
}

class SingnUp extends React.Component{
    render(){
        return(
            <div id="signup">
                <div id="text" className="have-margins">
                    <h1>Hello There!</h1>
                    <p>This is landing page I created using React.</p>
                    <p>Sign up for more free content.</p>
                    
                 </div>
            </div>
        );
    }
}


class Page extends React.Component{
    render(){
        return(
            <div>
            <TopNav/>
            <SingnUp/>
            </div>
        );
    }
}
ReactDOM.render(
    <Page/>,
    document.getElementById("main")
);