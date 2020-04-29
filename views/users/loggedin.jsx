var React = require("react");

class Loggedin extends React.Component {
    render() {
        console.log("User Logged In");
        console.log("===================");
        let user = this.props.name;
        console.log(user + " has logged in")

        return (
            <html>
                <head />
                <body>
                    <h1>Welcome back to Tindr {user}!</h1>
                    <a href="/home" title="Go to tindr. homepage">Click Me!</a>
                </body>
            </html>
        );
    }
}

module.exports = Loggedin;
