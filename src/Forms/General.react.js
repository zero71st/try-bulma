import React from 'react';
class General extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="field">
                        <label className="label">Name</label>
                        <p className="control">
                            <input className="input" placeholder="Name"></input>
                        </p>
                    </div>

                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" placeholder="Username"></input>
                            <span className="icon is-small is-left"><i className="fas fa-user" /></span>
                            <span className="icon is-small is-right"><i className="fas fa-check" /></span>
                        </div>
                        <p className="help is-success">
                            This username is available.
                        </p>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" placeholder="Email"></input>
                            <span className="icon is-small is-left"><i className="fas fas fa-envelope" /></span>
                            <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle" /></span>
                        </div>
                        <p className="help is-danger">
                            This email is invalid.
                        </p>
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control has-icons-left">
                            <div className="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                            <span className="icon is-small is-left">
                                <i className="fas fa-globe"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>
                    </div>

                    <div className="control">
                        <button className="button is-primary">Button</button>
                    </div>

                    <div className="field">
                        <label className="label is-small">Small input</label>
                        <div className="control has-icons-left">
                            <input className="input is-small is-success" placeholder="Username"></input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Medium input</label>
                        <div className="control has-icons-left">
                            <input className="input" placeholder="Username"></input>
                            <spand className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </spand>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-large">Large input</label>
                        <div className="control has-icons-left">
                            <input className="input is-large" placeholder="Username"></input>
                            <span className="icon is-large is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <section className="section">
                        <h1 className="title">Form addons</h1>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" placeholder="Find a repository"></input>
                            </div>
                            <div className="control">
                                <button className="button is-primary">Search</button>
                            </div>
                        </div>

                    </section>
                </div>
            </section>
        );
    }
}
export default General;