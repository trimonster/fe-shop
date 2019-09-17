import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { BellComponent } from './bell/bell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    OverlayPanelModule,
    ButtonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BellComponent
  ]
})
export class LayoutModule { }
