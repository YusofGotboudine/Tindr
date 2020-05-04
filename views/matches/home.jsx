var React = require("react");

class Home extends React.Component {
    render() {
        console.log("Tindr Home Page");
        console.log("===================");

        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <div id='options'>
                        <button className='choiceButtons'><a href="/profile">My Profile</a></button>
                        <button className='choiceButtons'><a href="/socialise">Socialise</a></button>
                    </div>
                    <div id='option'>
                        <button className='choiceButtons'><a href="/index">Logout</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;
