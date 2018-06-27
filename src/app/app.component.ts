import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Langauge} from "./navigation/langauge.enum";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('menuOpen', [
      state('opened', style({
        transform: 'rotate(-20deg)'
      })),
      state('closed', style({
        transform: 'rotate(0)'
      })),
      transition('closed => opened', animate('200ms')),
      transition('opened => closed', animate('200ms'))
    ]),
  ]
})
export class AppComponent {
  title = 'autopresentation';
  public isMenuOpen: string;
  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.initLanguage();
  }

  public languageChanged(language: string): void {
    this.translateService.use(language);
  }

  public menuOpened(isMenuOpen: string): void {
    this.isMenuOpen = isMenuOpen;
  }

  private initLanguage(): void {
    this.translateService.setDefaultLang('en');

    const browserLang: string = this.translateService.getBrowserLang();
    if (Object.values(Langauge).includes(browserLang)) {
      this.translateService.use(browserLang);
    }
  }
}
