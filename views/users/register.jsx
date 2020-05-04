var React = require("react");

class Register extends React.Component {
    render() {
        console.log("Tindr Registration");
        console.log("===================");
        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <h1 id='displayBox'>Tindr Registration</h1>
                    <div id='options'>
                        <form action="/registered" method="POST">
                            <p>
                                Name <input name="name" />
                            </p>
                            <p>
                                Password <input type="password" name="password" />
                            </p>
                            <p>
                                Email <input name="email" />
                            </p>
                            <p>
                                Description <input name="description" />
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

module.exports = Register;
