var React = require("react");

class Home extends React.Component {
    render() {
        console.log("Tindr Home Page");
        console.log("===================");

        return (
            <html>
                <head />
                <body>
                    <h1>Tindr.</h1>
                    <div>
                        <button><a href="/profile">My Profile</a></button>
                        <button><a href="/socialise">Socialise</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;
