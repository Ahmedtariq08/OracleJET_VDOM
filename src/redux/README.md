Here is the source code example to use redux

```
   state:any = {
        data:null
    };

    constructor() {
        super();
        Store.subscribe(() =>
            this.setState ({
                data:Store.getState().itemSearch_reducer
            })
        )
    }

    componentDidMount(): void {
        Store.dispatch(setSearchType(true))
    }

```