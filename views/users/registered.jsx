var React = require("react");

class Registered extends React.Component {
    render() {
        console.log("New Registered User");
        console.log("===================");
        let user = this.props.name;
        console.log(user + " has registered.");

        return (
            <html>
                <head />
                <body>
                    <h1>Welcome to Tindr {user}!</h1>
                    <a href="/home" title="Go to tindr. homepage">Click Me!</a>
                </body>
            </html>
        );
    }
}

module.exports = Registered;
