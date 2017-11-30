
import { Component , OnInit } from "@angular/core";

@Component({
    selector:'seekbar',
    templateUrl:"./seekbar.component.html",
    styleUrls:["./seekbar.component.css"]
})

export class SeekBarComponent implements OnInit {
    ngOnInit(): void {
        console.log("seekbar init");
    }
    curX:number = 0;
    dotSelected:boolean = false;

    constructor(){

    }

    selected(event) {
        console.log("keydown...");
        this.dotSelected = true;
    }

    move(event) {
        if(!this.dotSelected) {
            return;
        }
        this.curX = event.clientX;
        console.log(this.curX);
    }


}
