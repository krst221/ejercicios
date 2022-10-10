function PrecioIva (num) {
    return ((num*1.21)+4.95).toFixed(2);
}
console.log(PrecioIva(11));
console.log(PrecioIva(100));