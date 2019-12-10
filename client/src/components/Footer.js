import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div id="footer">
			<div className="wrapper">
				<div className="col">
					<div className="icon mail"></div>
					<div className="content">
						Abrod, s.r.o. <br />
						Partizánska 401 <br />
						Horná Streda<br />
						916 24
					</div>
				</div>

				<div className="col">
					<div className="icon email"></div>
					<div className="content bigger">
						miro@abrod.sk
					</div>
				</div>

				<div className="col">
					<div className="icon phone"></div>
					<div className="content bigger">
						0915 069 954
					</div>
				</div>
			</div>
		</div>
    );
}

export default Footer;
