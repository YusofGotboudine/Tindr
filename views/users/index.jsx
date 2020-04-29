var React = require("react");

class Index extends React.Component {
    render() {
        console.log("Tindr Index Page");
        console.log("===================");

        return (
            <html>
                <head />
                <body>
                    <h1>Tindr.</h1>
                    <div>
                        <button><a href="/login">Login</a></button>
                        <button><a href="/register">Register</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;
