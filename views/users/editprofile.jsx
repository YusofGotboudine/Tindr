var React = require("react");

class Editprofile extends React.Component {
    render() {
        console.log("Profile Edit Page Accessed");
        console.log("===================");
        return (
            <html>
                <head />
                <body>
                    <h1>Edit Profile</h1>
                    <div>
                        <form action="/profile/" method="POST">
                            <p>
                                Name <input name="name" />
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

module.exports = Editprofile;