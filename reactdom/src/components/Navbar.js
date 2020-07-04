import React from 'react'

export default function Navbar() {
    return (
        //  {<!-- NavBar Component Code -->}
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
    <div className="container">
        <a className="navbar-brand" href="Dashboard.html">
            Project Task Tool
            
        </a>
        <a className="btn btn-danger ml-4" href="Dashboard.html" >
               Projection Task Tool
            
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon" />
        </button>


    </div>
</nav>


    )
}
