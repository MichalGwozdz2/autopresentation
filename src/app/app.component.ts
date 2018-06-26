import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Langauge} from "./navigation/langauge.enum";

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autopresentation';
  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.initLanguage();
  }

  private initLanguage(): void {
    this.translateService.setDefaultLang('en');

    const browserLang: string = this.translateService.getBrowserLang();
    if (Object.values(Langauge).includes(browserLang)) {
      this.translateService.use(browserLang);
    }
  }

  public languageChanged(language: string): void {
    this.translateService.use(language);
  }
}
