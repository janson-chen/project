
import { Component , OnInit } from "@angular/core";

@Component({
    selector: 'seekbar',
    templateUrl: "./seekbar.component.html",
    styleUrls: ["./seekbar.component.css"]
})

export class SeekBarComponent implements OnInit {
    // tslint:disable-next-line:member-access
    ngOnInit(): void {
        console.log("seekbar init");
    }

    curX: number = 0;
    dotSelected: boolean = false;

    constructor(){}

    // tslint:disable-next-line:member-access
    selected(event) {
        console.log("keydown...");
        this.dotSelected = true;
    }

    // tslint:disable-next-line:member-access
    move(event) {
        if (!this.dotSelected) {
            return;
        }

        this.curX = event.clientX;
        console.log(this.curX);
    }
}
