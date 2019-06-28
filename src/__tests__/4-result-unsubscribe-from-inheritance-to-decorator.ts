import { Subscription } from 'rxjs';

@Unsubscribe()
@Component()
class X implements OnDestroy {
    public subscriptions: Subscription[] = [];

    constructor() {
    }

    ngOnDestroy() {
    }
}
