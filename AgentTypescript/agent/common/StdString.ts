const BUF_SIZE = 16;

export class StdString {
    addr: NativePointer;
    constructor(addr: NativePointer) {
        this.addr = addr;
    }

    get bufAddr() {
        if (this.reservedSize.compare(BUF_SIZE) > 0) {
            return this.addr.readPointer();
        } else {
            return this.addr;
        }
    }

    get size() {
        return this.addr.add(BUF_SIZE).readPointer();
    }

    get reservedSize() {
        return this.addr.add(BUF_SIZE).add(Process.pointerSize).readPointer();
    }

    toString() {
        const size = this.size;
        if (size.isNull()) {
            return "<EMPTY std::string>";
        }
        return this.bufAddr.readCString(size.toInt32());
    }

    getStdString(): string | null {
        var isTiny = (this.addr.readU8() & 1) === 0;
        if (isTiny) {
            return this.addr.add(1).readUtf8String();
        }
        return this.addr.add(2 * Process.pointerSize).readPointer().readUtf8String();
    }
}