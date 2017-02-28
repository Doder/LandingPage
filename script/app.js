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

class Text extends React.Component{
    render(){
        return(
            <div className="have-margins" id="text-columns">
                <div>
                <h1>Header</h1>
                
                <div className="text-column">
                    <h2>Title 1</h2>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Maecenas interdum tortor non libero lacinia, sollicitudin scelerisque nibh 
                    commodo. Nullam metus eros, ullamcorper a leo quis, tempor varius felis. 
                    Fusce varius dui elit, ac pulvinar leo aliquam vitae. Quisque ut nulla vel mi 
                    commodo gravida ac bibendum quam. Donec lobortis ipsum in velit tempor, ac molestie 
                    enim gravida. Aliquam placerat neque eget placerat imperdiet. Nulla auctor quis risus
                     ut elementum. 
                     </div>
                </div>
                
                <div className="text-column">
                        <h2>Title 2</h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas interdum tortor non libero lacinia, sollicitudin scelerisque nibh 
                        commodo. Nullam metus eros, ullamcorper a leo quis, tempor varius felis. 
                        Fusce varius dui elit, ac pulvinar leo aliquam vitae. Quisque ut nulla vel mi 
                        commodo gravida ac bibendum quam. Donec lobortis ipsum in velit tempor, ac molestie 
                        enim gravida. Aliquam placerat neque eget placerat imperdiet. Nulla auctor quis risus
                        ut elementum. 
                     </div>
                </div>
                
                <div className="text-column">
                        <h2>Title 3</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas interdum tortor non libero lacinia, sollicitudin scelerisque nibh 
                        commodo. Nullam metus eros, ullamcorper a leo quis, tempor varius felis. 
                        Fusce varius dui elit, ac pulvinar leo aliquam vitae. Quisque ut nulla vel mi 
                        commodo gravida ac bibendum quam. Donec lobortis ipsum in velit tempor, ac molestie 
                        enim gravida. Aliquam placerat neque eget placerat imperdiet. Nulla auctor quis risus
                        ut elementum. 
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

class Page extends React.Component{
    render(){
        return(
            <div>
            <TopNav/>
            <SingnUp/>
            <Text/>
            <Gallery/>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById("main")
);