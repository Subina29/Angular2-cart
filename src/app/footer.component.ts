import {Component} from '@angular/core'

@Component({
	selector: 'my-footer',
	template : `
		<footer class="row">
		<div class="container">
			<ul class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<li>
					<a routerLink="/showHome">About</a>
				</li>
				<li>
					<a routerLink="/showHome">Career</a>
				</li>
				<li>
					<a routerLink="/showHome">Help</a>
				</li>
				<li>
					<a routerLink="/showLogin">Log in</a>
				</li>
			</ul>
			<p class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
				<small>Developed by Subina Balakrishnan. Contact: <a href="mailto:subinataurus@gmail.com">subinataurus@gmail.com</a></small>
			</p>
		</div>
		</footer>
	`
})
export class FooterComponent{}