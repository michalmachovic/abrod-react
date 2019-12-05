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
                    <div class="item">
                        <Link to="/">
                            Home
                        </Link>
                    </div>

                    <div class="item">
                        <Link to="/news">
                            News
                        </Link>
                    </div>

                    <div class="item">
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
