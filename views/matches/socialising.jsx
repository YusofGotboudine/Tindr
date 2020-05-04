var React = require("react");

class Socialising extends React.Component {
    render() {
        console.log("Socialised Page");
        console.log("===================");
        let matchCheck = this.props.rows.length;
        let output;
        console.log(matchCheck);
        if (matchCheck > 0) {
            output = <h3 id='displayBox'>It's a Match!</h3>
        } else {
            output = <h3 id='displayBox'>Requested to socialise!</h3>
        }

        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <div>
                        {output}
                    </div>
                    <div id='options'>
                        <button className='choiceButtons'><a href="/socialise">Continue</a></button>
                        <button className='choiceButtons'><a href="/home">Back to Home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Socialising;
