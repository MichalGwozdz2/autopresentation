import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Langauge} from './langauge.enum';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
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
    trigger('menuClose', [
      state('opened', style({
        transform: 'rotate(0deg)'
      })),
      state('closed', style({
        transform: 'rotate(-20deg)',
      })),
      transition('closed => opened', animate('200ms')),
      transition('opened => closed', animate('200ms'))
    ]),
    trigger('listOpen', [
      state('opened', style({
        transform: 'translateX(0)',
        transition: 'transform .35s .45s $bounce'
      })),
      state('closed', style({
        transform: 'translateX(-300px)',
        transition: 'transform .7s 0s $snap'
      })),
      transition('closed => opened', animate('200ms')),
      transition('opened => closed', animate('200ms'))
    ])
  ]
})
export class NavigationComponent implements OnInit {

  @Output()
  public menuOpened = new EventEmitter<string>();
  public language: string;
  public isMenuOpen = 'closed';
  @Output()
  private languageChanged = new EventEmitter<string>();
  private translateService: TranslateService;

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

  toggleMenu(): void {
    this.isMenuOpen = this.isMenuOpen === 'closed' ? 'opened' : 'closed';
    this.menuOpened.emit(this.isMenuOpen);
  }

}
