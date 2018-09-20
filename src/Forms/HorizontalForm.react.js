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
                            <label className="label">Already a member?</label>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="member" />
                                        Yes
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="member" />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Subject</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-danger" placeholder="E.g partnership opportunity"></input>
                                </div>
                                <p className="help is-danger">
                                    this field is require.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Question</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="Tell me how we can help you"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button className="button is-success">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container">
                    <h1 className="title">Size of horizontal form</h1>
                    <h2 className="subtitle">How to use variansize</h2>

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">No padding</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        Checkbox
                                     </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-small">
                            <label className="label">Small input</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Small input"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Normal input</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" placeholder="Normal input"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <dic className="field is-horizontal">
                        <div className="field-label is-medium">
                            <label className="label">Medium input</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" placeholder="Medium input" />
                                </div>
                            </div>
                        </div>
                    </dic>


                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Large input</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" placeholder="Large input" />
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