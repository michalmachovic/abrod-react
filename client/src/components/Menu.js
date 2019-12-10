import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div id="header">
			<div id="header-wrapper">
				<div id="logo-wrapper">
					<a href="index.php">
						<div id="logo">
						</div>
					</a>
				</div>

                <div id="menu">
                    <div className="item">
                        <Link to="/">
                            Home
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/news">
                            News
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
