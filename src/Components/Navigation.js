const NavigationComponent = () => {

    return (
        <div id="NavigationComponent">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarClass">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Hotel Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* navigation bar contains four components : Home , About , Contact Us and Register */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            {/* Navigation for Home Components */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>

                            {/* Navigation for About Components */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>

                            {/* Navigation for Contact Us Components */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact">Contact Us</a>
                            </li>

                            {/* Navigation for Register Components */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/register">Register</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationComponent;