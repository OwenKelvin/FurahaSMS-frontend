import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-academics-curriculum-units',
  templateUrl: './academics-curriculum-units.component.html',
  styleUrls: ['./academics-curriculum-units.component.css']
})
export class AcademicsCurriculumUnitsComponent implements OnInit {

  units$: Observable<any[]>;
  categories: any;
  constructor(
    private unitsService: UnitsService
  ) { }

  ngOnInit() {

    this.categories = this.unitsService;
  }

}
