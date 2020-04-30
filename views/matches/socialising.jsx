var React = require("react");

class Socialising extends React.Component {
    render() {
        console.log("Socialised Page");
        console.log("===================");
        console.log(this.props)

        return (
            <html>
                <head />
                <body>
                    <h1>Tindr.</h1>
                    <div>
                        <h2>Requested to Socialise!</h2>
                    </div>
                    {/* <div>
                        <button><a href="/socialising">Yes</a></button>
                        <button><a href="/socialise">No</a></button>
                    </div> */}
                </body>
            </html>
        );
    }
}

module.exports = Socialising;
