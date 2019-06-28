// @tsmod:remove
// import { Unsubscribe } from ‘some-utils’;
// @tsmod:add
import { Subscription } from 'rxjs'; // create if doesn’t exist

// @tsmod:add
@Unsubscribe()
@Component()
class X
// @tsmod:remove
// extends Unsubscribe
    implements OnDestroy {
    // @tsmod:add
    public subscriptions: Subscription[] = [];

    constructor() {
        // @tsmod:remove
        // super();
    }

    ngOnDestroy() {
        // @tsmod:remove
        // super.ngOnDestroy();
    }
}
