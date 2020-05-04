var React = require("react");

class Login extends React.Component {
    render() {
        console.log("Tindr Login Page");
        console.log("===================");
        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <h1 id='displayBox'>Tindr Login</h1>
                    <div id='options'>
                        <form action="/loggedin" method="POST">
                            <p>
                                Email <input name="email" />
                            </p>
                            <p>
                                Password <input type="password" name="password" />
                            </p>
                            <p>
                                <input type="submit" />
                            </p>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Login;
