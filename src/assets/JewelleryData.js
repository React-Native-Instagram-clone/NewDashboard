
const JwelleryColsDefs = [
    {
        field: 'itemNos',
        filter: true,
        floatingFilter: true,
        editable:true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'jewelleryType',
        filter: true,
        floatingFilter: true,
        editable:true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'Brand',
        filter: true,
        floatingFilter: true,
        editable:true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'detail',
        filter: true,
        floatingFilter: true,
        editable:true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'metal',
        filter: true,
        floatingFilter: true,
        editable:true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'grossWt', filter: true, floatingFilter: true,
        editable:true, headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },
    {
        field: 'price', filter: true, floatingFilter: true,
        editable:true, headerCheckboxSelection: true,
        checkboxSelection: true,
         showDisabledCheckboxes: true,
         allowContextMenuWithControlKey:true,
    },

];
const JwelleryData = [

    {
        "itemNos": 1,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "detail": "Schlumberger Bangle",
        "metal": "K18",
        "grossWt": 85.6,
        "price": 15000
    },
    {
        "itemNos": 2,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "metal": "SV925",
        "grossWt": 74.2,
        "price": 500,
        "Remarks": "Box/POUCH"
    },
    {
        "itemNos": 3,
        "jewelleryType": "Bangle",
        "Brand": "Cartier",
        "Size #": 18,
        "detail": "Love Full Diamond",
        "metal": "K18WG",
        "grossWt": 33.4,
        "price": 5200,
        "Remarks": "BOX/Driver"
    },
    {
        "itemNos": 4,
        "jewelleryType": "Necklace",
        "Brand": "Boucheron",
        "detail": "Tourble",
        "metal": "K18",
        "grossWt": 49.2,
        "price": 2100
    },
    {
        "itemNos": 5,
        "jewelleryType": "Necklace",
        "Brand": "Gucci",
        "detail": "ICON",
        "metal": "K18",
        "grossWt": 7.7,
        "price": 300
    },
    {
        "itemNos": 6,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "KNOT",
        "metal": "K18",
        "grossWt": 8.1,
        "price": 900,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 7,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "T SMILE LARGE",
        "metal": "K18YG",
        "grossWt": 3.7,
        "price": 500,
        "Remarks": "POUCH"
    },
    {
        "itemNos": 8,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "CICLADI",
        "metal": "K18WG",
        "grossWt": 32.5,
        "price": 1800,
        "Remarks": "INSREP/CASE"
    },
    {
        "itemNos": 9,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "Akoya Pearl - 6.0-7.8mm",
        "metal": "SV925",
        "grossWt": 153,
        "price": 800,
        "Remarks": "POUCH"
    },
    {
        "itemNos": 10,
        "jewelleryType": "Cuffs",
        "Brand": "Grisogono",
        "detail": "BLACK DIA",
        "metal": "K18PG",
        "grossWt": 29.9,
        "price": 1300
    },
    {
        "itemNos": 11,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "DIVA DREAM Diamond",
        "metal": "K18WG",
        "grossWt": 6.8,
        "price": 4200,
        "Remarks": "BOX/INSREP"
    },
    {
        "itemNos": 12,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "ROMAN SORBET Colour Stone",
        "metal": "K18WG",
        "grossWt": 12.6,
        "price": 900
    },
    {
        "itemNos": 13,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "JAZZ GRADUATED Diamond",
        "metal": "PT950",
        "grossWt": 4.3,
        "price": 600
    },
    {
        "itemNos": 14,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "PALOMA PICASSO Diamond",
        "metal": "K18WG",
        "grossWt": 2.9,
        "price": 1000
    },
    {
        "itemNos": 15,
        "jewelleryType": "Necklace",
        "Brand": "Piaget",
        "detail": "LIME HEART Diamond",
        "metal": "K18YG",
        "grossWt": 8.1,
        "price": 1000
    },
    {
        "itemNos": 16,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "OVAL KEY Diamond",
        "metal": "PT950",
        "grossWt": 4.8,
        "price": 800,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 17,
        "jewelleryType": "Necklace",
        "Brand": "Louis Vuitton",
        "detail": "STAR BLOSSOM",
        "metal": "K18",
        "grossWt": 6.6,
        "price": 700,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 18,
        "jewelleryType": "Bracelet",
        "Brand": "Chopard",
        "Size #": 12,
        "metal": "K18",
        "grossWt": 28,
        "price": 2800
    },
    {
        "itemNos": 19,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "Diamond",
        "metal": "K18",
        "grossWt": 4.3,
        "price": 900,
        "Remarks": "INSREP/CASE"
    },
    {
        "itemNos": 20,
        "jewelleryType": "Bracelet",
        "Brand": "Cartier",
        "detail": "DIAMANTS LEGERS Diamond 0.09ct",
        "metal": "K18PG",
        "grossWt": 2,
        "price": 400,
        "Remarks": "GAR"
    },
    {
        "itemNos": 21,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 9,
        "detail": "KNOT Diamond",
        "metal": "K18",
        "grossWt": 3,
        "price": 800,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 22,
        "jewelleryType": "Ring",
        "Brand": "Parade",
        "Size #": 13,
        "detail": "Diamond",
        "metal": "K18",
        "grossWt": 14.6,
        "price": 1100
    },
    {
        "itemNos": 23,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 11,
        "detail": "Rutile + Diamond",
        "metal": "K18YG",
        "grossWt": 16.1,
        "price": 2000,
        "Remarks": "INSREP/BOX"
    },
    {
        "itemNos": 24,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 55,
        "detail": "E58900",
        "metal": "K18",
        "grossWt": 11.4,
        "price": 3000
    },
    {
        "itemNos": 25,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 12.5,
        "detail": "T Diamond",
        "metal": "K18",
        "grossWt": 8.1,
        "price": 800,
        "Remarks": "Box"
    },
    {
        "itemNos": 26,
        "jewelleryType": "Ring",
        "Brand": "Gucci",
        "Size #": 13,
        "metal": "SV925",
        "grossWt": 2.1,
        "price": 100
    },
    {
        "itemNos": 27,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 61,
        "detail": "LEGEND",
        "metal": "K18WG",
        "grossWt": 12.3,
        "price": 700,
        "Remarks": "GAR/CASE"
    },
    {
        "itemNos": 28,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 52,
        "detail": "TRINITY",
        "metal": "K18",
        "grossWt": 15.5,
        "price": 700,
        "Remarks": "BOX/CASE/GA R"
    },
    {
        "itemNos": 29,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 22,
        "detail": "CENTURY Diamond",
        "metal": "K18WG",
        "grossWt": 12.4,
        "price": 600
    },
    {
        "itemNos": 30,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 61,
        "detail": "B-zero1",
        "metal": "K18WG",
        "grossWt": 13.7,
        "price": 600
    },
    {
        "itemNos": 31,
        "jewelleryType": "Necklace",
        "Brand": "Piaget",
        "detail": "HEART Torquoise",
        "metal": "K18WG",
        "grossWt": 10.4,
        "price": 900,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 32,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "detail": "MEPRAT",
        "metal": "K18WG",
        "grossWt": 31.1,
        "price": 1600,
        "Remarks": "GAR"
    },
    {
        "itemNos": 33,
        "jewelleryType": "Bracelet",
        "Brand": "Vancleef&Ar pels",
        "detail": "ALHAMBRA Carnelian",
        "metal": "K18PG",
        "grossWt": 1.6,
        "price": 700
    },
    {
        "itemNos": 34,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "MEDITERRANEA",
        "metal": "K18YG",
        "grossWt": 20.5,
        "price": 600,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 35,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "B-zero1",
        "metal": "K18",
        "grossWt": 12.2,
        "price": 1100,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 36,
        "jewelleryType": "Necklace",
        "Brand": "Mikimoto",
        "detail": "Akoya Pearl -  4.5-8.0mm",
        "metal": "SV925",
        "grossWt": 19.5,
        "price": 300
    },
    {
        "itemNos": 37,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "SEVILLANA",
        "metal": "K18",
        "grossWt": 6,
        "price": 300
    },
    {
        "itemNos": 38,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "detail": "LOVE",
        "metal": "K18WG",
        "grossWt": 7.9,
        "price": 200
    },
    {
        "itemNos": 39,
        "jewelleryType": "Necklace",
        "Brand": "Vancleef&Ar pels",
        "detail": "VINTAGE ALHAMBRA",
        "metal": "K18",
        "grossWt": 5.9,
        "price": 1300,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 40,
        "jewelleryType": "Bracelet",
        "Brand": "Cartier",
        "detail": "TRINITY",
        "metal": "K18",
        "grossWt": 2.4,
        "price": 400
    },
    {
        "itemNos": 41,
        "jewelleryType": "Cuffs",
        "Brand": "Tiffany",
        "metal": "K14",
        "grossWt": 13.1,
        "price": 400
    },
    {
        "itemNos": 42,
        "jewelleryType": "Pierce",
        "Brand": "Vancleef&Ar pels",
        "detail": "ALHAMBRA",
        "metal": "K18",
        "grossWt": 7.7,
        "price": 2000,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 43,
        "jewelleryType": "Pin",
        "Brand": "Cartier",
        "detail": "LADYBIRD",
        "metal": "K18",
        "grossWt": 4.4,
        "price": 1100
    },
    {
        "itemNos": 44,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "metal": "K18",
        "grossWt": 17.6,
        "price": 900,
        "Remarks": "BOX/GAR"
    },
    {
        "itemNos": 45,
        "jewelleryType": "Bracelet",
        "Brand": "Tiffany",
        "detail": "BOW Diamond",
        "metal": "PT950",
        "grossWt": 2.4,
        "price": 500
    },
    {
        "itemNos": 46,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "detail": "AMULETTE Diamond",
        "metal": "K18",
        "grossWt": 3,
        "price": 700
    },
    {
        "itemNos": 47,
        "jewelleryType": "Necklace",
        "Brand": "Louis Vuitton",
        "detail": "PANDANTIF",
        "metal": "K18WG",
        "grossWt": 4.1,
        "price": 800
    },
    {
        "itemNos": 48,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "DOTS Diamond",
        "metal": "PT950",
        "grossWt": 6.2,
        "price": 300,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 49,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "INTER LOCKING CIRCLE Diamond",
        "metal": "K18WG",
        "grossWt": 2.8,
        "price": 500
    },
    {
        "itemNos": 50,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "GARDEN FLOWER Diamond",
        "metal": "PT950",
        "grossWt": 3.1,
        "price": 400
    },
    {
        "itemNos": 51,
        "jewelleryType": "Bracelet",
        "Brand": "Boucheron",
        "detail": "RIBON",
        "metal": "K18",
        "grossWt": 27.5,
        "price": 1300,
        "Remarks": "CASE"
    },
    {
        "itemNos": 52,
        "jewelleryType": "Bracelet",
        "Brand": "Chanel",
        "detail": "Cermaic Ultra Small",
        "metal": "K18",
        "grossWt": 32.7,
        "price": 1700
    },
    {
        "itemNos": 53,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "detail": "T WIRE",
        "metal": "K18WG",
        "grossWt": 30.2,
        "price": 2000
    },
    {
        "itemNos": 54,
        "jewelleryType": "Bangle",
        "Brand": "Hermes",
        "detail": "ENAMEL",
        "metal": "Stainless Steel",
        "grossWt": 67.9,
        "price": 200,
        "Remarks": "CASE"
    },
    {
        "itemNos": 55,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "B-zero1",
        "metal": "K18WG",
        "grossWt": 15.2,
        "price": 1300
    },
    {
        "itemNos": 56,
        "jewelleryType": "Bracelet",
        "Brand": "Cartier",
        "detail": "SPARTACUS",
        "metal": "K18WG",
        "grossWt": 13.9,
        "price": 900
    },
    {
        "itemNos": 57,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "ETERNAL CIRCLE",
        "metal": "K18YG",
        "grossWt": 13.6,
        "price": 600,
        "Remarks": "CASH MEMO"
    },
    {
        "itemNos": 58,
        "jewelleryType": "Bangle",
        "Brand": "Bvlgari",
        "Size #": "M",
        "metal": "K18",
        "grossWt": 28.2,
        "price": 2000,
        "Remarks": "BOX/GAR"
    },
    {
        "itemNos": 59,
        "jewelleryType": "Bangle",
        "Brand": "Cartier",
        "Size #": 17,
        "detail": "TRINITY",
        "metal": "K18YG/WG/P G",
        "grossWt": 27.1,
        "price": 1700,
        "Remarks": "DRIVER"
    },
    {
        "itemNos": 60,
        "jewelleryType": "Bracelet",
        "Brand": "Cartier",
        "detail": "TRINITY",
        "metal": "K18",
        "grossWt": 61.9,
        "price": 2800,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 61,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 59,
        "detail": "TANKFRANCAISE Diamond",
        "metal": "K18WG",
        "grossWt": 10,
        "price": 700
    },
    {
        "itemNos": 62,
        "jewelleryType": "Ring",
        "Brand": "Vancleef&Ar pels",
        "detail": "Vintage Alhambra",
        "metal": "K18",
        "grossWt": 7.2,
        "price": 2700,
        "Remarks": "Guarantee"
    },
    {
        "itemNos": 63,
        "jewelleryType": "Ring",
        "Brand": "Gucci",
        "Size #": 11,
        "detail": "G Diamond",
        "metal": "K18WG",
        "grossWt": 10.5,
        "price": 400
    },
    {
        "itemNos": 64,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 52,
        "detail": "B-zero1 Diamond",
        "metal": "K18WG",
        "grossWt": 11.4,
        "price": 2400,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 65,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 54,
        "detail": "Diamond",
        "metal": "K18WG",
        "grossWt": 12.9,
        "price": 2100,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 66,
        "jewelleryType": "Ring",
        "Brand": "Piaget",
        "Size #": 57,
        "detail": "Diamond",
        "metal": "K18",
        "grossWt": 18.2,
        "price": 700
    },
    {
        "itemNos": 67,
        "jewelleryType": "Ring",
        "Brand": "Mikimoto",
        "Size #": 12.5,
        "detail": "Diamond-0.25 + Akoya Pearl",
        "metal": "Pt900",
        "grossWt": 6.4,
        "price": 400
    },
    {
        "itemNos": 68,
        "jewelleryType": "Ring",
        "Brand": "Mila Schon",
        "Size #": 14,
        "detail": "Diamond-0.47",
        "metal": "K18WG",
        "grossWt": 10.4,
        "price": 500
    },
    {
        "itemNos": 69,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 51,
        "detail": "B-zero1 Blue Topaz",
        "metal": "K18WG",
        "grossWt": 8.3,
        "price": 600
    },
    {
        "itemNos": 70,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 48,
        "detail": "LOVE Diamond",
        "metal": "K18",
        "grossWt": 3.8,
        "price": 900,
        "Remarks": "CASE/GAR"
    },
    {
        "itemNos": 71,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11.5,
        "detail": "DOT TWIST Diamond",
        "metal": "K18YG/PT95 0",
        "grossWt": 8,
        "price": 600
    },
    {
        "itemNos": 72,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "OPEN HEART Diamond",
        "metal": "PT950",
        "grossWt": 5.7,
        "price": 1500
    },
    {
        "itemNos": 73,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "SEVILLANA Diamond",
        "metal": "PT950",
        "grossWt": 6.5,
        "price": 1400
    },
    {
        "itemNos": 74,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "detail": "Etincelle Diamond",
        "metal": "K18",
        "grossWt": 5.2,
        "price": 1600,
        "Remarks": "BOX/GAR"
    },
    {
        "itemNos": 75,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "B'zero1",
        "metal": "K18PG",
        "grossWt": 13.9,
        "price": 1400
    },
    {
        "itemNos": 76,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "OPEN HEART Diamond",
        "metal": "K18",
        "grossWt": 8.7,
        "price": 900,
        "Remarks": "CASE"
    },
    {
        "itemNos": 77,
        "jewelleryType": "Necklace",
        "Brand": "Vancleef&Ar pels",
        "detail": "SWEET ALHAMBRA PAPILLON",
        "metal": "K18",
        "grossWt": 2.8,
        "price": 700,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 78,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "CROSS SMALL Diamond 0.42ct",
        "metal": "K18",
        "grossWt": 2.5,
        "price": 700
    },
    {
        "itemNos": 79,
        "jewelleryType": "Earring",
        "Brand": "Tiffany",
        "metal": "K18",
        "grossWt": 10.9,
        "price": 500
    },
    {
        "itemNos": 80,
        "jewelleryType": "Cuffs",
        "Brand": "Tiffany",
        "metal": "K18",
        "grossWt": 16.2,
        "price": 700
    },
    {
        "itemNos": 81,
        "jewelleryType": "Pierce",
        "Brand": "Cartier",
        "detail": "MINI HEART Diamond",
        "metal": "K18WG",
        "grossWt": 1.9,
        "price": 700
    },
    {
        "itemNos": 82,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "Soleste Pink Sapphire + Diamond",
        "metal": "PT950",
        "grossWt": 5.4,
        "price": 2100,
        "Remarks": "BOX"
    },
    {
        "itemNos": 83,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 51,
        "detail": "B-zero1",
        "metal": "K18YG/WG/P G",
        "grossWt": 8.8,
        "price": 800,
        "Remarks": "BOX"
    },
    {
        "itemNos": 84,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 15,
        "detail": "T WIDE Diamond",
        "metal": "K18WG",
        "grossWt": 7.6,
        "price": 900
    },
    {
        "itemNos": 85,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 50,
        "detail": "B-zero1 Diamond",
        "metal": "K18",
        "grossWt": 12.9,
        "price": 2300,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 86,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "detail": "B-zero1 Ceramic 57",
        "metal": "K18PG",
        "grossWt": 9.3,
        "price": 500,
        "Remarks": "BOX"
    },
    {
        "itemNos": 87,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 61,
        "detail": "LOVE",
        "metal": "K18PG",
        "grossWt": 7.6,
        "price": 600
    },
    {
        "itemNos": 88,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 53,
        "detail": "2C Diamond",
        "metal": "K18WG",
        "grossWt": 10.1,
        "price": 1100,
        "Remarks": "GAR/BOX/CAS E"
    },
    {
        "itemNos": 89,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 55,
        "detail": "LOVE Diamond",
        "metal": "K18WG",
        "grossWt": 9.3,
        "price": 900
    },
    {
        "itemNos": 90,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "CIRCLET Diamond",
        "metal": "PT950",
        "grossWt": 6.7,
        "price": 1300,
        "Remarks": "CASE"
    },
    {
        "itemNos": 91,
        "jewelleryType": "Ring",
        "Brand": "Vancleef&Ar pels",
        "Size #": 12,
        "detail": "Magic Mala",
        "metal": "K18",
        "grossWt": 10.9,
        "price": 2100,
        "Remarks": "BOX/GAR"
    },
    {
        "itemNos": 92,
        "jewelleryType": "Bangle",
        "Brand": "Hermes",
        "detail": "ENAMEL",
        "metal": "Stainless Steel",
        "grossWt": 17.7,
        "price": 100
    },
    {
        "itemNos": 93,
        "jewelleryType": "Pierce",
        "Brand": "Cartier",
        "detail": "TRINITY HOOP",
        "metal": "K18YG/WG/P G",
        "grossWt": 13.7,
        "price": 900,
        "Remarks": "CASE"
    },
    {
        "itemNos": 94,
        "jewelleryType": "Pierce",
        "Brand": "Tiffany",
        "detail": "T SMILE Diamond",
        "metal": "K18",
        "grossWt": 1.4,
        "price": 900,
        "Remarks": "CASE"
    },
    {
        "itemNos": 95,
        "jewelleryType": "Pierce",
        "Brand": "Tiffany",
        "detail": "Smile",
        "metal": "K18",
        "grossWt": 1.6,
        "price": 400
    },
    {
        "itemNos": 96,
        "jewelleryType": "Bangle",
        "Brand": "Bvlgari",
        "detail": "BVLGARI BVLGARI Diamond",
        "metal": "K18PG",
        "grossWt": 33.6,
        "price": 3000,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 97,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "detail": "TWIST",
        "metal": "SV925",
        "grossWt": 35.3,
        "price": 200
    },
    {
        "itemNos": 98,
        "jewelleryType": "Earring",
        "Brand": "Vancleef&Ar pels",
        "detail": "ALHAMBRA",
        "metal": "K18WG",
        "grossWt": 7.6,
        "price": 2000,
        "Remarks": "BOX/CASE/GA R"
    },
    {
        "itemNos": 99,
        "jewelleryType": "Cuffs",
        "Brand": "Breguet",
        "metal": "K18PG",
        "grossWt": 20.4,
        "price": 1400,
        "Remarks": "BOX/INSREP"
    },
    {
        "itemNos": 100,
        "jewelleryType": "Cuffs",
        "Brand": "Bvlgari",
        "detail": "Bvlgari Cuffs",
        "metal": "K18YG",
        "grossWt": 13.1,
        "price": 1000
    },
    {
        "itemNos": 101,
        "jewelleryType": "Bangle",
        "Brand": "Cartier",
        "Size #": 16,
        "detail": "LOVE",
        "metal": "K18WG",
        "grossWt": 36.9,
        "price": 2200,
        "Remarks": "DRIVER"
    },
    {
        "itemNos": 102,
        "jewelleryType": "Bangle",
        "Brand": "Hermes",
        "detail": "ENAMEL",
        "metal": "Stainless Steel",
        "grossWt": 19.2,
        "price": 100,
        "Remarks": "BOX"
    },
    {
        "itemNos": 103,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "Size #": 15,
        "detail": "Two T Diamond - 0.92",
        "metal": "K18",
        "grossWt": 20.9,
        "price": 3400,
        "Remarks": "BOX"
    },
    {
        "itemNos": 104,
        "jewelleryType": "Bangle",
        "Brand": "Tiffany",
        "detail": "T WIRE RUBY",
        "metal": "K18WG",
        "grossWt": 8.1,
        "price": 1000,
        "Remarks": "BOX"
    },
    {
        "itemNos": 105,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "Bvlgari",
        "metal": "K18",
        "grossWt": 15.4,
        "price": 900,
        "Remarks": "Box"
    },
    {
        "itemNos": 106,
        "jewelleryType": "Necklace",
        "Brand": "Bvlgari",
        "detail": "Astrale Cerki Diamond",
        "metal": "K18",
        "grossWt": 18,
        "price": 2200
    },
    {
        "itemNos": 107,
        "jewelleryType": "Necklace",
        "Brand": "Cartier",
        "detail": "HEART Diamond",
        "metal": "K18PG",
        "grossWt": 3.6,
        "price": 800,
        "Remarks": "CASH MEMOn"
    },
    {
        "itemNos": 108,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "CIRCLET MINI Diamond",
        "metal": "PT950",
        "grossWt": 2.7,
        "price": 500
    },
    {
        "itemNos": 109,
        "jewelleryType": "Necklace",
        "Brand": "Tiffany",
        "detail": "RETURN TO",
        "metal": "K18WG",
        "grossWt": 4.8,
        "price": 600,
        "Remarks": "BOX"
    },
    {
        "itemNos": 110,
        "jewelleryType": "Brooch",
        "Brand": "Tiffany",
        "detail": "Diamond",
        "metal": "K18WG/YG",
        "grossWt": 4.4,
        "price": 1000,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 111,
        "jewelleryType": "Pendant Top",
        "Brand": "Bvlgari",
        "detail": "OPTICAL",
        "Particulars": "Mother of Pearl",
        "metal": "K18",
        "grossWt": 31,
        "price": 1200
    },
    {
        "itemNos": 112,
        "jewelleryType": "Pendant Top",
        "Brand": "Unoaerre",
        "detail": "COIN",
        "metal": "K18",
        "grossWt": 4.9,
        "price": 300,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 113,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 12.5,
        "detail": "Aquamarine",
        "metal": "K18WG",
        "grossWt": 8.5,
        "price": 3100,
        "Remarks": "INSREP/BOX"
    },
    {
        "itemNos": 114,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 67,
        "detail": "TANKFRANCAISE Diamond",
        "metal": "K18WG",
        "grossWt": 20.3,
        "price": 2400
    },
    {
        "itemNos": 115,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 53,
        "detail": "TRINITY Diamond",
        "metal": "K18WG/PG/Y G",
        "grossWt": 5.2,
        "price": 1800,
        "Remarks": "INSREP/BOX/C ASE"
    },
    {
        "itemNos": 116,
        "jewelleryType": "Ring",
        "Brand": "Shaggie",
        "Size #": 12,
        "detail": "Diamond-0.90+0.37",
        "metal": "K18WG",
        "grossWt": 7.4,
        "price": 500
    },
    {
        "itemNos": 117,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 59,
        "detail": "JUSTE UN CLOU",
        "metal": "K18",
        "grossWt": 7.9,
        "price": 1000,
        "Remarks": "GAR/BOX/CAS E"
    },
    {
        "itemNos": 118,
        "jewelleryType": "Ring",
        "Brand": "Chaumet",
        "detail": "Green Garnet",
        "metal": "K18",
        "grossWt": 9.2,
        "price": 500
    },
    {
        "itemNos": 119,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 52,
        "detail": "Anniversary Diamond",
        "metal": "K18",
        "grossWt": 12.2,
        "price": 700
    },
    {
        "itemNos": 120,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 12.5,
        "detail": "ATLAS OPEN Diamond",
        "metal": "K18PG",
        "grossWt": 5.4,
        "price": 1200
    },
    {
        "itemNos": 121,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 13,
        "detail": "Diamond-0.50",
        "metal": "Pt950",
        "grossWt": 4,
        "price": 900
    },
    {
        "itemNos": 122,
        "jewelleryType": "Ring",
        "Brand": "Vancleef&Ar pels",
        "Size #": 51,
        "detail": "WHITE SHELL+Diamond",
        "metal": "K18",
        "grossWt": 6.8,
        "price": 1500,
        "Remarks": "CASE"
    },
    {
        "itemNos": 123,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 13,
        "detail": "Soleste Tanzanite + Diamond",
        "metal": "PT950",
        "grossWt": 6.4,
        "price": 2400,
        "Remarks": "BOX"
    },
    {
        "itemNos": 124,
        "jewelleryType": "Ring",
        "Brand": "Leo Pizzo",
        "Size #": 13,
        "detail": "Pink Sapphire + Diamond",
        "metal": "K18WG",
        "grossWt": 7.4,
        "price": 700
    },
    {
        "itemNos": 125,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 53,
        "detail": "SERPENTI Diamond",
        "metal": "K18",
        "grossWt": 7.1,
        "price": 1900,
        "Remarks": "INSREP"
    },
    {
        "itemNos": 126,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "metal": "K18YG/WG/P G",
        "grossWt": 9.2,
        "price": 2800
    },
    {
        "itemNos": 127,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 52,
        "detail": "B-zero1",
        "metal": "K18/CE",
        "grossWt": 9.3,
        "price": 500,
        "Remarks": "BOX"
    },
    {
        "itemNos": 128,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 12,
        "detail": "Diamond - 0.09",
        "metal": "K18",
        "grossWt": 5.1,
        "price": 700
    },
    {
        "itemNos": 129,
        "jewelleryType": "Ring",
        "Brand": "Louis Vuitton",
        "Size #": 57,
        "detail": "Diamond",
        "metal": "K18",
        "grossWt": 1.8,
        "price": 800,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 130,
        "jewelleryType": "Ring",
        "Brand": "Gucci",
        "Size #": 11,
        "detail": "Icon Gucci",
        "metal": "K18",
        "grossWt": 4.4,
        "price": 300
    },
    {
        "itemNos": 131,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 56,
        "detail": "Diamond + Colour Stone",
        "metal": "K18WG",
        "grossWt": 8.9,
        "price": 700,
        "Remarks": "GAR/BOX"
    },
    {
        "itemNos": 132,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 13,
        "detail": "PARENTESI Diamond",
        "metal": "K18WG",
        "grossWt": 9,
        "price": 900
    },
    {
        "itemNos": 133,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 55,
        "detail": "B Zero1 Diamond",
        "metal": "K18WG",
        "grossWt": 13.3,
        "price": 2500,
        "Remarks": "Box"
    },
    {
        "itemNos": 134,
        "jewelleryType": "Ring",
        "Brand": "Chanel",
        "Size #": 52,
        "metal": "K18",
        "grossWt": 12.6,
        "price": 900
    },
    {
        "itemNos": 135,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 52,
        "detail": "Diamond - 0.42",
        "Particulars": "F VVS2 VG",
        "metal": "PT950",
        "grossWt": 3.2,
        "price": 1000,
        "Remarks": "CASE"
    },
    {
        "itemNos": 136,
        "jewelleryType": "Ring",
        "Brand": "Gucci",
        "Size #": 11,
        "detail": "ICON WIDE",
        "metal": "K18WG",
        "grossWt": 7.9,
        "price": 300
    },
    {
        "itemNos": 137,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 56,
        "detail": "TRINITY WEDDING",
        "metal": "K18",
        "grossWt": 5.1,
        "price": 300
    },
    {
        "itemNos": 138,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 52,
        "detail": "Juste Un Clou",
        "metal": "K18",
        "grossWt": 8.1,
        "price": 900
    },
    {
        "itemNos": 139,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 13,
        "detail": "DOUBLE LOGO Diamond",
        "metal": "K18",
        "grossWt": 6.7,
        "price": 400,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 140,
        "jewelleryType": "Ring",
        "Brand": "Boucheron",
        "Size #": 12,
        "detail": "Diamond",
        "metal": "Pt950",
        "grossWt": 3.2,
        "price": 400
    },
    {
        "itemNos": 141,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 51,
        "detail": "ENTRELACE Diamond",
        "metal": "K18",
        "grossWt": 7.4,
        "price": 1300,
        "Remarks": "CASE/GAR"
    },
    {
        "itemNos": 142,
        "jewelleryType": "Ring",
        "Brand": "Boucheron",
        "Size #": 16.5,
        "detail": "Diamond",
        "metal": "K18WG",
        "grossWt": 10.8,
        "price": 600
    },
    {
        "itemNos": 143,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "T TWO Diamond",
        "metal": "K18YG",
        "grossWt": 5.2,
        "price": 1100
    },
    {
        "itemNos": 144,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11.5,
        "detail": "T TWO Diamond",
        "metal": "K18",
        "grossWt": 7,
        "price": 700
    },
    {
        "itemNos": 145,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 65,
        "detail": "B-zero1",
        "metal": "K18/CE",
        "grossWt": 11.9,
        "price": 600
    },
    {
        "itemNos": 146,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 13,
        "metal": "K18",
        "grossWt": 6.6,
        "price": 500
    },
    {
        "itemNos": 147,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 54,
        "detail": "Diamond",
        "metal": "K18PG",
        "grossWt": 9.2,
        "price": 900
    },
    {
        "itemNos": 148,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 52,
        "detail": "FIOREVER Diamond",
        "metal": "K18",
        "grossWt": 5.5,
        "price": 1600,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 149,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "T WIRE Diamond",
        "metal": "K18",
        "grossWt": 2.2,
        "price": 600,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 150,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 13,
        "detail": "TUBOGAS",
        "metal": "K18",
        "grossWt": 14.3,
        "price": 800
    },
    {
        "itemNos": 151,
        "jewelleryType": "Ring",
        "Brand": "Omega",
        "Size #": 51,
        "detail": "Diamond",
        "metal": "K18YG",
        "grossWt": 5.8,
        "price": 400,
        "Remarks": "BOX/GAR"
    },
    {
        "itemNos": 152,
        "jewelleryType": "Ring",
        "Brand": "Chaumet",
        "Size #": 11.5,
        "detail": "Sapphire + Ruby",
        "metal": "K18",
        "grossWt": 8.5,
        "price": 400
    },
    {
        "itemNos": 153,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "RIBON Diamond",
        "metal": "PT950",
        "grossWt": 3.8,
        "price": 600,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 154,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 56,
        "detail": "B-zero1 Diamond",
        "metal": "K18",
        "grossWt": 11.2,
        "price": 2600
    },
    {
        "itemNos": 155,
        "jewelleryType": "Ring",
        "Brand": "Vancleef&Ar pels",
        "detail": "ALHAMBRA Diamond",
        "metal": "K18",
        "grossWt": 6.7,
        "price": 1400,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 156,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 59,
        "detail": "B-zero1",
        "metal": "K18",
        "grossWt": 12.3,
        "price": 600
    },
    {
        "itemNos": 157,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "detail": "PARIS Diamond I24646",
        "metal": "K18",
        "grossWt": 12.7,
        "price": 1500
    },
    {
        "itemNos": 158,
        "jewelleryType": "Ring",
        "Brand": "Tiffany",
        "Size #": 11,
        "detail": "T TWO",
        "metal": "K18",
        "grossWt": 5,
        "price": 600,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 159,
        "jewelleryType": "Ring",
        "Brand": "Bvlgari",
        "Size #": 54,
        "detail": "B-zero1",
        "metal": "K18",
        "grossWt": 10.9,
        "price": 600,
        "Remarks": "BOX/CASE"
    },
    {
        "itemNos": 160,
        "jewelleryType": "Ring",
        "Brand": "Cartier",
        "Size #": 49,
        "detail": "LOVE Diamond",
        "metal": "K18",
        "grossWt": 4.4,
        "price": 500,
        "Remarks": "GAR"
    },
    {
        "itemNos": 161,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Paraiba - 2.61 Diamond - 0.41+0.18",
        "Particulars": "Brazil / Bluish-Green / Heat",
        "metal": "PT900",
        "grossWt": 7,
        "price": 8500
    },
    {
        "itemNos": 162,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 3.35 Diamond - 1.38",
        "Particulars": "Colombia / Int.To Viv. Green / Minor",
        "metal": "Pt900",
        "grossWt": 7.2,
        "price": 11000,
        "Remarks": "Vibrant"
    },
    {
        "itemNos": 163,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 12.73Diamond - 1.71",
        "Particulars": "Sri Lanka / Blue / Heat",
        "metal": "Pt900",
        "grossWt": 13.4,
        "price": 5500
    },
    {
        "itemNos": 164,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-13.31Diamond - 3.60",
        "Particulars": "Burma / Pinkish-Red / H(a)",
        "metal": "PT",
        "grossWt": 15,
        "price": 17000
    },
    {
        "itemNos": 165,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 17.124Diamond - 4.433",
        "Particulars": "No Heat",
        "metal": "PT",
        "grossWt": 16.8,
        "price": 23500
    },
    {
        "itemNos": 166,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Tanzanite - 44.43 Diamond - 1.75",
        "metal": "PT900",
        "grossWt": 29.9,
        "price": 4800
    },
    {
        "itemNos": 167,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 3.54 Diamond - 2.57",
        "metal": "Pt900",
        "grossWt": 15.06,
        "price": 4600
    },
    {
        "itemNos": 168,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Alexandrite-2.06 Diamond - 0.72",
        "metal": "Pt900",
        "grossWt": 9.3,
        "price": 13800
    },
    {
        "itemNos": 169,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 1.592 Diamond - 1.20",
        "Particulars": "**** / **** / No Oil",
        "metal": "Pt900",
        "grossWt": 6.8,
        "price": 3700
    },
    {
        "itemNos": 170,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Aquamarine-10.43Diamond - 0.38",
        "metal": "PT",
        "grossWt": 12.56,
        "price": 2400
    },
    {
        "itemNos": 171,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Demantoid Garnet - 4.27 Diamond - 3.13",
        "Particulars": "Ural(Russia) / Vived Yellowish Green / No Heat",
        "metal": "Pt900",
        "grossWt": 9,
        "price": 18400
    },
    {
        "itemNos": 172,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 36.93 Diamond - 8.22",
        "metal": "Pt900",
        "grossWt": 49.47,
        "price": 17700
    },
    {
        "itemNos": 173,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 11.55 Diamond - 0.98",
        "Particulars": "Sri Lanka / Royal Blue / H",
        "metal": "PT900",
        "grossWt": 16.3,
        "price": 6900
    },
    {
        "itemNos": 174,
        "jewelleryType": "Ring",
        "detail": "Padparadscha Sapphire - 4.11 Diamond - 1.80",
        "Particulars": "Sri Lanka / Pinkish Orange / Heat",
        "metal": "Pt900",
        "grossWt": 8.9,
        "price": 5000
    },
    {
        "itemNos": 175,
        "jewelleryType": "Ring",
        "detail": "Emerald - 6.90 Diamond - 1.27",
        "metal": "PT900",
        "grossWt": 11.9,
        "price": 2500
    },
    {
        "itemNos": 176,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Black Opal - 8.15  Diamond - 1.59",
        "metal": "PT900",
        "grossWt": 17.9,
        "price": 2800
    },
    {
        "itemNos": 177,
        "jewelleryType": "Ring",
        "Size #": 8.5,
        "detail": "Ruby-5.02 Diamond - 1.07",
        "Particulars": "Burma(Myanmar) / Pigeon Blood / H(b)",
        "metal": "PT900",
        "grossWt": 7.5,
        "price": 5900
    },
    {
        "itemNos": 178,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Star Sapphire - 23.40 Diamond - 0.74+0.37",
        "metal": "PT900",
        "grossWt": 13,
        "price": 800
    },
    {
        "itemNos": 179,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 1.49 Diamond - 1.11",
        "Particulars": "Sri Lanka / Royal Blue / No Heat",
        "metal": "PT900",
        "grossWt": 13.1,
        "price": 400
    },
    {
        "itemNos": 180,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Paraiba-3.93 Diamond - 1.03",
        "Particulars": "Brazil / Greenish-Blue / No Treat",
        "metal": "PT",
        "grossWt": 9.53,
        "price": 23000,
        "Remarks": "Neon Colour"
    },
    {
        "itemNos": 181,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Emerald - 12.01 Diamond - 0.97",
        "metal": "Pt900",
        "grossWt": 13.8,
        "price": 3300
    },
    {
        "itemNos": 182,
        "jewelleryType": "Ring",
        "detail": "Emerald - 13.795 Diamond - 1.120",
        "metal": "Pt900",
        "grossWt": 20,
        "price": 6700
    },
    {
        "itemNos": 183,
        "jewelleryType": "Ring",
        "detail": "Padparadscha Sapphire - 9.21 Diamond - 0.671",
        "Particulars": "Sri Lanka / Pinkish Orange / No Heat",
        "metal": "Pt900",
        "grossWt": 8.6,
        "price": 12900
    },
    {
        "itemNos": 184,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Tanzanite - 15.47 Diamond - 1.32",
        "metal": "K18",
        "grossWt": 10.9,
        "price": 1600
    },
    {
        "itemNos": 185,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Violet Star Sapphire - 37.51 Diamond - 1.02",
        "metal": "PT900",
        "grossWt": 20.3,
        "price": 500
    },
    {
        "itemNos": 186,
        "jewelleryType": "Ring",
        "detail": "Sapphire - 10.05Diamond - 0.95",
        "Particulars": "Burma / Blue / No Heat",
        "metal": "PM850",
        "grossWt": 11.1,
        "price": 13000
    },
    {
        "itemNos": 187,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 178.76 Diamond - 1.00",
        "Particulars": "Colombia / Green / Minor",
        "metal": "Pt900",
        "grossWt": 52.9,
        "price": 9200
    },
    {
        "itemNos": 188,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 5.60 Diamond - 1.04",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT900",
        "grossWt": 7.9,
        "price": 7400,
        "Remarks": "Muzo"
    },
    {
        "itemNos": 189,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-10.55 Diamond - 2.98",
        "Particulars": "Myanmar / Pinkish Red / Minor",
        "metal": "PT900",
        "grossWt": 21.1,
        "price": 3000
    },
    {
        "itemNos": 190,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 16.11Diamond - 1.98",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 16.9,
        "price": 6800
    },
    {
        "itemNos": 191,
        "jewelleryType": "Ring",
        "detail": "Ruby - 13.75Diamond - 4.95",
        "Particulars": "Myanmar / Reddish Pink / Minor",
        "metal": "Pt900",
        "grossWt": 20.7,
        "price": 7500
    },
    {
        "itemNos": 192,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-4.67Diamond - 1.21",
        "Particulars": "Myanmar / Pigeon Blood / Minor",
        "metal": "PT900",
        "grossWt": 16.9,
        "price": 7400
    },
    {
        "itemNos": 193,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 2.36  Diamond - 2.01",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT950",
        "grossWt": 7.1,
        "price": 1900
    },
    {
        "itemNos": 194,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Chrysoberyl Catseye - 14.636 Diamond - 1.86",
        "metal": "PT950",
        "grossWt": 10.8,
        "price": 1500
    },
    {
        "itemNos": 195,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Padparadscha Sapphire - 3.59 Diamond - 0.55",
        "Particulars": "Sri Lanka / Orangy Pink / No Heat",
        "metal": "K18WG",
        "grossWt": 4.3,
        "price": 1200
    },
    {
        "itemNos": 196,
        "jewelleryType": "Ring",
        "Size #": 15.5,
        "detail": "Black Opal - 11.5  Diamond - 1.18",
        "metal": "PT900",
        "grossWt": 12.4,
        "price": 800
    },
    {
        "itemNos": 197,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Alexandrite-5.17 Diamond - 2.09",
        "metal": "PT900",
        "grossWt": 10.3,
        "price": 4300
    },
    {
        "itemNos": 198,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby - 5.74 Diamond - 1.80",
        "Particulars": "Myanmar / Pinkish Red / Minor",
        "metal": "Pt900",
        "grossWt": 9.7,
        "price": 1900
    },
    {
        "itemNos": 199,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 9.88 Diamond - 0.68",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "PT900",
        "grossWt": 12.8,
        "price": 2400
    },
    {
        "itemNos": 200,
        "jewelleryType": "Ring",
        "detail": "Emerald - 8.47 Diamond - 4.71",
        "metal": "Pt900",
        "grossWt": 28.5,
        "price": 1900
    },
    {
        "itemNos": 201,
        "jewelleryType": "Brooch",
        "detail": "Morganite-185.765 Colour Stone",
        "metal": "K18",
        "grossWt": 84.7,
        "price": 2800
    },
    {
        "itemNos": 202,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Emerald - 3.91 Diamond - 0.44",
        "metal": "Pt900",
        "grossWt": 9.1,
        "price": 1900
    },
    {
        "itemNos": 203,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 5.05 Diamond - 0.88",
        "metal": "Pt900",
        "grossWt": 11.4,
        "price": 1700
    },
    {
        "itemNos": 204,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-6.26 Diamond - 2.44",
        "Particulars": "Thailand / Purple Red / Heat",
        "metal": "Pt950",
        "grossWt": 9.8,
        "price": 14800
    },
    {
        "itemNos": 205,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Tourmaline-25.14 Diamond - 1.35",
        "metal": "Pt900",
        "grossWt": 21.9,
        "price": 1600
    },
    {
        "itemNos": 206,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Alexandrite-2.124 Diamond - 1.94",
        "Particulars": "Brazil / Blue-Green Change to Purple /\n****",
        "metal": "Pt900",
        "grossWt": 9.5,
        "price": 9200,
        "Remarks": "Colour Change"
    },
    {
        "itemNos": 207,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Ruby-2.812 Diamond - 2.05",
        "Particulars": "Thailand / Red / Minor",
        "metal": "Pt900",
        "grossWt": 14.2,
        "price": 2100
    },
    {
        "itemNos": 208,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Black Opal - 4.02  Diamond - 0.72",
        "metal": "PT900",
        "grossWt": 13.3,
        "price": 1500
    },
    {
        "itemNos": 209,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 6.90 Diamond - 1.80",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 11,
        "price": 2100
    },
    {
        "itemNos": 210,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Ruby-1.94 Diamond - 0.71",
        "Particulars": "Mozambique / Vivid Pinkish Red / Minor",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 900
    },
    {
        "itemNos": 211,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-9.48 Diamond - 2.04",
        "Particulars": "Myanmar / Pinkish Red / Minor",
        "metal": "PT900",
        "grossWt": 17,
        "price": 2300
    },
    {
        "itemNos": 212,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 6.01Diamond - 0.49",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PM850",
        "grossWt": 8,
        "price": 800
    },
    {
        "itemNos": 213,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 15.10 Diamond - 4.08",
        "metal": "PT900",
        "grossWt": 16.7,
        "price": 1100
    },
    {
        "itemNos": 214,
        "jewelleryType": "Ring",
        "detail": "Ruby-4.36 Diamond - 0.803",
        "Particulars": "Myanmar / Pinkish Red / Minor",
        "metal": "Pt900",
        "grossWt": 10.8,
        "price": 1100
    },
    {
        "itemNos": 215,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 3.92 Diamond - 1.07",
        "Particulars": "Sri Lanka / Cornflower Blue / No Heat",
        "metal": "PT950",
        "grossWt": 5.3,
        "price": 1400
    },
    {
        "itemNos": 216,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-1.55 Diamond - 0.51",
        "Particulars": "Thailand / Red Pigeon Blood / Heat",
        "metal": "PT900",
        "grossWt": 5.5,
        "price": 600
    },
    {
        "itemNos": 217,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 15.28 Diamond - 0.99",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "PT900",
        "grossWt": 16.1,
        "price": 4800
    },
    {
        "itemNos": 218,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 11.53 Diamond - 1.30",
        "metal": "PT900",
        "grossWt": 14.7,
        "price": 3600
    },
    {
        "itemNos": 219,
        "jewelleryType": "Ring",
        "detail": "Ruby-2.970 Diamond - 1.60",
        "Particulars": "Thailand / Purplish-Red / Heat",
        "metal": "PT",
        "grossWt": 11.5,
        "price": 5000
    },
    {
        "itemNos": 220,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 3.12 Diamond - 1.71",
        "Particulars": "Colombia / Green",
        "metal": "Pt900",
        "grossWt": 8.3,
        "price": 13700
    },
    {
        "itemNos": 221,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Paraiba-8.57 Diamond - 1.85",
        "Particulars": "Mozambique / Green-Blue",
        "metal": "Pt900",
        "grossWt": 13.3,
        "price": 20000
    },
    {
        "itemNos": 222,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Sapphire - 9.67 Diamond - 1.37",
        "metal": "PT900",
        "grossWt": 15.5,
        "price": 5000
    },
    {
        "itemNos": 223,
        "jewelleryType": "Ring",
        "detail": "Ruby - 11.45 Diamond - 0.51",
        "Particulars": "Vietnam / Purplish Red / No Heat",
        "metal": "Pt900",
        "grossWt": 10,
        "price": 3700
    },
    {
        "itemNos": 224,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 5.26 Diamond - 0.55",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT900/850",
        "grossWt": 12.4,
        "price": 1200
    },
    {
        "itemNos": 225,
        "jewelleryType": "Ring",
        "detail": "Ruby-3.50 Diamond - 0.55",
        "Particulars": "Myanmar / Pinkish Red / Heat",
        "metal": "PT900",
        "grossWt": 8.8,
        "price": 1600
    },
    {
        "itemNos": 226,
        "jewelleryType": "Ring",
        "detail": "Emerald - 14.51 Diamond - 1.30",
        "metal": "K18WG",
        "grossWt": 21.9,
        "price": 700
    },
    {
        "itemNos": 227,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Star Sapphire - 31.35  Diamond - 1.80",
        "metal": "PT900",
        "grossWt": 24.4,
        "price": 600
    },
    {
        "itemNos": 228,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 5.141 Diamond - 1.46",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "Pt950",
        "grossWt": 8.1,
        "price": 1200
    },
    {
        "itemNos": 229,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-22.07 Diamond - 0.68",
        "Particulars": "Mozambique / Purplish Red / No Heat",
        "metal": "PM900",
        "grossWt": 11.9,
        "price": 400
    },
    {
        "itemNos": 230,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Black Opal - 12.77  Diamond - 1.32",
        "metal": "PT950",
        "grossWt": 12.2,
        "price": 600
    },
    {
        "itemNos": 231,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Ruby-4.38 Diamond - 1.31",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "K18",
        "grossWt": 12.4,
        "price": 1200
    },
    {
        "itemNos": 232,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 1.93 Diamond - 2.00",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT900/850",
        "grossWt": 19.2,
        "price": 1200
    },
    {
        "itemNos": 233,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 4.71Diamond - 0.50",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 7.8,
        "price": 1700
    },
    {
        "itemNos": 234,
        "jewelleryType": "Ring",
        "detail": "Emerald CatsEye- 47.605 Diamond - 0.92",
        "metal": "Pt900",
        "grossWt": 21.5,
        "price": 3000
    },
    {
        "itemNos": 235,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 7.012 Diamond - 0.53",
        "Particulars": "Madagascar / Cornflower Blue / No Heat",
        "metal": "PT900",
        "grossWt": 8.3,
        "price": 1800
    },
    {
        "itemNos": 236,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Black Opal - 10.971  Diamond - 1.45",
        "metal": "PT950",
        "grossWt": 14.7,
        "price": 1300
    },
    {
        "itemNos": 237,
        "jewelleryType": "Ring",
        "detail": "Sapphire - 8.92Diamond - 0.374",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "Pt900",
        "grossWt": 9.2,
        "price": 1500
    },
    {
        "itemNos": 238,
        "jewelleryType": "Ring",
        "Size #": 20,
        "detail": "Emerald - 2.65 Diamond - 0.36",
        "metal": "K18",
        "grossWt": 25.1,
        "price": 1000
    },
    {
        "itemNos": 239,
        "jewelleryType": "Ring",
        "detail": "Jadeite - 6.782 Diamond - 1.60",
        "metal": "K18WG",
        "grossWt": 14.1,
        "price": 1700
    },
    {
        "itemNos": 240,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Alexandrite-1.59 Diamond - 2.15",
        "Particulars": "Brazil / Green-Blue Changing to Purple\n/ ****",
        "metal": "Pt900",
        "grossWt": 7.3,
        "price": 6900,
        "Remarks": "Colour Change"
    },
    {
        "itemNos": 241,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 5.00",
        "metal": "K18WG",
        "grossWt": 17.8,
        "price": 1500
    },
    {
        "itemNos": 242,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 1.90",
        "metal": "K18WG",
        "grossWt": 14.8,
        "price": 600
    },
    {
        "itemNos": 243,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 3.00",
        "metal": "PT950/850",
        "grossWt": 8.3,
        "price": 400
    },
    {
        "itemNos": 244,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 5.00",
        "metal": "K18YG",
        "grossWt": 18.3,
        "price": 1500
    },
    {
        "itemNos": 245,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 10.00",
        "metal": "K18WG",
        "grossWt": 46,
        "price": 3600
    },
    {
        "itemNos": 246,
        "jewelleryType": "Necklace",
        "Size #": 38,
        "detail": "Emerald - 3.46 Diamond - 2.05",
        "Particulars": "Colombia / Green / F1",
        "metal": "PT900/850",
        "grossWt": 13.2,
        "price": 3500
    },
    {
        "itemNos": 247,
        "jewelleryType": "Necklace",
        "Size #": 44,
        "detail": "Chrysoberyl Catseye - 5.206 Diamond - 0.36",
        "metal": "PT900/850",
        "grossWt": 5.2,
        "price": 1200
    },
    {
        "itemNos": 248,
        "jewelleryType": "Necklace",
        "Size #": 44,
        "detail": "Emerald - 16.37 Diamond - 1.36",
        "metal": "Pt900/850",
        "grossWt": 11.2,
        "price": 3400
    },
    {
        "itemNos": 249,
        "jewelleryType": "Necklace",
        "Size #": 44,
        "detail": "Indigolite Tourmaline-28.609 Diamond - 1.33",
        "metal": "Pt950",
        "grossWt": 18.6,
        "price": 2900
    },
    {
        "itemNos": 250,
        "jewelleryType": "Necklace",
        "Size #": 45,
        "detail": "Star Sapphire - 16.872 Diamond - 1.75",
        "metal": "PT900/850",
        "grossWt": 12.4,
        "price": 1900
    },
    {
        "itemNos": 251,
        "jewelleryType": "Ring",
        "detail": "Emerald - 2.65 Diamond - 0.92",
        "metal": "Pt900",
        "grossWt": 10.2,
        "price": 1200
    },
    {
        "itemNos": 252,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-3.01 Diamond - 1.14",
        "Particulars": "Burma(Myanmar) / Red /",
        "metal": "PT950",
        "grossWt": 7.3,
        "price": 1700
    },
    {
        "itemNos": 253,
        "jewelleryType": "Ring",
        "Size #": 10.5,
        "detail": "Sapphire - 8.65 Diamond - 1.17",
        "metal": "PT900",
        "grossWt": 12.3,
        "price": 1400
    },
    {
        "itemNos": 254,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 2.25 Opal-1.46 Diamond - 1.94",
        "metal": "K18WG",
        "grossWt": 10.2,
        "price": 2200
    },
    {
        "itemNos": 255,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Star Sapphire - 25.10 Diamond - 0.60",
        "metal": "PT900",
        "grossWt": 18.3,
        "price": 500
    },
    {
        "itemNos": 256,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Tanzanite - 5.48 Diamond - 0.24",
        "metal": "PT900",
        "grossWt": 8.8,
        "price": 500
    },
    {
        "itemNos": 257,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Green Garnet-1.70 Diamond-0.64",
        "metal": "PT900",
        "grossWt": 7.3,
        "price": 500
    },
    {
        "itemNos": 258,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Black Opal - 3.38  Diamond - 0.38",
        "metal": "PT900",
        "grossWt": 10.5,
        "price": 600
    },
    {
        "itemNos": 259,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.22 Diamond - 1.38",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "K18",
        "grossWt": 9.3,
        "price": 600
    },
    {
        "itemNos": 260,
        "jewelleryType": "Ring",
        "Size #": 21,
        "detail": "Star Sapphire - 16.60 Diamond - 2.48",
        "metal": "PT900",
        "grossWt": 17.3,
        "price": 600
    },
    {
        "itemNos": 261,
        "jewelleryType": "Ring",
        "detail": "Ruby-4.55 Diamond - 1.58",
        "Particulars": "Madagascar / Red / No Heat",
        "metal": "Pt900",
        "grossWt": 8.9,
        "price": 1300
    },
    {
        "itemNos": 262,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 3.04 Diamond - 1.24",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "PT950",
        "grossWt": 5.7,
        "price": 1000
    },
    {
        "itemNos": 263,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Pink Sapphire - 2.32 Diamond - 1.10",
        "Particulars": "Madagascar / Pink / Heat",
        "metal": "PT950",
        "grossWt": 4.8,
        "price": 300
    },
    {
        "itemNos": 264,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 6.052 Diamond - 1.50",
        "Particulars": "Sri Lanka / Cornflower Blue / No Heat",
        "metal": "PT850",
        "grossWt": 10.3,
        "price": 2800
    },
    {
        "itemNos": 265,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Purple Pink Sapphire - 2.20 Diamond - 0.39",
        "metal": "PT900",
        "grossWt": 6.2,
        "price": 700
    },
    {
        "itemNos": 266,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Paraiba-0.84 Diamond - 0.36",
        "Particulars": "Brazil / Neon Blue",
        "metal": "Pt900",
        "grossWt": 5.1,
        "price": 1200
    },
    {
        "itemNos": 267,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Star Ruby - 5.38 Diamond - 1.15",
        "Particulars": "Myanmar / Reddish Pink / No Heat",
        "metal": "PT900",
        "grossWt": 10.3,
        "price": 400
    },
    {
        "itemNos": 268,
        "jewelleryType": "Ring",
        "detail": "Ruby-3.03 Diamond - 0.76+0.44",
        "Particulars": "Myanmar / Red / Minor",
        "metal": "K18WG",
        "grossWt": 4.7,
        "price": 2300
    },
    {
        "itemNos": 269,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Black Opal - 8.24  Diamond - 1.60",
        "metal": "PT900",
        "grossWt": 10.9,
        "price": 700
    },
    {
        "itemNos": 270,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Emerald - 1.168 Diamond - 0.20",
        "metal": "PT900",
        "grossWt": 4,
        "price": 200
    },
    {
        "itemNos": 271,
        "jewelleryType": "Ring",
        "detail": "Emerald - 2.35   Diamond - 0.14",
        "metal": "PT900",
        "grossWt": 10.9,
        "price": 300
    },
    {
        "itemNos": 272,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 5.53 Diamond - 0.35",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT950",
        "grossWt": 7.2,
        "price": 2000
    },
    {
        "itemNos": 273,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 2.77 + Diamond",
        "metal": "PT950",
        "grossWt": 7,
        "price": 500
    },
    {
        "itemNos": 274,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Padparadscha Sapphire - 2.93 Diamond - 0.65",
        "Particulars": "Madagascar / Orangy Pink / No Heat",
        "metal": "PT900",
        "grossWt": 6.4,
        "price": 1200
    },
    {
        "itemNos": 275,
        "jewelleryType": "Pendant Top",
        "detail": "Ruby-2.66 Diamond - 0.79",
        "Particulars": "Myanmar / Pigeon Blood / Heat",
        "metal": "PT900",
        "grossWt": 5,
        "price": 1000
    },
    {
        "itemNos": 276,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.27Diamond - 0.58",
        "Particulars": "Myanmar / Pigeon Blood / Minor",
        "metal": "PT900",
        "grossWt": 9.5,
        "price": 900
    },
    {
        "itemNos": 277,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 1.91 Diamond - 0.56",
        "metal": "PT900",
        "grossWt": 13.3,
        "price": 400
    },
    {
        "itemNos": 278,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.93 Diamond - 1.17",
        "metal": "Pt900",
        "grossWt": 10.6,
        "price": 500
    },
    {
        "itemNos": 279,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Padparadscha Sapphire - 1.32 Diamond - 0.82",
        "Particulars": "Madagascar / Orange Pink / No Heat",
        "metal": "K18/PT900",
        "grossWt": 12.9,
        "price": 500
    },
    {
        "itemNos": 280,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-1.90 Diamond - 0.60",
        "Particulars": "Burma(Myanmar) / Purplish Red / Heat(Min.)",
        "metal": "K18WG",
        "grossWt": 10.3,
        "price": 500
    },
    {
        "itemNos": 281,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.05 Diamond - 0.65",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "Pt900",
        "grossWt": 7.1,
        "price": 500
    },
    {
        "itemNos": 282,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 4.07 Diamond - 0.20",
        "metal": "PT900",
        "grossWt": 11.3,
        "price": 1000
    },
    {
        "itemNos": 283,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 1.432 Diamond - 1.88",
        "metal": "PT950",
        "grossWt": 6.8,
        "price": 600
    },
    {
        "itemNos": 284,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-9.58 Diamond - 0.46",
        "Particulars": "**** / Purple Red / No Heat",
        "metal": "PT900",
        "grossWt": 10.3,
        "price": 500
    },
    {
        "itemNos": 285,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire-5.59 Diamond - 0.60",
        "Particulars": "**** / **** / No Heat",
        "metal": "PT900",
        "grossWt": 7.2,
        "price": 600
    },
    {
        "itemNos": 286,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 1.66 Diamond - 0.05",
        "metal": "K18",
        "grossWt": 16.2,
        "price": 500
    },
    {
        "itemNos": 287,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Demantoid Garnet - 2.89  Diamond - 0.98",
        "metal": "PT900",
        "grossWt": 9.7,
        "price": 600
    },
    {
        "itemNos": 288,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Demantoid Garnet - 3.05 Diamond - 0.40",
        "metal": "Pt900",
        "grossWt": 8.1,
        "price": 500
    },
    {
        "itemNos": 289,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Emerald - 3.90  Diamond - 0.51",
        "Particulars": "Colombia / Green / ****",
        "metal": "Pt900",
        "grossWt": 7.6,
        "price": 1100
    },
    {
        "itemNos": 290,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 4.07   Diamond - 1.30",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT900/850",
        "grossWt": 10.6,
        "price": 700
    },
    {
        "itemNos": 291,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 1.88Diamond - 0.69",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 8.6,
        "price": 500
    },
    {
        "itemNos": 292,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 3.034 Diamond - 1.00",
        "metal": "PT900",
        "grossWt": 13.5,
        "price": 1600
    },
    {
        "itemNos": 293,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 1.61 Diamond - 0.45",
        "metal": "PT900",
        "grossWt": 5.1,
        "price": 200
    },
    {
        "itemNos": 294,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Jadeite - 6.79 Diamond - 0.56",
        "metal": "PT900",
        "grossWt": 12,
        "price": 2900
    },
    {
        "itemNos": 295,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.75 Diamond - 0.90",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "PT900",
        "grossWt": 13.2,
        "price": 900
    },
    {
        "itemNos": 296,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Pink Sapphire - 1.309 Diamond - 1.02",
        "metal": "PT900/K18",
        "grossWt": 11.3,
        "price": 500
    },
    {
        "itemNos": 297,
        "jewelleryType": "Ring",
        "Size #": 20,
        "detail": "Emerald - 4.55 Diamond - 0.82+0.72",
        "metal": "PT900",
        "grossWt": 11.5,
        "price": 900
    },
    {
        "itemNos": 298,
        "jewelleryType": "Ring",
        "Size #": 16.5,
        "detail": "Sapphire - 1.86 Diamond - 0.54",
        "metal": "PT900",
        "grossWt": 7.5,
        "price": 300
    },
    {
        "itemNos": 299,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 1.79 Diamond - 0.21",
        "metal": "PT900",
        "grossWt": 8,
        "price": 400
    },
    {
        "itemNos": 300,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Pink Sapphire - 1.89 Diamond - 0.13",
        "metal": "K18WG",
        "grossWt": 8.3,
        "price": 400
    },
    {
        "itemNos": 301,
        "jewelleryType": "Ring",
        "Size #": 15.5,
        "detail": "Black Opal - 22.70  Diamond - 3.20",
        "metal": "PT900",
        "grossWt": 22.6,
        "price": 4800
    },
    {
        "itemNos": 302,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 2.249 Diamond - 1.10",
        "metal": "PT950",
        "grossWt": 5.4,
        "price": 600
    },
    {
        "itemNos": 303,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire-2.45 Diamond - 0.93",
        "metal": "PT850",
        "grossWt": 8.9,
        "price": 500
    },
    {
        "itemNos": 304,
        "jewelleryType": "Ring",
        "detail": "Spinel-1.21 Diamond - 0.37",
        "Particulars": "Burma / Red / No Heat",
        "metal": "Pt900",
        "grossWt": 4.8,
        "price": 700
    },
    {
        "itemNos": 305,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Jadeite + Diamond - 0.55",
        "metal": "PT900",
        "grossWt": 8.1,
        "price": 300
    },
    {
        "itemNos": 306,
        "jewelleryType": "Bangle",
        "Size #": 16,
        "detail": "Ruby-10.00 Diamond - 1.54+4.98",
        "metal": "K18WG",
        "grossWt": 41.4,
        "price": 5000
    },
    {
        "itemNos": 307,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 1.25 Diamond - 0.56",
        "metal": "K18",
        "grossWt": 11.1,
        "price": 500
    },
    {
        "itemNos": 308,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Sapphire - 2.34 Diamond - 1.10",
        "metal": "PT900",
        "grossWt": 9.7,
        "price": 600
    },
    {
        "itemNos": 309,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Sapphire - 2.03 Diamond - 0.59",
        "Particulars": "Sri Lanka / Pinkish Purple / Heat",
        "metal": "PT900",
        "grossWt": 7,
        "price": 800
    },
    {
        "itemNos": 310,
        "jewelleryType": "Ring",
        "Size #": 14.5,
        "detail": "Ruby-1.27 Diamond - 0.60",
        "metal": "PT900",
        "grossWt": 9.2,
        "price": 300
    },
    {
        "itemNos": 311,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-2.492Diamond - 2.80",
        "Particulars": "Thailand / Red / Heat",
        "metal": "Pt900",
        "grossWt": 16.5,
        "price": 1100
    },
    {
        "itemNos": 312,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-1.50 Diamond - 1.30",
        "metal": "PT950",
        "grossWt": 6.6,
        "price": 900
    },
    {
        "itemNos": 313,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 1.35 Diamond - 1.53",
        "metal": "K18WG",
        "grossWt": 11.5,
        "price": 400
    },
    {
        "itemNos": 314,
        "jewelleryType": "Ring",
        "detail": "Pink Sapphire - 3.43Diamond - 0.41",
        "Particulars": "Sri Lanka / Pink / Heat",
        "metal": "Pt900",
        "grossWt": 7.9,
        "price": 800
    },
    {
        "itemNos": 315,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Emerald - 1.33 Diamond - 0.72",
        "metal": "PT900/K18",
        "grossWt": 9,
        "price": 600
    },
    {
        "itemNos": 316,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Ruby-3.134Diamond - 1.04",
        "metal": "Pt900",
        "grossWt": 8.7,
        "price": 1600
    },
    {
        "itemNos": 317,
        "jewelleryType": "Pendant Top",
        "detail": "Ruby-10.87 Diamond - 2.00",
        "Particulars": "Madagascar / Purplish Red / No Heat",
        "metal": "PT900",
        "grossWt": 25,
        "price": 5000
    },
    {
        "itemNos": 318,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 10.42 Diamond - 3.46+1.46",
        "metal": "PT900/K18",
        "grossWt": 45.7,
        "price": 6000
    },
    {
        "itemNos": 319,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.64 Diamond - 0.20",
        "metal": "PT900",
        "grossWt": 6.8,
        "price": 300
    },
    {
        "itemNos": 320,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 76.87 Diamond - 4.27",
        "metal": "PT900/850",
        "grossWt": 54.8,
        "price": 17000
    },
    {
        "itemNos": 321,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-25.21 Diamond - 0.54",
        "Particulars": "**** / Purplish Red / No Heat",
        "metal": "PT900",
        "grossWt": 15.3,
        "price": 1500
    },
    {
        "itemNos": 322,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Ruby-1.96 Diamond - 0.89",
        "Particulars": "Sri Lanka / Purple Red / Heat",
        "metal": "PT900",
        "grossWt": 8.5,
        "price": 900
    },
    {
        "itemNos": 323,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Pink Sapphire - 2.265 Diamond - 0.441",
        "metal": "K18WG",
        "grossWt": 11.5,
        "price": 700
    },
    {
        "itemNos": 324,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 23.87 Diamond - 0.211+0.330",
        "metal": "Pt900",
        "grossWt": 17.7,
        "price": 5200
    },
    {
        "itemNos": 325,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Alexandrite Catseye - 3.37 Diamond - 2.24",
        "Particulars": "**** / Green Changing To Purple / ****",
        "metal": "PT900/K18",
        "grossWt": 10.6,
        "price": 2300
    },
    {
        "itemNos": 326,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 4.13 Diamond - 0.14",
        "Particulars": "Sri Lanka / Violetish Blue / No Heat",
        "metal": "PT900",
        "grossWt": 8.7,
        "price": 1200
    },
    {
        "itemNos": 327,
        "jewelleryType": "Ring",
        "Size #": 17,
        "detail": "Sapphire - 5.80 Diamond - 1.39",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "Pt850",
        "grossWt": 18.1,
        "price": 1200
    },
    {
        "itemNos": 328,
        "jewelleryType": "Ring",
        "detail": "Ruby-1.682 Diamond - 0.80",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "K18",
        "grossWt": 9.5,
        "price": 600
    },
    {
        "itemNos": 329,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 13.360 Diamond - 1.53",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "PT900",
        "grossWt": 13.8,
        "price": 3200
    },
    {
        "itemNos": 330,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 3.25 Diamond - 1.88",
        "Particulars": "Madagascar / Orange / No Heat",
        "metal": "PT950",
        "grossWt": 9.7,
        "price": 800
    },
    {
        "itemNos": 331,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Pink Sapphire-2.412 Diamond - 0.52",
        "Particulars": "**** / **** / No Heat",
        "metal": "Pt900",
        "grossWt": 7.2,
        "price": 500
    },
    {
        "itemNos": 332,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Star Ruby - 8.13  Diamond - 2.65",
        "Particulars": "Myanmar / Vivid Pinkish Red / No heat",
        "metal": "PT950",
        "grossWt": 13.9,
        "price": 1100
    },
    {
        "itemNos": 333,
        "jewelleryType": "Ring",
        "detail": "Jadeite-2.864 Diamond - 1.80",
        "metal": "PT900",
        "grossWt": 10.2,
        "price": 1500
    },
    {
        "itemNos": 334,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.85 Diamond - 0.25",
        "metal": "PT900",
        "grossWt": 7.5,
        "price": 400
    },
    {
        "itemNos": 335,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Purple Sapphire - 1.10 Diamond - 0.33",
        "metal": "K18WG",
        "grossWt": 10.1,
        "price": 400
    },
    {
        "itemNos": 336,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Pink Sapphire - 14.21 Diamond - 0.42",
        "Particulars": "Vietnam / Pink / Heat",
        "metal": "PT900",
        "grossWt": 12.8,
        "price": 2300
    },
    {
        "itemNos": 337,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 3.695 Diamond - 0.441",
        "Particulars": "No Heat",
        "metal": "PT900",
        "grossWt": 5.8,
        "price": 600
    },
    {
        "itemNos": 338,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 5.83 Diamond - 1.26",
        "Particulars": "Madagascar / Blue / No Heat",
        "metal": "PT900",
        "grossWt": 8.9,
        "price": 1900
    },
    {
        "itemNos": 339,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Ruby-1.55 Diamond - 1.08",
        "Particulars": "Myanmar / Red / Minor",
        "metal": "PT900",
        "grossWt": 6,
        "price": 800
    },
    {
        "itemNos": 340,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.10 Diamond - 0.67",
        "metal": "PT900",
        "grossWt": 5.6,
        "price": 200
    },
    {
        "itemNos": 341,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.16 Diamond - 0.70",
        "metal": "PT900",
        "grossWt": 6.8,
        "price": 500
    },
    {
        "itemNos": 342,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Violet Star Sapphire - 10.26 Diamond - 0.26",
        "metal": "Pt900",
        "grossWt": 8.9,
        "price": 800
    },
    {
        "itemNos": 343,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 2.656 Diamond - 1.24",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "PT950",
        "grossWt": 5.4,
        "price": 600
    },
    {
        "itemNos": 344,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Star Ruby - 4.42  Diamond - 0.90",
        "metal": "PT900",
        "grossWt": 8.6,
        "price": 700
    },
    {
        "itemNos": 345,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Padparadscha Sapphire - 3.19 Diamond - 0.37",
        "Particulars": "Sri Lanka / Orangy Pink / No Heat",
        "metal": "PT850/K18",
        "grossWt": 6.6,
        "price": 1000
    },
    {
        "itemNos": 346,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Star Sapphire - 6.164 Diamond - 0.97",
        "metal": "Pt950",
        "grossWt": 6.3,
        "price": 800
    },
    {
        "itemNos": 347,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.409 Diamond - 0.43",
        "metal": "PT900",
        "grossWt": 4.5,
        "price": 400
    },
    {
        "itemNos": 348,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 11.570 Diamond - 3.290",
        "metal": "Pt900",
        "grossWt": 18.1,
        "price": 5600
    },
    {
        "itemNos": 349,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-14.11 Diamond - 3.07",
        "Particulars": "Myanmar / Pinkish Red / Minor",
        "metal": "PT900/K18",
        "grossWt": 16.2,
        "price": 4000
    },
    {
        "itemNos": 350,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.75 Diamond - 0.43",
        "Particulars": "Sri Lanka / Cornflower Blue / No Heat",
        "metal": "PT900",
        "grossWt": 5.5,
        "price": 600
    },
    {
        "itemNos": 351,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 12.52 Diamond - 1.610",
        "metal": "Pt900",
        "grossWt": 20.8,
        "price": 3500
    },
    {
        "itemNos": 352,
        "jewelleryType": "Ring",
        "detail": "Ruby-1.38 Diamond - 1.87",
        "Particulars": "Thailand / Vivid Red / H(a)",
        "metal": "PT900/K18",
        "grossWt": 10.1,
        "price": 800
    },
    {
        "itemNos": 353,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Pink Sapphire-2.47 Diamond - 0.53",
        "Particulars": "Afghanistan / Purple Pink / No Heat",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 800
    },
    {
        "itemNos": 354,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 4.434 Diamond - 1.19",
        "metal": "PT950",
        "grossWt": 7.7,
        "price": 500
    },
    {
        "itemNos": 355,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Black Opal - 2.03  Diamond - 0.60",
        "metal": "PT850",
        "grossWt": 9.5,
        "price": 300
    },
    {
        "itemNos": 356,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.093 Diamond - 0.80",
        "metal": "PT900",
        "grossWt": 12.8,
        "price": 700
    },
    {
        "itemNos": 357,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-1.56 Diamond - 0.33",
        "Particulars": "Thailand / Red / Minor",
        "metal": "PT900",
        "grossWt": 7.3,
        "price": 500
    },
    {
        "itemNos": 358,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 1.64 Diamond - 1.00",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 8.7,
        "price": 600
    },
    {
        "itemNos": 359,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 2.28 Diamond - 0.48",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 9.2,
        "price": 500
    },
    {
        "itemNos": 360,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Emerald - 1.62 Diamond - 0.51",
        "metal": "PT900",
        "grossWt": 8.5,
        "price": 500
    },
    {
        "itemNos": 361,
        "jewelleryType": "Necklace",
        "detail": "Black Opal - 5.99  Diamond - 1.28",
        "metal": "K18WG",
        "grossWt": 9.3,
        "price": 800
    },
    {
        "itemNos": 362,
        "jewelleryType": "Bracelet",
        "detail": "Tanzanite - 7.43 Diamond - 0.84",
        "metal": "PT900/850",
        "grossWt": 4.9,
        "price": 300
    },
    {
        "itemNos": 363,
        "jewelleryType": "Necklace",
        "detail": "Black Opal - 18.55  Diamond - 2.80",
        "metal": "PT900/850",
        "grossWt": 18.7,
        "price": 4500
    },
    {
        "itemNos": 364,
        "jewelleryType": "Necklace",
        "detail": "Ruby-14.00 Diamond - 12.50",
        "metal": "K18YG",
        "grossWt": 34.8,
        "price": 4800
    },
    {
        "itemNos": 365,
        "jewelleryType": "Necklace",
        "detail": "Spessartine Garnet-20.83 Diamond - 0.27",
        "metal": "PT900/850",
        "grossWt": 11.7,
        "price": 1600
    },
    {
        "itemNos": 366,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 5.42 Diamond - 2.11",
        "metal": "PT900/850",
        "grossWt": 23.8,
        "price": 1900
    },
    {
        "itemNos": 367,
        "jewelleryType": "Bracelet",
        "detail": "Ruby-3.51 Diamond - 1.18",
        "metal": "PT900",
        "grossWt": 36.6,
        "price": 900
    },
    {
        "itemNos": 368,
        "jewelleryType": "Bangle",
        "detail": "Emerald - 1.53",
        "metal": "K18PG",
        "grossWt": 6.7,
        "price": 400
    },
    {
        "itemNos": 369,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 9.65 Diamond - 9.90",
        "metal": "PT900/850",
        "grossWt": 38.6,
        "price": 3500
    },
    {
        "itemNos": 370,
        "jewelleryType": "Necklace",
        "detail": "Southsea Pearl-8.2-11.9Mm",
        "metal": "SV925",
        "grossWt": 63.2,
        "price": 400
    },
    {
        "itemNos": 371,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 6.20Diamond - 1.87",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "Pt900",
        "grossWt": 5.15,
        "price": 7400
    },
    {
        "itemNos": 372,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 4.81 Diamond - 0.97",
        "metal": "Pt900/K18",
        "grossWt": 12.22,
        "price": 8100
    },
    {
        "itemNos": 373,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Opal-14.42 Diamond - 0.45",
        "metal": "K18/PT900",
        "grossWt": 18,
        "price": 1200
    },
    {
        "itemNos": 374,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Red Spinel-1.82 Diamond - 0.32",
        "metal": "PT900",
        "grossWt": 5.3,
        "price": 700
    },
    {
        "itemNos": 375,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Ruby-3.87 Diamond - 0.25",
        "Particulars": "Madagascar / Red / No Heat",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 800
    },
    {
        "itemNos": 376,
        "jewelleryType": "Ring",
        "Size #": 18,
        "detail": "Emerald - 1.69 Diamond - 1.43",
        "metal": "PT900",
        "grossWt": 18,
        "price": 1000
    },
    {
        "itemNos": 377,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 8.80 Diamond - 2.25",
        "metal": "PT900",
        "grossWt": 13.4,
        "price": 2400
    },
    {
        "itemNos": 378,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Emerald - 3.07 Diamond - 1.30",
        "metal": "Pt900",
        "grossWt": 13.2,
        "price": 1100
    },
    {
        "itemNos": 379,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Ruby-3.52 Diamond - 1.598",
        "Particulars": "Red-Pink / No Heat",
        "metal": "Pt900",
        "grossWt": 5.3,
        "price": 5000
    },
    {
        "itemNos": 380,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 7.16Diamond - 2.00",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "PT",
        "grossWt": 12.07,
        "price": 7200
    },
    {
        "itemNos": 381,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Aquamarine-17.94 Diamond - 3.438",
        "metal": "PT900",
        "grossWt": 28,
        "price": 1400
    },
    {
        "itemNos": 382,
        "jewelleryType": "Ring",
        "detail": "Ruby-2.10 Diamond - 0.88",
        "Particulars": "Thailand / Red / Heat",
        "metal": "PT",
        "grossWt": 6.4,
        "price": 3500
    },
    {
        "itemNos": 383,
        "jewelleryType": "Ring",
        "detail": "Ruby-2.88 Diamond - 2.35",
        "Particulars": "Thailand / Purplish-Red / Heat",
        "metal": "PT",
        "grossWt": 9.7,
        "price": 4100
    },
    {
        "itemNos": 384,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-2.49Diamond - 1.60",
        "Particulars": "Thailand / Red / Minor",
        "metal": "Pt900",
        "grossWt": 13.3,
        "price": 1000
    },
    {
        "itemNos": 385,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 8.722 Diamond - 2.08",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "K18YG",
        "grossWt": 9.4,
        "price": 2100
    },
    {
        "itemNos": 386,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Alexandrite-2.654 Diamond - 1.48",
        "metal": "PT",
        "grossWt": 11.2,
        "price": 3000
    },
    {
        "itemNos": 387,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 9.65 Diamond - 1.41",
        "metal": "Pt900",
        "grossWt": 15.5,
        "price": 3000
    },
    {
        "itemNos": 388,
        "jewelleryType": "Ring",
        "detail": "Black Opal - 10.55  Diamond - 2.21",
        "metal": "Pt900",
        "grossWt": 15.1,
        "price": 500
    },
    {
        "itemNos": 389,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 4.57 Diamond - 0.52",
        "metal": "PT900",
        "grossWt": 10,
        "price": 1200
    },
    {
        "itemNos": 390,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Padparadscha Sapphire - 4.45 Diamond - 0.45",
        "Particulars": "Pastel Orangy Pink / No Heat",
        "metal": "Pt900",
        "grossWt": 6.7,
        "price": 3700
    },
    {
        "itemNos": 391,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-0.82 Diamond - 3.00",
        "metal": "K18",
        "grossWt": 10.9,
        "price": 600
    },
    {
        "itemNos": 392,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 6.03 Diamond - 0.48",
        "Particulars": "Sri Lanka / Violetish Blue / No Heat",
        "metal": "PM900",
        "grossWt": 10.1,
        "price": 1400
    },
    {
        "itemNos": 393,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 2.02 Diamond - 0.83",
        "metal": "PT900",
        "grossWt": 5.6,
        "price": 1000
    },
    {
        "itemNos": 394,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Southsea Pearl-14.8-14.9Mm Diamond-0.32",
        "metal": "K18",
        "grossWt": 13.9,
        "price": 300
    },
    {
        "itemNos": 395,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Zircon - 4.88 Diamond - 1.30",
        "metal": "PT850",
        "grossWt": 8.7,
        "price": 600
    },
    {
        "itemNos": 396,
        "jewelleryType": "Ring",
        "detail": "Ruby-1.53 Diamond - 0.25",
        "metal": "PT900",
        "grossWt": 12.8,
        "price": 500
    },
    {
        "itemNos": 397,
        "jewelleryType": "Ring",
        "Size #": 21,
        "detail": "Emerald - 7.521 Diamond - 0.20",
        "metal": "PT900",
        "grossWt": 9.8,
        "price": 600
    },
    {
        "itemNos": 398,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Chalcedony+Shell+Ruby - 0.83 Diamond - 0.11",
        "metal": "K18/K18WG",
        "grossWt": 14.2,
        "price": 400
    },
    {
        "itemNos": 399,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Rhodolite Garnet - 8.29 Diamond - 0.45",
        "metal": "PM900",
        "grossWt": 10.5,
        "price": 400
    },
    {
        "itemNos": 400,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Water Opal-2.76 Diamond - 1.31",
        "metal": "PT900",
        "grossWt": 12.6,
        "price": 400
    },
    {
        "itemNos": 401,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 1.80 Diamond - 0.55",
        "Particulars": "Sri Lanka / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 7.6,
        "price": 600
    },
    {
        "itemNos": 402,
        "jewelleryType": "Ring",
        "detail": "Chrysoberyl Catseye - 4.46  Diamond - 1.12",
        "Particulars": "**** / Honey Color / No Treat",
        "metal": "PT900",
        "grossWt": 12.1,
        "price": 1700
    },
    {
        "itemNos": 403,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-2.08 Diamond - 0.55",
        "metal": "PT900",
        "grossWt": 7,
        "price": 400
    },
    {
        "itemNos": 404,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Jadeite + Diamond-0.71",
        "metal": "PT900",
        "grossWt": 6.4,
        "price": 200
    },
    {
        "itemNos": 405,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-1.58 Diamond - 0.36",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "PT900",
        "grossWt": 5.9,
        "price": 400
    },
    {
        "itemNos": 406,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 2.05 Diamond - 0.52",
        "Particulars": "Madagascar / Royal Blue / Heat",
        "metal": "PT900",
        "grossWt": 5.8,
        "price": 600
    },
    {
        "itemNos": 407,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Emerald - 1.10 Diamond - 0.47",
        "Particulars": "Brazil / Vivid green / Minor",
        "metal": "K18/PT900",
        "grossWt": 14.4,
        "price": 500
    },
    {
        "itemNos": 408,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Fire Opal-6.76 Diamond - 0.63",
        "metal": "PT900",
        "grossWt": 9.9,
        "price": 500
    },
    {
        "itemNos": 409,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Imperial Topaz-3.23",
        "metal": "PT900",
        "grossWt": 6.1,
        "price": 200
    },
    {
        "itemNos": 410,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Star Ruby-8.64 Diamond - 0.68",
        "metal": "PT900",
        "grossWt": 12.7,
        "price": 600
    },
    {
        "itemNos": 411,
        "jewelleryType": "Ring",
        "detail": "Diamond - 0.57+1.25",
        "metal": "Pt900",
        "grossWt": 6.7,
        "price": 400
    },
    {
        "itemNos": 412,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Diamond - 0.98-0.79",
        "metal": "K18",
        "grossWt": 8.6,
        "price": 500
    },
    {
        "itemNos": 413,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Diamond - 3.01",
        "metal": "K18",
        "grossWt": 9.1,
        "price": 600
    },
    {
        "itemNos": 414,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Diamond - 0.87+0.56",
        "metal": "K18",
        "grossWt": 7,
        "price": 300
    },
    {
        "itemNos": 415,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Diamond - 0.40",
        "metal": "K18PG/WG",
        "grossWt": 5,
        "price": 300
    },
    {
        "itemNos": 416,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Diamond - 3.00",
        "metal": "K18YG",
        "grossWt": 5.7,
        "price": 700
    },
    {
        "itemNos": 417,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Diamond - 3.00",
        "metal": "K18WG",
        "grossWt": 5.7,
        "price": 700
    },
    {
        "itemNos": 418,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Diamond - 1.07",
        "metal": "K18",
        "grossWt": 4.3,
        "price": 300
    },
    {
        "itemNos": 419,
        "jewelleryType": "Ring",
        "detail": "Diamond - 1.01",
        "metal": "PT900",
        "grossWt": 5.1,
        "price": 300
    },
    {
        "itemNos": 420,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Diamond - 1.015",
        "metal": "PT900",
        "grossWt": 6.1,
        "price": 300
    },
    {
        "itemNos": 421,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.54 Diamond - 0.69",
        "Particulars": "Colombia / Green / F1",
        "metal": "PM900",
        "grossWt": 5,
        "price": 700
    },
    {
        "itemNos": 422,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 4.699 Diamond - 0.80",
        "metal": "PT900",
        "grossWt": 8.1,
        "price": 700
    },
    {
        "itemNos": 423,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-4.03 Diamond - 2.18",
        "Particulars": "Mozambique / Pinkish Red / No Heat",
        "metal": "PT900/K18",
        "grossWt": 13.9,
        "price": 2100
    },
    {
        "itemNos": 424,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 8.58 Diamond - 0.86",
        "Particulars": "Colombia / Green / F2",
        "metal": "PT900",
        "grossWt": 12.9,
        "price": 3700
    },
    {
        "itemNos": 425,
        "jewelleryType": "Ring",
        "Size #": 15.5,
        "detail": "Ruby-1.54Diamond - 2.10",
        "metal": "K18YG",
        "grossWt": 18.6,
        "price": 900
    },
    {
        "itemNos": 426,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Aquamarine-31.11 Diamond - 0.68",
        "metal": "PT900",
        "grossWt": 19.4,
        "price": 700
    },
    {
        "itemNos": 427,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Pink Sapphire - 2.70 Diamond - 0.44",
        "metal": "K18",
        "grossWt": 5.6,
        "price": 500
    },
    {
        "itemNos": 428,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 2.846Diamond - 1.11",
        "Particulars": "Madagascar / Royal Blue / No Heat",
        "metal": "Pt900",
        "grossWt": 7.45,
        "price": 3500
    },
    {
        "itemNos": 429,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Emerald - 16.52 Diamond - 1.06",
        "metal": "PT900",
        "grossWt": 13.4,
        "price": 2500
    },
    {
        "itemNos": 430,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Star Sapphire - 10.55 Diamond - 1.38",
        "metal": "PT900",
        "grossWt": 16.1,
        "price": 700
    },
    {
        "itemNos": 431,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 13.25",
        "metal": "K18YG",
        "grossWt": 57,
        "price": 5500
    },
    {
        "itemNos": 432,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 14.25",
        "metal": "K18WG",
        "grossWt": 82.2,
        "price": 6300
    },
    {
        "itemNos": 433,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 6.26",
        "metal": "PT900",
        "grossWt": 51.1,
        "price": 2700
    },
    {
        "itemNos": 434,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 25.00",
        "metal": "K18YG",
        "grossWt": 57.1,
        "price": 6300
    },
    {
        "itemNos": 435,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 10.20",
        "metal": "PT900/850",
        "grossWt": 43.7,
        "price": 3000
    },
    {
        "itemNos": 436,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 21.40 Emerald - 0.15",
        "metal": "K18WG",
        "grossWt": 52,
        "price": 6500
    },
    {
        "itemNos": 437,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 3.00",
        "metal": "K18WG",
        "grossWt": 14.2,
        "price": 900
    },
    {
        "itemNos": 438,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 21.00 Emerald - 0.35",
        "metal": "K18YG",
        "grossWt": 49.2,
        "price": 5800
    },
    {
        "itemNos": 439,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 5.00",
        "metal": "PT900/850",
        "grossWt": 23.9,
        "price": 1400
    },
    {
        "itemNos": 440,
        "jewelleryType": "Necklace",
        "detail": "Ruby-17.10 Diamond - 3.00+1.10",
        "metal": "PT850/900",
        "grossWt": 56.3,
        "price": 2500
    },
    {
        "itemNos": 441,
        "jewelleryType": "Necklace",
        "detail": "Ruby-8.30 Diamond - 7.20",
        "metal": "PT900",
        "grossWt": 36.1,
        "price": 2900
    },
    {
        "itemNos": 442,
        "jewelleryType": "Necklace",
        "detail": "Ruby + Diamond - 1.60",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "K18",
        "grossWt": 8.5,
        "price": 400
    },
    {
        "itemNos": 443,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Chrysoberyl CatsEye - 5.680 Diamond - 2.130",
        "metal": "PT900",
        "grossWt": 11.5,
        "price": 1800
    },
    {
        "itemNos": 444,
        "jewelleryType": "Bangle",
        "detail": "Emerald - 0.50 Diamond - 2.50",
        "metal": "K18YG",
        "grossWt": 14.5,
        "price": 1200
    },
    {
        "itemNos": 445,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 7.71+0.17 Diamond - 0.19",
        "metal": "K18/PT900",
        "grossWt": 10.4,
        "price": 1400
    },
    {
        "itemNos": 446,
        "jewelleryType": "Brooch",
        "detail": "Southsea Pearl - 16.2-16.4MM Diamond-1.10",
        "metal": "PT900",
        "grossWt": 30,
        "price": 600
    },
    {
        "itemNos": 447,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 2.90 Diamond - 0.52+0.25",
        "metal": "PT900/850",
        "grossWt": 15.6,
        "price": 1000
    },
    {
        "itemNos": 448,
        "jewelleryType": "Necklace",
        "detail": "Blue Topaz-230.09 Diamond - 0.17",
        "metal": "PT900/850",
        "grossWt": 39.4,
        "price": 300
    },
    {
        "itemNos": 449,
        "jewelleryType": "Necklace",
        "detail": "Tanzanite - 16.769 Diamond - 0.06",
        "metal": "PT900/850",
        "grossWt": 9.7,
        "price": 1500
    },
    {
        "itemNos": 450,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 2.76 Diamond - 0.64",
        "metal": "Pt900/850",
        "grossWt": 14.4,
        "price": 1000
    },
    {
        "itemNos": 451,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Sapphire - 8.92 Diamond - 0.90",
        "metal": "K18WG",
        "grossWt": 7.1,
        "price": 3100
    },
    {
        "itemNos": 452,
        "jewelleryType": "Necklace",
        "detail": "Ruby-2.16 Diamond - 0.41",
        "Particulars": "Madagascar / Red / Minor",
        "metal": "PT900/850",
        "grossWt": 3.8,
        "price": 500
    },
    {
        "itemNos": 453,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 6.26 Diamond - 1.22",
        "metal": "PT900",
        "grossWt": 12.6,
        "price": 3600
    },
    {
        "itemNos": 454,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Southsea Pearl",
        "metal": "K18",
        "grossWt": 9.9,
        "price": 200
    },
    {
        "itemNos": 455,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Emerald - 2.31 Diamond - 0.52",
        "metal": "PT900",
        "grossWt": 6.2,
        "price": 600
    },
    {
        "itemNos": 456,
        "jewelleryType": "Ring",
        "Size #": 10.5,
        "detail": "Tourmaline-3.17 Diamond - 0.43 Aquamarine - 2.10",
        "metal": "K18",
        "grossWt": 21.3,
        "price": 500
    },
    {
        "itemNos": 457,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby - 1.52Diamond - 1.00",
        "metal": "Pt900",
        "grossWt": 9.5,
        "price": 500
    },
    {
        "itemNos": 458,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Black Opal - 3.85  Diamond - 0.38+0.43",
        "metal": "PT900",
        "grossWt": 10.8,
        "price": 400
    },
    {
        "itemNos": 459,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Ruby-1.393 Diamond - 0.60",
        "metal": "PT900",
        "grossWt": 10.8,
        "price": 500
    },
    {
        "itemNos": 460,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-4.199 Diamond - 1.41",
        "metal": "PT900",
        "grossWt": 9.4,
        "price": 1500
    },
    {
        "itemNos": 461,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Orange Sapphire - 5.098 Diamond - 1.00",
        "Particulars": "No Berylium Treated",
        "metal": "PT",
        "grossWt": 12,
        "price": 1200
    },
    {
        "itemNos": 462,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.422 Diamond - 0.63",
        "Particulars": "Colombia / Vivid Green / Minor",
        "metal": "PT900/K18",
        "grossWt": 6,
        "price": 800
    },
    {
        "itemNos": 463,
        "jewelleryType": "Ring",
        "Size #": 6.5,
        "detail": "Chrysoberyl Catseye - 4.606 + Diamond",
        "metal": "K18WG",
        "grossWt": 17.3,
        "price": 1000
    },
    {
        "itemNos": 464,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-1.593 Diamond - 0.80",
        "metal": "PT900",
        "grossWt": 8.3,
        "price": 500
    },
    {
        "itemNos": 465,
        "jewelleryType": "Ring",
        "Size #": 18,
        "detail": "Emerald - 8.85 Diamond - 0.89",
        "metal": "PT900",
        "grossWt": 11.1,
        "price": 1800
    },
    {
        "itemNos": 466,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Pink Sapphire-3.276Diamond - 0.60",
        "Particulars": "No Heat",
        "metal": "Pt900",
        "grossWt": 7.5,
        "price": 500
    },
    {
        "itemNos": 467,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 3.27 Diamond - 1.14",
        "Particulars": "Burma(Myanmar) / Blue / No Heat",
        "metal": "PT900",
        "grossWt": 8.2,
        "price": 2100
    },
    {
        "itemNos": 468,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 3.573 Diamond - 3.28",
        "metal": "PT900",
        "grossWt": 14.8,
        "price": 1500
    },
    {
        "itemNos": 469,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-5.095Diamond - 1.054",
        "Particulars": "Burma / Pigeon Blood / Minor",
        "metal": "PT",
        "grossWt": 10.6,
        "price": 7200
    },
    {
        "itemNos": 470,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 5.15 Diamond - 1.50",
        "metal": "PT900",
        "grossWt": 14.9,
        "price": 2100
    },
    {
        "itemNos": 471,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 0.83",
        "metal": "K18",
        "grossWt": 55.6,
        "price": 1500
    },
    {
        "itemNos": 472,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Emerald - 1.12 Diamond - 0.235",
        "metal": "PT900",
        "grossWt": 4.5,
        "price": 1200
    },
    {
        "itemNos": 473,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Tanzanite - 5.48 Diamond - 0.18",
        "metal": "PT900",
        "grossWt": 10.8,
        "price": 500
    },
    {
        "itemNos": 474,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Black Opal - 8.55  Diamond - 0.39",
        "metal": "K18",
        "grossWt": 12.9,
        "price": 400
    },
    {
        "itemNos": 475,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Star Sapphire - 13.61  Diamond - 0.51",
        "metal": "K18",
        "grossWt": 10.3,
        "price": 600
    },
    {
        "itemNos": 476,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Ruby-1.70 Diamond - 0.70",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "PT900",
        "grossWt": 13.8,
        "price": 600
    },
    {
        "itemNos": 477,
        "jewelleryType": "Ring",
        "detail": "Ruby - 1.45 Diamond - 1.17",
        "metal": "Pt900",
        "grossWt": 13,
        "price": 400
    },
    {
        "itemNos": 478,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Emerald - 3.98 Diamond - 0.24",
        "metal": "K18YG",
        "grossWt": 12,
        "price": 1200
    },
    {
        "itemNos": 479,
        "jewelleryType": "Necklace",
        "detail": "Ruby-2.93 Diamond - 0.16",
        "metal": "PT900/850",
        "grossWt": 7.4,
        "price": 800
    },
    {
        "itemNos": 480,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-2.61 Diamond - 1.23",
        "Particulars": "Sri Lanka / Purple-Red / Heat",
        "metal": "PT900",
        "grossWt": 13.3,
        "price": 1100
    },
    {
        "itemNos": 481,
        "jewelleryType": "Necklace",
        "Size #": 38,
        "detail": "Sapphire - 4.145Diamond - 0.89",
        "Particulars": "**** / Blue / No Heat",
        "metal": "PT900/850",
        "grossWt": 8.6,
        "price": 1800
    },
    {
        "itemNos": 482,
        "jewelleryType": "Ring",
        "Size #": 17,
        "detail": "Emerald - 3.334 Diamond - 1.139",
        "metal": "PT850",
        "grossWt": 17.7,
        "price": 800
    },
    {
        "itemNos": 483,
        "jewelleryType": "Necklace",
        "Size #": 44,
        "detail": "Chrysoberyl Catseye - 7.61 Diamond - 1.04",
        "metal": "PT900/850",
        "grossWt": 10.33,
        "price": 1300
    },
    {
        "itemNos": 484,
        "jewelleryType": "Ring",
        "detail": "Ruby-1.92Diamond - 2.17",
        "Particulars": "Burma / Purple Red / No Heat",
        "metal": "Pt900",
        "grossWt": 10.5,
        "price": 1000
    },
    {
        "itemNos": 485,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Black Opal - 5.51  Diamond - 0.85",
        "metal": "PT900",
        "grossWt": 11.2,
        "price": 400
    },
    {
        "itemNos": 486,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 3.92 Diamond - 1.09",
        "Particulars": "Colombia / Green /",
        "metal": "PT900/850",
        "grossWt": 13.7,
        "price": 700
    },
    {
        "itemNos": 487,
        "jewelleryType": "Necklace",
        "detail": "Voilet Star Sapphire - 5.00 Diamond - 1.30",
        "metal": "PT900/850",
        "grossWt": 15.1,
        "price": 400
    },
    {
        "itemNos": 488,
        "jewelleryType": "Necklace",
        "detail": "Ruby-2.571Diamond - 0.30",
        "Particulars": "Mozambique / Purple Red / No Heat",
        "metal": "Pt850/900",
        "grossWt": 5.4,
        "price": 800
    },
    {
        "itemNos": 489,
        "jewelleryType": "Necklace",
        "Size #": 40,
        "detail": "Emerald - 2.45 Diamond - 0.45",
        "Particulars": "Colombia / Vivid Green / INSIGN.",
        "metal": "PT900/850",
        "grossWt": 6.2,
        "price": 3500
    },
    {
        "itemNos": 490,
        "jewelleryType": "Necklace",
        "detail": "Pink Sapphire - 2.33 Diamond - 0.64",
        "metal": "PT850",
        "grossWt": 12.5,
        "price": 600
    },
    {
        "itemNos": 491,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Diamond - 3.50",
        "metal": "PT900",
        "grossWt": 18.3,
        "price": 600
    },
    {
        "itemNos": 492,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Diamond - 0.79+0.92",
        "metal": "PT900",
        "grossWt": 10.7,
        "price": 500
    },
    {
        "itemNos": 493,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Diamond - 1.145+0.59",
        "metal": "PT900",
        "grossWt": 8.5,
        "price": 600,
        "Remarks": "L SI-2 PS F"
    },
    {
        "itemNos": 494,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Diamond - 1.00",
        "metal": "PT900",
        "grossWt": 5.8,
        "price": 300
    },
    {
        "itemNos": 495,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Diamond - 1.00",
        "metal": "PT900",
        "grossWt": 5,
        "price": 300
    },
    {
        "itemNos": 496,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Diamond - 2.013+1.31",
        "metal": "K18YG",
        "grossWt": 5,
        "price": 1900,
        "Remarks": "LY VS-1 EM SB"
    },
    {
        "itemNos": 497,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 4.279 Diamond - 0.74",
        "metal": "PT900",
        "grossWt": 9,
        "price": 1200
    },
    {
        "itemNos": 498,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Opal",
        "metal": "K18/PT900",
        "grossWt": 13.1,
        "price": 300
    },
    {
        "itemNos": 499,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Diamond - 0.921+0.28",
        "metal": "K18/PT900",
        "grossWt": 12.4,
        "price": 500
    },
    {
        "itemNos": 500,
        "jewelleryType": "Ring",
        "Size #": 14.5,
        "detail": "Tahiti Pearl + Diamond-1.11",
        "metal": "K18WG",
        "grossWt": 16.1,
        "price": 400
    },
    {
        "itemNos": 501,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 1.101 Diamond - 1.32",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 600
    },
    {
        "itemNos": 502,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Purple Sapphire - 2.452 Diamond - 0.43",
        "metal": "PT900",
        "grossWt": 7.6,
        "price": 400
    },
    {
        "itemNos": 503,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-2.10 Diamond - 0.56",
        "Particulars": "Myanmar / Pinkish Red(Pigeon Blood)\n/ Moderate",
        "metal": "K18",
        "grossWt": 5.3,
        "price": 500
    },
    {
        "itemNos": 504,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 2.33 Diamond - 0.41",
        "metal": "PT900",
        "grossWt": 10.1,
        "price": 700
    },
    {
        "itemNos": 505,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 5.306 Diamond - 0.50",
        "metal": "PT900",
        "grossWt": 7.6,
        "price": 900
    },
    {
        "itemNos": 506,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 3.39 Diamond - 0.602",
        "metal": "PT900",
        "grossWt": 6.5,
        "price": 700
    },
    {
        "itemNos": 507,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Sapphire - 2.15 Diamond - 0.54",
        "metal": "PT900",
        "grossWt": 6.1,
        "price": 300
    },
    {
        "itemNos": 508,
        "jewelleryType": "Ring",
        "Size #": 10.5,
        "detail": "Emerald - 6.82 Diamond - 0.65",
        "metal": "K18",
        "grossWt": 8.6,
        "price": 2100
    },
    {
        "itemNos": 509,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-1.68 Diamond - 3.00",
        "metal": "K18",
        "grossWt": 11.1,
        "price": 600
    },
    {
        "itemNos": 510,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-1.39 Diamond - 1.45",
        "metal": "PT900",
        "grossWt": 15.7,
        "price": 800
    },
    {
        "itemNos": 511,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Ruby-4.42 Diamond - 1.70",
        "metal": "K18",
        "grossWt": 15.5,
        "price": 600
    },
    {
        "itemNos": 512,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-2.82 Diamond - 0.40",
        "metal": "K18",
        "grossWt": 12.1,
        "price": 400
    },
    {
        "itemNos": 513,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 4.29 Diamond - 1.33",
        "Particulars": "Burma(Myanmar) / Blue / No Heat",
        "metal": "PT900/K18",
        "grossWt": 12.8,
        "price": 1800
    },
    {
        "itemNos": 514,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire-5.141 Diamond - 2.22",
        "metal": "K18",
        "grossWt": 12,
        "price": 700
    },
    {
        "itemNos": 515,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-6.24 Diamond - 0.82",
        "Particulars": "Kenya / Purple Red / Heat(Signif.)",
        "metal": "PT900",
        "grossWt": 9.6,
        "price": 500
    },
    {
        "itemNos": 516,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 1.84 Diamond - 1.10",
        "metal": "PT900",
        "grossWt": 6.5,
        "price": 700
    },
    {
        "itemNos": 517,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Southsea Pearl - 12.4-12.6Mm Diamond-0.43+0.07",
        "metal": "K18WG",
        "grossWt": 7.6,
        "price": 400
    },
    {
        "itemNos": 518,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.765+0.38 Diamond - 0.91",
        "metal": "PT900",
        "grossWt": 11.4,
        "price": 400
    },
    {
        "itemNos": 519,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Diamond - 13.73+0.48",
        "metal": "K18WG",
        "grossWt": 36.4,
        "price": 1100
    },
    {
        "itemNos": 520,
        "jewelleryType": "Bangle",
        "detail": "Emerald + Diamond",
        "metal": "K14WG",
        "grossWt": 19.7,
        "price": 500
    },
    {
        "itemNos": 521,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 1.93 Diamond - 0.36",
        "metal": "PT900",
        "grossWt": 4,
        "price": 700
    },
    {
        "itemNos": 522,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-1.04 Diamond - 0.50",
        "metal": "K18",
        "grossWt": 7,
        "price": 400
    },
    {
        "itemNos": 523,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 2.01 Diamond - 0.86+0.21",
        "metal": "PT900",
        "grossWt": 11.6,
        "price": 600
    },
    {
        "itemNos": 524,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-2.06 Diamond - 0.75",
        "Particulars": "Thailand / Pigeon Blood / Minor",
        "metal": "Pt900",
        "grossWt": 7.8,
        "price": 700
    },
    {
        "itemNos": 525,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.79 Diamond - 0.90",
        "metal": "K18YG",
        "grossWt": 4.6,
        "price": 700
    },
    {
        "itemNos": 526,
        "jewelleryType": "Ring",
        "Size #": 20,
        "detail": "Emerald - 4.35 Diamond - 0.65",
        "metal": "Pt900",
        "grossWt": 12.5,
        "price": 500
    },
    {
        "itemNos": 527,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 2.08 Diamond - 0.92",
        "metal": "PT900",
        "grossWt": 5,
        "price": 600
    },
    {
        "itemNos": 528,
        "jewelleryType": "Pierce",
        "detail": "Sapphire - 5.21 Diamond - 1.00",
        "metal": "PT900",
        "grossWt": 5.7,
        "price": 1100
    },
    {
        "itemNos": 529,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Pink Sapphire-9.03 Diamond - 0.25",
        "Particulars": "Sri Lanka / Pink / No Heat",
        "metal": "PT900",
        "grossWt": 9.2,
        "price": 3000
    },
    {
        "itemNos": 530,
        "jewelleryType": "Necklace",
        "detail": "Ruby-4.32 Diamond - 0.67",
        "Particulars": "Thailand / Pinkish Red / Heat / Minor",
        "metal": "K18",
        "grossWt": 6.3,
        "price": 1200
    },
    {
        "itemNos": 531,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 15.08",
        "metal": "K18WG",
        "grossWt": 18.1,
        "price": 4300
    },
    {
        "itemNos": 532,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 10.00",
        "metal": "K18PG",
        "grossWt": 26,
        "price": 2500
    },
    {
        "itemNos": 533,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 5.35",
        "metal": "K18WG",
        "grossWt": 26.5,
        "price": 2000
    },
    {
        "itemNos": 534,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 1.42",
        "metal": "K18WG",
        "grossWt": 21.8,
        "price": 800
    },
    {
        "itemNos": 535,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 20.09",
        "metal": "K18WG",
        "grossWt": 27.7,
        "price": 4800
    },
    {
        "itemNos": 536,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 10.00",
        "metal": "K18PG",
        "grossWt": 25.5,
        "price": 2700
    },
    {
        "itemNos": 537,
        "jewelleryType": "Necklace",
        "detail": "Diamond - 1.059",
        "metal": "Pt900/850",
        "grossWt": 1.85,
        "price": 500
    },
    {
        "itemNos": 538,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 20.00",
        "metal": "K18WG",
        "grossWt": 82.2,
        "price": 7000
    },
    {
        "itemNos": 539,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 6.50",
        "metal": "PT900",
        "grossWt": 14.5,
        "price": 1500
    },
    {
        "itemNos": 540,
        "jewelleryType": "Bangle",
        "detail": "Diamond - 4.00",
        "metal": "K18WG",
        "grossWt": 23,
        "price": 1500
    },
    {
        "itemNos": 541,
        "jewelleryType": "Bracelet",
        "detail": "Diamond - 4.85",
        "metal": "PT900/850",
        "grossWt": 20.5,
        "price": 1300
    },
    {
        "itemNos": 542,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 15.58 Diamond - 0.30+0.20",
        "metal": "K18WG",
        "grossWt": 7.4,
        "price": 1000
    },
    {
        "itemNos": 543,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 10.61 Diamond - 1.28+0.03",
        "metal": "PT900/850",
        "grossWt": 15.9,
        "price": 2100
    },
    {
        "itemNos": 544,
        "jewelleryType": "Necklace",
        "detail": "Ruby-1.232 Diamond - 0.24",
        "metal": "K18YG",
        "grossWt": 7,
        "price": 500
    },
    {
        "itemNos": 545,
        "jewelleryType": "Necklace",
        "detail": "Water Opal-32.77 Diamond - 1.27",
        "metal": "K18/K18WG",
        "grossWt": 15,
        "price": 900
    },
    {
        "itemNos": 546,
        "jewelleryType": "Necklace",
        "detail": "Pink Opal-10.17 Alex-0.05 Diamond - 0.50",
        "metal": "K18WG",
        "grossWt": 14.2,
        "price": 400
    },
    {
        "itemNos": 547,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 33.44  Diamond - 2.73",
        "metal": "Pt900",
        "grossWt": 29,
        "price": 8200
    },
    {
        "itemNos": 548,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 14.00 Diamond - 6.60",
        "metal": "K18YG",
        "grossWt": 27.5,
        "price": 3000
    },
    {
        "itemNos": 549,
        "jewelleryType": "Necklace",
        "detail": "Tahiti Pearl 8.7-10.9Mm",
        "metal": "SV925",
        "grossWt": 60.2,
        "price": 500
    },
    {
        "itemNos": 550,
        "jewelleryType": "Necklace",
        "detail": "Ruby-12.60 Diamond - 6.35",
        "metal": "PT900/850",
        "grossWt": 35,
        "price": 2700
    },
    {
        "itemNos": 551,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Alexandrite Catseye - 2.63 Diamond -1.24",
        "metal": "PT900",
        "grossWt": 8.9,
        "price": 700
    },
    {
        "itemNos": 552,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 2.59 Diamond - 0.64",
        "metal": "PT900",
        "grossWt": 7.7,
        "price": 400
    },
    {
        "itemNos": 553,
        "jewelleryType": "Ring",
        "Size #": 16.5,
        "detail": "Ruby-1.68 Diamond - 0.47",
        "metal": "PM900",
        "grossWt": 6,
        "price": 500
    },
    {
        "itemNos": 554,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.909 + Diamond",
        "metal": "PT900",
        "grossWt": 8.1,
        "price": 1100
    },
    {
        "itemNos": 555,
        "jewelleryType": "Ring",
        "Size #": 16.5,
        "detail": "Sapphire - 3.73 Diamond - 0.27",
        "metal": "PT900",
        "grossWt": 8.9,
        "price": 1300
    },
    {
        "itemNos": 556,
        "jewelleryType": "Ring",
        "Size #": 18,
        "detail": "Ruby-2.82 Diamond - 1.03",
        "Particulars": "Thailand / Red / Heat",
        "metal": "K18",
        "grossWt": 7.6,
        "price": 1300
    },
    {
        "itemNos": 557,
        "jewelleryType": "Ring",
        "Size #": 8.5,
        "detail": "Emerald - 2.46 Diamond - 0.54",
        "metal": "PT900",
        "grossWt": 7.2,
        "price": 500
    },
    {
        "itemNos": 558,
        "jewelleryType": "Ring",
        "Size #": 7,
        "detail": "Sapphire - 2.567 Diamond - 0.52",
        "metal": "PT900",
        "grossWt": 9,
        "price": 400
    },
    {
        "itemNos": 559,
        "jewelleryType": "Ring",
        "Size #": 8,
        "detail": "Ruby-1.90 + Diamond",
        "metal": "K18",
        "grossWt": 7.2,
        "price": 500
    },
    {
        "itemNos": 560,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Ruby-1.70 Diamond - 1.49",
        "metal": "K18",
        "grossWt": 6.6,
        "price": 500
    },
    {
        "itemNos": 561,
        "jewelleryType": "Necklace",
        "detail": "Yellow Sapphire - 9.414Diamond - 0.17",
        "Particulars": "Heat",
        "metal": "PT900/850",
        "grossWt": 12.9,
        "price": 900
    },
    {
        "itemNos": 562,
        "jewelleryType": "Bracelet",
        "detail": "Emerald - 4.50 Diamond - 2.50",
        "metal": "PT900/850",
        "grossWt": 14.3,
        "price": 1200
    },
    {
        "itemNos": 563,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 0.81 Diamond - 0.55",
        "metal": "PT900/850",
        "grossWt": 3.4,
        "price": 500
    },
    {
        "itemNos": 564,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 0.89 Diamond - 0.22",
        "metal": "K18WG",
        "grossWt": 4.4,
        "price": 300
    },
    {
        "itemNos": 565,
        "jewelleryType": "Necklace",
        "detail": "Paraiba-1.04 Diamond - 0.28",
        "Particulars": "Brazil / Blue Green / Heat",
        "metal": "PT900/850",
        "grossWt": 6,
        "price": 1700
    },
    {
        "itemNos": 566,
        "jewelleryType": "Bracelet",
        "detail": "Ruby-4.40 Diamond - 4.85",
        "metal": "PT900/850",
        "grossWt": 26.6,
        "price": 1900
    },
    {
        "itemNos": 567,
        "jewelleryType": "Necklace",
        "detail": "Ruby-1.95 Diamond - 0.61",
        "Particulars": "Thailand / Purplish Red / Heat",
        "metal": "PT900/850",
        "grossWt": 4.5,
        "price": 400
    },
    {
        "itemNos": 568,
        "jewelleryType": "Necklace",
        "detail": "Pink Sapphire - 2.022 Diamond - 0.26",
        "metal": "PT900/850",
        "grossWt": 6.6,
        "price": 500
    },
    {
        "itemNos": 569,
        "jewelleryType": "Necklace",
        "detail": "Sapphire - 5.54 Diamond - 0.55",
        "Particulars": "Heat",
        "metal": "PT900/850",
        "grossWt": 8.3,
        "price": 900
    },
    {
        "itemNos": 570,
        "jewelleryType": "Necklace",
        "detail": "Ruby-1.562 Diamond - 1.00",
        "metal": "PT900/850",
        "grossWt": 4.7,
        "price": 500
    },
    {
        "itemNos": 571,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.348 Diamond - 1.20",
        "metal": "PT900",
        "grossWt": 6.1,
        "price": 700
    },
    {
        "itemNos": 572,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 1.96 Diamond - 0.76",
        "metal": "Pt900",
        "grossWt": 4.2,
        "price": 400
    },
    {
        "itemNos": 573,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.753 Diamond - 0.63",
        "Particulars": "Thailand / Vivid Reddish Pink / Minor",
        "metal": "PT900",
        "grossWt": 7,
        "price": 500
    },
    {
        "itemNos": 574,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.24 Diamond - 1.13",
        "Particulars": "Colombia / Green / F2",
        "metal": "PT900",
        "grossWt": 9.9,
        "price": 600
    },
    {
        "itemNos": 575,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.61 Diamond - 0.08",
        "Particulars": "Mozambique / Purplish Red / No Heat",
        "metal": "PT900",
        "grossWt": 5.3,
        "price": 800
    },
    {
        "itemNos": 576,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Padparadscha Sapphire - 2.89 Diamond - 0.52",
        "Particulars": "Madagascar / Orangy Pink / No Heat",
        "metal": "PT900",
        "grossWt": 5.4,
        "price": 900
    },
    {
        "itemNos": 577,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Sapphire - 8.37 Diamond - 1.28",
        "metal": "PT900",
        "grossWt": 13.4,
        "price": 600
    },
    {
        "itemNos": 578,
        "jewelleryType": "Ring",
        "detail": "Redberyl-1.993 Diamond - 0.34",
        "metal": "PT900",
        "grossWt": 4.9,
        "price": 2600
    },
    {
        "itemNos": 579,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Sapphire - 1.88 Diamond - 0.30",
        "Particulars": "Burma(Myanmar) / Royal Blue / No Heat",
        "metal": "PT900",
        "grossWt": 8.4,
        "price": 1300
    },
    {
        "itemNos": 580,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 2.64 Diamond - 0.88",
        "metal": "Pt900",
        "grossWt": 5.1,
        "price": 1000
    },
    {
        "itemNos": 581,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Ruby-1.02 Diamond - 0.96",
        "metal": "PT900",
        "grossWt": 9.8,
        "price": 300
    },
    {
        "itemNos": 582,
        "jewelleryType": "Ring",
        "detail": "Purple Star Sapphire - 5.98 Diamond - 0.28",
        "metal": "K18WG",
        "grossWt": 14.6,
        "price": 500
    },
    {
        "itemNos": 583,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Pink Star Sapphire-7.73 Diamond - 0.62",
        "Particulars": "Myanmar / Purplish Pink / No Heat",
        "metal": "PM",
        "grossWt": 7.2,
        "price": 700
    },
    {
        "itemNos": 584,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Sapphire - 1.00 Ruby - 0.82 Diamond - 2.69",
        "metal": "K18",
        "grossWt": 10.8,
        "price": 600
    },
    {
        "itemNos": 585,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Opal-3.73 Diamond - 0.04",
        "metal": "PT900",
        "grossWt": 2.7,
        "price": 100
    },
    {
        "itemNos": 586,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Emerald - 1.68",
        "metal": "Pt900",
        "grossWt": 6.5,
        "price": 500
    },
    {
        "itemNos": 587,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Spinel-4.169 Diamond - 0.17",
        "metal": "PT900",
        "grossWt": 8.2,
        "price": 700
    },
    {
        "itemNos": 588,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.30 Diamond - 0.92",
        "metal": "PT900",
        "grossWt": 7.1,
        "price": 600
    },
    {
        "itemNos": 589,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 1.71 Diamond - 0.97",
        "metal": "Pt900",
        "grossWt": 5,
        "price": 500
    },
    {
        "itemNos": 590,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Emerald - 2.385 Diamond - 0.38",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 500
    },
    {
        "itemNos": 591,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 0.84 Diamond - 0.40",
        "metal": "PT900",
        "grossWt": 3.7,
        "price": 400
    },
    {
        "itemNos": 592,
        "jewelleryType": "Ring",
        "Size #": 16,
        "detail": "Emerald - 0.51 Diamond - 0.73",
        "metal": "PT900",
        "grossWt": 8.9,
        "price": 300
    },
    {
        "itemNos": 593,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 1.808 Diamond - 0.20",
        "Particulars": "Madagascar / Cornflower Blue / Heat",
        "metal": "PT900",
        "grossWt": 6.4,
        "price": 400
    },
    {
        "itemNos": 594,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.259 Diamond - 1.00",
        "metal": "PT950",
        "grossWt": 6,
        "price": 600
    },
    {
        "itemNos": 595,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Star Ruby - 4.86  Diamond - 0.75",
        "Particulars": "Myanmar / Reddish Pink / Pigeon Blood / No Heat",
        "metal": "PT900",
        "grossWt": 8.1,
        "price": 800
    },
    {
        "itemNos": 596,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Ruby-4.17 Diamond - 0.78",
        "metal": "K18",
        "grossWt": 12.8,
        "price": 400
    },
    {
        "itemNos": 597,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Sapphire - 1.50 Diamond - 0.60",
        "metal": "PT900",
        "grossWt": 8.6,
        "price": 300
    },
    {
        "itemNos": 598,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Sapphire - 1.60 + Diamond",
        "metal": "PT900",
        "grossWt": 13.6,
        "price": 400
    },
    {
        "itemNos": 599,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 0.64 Diamond - 0.40",
        "metal": "PT900",
        "grossWt": 3.7,
        "price": 400
    },
    {
        "itemNos": 600,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 0.41 Diamond - 0.25",
        "metal": "PT900",
        "grossWt": 3.4,
        "price": 300
    },
    {
        "itemNos": 601,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.048 Diamond - 0.80",
        "metal": "PT900",
        "grossWt": 12.8,
        "price": 600
    },
    {
        "itemNos": 602,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.006 Diamond - 0.15",
        "metal": "PT900",
        "grossWt": 2.9,
        "price": 200
    },
    {
        "itemNos": 603,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Star Ruby - 3.81  Diamond - 0.82",
        "Particulars": "Burma(Myanmar) / Purplish Red / No Heat",
        "metal": "PT900",
        "grossWt": 6.7,
        "price": 700
    },
    {
        "itemNos": 604,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Pink Sapphire-1.86 Diamond - 0.29",
        "metal": "PT850",
        "grossWt": 3.8,
        "price": 300
    },
    {
        "itemNos": 605,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 0.80 Diamond - 0.86",
        "metal": "PT950",
        "grossWt": 5.3,
        "price": 400
    },
    {
        "itemNos": 606,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Emerald - 1.08 Diamond - 0.30",
        "metal": "PT900",
        "grossWt": 7,
        "price": 400
    },
    {
        "itemNos": 607,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 1.01 Diamond - 1.05",
        "metal": "K18",
        "grossWt": 9.7,
        "price": 400
    },
    {
        "itemNos": 608,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.035 Diamond - 0.32",
        "metal": "PT900",
        "grossWt": 3.8,
        "price": 300
    },
    {
        "itemNos": 609,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Pink Sapphire-1.178 Diamond - 0.43",
        "metal": "PT900",
        "grossWt": 4.4,
        "price": 300
    },
    {
        "itemNos": 610,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Pink Sapphire-1.72 Diamond - 0.50",
        "metal": "PT850",
        "grossWt": 5.2,
        "price": 400
    },
    {
        "itemNos": 611,
        "jewelleryType": "Ring",
        "Size #": 11.5,
        "detail": "Ruby-0.87 Diamond - 0.37",
        "metal": "PT900",
        "grossWt": 8.7,
        "price": 300
    },
    {
        "itemNos": 612,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 3.09 Diamond - 0.62",
        "metal": "PT900",
        "grossWt": 7.8,
        "price": 900
    },
    {
        "itemNos": 613,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.62 Diamond - 0.28",
        "metal": "PT900",
        "grossWt": 12.4,
        "price": 500
    },
    {
        "itemNos": 614,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.79  Diamond - 0.83",
        "metal": "PT900",
        "grossWt": 6.9,
        "price": 600
    },
    {
        "itemNos": 615,
        "jewelleryType": "Ring",
        "Size #": 15.5,
        "detail": "Ruby-1.60 Diamond - 0.70",
        "metal": "PT900",
        "grossWt": 8,
        "price": 400
    },
    {
        "itemNos": 616,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.17 Diamond - 0.83",
        "metal": "PT900/K18",
        "grossWt": 14.5,
        "price": 400
    },
    {
        "itemNos": 617,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Sapphire - 1.01 Diamond - 1.40",
        "metal": "PT900",
        "grossWt": 14.7,
        "price": 500
    },
    {
        "itemNos": 618,
        "jewelleryType": "Ring",
        "Size #": 10.5,
        "detail": "Padparadscha Sapphire - 1.18 Diamond - 0.87",
        "Particulars": "Orangish Pink",
        "metal": "PT900",
        "grossWt": 10.5,
        "price": 600
    },
    {
        "itemNos": 619,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 0.91 Ruby-0.22 Diamond - 0.83",
        "metal": "K18",
        "grossWt": 6.5,
        "price": 500
    },
    {
        "itemNos": 620,
        "jewelleryType": "Ring",
        "Size #": 17,
        "detail": "Star Sapphire - 7.166 Diamond - 0.10",
        "Particulars": "Myanmar / No Heat",
        "metal": "PT900",
        "grossWt": 6.3,
        "price": 500
    },
    {
        "itemNos": 621,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 3.342 Diamond - 0.96",
        "metal": "PT900",
        "grossWt": 8.3,
        "price": 600
    },
    {
        "itemNos": 622,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.091 Diamond - 0.43",
        "metal": "PT900",
        "grossWt": 4.6,
        "price": 400
    },
    {
        "itemNos": 623,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 0.91 Diamond - 0.55",
        "metal": "PT900",
        "grossWt": 3.8,
        "price": 500
    },
    {
        "itemNos": 624,
        "jewelleryType": "Ring",
        "Size #": 13.5,
        "detail": "Emerald - 1.53 Diamond - 1.02",
        "metal": "PT900",
        "grossWt": 9.1,
        "price": 400
    },
    {
        "itemNos": 625,
        "jewelleryType": "Ring",
        "detail": "Padparadscha Sapphire - 3.68 Diamond - 0.84",
        "Particulars": "Sri Lanka / Orangy Pink / No Heat",
        "metal": "Pt900",
        "grossWt": 7.9,
        "price": 3700
    },
    {
        "itemNos": 626,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 1.436 Diamond - 0.88",
        "metal": "PT900",
        "grossWt": 6.1,
        "price": 500
    },
    {
        "itemNos": 627,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Emerald - 1.84",
        "metal": "K18",
        "grossWt": 10,
        "price": 300
    },
    {
        "itemNos": 628,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Pink Sapphire-1.474 Diamond - 0.97",
        "metal": "PT950",
        "grossWt": 5,
        "price": 300
    },
    {
        "itemNos": 629,
        "jewelleryType": "Ring",
        "Size #": 17,
        "detail": "Star Sapphire - 7.56 Diamond - 0.30",
        "metal": "PT900",
        "grossWt": 9.1,
        "price": 1000
    },
    {
        "itemNos": 630,
        "jewelleryType": "Ring",
        "Size #": 8,
        "detail": "Sapphire - 4.14 Diamond - 1.261",
        "Particulars": "Sri Lanka / Blue / Heat",
        "metal": "PT900",
        "grossWt": 14,
        "price": 1000
    },
    {
        "itemNos": 631,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Pink Sapphire-1.445 Diamond - 0.31",
        "metal": "K18WG",
        "grossWt": 7.1,
        "price": 200
    },
    {
        "itemNos": 632,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 2.174 Diamond - 0.34",
        "Particulars": "Royal Blue / Heat",
        "metal": "PT900",
        "grossWt": 6.5,
        "price": 400
    },
    {
        "itemNos": 633,
        "jewelleryType": "Ring",
        "Size #": 15.5,
        "detail": "Sapphire -1.54 Diamond - 0.08",
        "Particulars": "Sri Lanka / Blue / Heat",
        "metal": "PT900",
        "grossWt": 5.6,
        "price": 700
    },
    {
        "itemNos": 634,
        "jewelleryType": "Ring",
        "Size #": 12.5,
        "detail": "Emerald - 0.63 Diamond - 0.47",
        "metal": "PT900",
        "grossWt": 8.5,
        "price": 500
    },
    {
        "itemNos": 635,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald - 1.70   Diamond - 0.95",
        "metal": "PT900",
        "grossWt": 7.5,
        "price": 600
    },
    {
        "itemNos": 636,
        "jewelleryType": "Ring",
        "Size #": 15,
        "detail": "Emerald - 2.63 Diamond - 0.97+0.88",
        "metal": "K18",
        "grossWt": 8.5,
        "price": 500
    },
    {
        "itemNos": 637,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.51 Diamond - 0.08",
        "Particulars": "Thailand / Red / Heat",
        "metal": "K18WG",
        "grossWt": 1.8,
        "price": 400
    },
    {
        "itemNos": 638,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Pink Sapphire - 3.28 Diamond - 0.90",
        "Particulars": "Sri Lanka / Pink / Heat",
        "metal": "PT900",
        "grossWt": 5.9,
        "price": 1300
    },
    {
        "itemNos": 639,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Jadeite - 2.52 Diamond - 0.45",
        "metal": "PT900",
        "grossWt": 9.7,
        "price": 400
    },
    {
        "itemNos": 640,
        "jewelleryType": "Ring",
        "Size #": 18,
        "detail": "Sapphire - 3.823 Diamond - 0.73",
        "metal": "PT900",
        "grossWt": 7.7,
        "price": 700
    },
    {
        "itemNos": 641,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Star Sapphire - 19.13 Diamond - 0.76",
        "metal": "Pt900",
        "grossWt": 13.7,
        "price": 700
    },
    {
        "itemNos": 642,
        "jewelleryType": "Ring",
        "detail": "Emerald - 2.33 Diamond - 0.62",
        "metal": "Pt900",
        "grossWt": 6.5,
        "price": 1500
    },
    {
        "itemNos": 643,
        "jewelleryType": "Pendant Top",
        "detail": "Sapphire - 17.32 Diamond - 1.31",
        "metal": "K18",
        "grossWt": 6.3,
        "price": 500
    },
    {
        "itemNos": 644,
        "jewelleryType": "Necklace",
        "detail": "Emerald - 2.648 Diamond - 0.53+0.03",
        "metal": "PT900",
        "grossWt": 10.3,
        "price": 500
    },
    {
        "itemNos": 645,
        "jewelleryType": "Pendant Top",
        "detail": "Emerald - 2.68 Diamond - 0.40",
        "metal": "PT900",
        "grossWt": 5.7,
        "price": 500
    },
    {
        "itemNos": 646,
        "jewelleryType": "Necklace",
        "detail": "Pink Sapphire-1.62 Diamond - 0.25",
        "metal": "K18WG",
        "grossWt": 4,
        "price": 300
    },
    {
        "itemNos": 647,
        "jewelleryType": "Necklace",
        "detail": "Ruby-11.00 Diamond - 0.51",
        "Particulars": "Myanmar / Red / No Heat",
        "metal": "PT900/850",
        "grossWt": 7.6,
        "price": 600
    },
    {
        "itemNos": 648,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Emerald-2.32Diamond - 1.48",
        "metal": "K18YG",
        "grossWt": 9.6,
        "price": 900
    },
    {
        "itemNos": 649,
        "jewelleryType": "Ring",
        "Size #": 14,
        "detail": "Emerald - 8.35 Diamond - 0.03",
        "metal": "K18WG",
        "grossWt": 13.4,
        "price": 900
    },
    {
        "itemNos": 650,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Sapphire - 2.68 Diamond - 1.76",
        "metal": "PT900",
        "grossWt": 7.8,
        "price": 700
    },
    {
        "itemNos": 651,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Sapphire - 6.95Diamond - 0.43+0.76",
        "Particulars": "Sri Lanka / Blue / No Heat",
        "metal": "Pt900",
        "grossWt": 11.8,
        "price": 2400
    },
    {
        "itemNos": 652,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Ruby-1.26 Diamond - 0.35",
        "Particulars": "Burma(Myanmar) / Red / H(a)",
        "metal": "K18WG",
        "grossWt": 4.3,
        "price": 300
    },
    {
        "itemNos": 653,
        "jewelleryType": "Ring",
        "Size #": 12,
        "detail": "Ruby-0.99 Diamond - 1.05",
        "Particulars": "Myanmar / Pinkish Red(Pigeon Blood)\n/ Heat",
        "metal": "PT950",
        "grossWt": 4.3,
        "price": 400
    },
    {
        "itemNos": 654,
        "jewelleryType": "Ring",
        "Size #": 10.5,
        "detail": "Padparadscha Sapphire - 1.04 Diamond - 0.58",
        "Particulars": "Sri Lanka / Orange Pink / No Heat",
        "metal": "K18",
        "grossWt": 4.7,
        "price": 400
    },
    {
        "itemNos": 655,
        "jewelleryType": "Ring",
        "Size #": 11,
        "detail": "Emerald - 1.25  Diamond - 0.62",
        "Particulars": "Afghanistan / Int.Green / Minor",
        "metal": "PT900",
        "grossWt": 6.7,
        "price": 500
    },
    {
        "itemNos": 656,
        "jewelleryType": "Ring",
        "Size #": 9,
        "detail": "Ruby-1.34 Diamond - 0.31",
        "Particulars": "Myanmar / Vivid Pinkish Red / Minor",
        "metal": "PT900",
        "grossWt": 5.8,
        "price": 500
    },
    {
        "itemNos": 657,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Sapphire - 1.82 Diamond - 0.62",
        "Particulars": "Sri Lanka / Royal Blue / Heat",
        "metal": "PT900",
        "grossWt": 5.4,
        "price": 400
    },
    {
        "itemNos": 658,
        "jewelleryType": "Ring",
        "Size #": 13,
        "detail": "Ruby-1.00 Diamond - 0.50",
        "Particulars": "Thailand / Purplish Red / Heat / Minor",
        "metal": "PT900",
        "grossWt": 6.9,
        "price": 400
    },
    {
        "itemNos": 659,
        "jewelleryType": "Ring",
        "Size #": 10,
        "detail": "Star Ruby - 4.11  Diamond - 1.45",
        "Particulars": "Myanmar / Pinkish Red / No Heat",
        "metal": "PT900",
        "grossWt": 7.2,
        "price": 1200
    },
    {
        "itemNos": 660,
        "jewelleryType": "Ring",
        "Size #": 7.6,
        "detail": "Ruby-3.09 Diamond - 1.55",
        "Particulars": "Thailand / Pinkish Red(Pigeon Blood) / Minor",
        "metal": "K18",
        "grossWt": 7.6,
        "price": 1500
    },
];

export { JwelleryColsDefs, JwelleryData }