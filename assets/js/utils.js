export function calculateIMC(weight, height) {
    const heightFraction = height / 100
    const result =  weight / (heightFraction ** heightFraction)
    return result.toFixed(1)
}
export function check(value) {
    return value === isNaN || value == "" || value < 0 || value > 500
}