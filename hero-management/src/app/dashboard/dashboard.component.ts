import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes :Hero[];

  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    this._heroService.getHeros().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
