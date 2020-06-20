import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(url: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl( url);
  }

}
