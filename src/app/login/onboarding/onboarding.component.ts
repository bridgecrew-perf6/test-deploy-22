import { Component, OnInit } from '@angular/core';
import languages from '../../../assets/languages/en.json';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  isChangeScreen!: boolean;
  img: string = '/assets/images/Pattern.png';
  logo: string = '/assets/images/Logo.png';
  imgComfort: string = '/assets/images/Illustartion-1.png';
  imgDoorstep: string = '/assets/images/Illustration-2.png';
  lang = languages;
  isClick: boolean = true;
  ascending: number = 0;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isChangeScreen = true;
    }, 3000);
  }

  changeBackground(event: any) {
    if (this.isClick) {
      this.ascending++;
    }
    this.isClick = false;
  }
}
