import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-password-meter',
  templateUrl: './password-meter.component.html',
  styleUrls: ['./password-meter.component.css']
})
export class PasswordMeterComponent implements OnInit {
  @Input() passwordString: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  get passwordStrength() {
    const password = this.passwordString || '';
    let score = Math.min(4, password.length / 2);
    if (/[a-z]/.test(password)) {
      score += 1;
    }

    if (/[a-z](.)*[a-z]/.test(password)) {
      score += 3;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/[A-Z](.)*[A-Z]/.test(password)) {
      score += 2;
    }

    if (/\W|_/.test(password)) {
      score += 2;
    }

    if (/(\W|_)(.)*(\W|_)/.test(password)) {
      score += 3;
    }
    if (/[0-9]/.test(password)) {
      score += 2;
    }

    if (/[0-9](.)*[0-9]/.test(password)) {
      score += 2;
    }

    return (score / 20) * 100;
  }

  get colorString() {
    const hue = ((this.passwordStrength / 100) * 120).toString(10);
    return ['hsl(', hue, ',100%,50%)'].join('');
  }

}
