class TopNav extends React.Component{
    render(){
        return(        
            <div id="topnav">
                <div className="have-margins">
                <ul className="topnav">
                    <li><img src="./images/logo.png" width="50px" height="50px"/></li>
                    <li className="divided"><a href="#">Home</a></li>
                    <li className="divided"><a href="#">About</a></li>
                    <li className="divided"><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                </div>
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

class Text extends React.Component{
    render(){
        return(
            <div id="text-columns">
                <div className="have-margins">
                <h1>Header</h1>
                
                <div className="text-column">
                    <h2>Title 1</h2>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Maecenas interdum tortor non libero lacinia, sollicitudin scelerisque nibh 
                    commodo. 
                     </div>
                </div>
                
                <div className="text-column">
                        <h2>Title 2</h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas interdum tortor non libero lacinia, sollicitudin scelerisque nibh 
                        commodo. Nullam metus ero
                     </div>
                </div>
                
                <div className="text-column">
                        <h2>Title 3</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas interdum tortor n
                     </div>
                </div>
                </div>
            </div>
        );
    }
}

class Gallery extends React.Component{
    render(){
        return(
            <div id="gallery">
                <div className="have-margins">
                <div id="img1"></div>
                <div id="img2"></div>
                <div id="img3"></div>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <div className="have-margins" >
                <ul>
                    <li>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor non libero 
                            lacinia, sollicitudin scelerisque nibh 
                            commodo. Nullam metus eros, ullamcorper a leo quis, 
                            tempor varius felis.</p>
                    </li>
                    
                    <li>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor non libero 
                            lacinia, sollicitudin scelerisque nibh 
                            commodo. Nullam metus eros, ullamcorper a leo quis, 
                            tempor varius felis.</p>
                    </li>
                    
                    <li>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor non libero 
                            lacinia, sollicitudin scelerisque nibh 
                            commodo. Nullam metus eros, ullamcorper a leo quis, 
                            tempor varius felis.</p>
                    </li>
                    
                    <li>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor non libero 
                            lacinia, sollicitudin scelerisque nibh 
                            commodo. Nullam metus eros, ullamcorper a leo quis, 
                            tempor varius felis.</p>
                    </li>
                </ul>
                </div>
                <div>
                    <p>Aleksa Doderovic ©2017</p>
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
            <Text/>
            <Gallery/>
            <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById("main")
);