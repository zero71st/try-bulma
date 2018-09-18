import React from 'react';
class Section extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <h1 className="title">
                            Section
                </h1>
                        <h2 className="subtitle">
                            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
                    </div>
                </div>

                <div className="section is-medium">
                    <div className="container">
                        <h1 className="title">
                            Section
                </h1>
                        <h2 className="subtitle">
                            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
                    </div>
                </div>

                <div className="section is-large">
                    <div className="container">
                        <h1 className="title">
                            Section
                </h1>
                        <h2 className="subtitle">
                            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default Section;