export function isString(str: any): boolean {
    return typeof (str) === "string"
}
export function getLength(str: string): number {
    return str.length
}
export function replaceWith(str: string, what: string, replacer: string): string {
    let res = ""
    str.split("").forEach((el: string) => {
        res += el.replace(what, replacer) 
    });
    return res;
}
export function isUUID4(str: string): boolean {
    const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    return regex.test(str)
}
export function genRandStr(length: number, special: boolean = true, letter: boolean = true, num: boolean = true): string {
    const charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charsLower = "abcdefghijklmnopqrstuvwxyz"
    const charsNum = "1234567890"
    const charsSpecial = "!@#$%^&*()_+-=[]{}|;':,./<>?"
    let result: string = ""
    let chars: string = ""
    if (letter) {
        chars += charsUpper
        chars += charsLower
    }
    if (num) {
        chars += charsNum;
    }
    if (special) {
        chars += charsSpecial;
    }
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result
}

export function genUUID4(): string {
    return [
        genRandStr(8, false),
        genRandStr(4, false),
        genRandStr(4, false),
        genRandStr(4, false),
        genRandStr(12, false)
    ].join('-')
}

export function revStr(str: string): string {
    return str.split('').reverse().join('');
}

export function truncStr(str: string, max: number): string {
    if (str.length <= max) {
        return str;
    }
    return str.slice(0, max) + '...';
}

export function capFirstL(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capStr(str: string): string {
    return str.toUpperCase();
}