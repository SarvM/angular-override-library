import { Directive, HostListener } from '@angular/core';
import { Host, Self, Optional } from '@angular/core';
import { Select2, Select2Value } from 'ng-select2-component';

@Directive({
  selector: '[appCustomSelect2]'
})
export class CustomSelect2Directive {

  constructor(@Host() @Self() @Optional() public hostSel: Select2) { 

  }

  @HostListener('keydown', ['$event']) onKeyDown(e: any) { 
    if(e['key'] == 'Down' || e['key'] == 'Up'){
      let mergedObject = this.MergeRecursive({},e);
      if(mergedObject['key'] == 'Down') mergedObject['key'] = 'ArrowDown';
      if(mergedObject['key'] == 'Up') mergedObject['key'] = 'ArrowUp';
      this.hostSel.keyDown(mergedObject as KeyboardEvent)
    }
  }


  MergeRecursive(object1, object2) {

    for (var prop in object2) {
      try {
        // Property in destination object set; update its value.
        if ( object2[prop].constructor==Object ) {
          object1[prop] = this.MergeRecursive(object1[prop], object2[prop]);

        } else {
          object1[prop] = object2[prop];

        }

      } catch(e) {
        // Property in destination object not set; create it and set its value.
        object1[prop] = object2[prop];

      }
    }

    return object1;
  }

}