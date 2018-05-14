import {CanDeactivate} from '@angular/router';
import {UnitComponent} from '../unit/unit.component';

export class UnsavedGuard implements CanDeactivate<UnitComponent> {

  canDeactivate(component:UnitComponent) {
    return window.confirm('你还没有保存，确定要离开吗？');
  }
}
