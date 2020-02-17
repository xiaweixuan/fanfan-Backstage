import { Directive,HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {
  //将文本设置为按钮的样式
  constructor(private elr: ElementRef, private rd2: Renderer2) { }
  // @HostBinding('style.textDecoration') td="underline"
  
  @HostListener('mouseover',['$event.target'])
  handleClick(ev){
    this.rd2.setStyle(this.elr.nativeElement,'textDecoration','underline')
    this.rd2.setStyle(this.elr.nativeElement,'cursor','pointer')
  }

  @HostListener('mouseout',['$event.target'])
  handleout(ev){
    this.rd2.setStyle(this.elr.nativeElement,'textDecoration','')
    this.rd2.setStyle(this.elr.nativeElement,'cursor','')
  }
}
