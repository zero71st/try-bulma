import React from 'react'
class Hero extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <section className="hero">
                        <div className="hero-body">
                            <div classNam="container">
                                <h1 className="title"> Hero title</h1>
                                <h2 className="subtitle"> Hero subtitle</h2>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section">
                    <section className="hero is-primary">
                        <div className="hero-body">
                            <div classNam="container">
                                <h1 className="title">Primary title</h1>
                                <h2 className="subtitle">Primary subtitle</h2>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section">
                    <section className="hero is-info">
                        <div className="hero-body">
                            <div classNam="container">
                                <h1 className="title">Info title</h1>
                                <h2 className="subtitle">Info subtitle</h2>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section">

                    <section className="hero is-success">
                        <div className="hero-body">
                            <div classNam="container">
                                <h1 className="title">Success title</h1>
                                <h2 className="subtitle">Sucess subtitle</h2>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="section">
                    <section className="hero is-warning">
                        <div className="hero-body">
                            <div classNam="container">
                                <h1 className="title">Warning title</h1>
                                <h2 className="subtitle">Warning subtitle</h2>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="hero is-danger">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Danger title</h1>
                            <h2 className="subtitle">Danger subtitle</h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-light">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Light title</h1>
                            <h2 className="subtitle">Light subtitle</h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-dark">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Dark title</h1>
                            <h2 className="subtitle">Dark subtitle</h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-primary is-medium">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Medium title</h1>
                            <h2 className="subtitle">Medium subtitle</h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-success is-large">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Large title</h1>
                            <h2 className="subtitle">Large subtitle</h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-danger is-fullheight">
                    <div className="hero-body">
                        <div classNam="container">
                            <h1 className="title">Full height title</h1>
                            <h2 className="subtitle">Full height subtitle</h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Hero;