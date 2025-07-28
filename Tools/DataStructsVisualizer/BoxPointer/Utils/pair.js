class Pair {
    constructor(car, cdr) {
        this.car = car;
        this.cdr = cdr;
    }

    getCar() {
        return this.car;
    }

    getCdr() {
        return this.cdr;
    }

    setCar(car) {
        this.car = car;
    }

    setCdr(cdr) {
        this.cdr = cdr;
    }

    stringify() {
        let log = "["

        if (this.car instanceof Pair) {
            log += this.getCar().stringify();
        } else {
            log += this.getCar();
        }

        log += "|"

        if (this.getCdr() instanceof Pair) {
            log += "->" + this.getCdr().stringify();
        } else {
            log += this.getCdr() + "]";
        }

        return log;
    }

    print() {
        console.log(this.stringify());
    }
}

export { Pair };