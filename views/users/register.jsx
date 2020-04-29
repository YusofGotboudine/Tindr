var React = require("react");

class Register extends React.Component {
    render() {
        console.log("Tindr Registration");
        console.log("===================");
        return (
            <html>
                <head />
                <body>
                    <h1>Tindr Registration</h1>
                    <div>
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
