import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';


@Component({
  selector: 'home',
  providers: [
    Title
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public localState = { value: '' };

  constructor(
    public appState: AppState,
    public title: Title
  ) {


  }

  public ngOnInit() {
    console.log('hello `Home` component');

  }


}
