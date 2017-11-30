import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import  Swiper from "swiper";

@Component({
    selector: "ca-slider",
    styleUrls: ["./swiper.min.css"],
    template: `        
            <div class="swiper-container swiper-container-horizontal">
                <div class="swiper-wrapper" style="transform: translate3d(370px, 0px, 0px); transition-duration: 0ms;">
                    <div class="swiper-slide swiper-slide-active" style="width: 340px; margin-right: 30px;">Slide 1</div>
                    <div class="swiper-slide swiper-slide-next" style="width: 340px; margin-right: 30px;">Slide 2</div>
                    <div class="swiper-slide" style="width: 340px; margin-right: 30px;">Slide 3</div>
                    <div class="swiper-slide" style="width: 340px; margin-right: 30px;">Slide 4</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev swiper-button-disabled"></div>
            </div>
            <style>
                
                .swiper-container {
                    width: 100%;
                    height: 300px;
                    margin: 20px auto;
                }
                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #ccc;

                    /* Center slide text vertically */
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    -webkit-align-items: center;
                    align-items: center;
                }
                .append-buttons {
                    text-align: center;
                    margin-top: 20px;
                }
                .append-buttons a {
                    display: inline-block;
                    border: 1px solid #007aff;
                    color: #007aff;
                    text-decoration: none;
                    padding: 4px 10px;
                    border-radius: 4px;
                    margin: 0 10px;
                    font-size: 13px;
                }
            </style>
        `
})
export class SlideComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let swiper = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30
        });


    }
}
