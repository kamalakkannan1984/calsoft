import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {
  tiles: NavItem[] = [
    {
      displayName: "Electronics",
      children: [
        {
          displayName: "Mobile"
        },
        {
          displayName: "Mi"
        },
        {
          displayName: "Realme"
        }
      ]
    }
  ];

  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger: any;

  constructor(private ren: Renderer2, private router: Router) {}

  ngOnInit() {}

  menuenter() {
    this.isMatMenuOpen = true;
  }

  menuLeave(trigger: any, button: any) {
    setTimeout(() => {
      if (!this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-focused"
        );
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-program-focused"
        );
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80);
  }

  buttonEnter(trigger: any) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
        this.ren.removeClass(
          trigger.menu.items.first["_elementRef"].nativeElement,
          "cdk-focused"
        );
        this.ren.removeClass(
          trigger.menu.items.first["_elementRef"].nativeElement,
          "cdk-program-focused"
        );
      } else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
        trigger.openMenu();
        this.ren.removeClass(
          trigger.menu.items.first["_elementRef"].nativeElement,
          "cdk-focused"
        );
        this.ren.removeClass(
          trigger.menu.items.first["_elementRef"].nativeElement,
          "cdk-program-focused"
        );
      } else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
      }
    });
  }

  buttonLeave(trigger: any, button: any) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-focused"
        );
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-program-focused"
        );
      }
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-focused"
        );
        this.ren.removeClass(
          button["_elementRef"].nativeElement,
          "cdk-program-focused"
        );
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }

  addProductsClick() {
    this.router.navigate(["add-products"]);
  }

  findLatLongClick() {
    this.router.navigate(["find-latitude-longitude"]);
  }
}
