import {Component} from '@angular/core';
import {IMAGES} from './mock.images';


@Component({
	selector: 'css-carousel',
	template: `
		<div class="carousel">
			<ul class="slides">
				<li *ngFor="let image of images">
					<h2>{{image.title}}</h2>
					<a routerLink="/{{image.link}}"><img src="{{image.url}}" /></a>
				</li>
			</ul>
		</div>
		`
})
export class CarouselComponent {
	public images = IMAGES;
}