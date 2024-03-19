import React from 'react';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
					<p>Nuestras Redes Sociales <i class="fab fa-facebook"></i>
    				<i class="fab fa-instagram"></i>
    				<i class="fab fa-whatsapp"></i></p>
    				
    					<span>Copyright &copy; 2024 Pizza Rock. Todos los derechos reservados.</span>
					{/* <span>Copyright &copy; Dashboard 2021</span> */}
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;