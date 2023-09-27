export interface game {
    cardLabel?: string
    label: string 
    consoles: string 
    price: number
    gamePhoto: string
}

export const games: game[]= [
{cardLabel:'exclusive',label:'Play it now', gamePhoto:'bt-1.jpg' ,consoles:'Full game ps4',price:450.00},
{label:'Play it now', gamePhoto:'bt-4.jpg' ,consoles:'Full game ps4',price:250.00},
{cardLabel:'best choose',label:'Play it now', gamePhoto:'bt-5.jpg' ,consoles:'Full game ps4',price:300.00},
{cardLabel:'exclusive',label:'Play it now', gamePhoto:'bt-bad-company-2.jpg' ,consoles:'Full game ps4',price:159.99},
{cardLabel:'exclusive',label:'Play it now', gamePhoto:'ac-cover.jpg' ,consoles:'Full game ps4',price:120.00},
{cardLabel:'exclusive',label:'Play it now', gamePhoto:'bt-hardline.jpg' ,consoles:'Full game ps4',price:100.00},
]
