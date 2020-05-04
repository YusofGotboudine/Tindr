var React = require("react");

class Index extends React.Component {
    render() {
        console.log("Tindr Index Page");
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
                        <button className='choiceButtons'><a href="/login">Login</a></button>
                        <button className='choiceButtons'><a href="/register">Register</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;
