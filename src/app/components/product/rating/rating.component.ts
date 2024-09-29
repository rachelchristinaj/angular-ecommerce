import { Component, Input } from "@angular/core";

@Component({
    selector:'app-rating',
    templateUrl:'./rating.component.html'
})
export class RatingComponent {
  @Input() rating: number = 0;

  get fullStars(): number {
    return Math.floor(this.rating);
  }

  get halfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  get emptyStars(): number {
    return 5 - this.fullStars - (this.halfStar ? 1 : 0);
  }
}