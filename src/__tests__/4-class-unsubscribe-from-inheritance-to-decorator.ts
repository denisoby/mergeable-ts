import { Unsubscribe } from 'some-utils';

@Component()
class X extends Unsubscribe implements OnDestroy {
    constructor() {
        super();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
