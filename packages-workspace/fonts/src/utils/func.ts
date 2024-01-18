import { getFontType } from ".";

export const union_data = (arr: getFontType[]):string[]  => {
    return arr.reduce((acc:string[], cur) => {
        if(acc.includes(cur.short_name)) return acc
        return [...acc, cur.short_name]
    }, [])

}