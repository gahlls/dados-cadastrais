import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button-footer',
  templateUrl: './button-footer.component.html',
  styleUrls: ['./button-footer.component.css']
})
export class ButtonFooterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  goBack() {
    this.router.navigate(['/perfil'])
  }

}
