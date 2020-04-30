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
                <head />
                <body>
                    <h1>Welcome to your updated profile page!</h1>
                    <div>
                        <p>{name}</p>
                        <p>{desc}</p>
                    </div>
                    <button><a href="/editprofile">Edit Profile</a></button>
                    <button><a href="/home" title="Go to tindr. homepage">Tindr. Home</a></button>
                </body>
            </html>
        );
    }
}

module.exports = Updatedprofile;
