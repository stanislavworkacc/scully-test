import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnimationType} from "./maps.animations";
import {transition, trigger, useAnimation} from "@angular/animations";
import {
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn, jackOut,
  scaleIn,
  scaleOut
} from "./maps.animations";
import {GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager} from "@agm/core";
import {BehaviorSubject, combineLatest, interval, Observable, of, Subject, Subscription, timer} from "rxjs";
import {filter, map, switchMap, take, takeUntil, takeWhile, tap} from "rxjs/operators";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ],
  providers: [
    GoogleMapsAPIWrapper,
    InfoWindowManager,
    MarkerManager
  ]
})
export class MapsComponent implements OnInit, OnDestroy {

  public currentCityName: string;
  public currentSlide: number = 0;
  public zoom: number = 12.5;
  public sliderSwipeSubscription: Subscription;
  public flag = true;

  private stopInterval$ = interval( 20000).pipe(
    take(1));
  private selectedIndexSubject = new BehaviorSubject<{stop: boolean, index: number}>({stop: false, index: 0});

  private currentIndex$ = this.selectedIndexSubject.pipe(
    switchMap(selectedIndex => timer(0, 2000).pipe(
      takeWhile(() => this.flag),
      tap(el => {
        if(selectedIndex.stop) {
          this.flag = false;
          this.stopInterval$.subscribe(() => {
            this.flag = true;
            this.selectedIndexSubject.next({stop: false, index: this.currentSlide})
          })
        }
      }),
      map(tick => (tick + selectedIndex.index) % this.maps.length)
    ))
  );

  @Input() maps: any;
  @Input() animationType = AnimationType.Fade;


  constructor(
  ) {
    this.sliderSwipeSubscription = new Subscription();
    this.currentCityName = '';
    this.maps = [];
  }

  ngOnInit(): void {
    this.currentIndex$.subscribe((el: any) => {
      this.currentSlide = el;
    })
  }

  currentCity(city: string) {
    this.currentCityName = city;
    this.selectedIndexSubject.next({stop: true, index: this.maps.map((el: any) => el.city).indexOf(city)});

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.selectedIndexSubject.next( {stop: true, index: previous < 0 ? this.maps.length - 1 : previous});
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.selectedIndexSubject.next({stop: true, index: next === this.maps.length ? 0 : next});
  }

  convertToNumber(lat: string) {
    return Number(lat);
  }

  ngOnDestroy(): void {
    this.sliderSwipeSubscription.unsubscribe();
    this.selectedIndexSubject.unsubscribe();
  }
}
