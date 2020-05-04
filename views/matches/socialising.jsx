var React = require("react");

class Socialising extends React.Component {
    render() {
        console.log("Socialised Page");
        console.log("===================");
        let matchCheck = this.props.rows.length;
        let output;
        console.log(matchCheck);
        if (matchCheck > 0) {
            output = <p>It's a Match!</p>
        } else {
            output = <p>Requested to socialise!</p>
        }

        return (
            <html>
                <head />
                <body>
                    <h1>Tindr.</h1>
                    <div>
                        {output}
                    </div>
                    <div>
                        <button><a href="/socialise">Continue</a></button>
                        <button><a href="/home">Back to Home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Socialising;
