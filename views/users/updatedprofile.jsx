var React = require("react");

class Updatedprofile extends React.Component {
    render() {
        console.log("Updated Profile Page Accessed");
        console.log("===================");
        console.log(this.props)
        let name = this.props.name;
        let desc = this.props.description

        return (
            <html>
                <link rel="stylesheet" type="text/css" href="/style.css" />
                <head />
                <header>
                    <h1>Tindr.</h1>
                </header>
                <body>
                    <h1 id='displayBox'>Welcome to your updated profile page!</h1>
                    <div>
                        <h3 id='profileName'>{name}</h3>
                        <h3 id='profileDesc'>{desc}</h3>
                    </div>
                    <div id='options'>
                        <button className='choiceButtons'><a href="/editprofile">Edit Profile</a></button>
                        <button className='choiceButtons'><a href="/home" title="Go to tindr. homepage">Tindr. Home</a></button>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Updatedprofile;
