import React from 'react';
class Level extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="subtitle">
                                    123 Post
                                </p>
                            </div>
                            <div className="level-item">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Find a post"></input>
                                    </p>
                                    <p className="control">
                                        <button className="button">Search</button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="level-right">
                            <p className="level-item"><strong>All</strong></p>
                            <p className="level-item"><a>Published</a></p>
                            <p className="level-item"><a>Draft</a></p>
                            <p className="level-item"><a>Deleted</a></p>
                            <p className="button is-success">New</p>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Level;