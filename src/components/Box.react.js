import React from 'react';
class Box extends React.Component {
    render() {
        return (
            <div className="contianer">
                <div className="section">
                    <div>
                        <div className="Box">
                            <div className="notification">
                                Hello I'm Notification
                            </div>
                            <a className="button is-primary">button</a>
                            <a className="button is-success">button</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Box; 