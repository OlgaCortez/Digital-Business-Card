import Email from "../../images/8.png";
import Arrow from "../../images/arrow.png";
import Web from "../../images/9.png";
import Location from "../../images/10.png";
import Logo from "../../images/11.png";
import Girl from "../../images/Desk.png";
import './Card.css';

const Card = () => {
    return ( 
        <div>
            <section class="bg-color-grey banner">
		        <div class="container">
			        <div class="row">
				        <div class="col"></div>
				            <div class="col is-5">
					            <img class="profile-pic" src={Girl} alt="Profile"/>
				            </div>
				                <div class="col"></div>
			        </div>
		        </div>
	        </section>

	        <section class="bg-color-white primary-info">
		        <div class="container">
			        <div class="row name-title-company">
				        <div class="col is-6">
					        <p class="text-name">Olga Cortez</p>
					        <p class="text-title-company">Full Stack Web Developer</p>
				        </div>
				        <div class="col">
					        <img src={Logo} alt="Company Logo" />
				        </div>
			        </div>
		        </div>
	        </section>

	        <section class="bg-color-white secondary-info">
		        <a href="mailto: olgalataviacortez@gmail.com">
			    <div class="container">
				    <div class="row detail">
					    <div class="col">
						    <img className="email" src={Email} alt="Email Icon" />
					    </div>
					    <div class="col is-8">
						    <p class="text-detail">olgalataviacortez@gmail.com</p>
					    </div>
					    <div class="col">
						    <img src={Arrow} alt="Right Arrow" height="50%" width="40%" />
					    </div>
				    </div>
			    </div>
		        </a>
	        </section>

	<section class="bg-color-white secondary-info">
		<a href="https://olgacortez.netlify.app/">
			<div class="container">
				<div class="row detail">
					<div class="col">
						<img src={Web} alt="Website Icon"/>
					</div>
					<div class="col is-8">
						<p class="text-detail">https://olgacortez.netlify.app</p>
					</div>
					<div class="col">
						<img src={Arrow} alt="Right Arrow" height="50%" width="40%" />
					</div>
				</div>
			</div>
		</a>
	</section>

	<section class="bg-color-white secondary-info">
		<a href="https://www.google.com/maps/place/Chicago,+IL/@41.8333925,-88.0121478,10z/data=!3m1!4b1!4m5!3m4!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982">
			<div class="container">
				<div class="row detail">
					<div class="col">
						<img src={Location} alt="Address Icon"/>
					</div>
					<div class="col is-8">
						<p class="text-detail">Chicago, Illinois</p>
					</div>
					<div class="col">
						<img src={Arrow} alt="Right Arrow" height="50%" width="40%" />
					</div>
				</div>
			</div>
		</a>
	</section>

	<section class="bg-color-white bottom">
		<div class="container">
			<div class="row">
				<div class="col"></div>
				<div class="col is-5">
					<div class="button">
						<a href="https://calendly.com/olgacortez/hire-me">
							<p class="button">Calendly</p>
						</a>
					</div>
				</div>
				<div class="col"></div>
			</div>
		</div>
	</section>
        </div>
     );
}
 
export default Card;