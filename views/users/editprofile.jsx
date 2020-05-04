var React = require("react");

class Editprofile extends React.Component {
    render() {
        console.log("Profile Edit Page Accessed");
        console.log("===================");
        return (
            <html>
                <link rel="stylesheet" type="text/css" href="./style.css" />
                <head />
                <body>
                    <header>
                        <h1>Tindr.</h1>
                    </header>
                    <h1 id='displayBox'>Edit Profile</h1>
                    <div id='options'>
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