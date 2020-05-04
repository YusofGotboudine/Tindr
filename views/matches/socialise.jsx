var React = require("react");

class Socialise extends React.Component {
    render() {
        console.log("Socialise Page");
        console.log("===================");
        // console.log("Socialise with " + this.props.name + "?")

        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <div>
                        <h3 id='profileName'>{this.props.name}</h3>
                        <h3 id='profileDesc'>{this.props.description}</h3>
                    </div>
                    <div id='options'>
                        <button className='choiceButtons'><a href="/socialising">Yes</a></button>
                        <button className='choiceButtons'><a href="/socialise">No</a></button>
                    </div>
                    <div id='option'>
                        <button className='choiceButtons'><a href="/home">Back to home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Socialise;
