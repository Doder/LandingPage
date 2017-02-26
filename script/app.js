class TopNav extends React.Component{
    render(){
        return(        
            <div className="have-margins" id="topnav">
                
                <ul className="topnav">
                    <li><img src="./images/logo.png" width="50px" height="50px"/></li>
                    <li className="divided"><a href="#">Home</a></li>
                    <li className="divided"><a href="#">About</a></li>
                    <li className="divided"><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
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
                 <div id="form" className="have-margins">
                     <h1>Sign up</h1>
                    <form>
                        <label>Username:</label><br/>
                            <input type="text"/>
                        <br/>
                        <label>Email:</label><br/>
                            <input type="text"/>
                        <br/>
                        <label>Password:</label><br/>
                            <input type="password"/><br/>
                        <input type="submit" value="submit"/>
                    </form>
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