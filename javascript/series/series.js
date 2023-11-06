export class Series {
    constructor (numStr) {
        this.digits = [...numStr].map (digit => Number(digit))
        if (this.digits.length === 0) 
            throw new Error('series cannot be empty')
    }
    slices (size) {
        if (size < 0)
            throw new Error ('slice length cannot be negative')
        if (size === 0) 
            throw new Error ('slice length cannot be zero')
        if (size > this.digits.length)
            throw new Error (
                'slice length cannot be greater than series length'
            )
        return this.digits
                   .slice(0, this.digits.length - size + 1)
                   .map ((d, i) => (this.digits.slice(i, i + size)))
    }
}