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
                </div>
            </section>
        );
    }
}
export default General;