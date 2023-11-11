import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

const components = [HeaderComponent];

@NgModule({
  imports: [IonicModule],
  declarations: components,
  exports: components,
})
export class ComponentsModule {}
