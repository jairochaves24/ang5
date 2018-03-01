import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public goals4: any;

  constructor(private route1: ActivatedRoute, private router2: Router, private _data: DataService) {
    this.route1.params.subscribe(res => console.log(res.id1));
   }

  ngOnInit() {
    this._data.goal1.subscribe(res => this.goals4 = res);
  }

  sendMeHome() {
    this.router2.navigate(['']);
    return false;
  }

}
