import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/menu-item';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [  
    {
      title:'Basicos', route:'./reactive/basic'
    },
    {
      title:'Dinamicos', route:'./reactive/dynamic'
    },
    {
      title:'Switches', route:'./reactive/switches'
    },
  ]

  public authMenu: MenuItem[] = [  
    {
      title:'Registro', route:'./auth'
    }
  ]

}
