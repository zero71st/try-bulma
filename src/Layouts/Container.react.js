import React from 'react'
class Container extends React.Component {
    render() {
        return (
            <div className="section">
                <section className="container">
                    <div className="notification">
                        This is container is centered on desktop
                    </div>
                </section>
                <section className="container is-fluid">
                    <div className="notification">
                        This container is <strong>fluid</strong> it will have a 32px gap on either side, on any viewport size.
                    </div>
                </section>
                <section className="container is-widescreen">
                    <div className="notification">
                        This container is <strong>wide screen</strong> until the $widescreen breakpoint.
                     </div>
                </section>
                <section className="container is-fullhd">
                    <div className="notification">
                        This container is <strong>fullwidth</strong> until the $fullhd breakpoint.
                     </div>
                </section>
            </div>
        );
    }
}
export default Container;