function commonFactors(a: number, b: number): number {
    const g = gcd(a, b);
    let ans = 0;
    for (let x = 1; x <= g; ++x) {
        if (g % x === 0) {
            ++ans;
        }
    }
    return ans;
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}
