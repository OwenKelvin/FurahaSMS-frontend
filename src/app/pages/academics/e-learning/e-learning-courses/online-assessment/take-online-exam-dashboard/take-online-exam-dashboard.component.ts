import {Component} from '@angular/core';
import {OnlineAssessmentService} from '../../../services/online-assessment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-take-online-exam-dashboard',
  templateUrl: './take-online-exam-dashboard.component.html',
  styleUrls: ['./take-online-exam-dashboard.component.css']
})
export class TakeOnlineExamDashboardComponent {
  assessmentId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  courseId$ = this.route.paramMap.pipe(
    tap(res => console.log(res)),
    map(params => Number(params.get('id')))
  );
  assessment$ = this.assessmentId$.pipe(
    mergeMap((assessmentId) => this.onlineAssessment.getAssessmentWithId(assessmentId)),
    map(assessment => ({
      ...assessment,
      availableAt: assessment.available_at,
      period: assessment.period,
      closingAt: assessment.closing_at,
      unitLevelName: assessment.unit_level_name,
      examPaperName: assessment.exam_paper_name
    }))
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onlineAssessment: OnlineAssessmentService) {
  }

  takeTest() {
    if (confirm('Are you sure you wish to begin test? ')) {
      this.router.navigate(['take'], {relativeTo: this.route}).then();
    }
  }
}
