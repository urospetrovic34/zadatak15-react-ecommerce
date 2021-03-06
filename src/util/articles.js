const articles = [
    {
        "id":1,
        "brand":"Nike",
        "name":"AIR MAX PENNY 1 LE GS 'VARSITY ROYAL'",
        "sizes":[40,41,42,43,44],
        "price":5000,
        "discount":null,
        "colour":"Blue",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/041517/1.jpg"
    },
    {
        "id":2,
        "brand":"Nike",
        "name":"AIR MAX PENNY 1 'TOTAL ORANGE'",
        "sizes":[40,41,42,43,44,45,46,47],
        "price":5500,
        "discount":null,
        "colour":"Orange",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/136348/1.jpg"
    },
    {
        "id":3,
        "brand":"Puma",
        "name":"COURT RIDER TEAM 'WHITE HIGH RISK RED'",
        "sizes":[40,41,42],
        "price":6300,
        "discount":5680,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/279172/1.jpg"
    },
    {
        "id":4,
        "brand":"Puma",
        "name":"MERCEDES-AMG X RS-X3 'BLACK SPECTRA GREEN'",
        "sizes":[43,44,45,46,47],
        "price":6100,
        "discount":null,
        "colour":"Teal",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/202023/1.jpg"
    },
    {
        "id":5,
        "brand":"Adidas",
        "name":"YEEZY BOOST 700 'CARBON BLUE'",
        "sizes":[41,42,43,44,45,46],
        "price":5900,
        "discount":5700,
        "colour":"Gray",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/162300/1.jpg"
    },
    {
        "id":6,
        "brand":"Adidas",
        "name":"NMD_R1 'JAPAN COLORBLOCK'",
        "sizes":[43,44,45,46,47,48],
        "price":6500,
        "discount":6200,
        "colour":"Black",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/138658/1.jpg"
    },
    {
        "id":7,
        "brand":"Asics",
        "name":"KITH X GEL LYTE 3 'SUPER BLUE'",
        "sizes":[41,42,43,44,46],
        "price":6900,
        "discount":null,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/158305/1.jpg"
    },
    {
        "id":8,
        "brand":"Asics",
        "name":"RONNIE FIEG X GEL LYTE 3 'MIAMI'",
        "sizes":[42,43,44,47],
        "price":6100,
        "discount":null,
        "colour":"Teal",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/991802/1.jpg"
    },
    {
        "id":9,
        "brand":"Air Jordan",
        "name":"AIR JORDAN 4 RETRO 'RED THUNDER'",
        "sizes":[44,45,46,47],
        "price":7400,
        "discount":null,
        "colour":"Bred",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/274477/1.jpg"
    },
    {
        "id":10,
        "brand":"Air Jordan",
        "name":"AIR JORDAN 4 RETRO OG 'BRED' 2019",
        "sizes":[44,45,46,47,48],
        "price":7800,
        "discount":7300,
        "colour":"Bred",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/139813/1.jpg"
    },
    {
        "id":11,
        "brand":"New Balance",
        "name":"550 'SHIFTED SPORT PACK - TEAM RED'",
        "sizes":[38,39,40,41,42,43,44,45,46,47,48],
        "price":5750,
        "discount":5690,
        "colour":"Red",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/280785/1.jpg"
    },
    {
        "id":12,
        "brand":"New Balance",
        "name":"550 'SHIFTED SPORT PACK - TEAM ROYAL'",
        "sizes":[38,39,40,41,42,43,44,45,46,47,48],
        "price":5750,
        "discount":null,
        "colour":"Blue",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/280787/1.jpg"
    },
    {
        "id":13,
        "brand":"Under Armour",
        "name":"HOVR INFINITE 2 'WATER ORANGE SPARK'",
        "sizes":[40,41,43,46],
        "price":6300,
        "discount":5100,
        "colour":"Blue",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/202370/1.jpg"
    },
    {
        "id":14,
        "brand":"Under Armour",
        "name":"HOVR PHANTOM SE 'SASHIKO'",
        "sizes":[40,41,42,43,44,45],
        "price":6700,
        "discount":null,
        "colour":"Navy",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/191604/1.jpg"
    },
    {
        "id":15,
        "brand":"Reebok",
        "name":"MOBIUS OG 'BLACK WHITE'",
        "sizes":[41,42,45,46,47],
        "price":7000,
        "discount":6800,
        "colour":"Black",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/804614/1.jpg"
    },
    {
        "id":16,
        "brand":"Reebok",
        "name":"CLASSIC LEATHER RIPPLE 'FOOTWEAR WHITE'",
        "sizes":[40,41,42,43,44,45,46,47],
        "price":4500,
        "discount":null,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/279573/1.jpg"
    },
    {
        "id":17,
        "brand":"Diadora",
        "name":"PATTA X N9000 'ITALIA'",
        "sizes":[42,43,44,45,46],
        "price":4200,
        "discount":null,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/138588/1.jpg"
    },
    {
        "id":18,
        "brand":"Diadora",
        "name":"PACKER SHOES X RAEKWON X N 9000 'PURPLE TAPE'",
        "sizes":[40,42,43,44,45,46,48],
        "price":4700,
        "discount":4400,
        "colour":"Purple",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/139812/1.jpg"
    },
    {
        "id":19,
        "brand":"Diadora",
        "name":"PATTA X N.9000 'COLONIAL'",
        "sizes":[41,42,43,44,45,46],
        "price":4500,
        "discount":null,
        "colour":"Blue",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/150768/1.jpg"
    },
    {
        "id":20,
        "brand":"Diadora",
        "name":"HANON X N9000 TRANSIT II'",
        "sizes":[40,41,44,45],
        "price":4500,
        "discount":4400,
        "colour":"Teal",
        "picture":"https://cdn.flightclub.com/750/TEMPLATE/150767/1.jpg"
    },
    {
        "id":21,
        "brand":"Saucony",
        "name":"BODEGA X SHADOW 6000 'SWEATER'",
        "sizes":[39,40,43,44,45],
        "price":5200,
        "discount":null,
        "colour":"Blue",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/991960/1.jpg"
    },
    {
        "id":22,
        "brand":"Saucony",
        "name":"PREMIER X SHADOW 6000 'LIFE ON MARS'",
        "sizes":[38,39,41,43,44,45,46],
        "price":5500,
        "discount":5000,
        "colour":"Orange",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/991930/1.jpg"
    },
    {
        "id":23,
        "brand":"Nike",
        "name":"AIR PIPPEN 'BLACK VARSITY RED' 2008",
        "sizes":[44,46,47],
        "price":7200,
        "discount":6500,
        "colour":"Bred",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/040913/1.jpg"
    },
    {
        "id":24,
        "brand":"Nike",
        "name":"AIR MAX 93 'BRIGHT CITRUS'",
        "sizes":[39,40,41,44],
        "price":6800,
        "discount":null,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/136274/1.jpg"
    },
    {
        "id":25,
        "brand":"Adidas",
        "name":"WMNS ZX 750 HD 'GREY SOLAR YELLOW'",
        "sizes":[38,39,40,43],
        "price":4900,
        "discount":null,
        "colour":"Gray",
        "picture":"https://cdn.flightclub.com/1000/TEMPLATE/246255/1.jpg"
    },
    {
        "id":26,
        "brand":"Adidas",
        "name":"ZX FLUX 'RED WHITE BLACK'",
        "sizes":[41,42,44,45,46],
        "price":7000,
        "discount":6800,
        "colour":"Red",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/148372/1.jpg"
    },
    {
        "id":27,
        "brand":"Adidas",
        "name":"FC UNION BERLIN X ZX 8000 'STADION AN DER ALTEN F??RSTEREI'",
        "sizes":[40,41,42,43,44,45],
        "price":6100,
        "discount":null,
        "colour":"White",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/266538/1.jpg"
    },
    {
        "id":28,
        "brand":"Converse",
        "name":"WEAPON HI 'BLACK WHITE'",
        "sizes":[39,40,41,43],
        "price":4800,
        "discount":null,
        "colour":"Black",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/990073/1.jpg"
    },
    {
        "id":29,
        "brand":"Nike",
        "name":"AIR FORCE 1 'GYM RED'",
        "sizes":[40,41,42,43,44,45,46],
        "price":3900,
        "discount":null,
        "colour":"Red",
        "picture":"https://cdn.flightclub.com/500/TEMPLATE/138166/1.jpg"
    },
    {
        "id":30,
        "brand":"Puma",
        "name":"SUEDE CLASSIC 21 'HONEY MUSTARD'",
        "sizes":[38,40,42,43,44,45,47],
        "price":3800,
        "discount":null,
        "colour":"Yellow",
        "picture":"https://cdn.flightclub.com/1000/TEMPLATE/263018/1.jpg"
    }
]
export default articles