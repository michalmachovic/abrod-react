import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div id="footer">
			<div class="wrapper">
				<div class="col">
					<div class="icon mail"></div>
					<div class="content">
						Abrod, s.r.o. <br />
						Partizánska 401 <br />
						Horná Streda<br />
						916 24
					</div>
				</div>

				<div class="col">
					<div class="icon email"></div>
					<div class="content bigger">
						miro@abrod.sk
					</div>
				</div>

				<div class="col">
					<div class="icon phone"></div>
					<div class="content bigger">
						0915 069 954
					</div>
				</div>
			</div>
		</div>
    );
}

export default Footer;
