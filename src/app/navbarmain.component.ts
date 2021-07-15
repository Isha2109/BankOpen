import { Component, Input } from '@angular/core';
@Component({
    selector: 'navbarmain',
    template: `
    <div class="navbar1">
    <nav class="navbar navbar-default navbar-fixed-top navbar-expand-lg bg-warning" style="background-color: transparent;">
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="logo">
          <a class="nav-link" routerLink="">
              <img class="img-responsive" src="/assets/logo.png" alt="HTML5 Icon" width="100" height="100">
            </a>
          </div>
          <div class="margin2">
         <ul class="navbar-nav">
            <li><span class="list2">
            <a class="nav-link">Products</a>
            </span></li>
           <li> <span class="list2">
              <a class="nav-link">Solution</a>
            </span></li>
            <li><span class="list2">
              <a class="nav-link">Pricing</a>
            </span></li>
           <li> <span class="list2">
           <button type="button" class="btn btn-outline-info rounded-pill">Login</button>
            </span></li>
           <li> <span class="list2">
           <button type="button" class="btn btn-outline-primary rounded-pill">Get Started</button>
            </span></li>
          </ul>
          </div>
      </div>
      </nav>
      </div>
    `,
    styleUrls: ['./navbarmain.component.css']
  })
  export class navBarMainComponent {}
