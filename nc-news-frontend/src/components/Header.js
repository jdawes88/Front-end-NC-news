import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render () {
        const {users, selectCurrentUser} = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/'className="navbar-brand">NCNews</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/topics' className="nav-link">Topics</Link>
                        </li>
                        {/* <li className="nav-item active">
                            <Link to='/articles' className="nav-link">Articles</Link>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <ul>
                                {users.map((user, i) => {
                                    return (
                                    <li onClick={() => {
                                        selectCurrentUser(user._id)
                                    }} key= {`${user.username}${i}`}
                                    className="dropdown-item">{user.username}</li>
                                    )
                                })}   
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;