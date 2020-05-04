var React = require("react");

class Registered extends React.Component {
    render() {
        console.log("New Registered User");
        console.log("===================");
        let user = this.props.name;
        console.log(user + " has registered.");

        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <h1 id='displayBox'>Welcome to Tindr {user}!</h1>
                    <div id='options'>
                        <button className='choiceButtons'><a href="/home" title="Go to tindr. homepage">Tindr Home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Registered;
