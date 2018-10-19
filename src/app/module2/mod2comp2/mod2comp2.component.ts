import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lz-mod2comp2',
  templateUrl: './mod2comp2.component.html',
  styles: []
})
export class Mod2comp2Component {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  public gotoMod1() {
    this.router.navigate(['/module1']);
  }

  public gotoMod2() {
    this.router.navigate(['/module2']);
  }

  public gotoMod1Comp1() {
    this.router.navigate(['/module1/comp1']);
  }

  public gotoMod1Comp2() {
    this.router.navigate(['/module1/comp2']);
  }

  public gotoMod2Comp1() {
    this.router.navigate(['/module2/comp1']);
  }

  public gotoMod2Comp2() {
    this.router.navigate(['/module2/comp2']);
  }

  public gotoComp1() {
    this.router.navigate(['../comp1'], { relativeTo: this.route });
  }

  public gotoComp2() {
    this.router.navigate(['../comp2'], { relativeTo: this.route });
  }

}
