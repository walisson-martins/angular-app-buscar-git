import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import do HttpClientModule no módulo global
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import da barra Toolbar do Material Anular
import { MatToolbarModule } from '@angular/material/toolbar';

//import do Material Icon do Material Angular
import { MatIconModule } from '@angular/material/icon';

//Container grid
import { MatGridListModule } from '@angular/material/grid-list';

//import do Botão
import { MatButtonModule } from '@angular/material/button';

//Import do Input do Material Angular
import { MatInputModule } from '@angular/material/input';
// import { MatFormField } from '@angular/material/form-field';
// import { MatLabel } from '@angular/material/form-field';

//Import do Card do Material Angular
import { MatCardModule } from '@angular/material/card';

////Import do Dialog do Material Angular
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';

//Import do componente que renderiza todos os componentes
import { MainComponent } from './main/main.component';

//Import do FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './main/modal/modal.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    // MatFormField,
    // MatLabel,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
