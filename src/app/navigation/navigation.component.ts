import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Langauge} from './langauge.enum';

@Component({
  selector: 'mg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output()
  private languageChanged = new EventEmitter<string>();
  private translateService: TranslateService;
  public language: string;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.language = this.translateService.currentLang;
  }

  ngOnInit() {
  }

  toggleLanguage(): void {
    this.language = this.language === Langauge.pl ? Langauge.en : Langauge.pl;
    this.languageChanged.emit(this.language);
  }

}
