var React = require("react");

class Socialise extends React.Component {
    render() {
        console.log("Socialise Page");
        console.log("===================");
        // console.log("Socialise with " + this.props.name + "?")

        return (
            <html>
                <head />
                <body>
                    <h1>Tindr.</h1>
                    <div>
                        {/* <h2>Look At Me, I'm Socialising!</h2> */}
                        <h3>{this.props.name}</h3>
                        <h3>{this.props.description}</h3>
                    </div>
                    <div>
                        <button><a href="/socialising">Yes</a></button>
                        <button><a href="/socialise">No</a></button>
                    </div>
                    <div>
                        <button><a href="/home">Back to home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Socialise;
