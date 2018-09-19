import React from 'react';
class HorizontalForm extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title"><a>#</a>Horizontal Form</h1>
                    <h2 className="subtitle">How to create Horizontal Form</h2>

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Form</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input className="input" placeholder="name" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control is-expanded has-icons-left has-icons-right">
                                    <input className="input is-warning" placeholder="kasem.w@dzcard.com" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field is-expanded">
                                <div className="field has-addons">
                                    <div className="control has-addons">
                                        <button className="button is-static">
                                            +66
                                        </button>
                                    </div>
                                    <p className="control is-expanded">
                                        <input className="input" placeholder="Your phone number" />
                                    </p>
                                </div>
                                <p className="help">
                                    Do not enter the first zero
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Department</label>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option>Business development</option>
                                            <option>Margeting</option>
                                            <option>Sales</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-normal">Already a member?</label>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="Member"></input>
                                        Yes
                                    </label>
                                    <label className="radio">
                                        <input type="radio"/>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default HorizontalForm;  