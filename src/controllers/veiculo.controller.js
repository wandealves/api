class VeiculoController {

    

    async show(req, res) {

        const obj = `{
            id: "43",
            brand: "AUDI",
            model: "100",
            setUp: "100 2.8 V6",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "44",
            brand: "AUDI",
            model: "100",
            setUp: "100 2.8 V6 Avant",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "45",
            brand: "AUDI",
            model: "100",
            setUp: "100 S-4 2.2 Avant Turbo",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "46",
            brand: "AUDI",
            model: "80",
            setUp: "80 2.0",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "47",
            brand: "AUDI",
            model: "80",
            setUp: "80 2.0 Avant",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "48",
            brand: "AUDI",
            model: "80",
            setUp: "80 2.6/ 2.8",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "49",
            brand: "AUDI",
            model: "80",
            setUp: "80 2.6/2.8 Avant",
            ano: "1996",
            combustivel: "Gasolina"
        }, {
            id: "50",
            brand: "AUDI",
            model: "80",
            setUp: "80 2.8 Cabriolet",
            ano: "1999",
            combustivel: "Gasolina"
        }, {
            id: "51",
            brand: "AUDI",
            model: "80",
            setUp: "80 S2 Avant",
            ano: "1995",
            combustivel: "Gasolina"
        }, {
            id: "5496",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 1.4 TFSI 122cv S-tronic 3p",
            ano: "2014",
            combustivel: "Gasolina"
        }, {
            id: "6293",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 2.0 TFSI Quattro 256cv 3p",
            ano: "2013",
            combustivel: "Gasolina"
        }, {
            id: "6143",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 Sport 1.4 TFSI 185cv 3p S-tronic",
            ano: "2014",
            combustivel: "Gasolina"
        }, {
            id: "7727",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 Sport. S Edition 1.4 TFSI 5p S-tronic",
            ano: "2017",
            combustivel: "Gasolina"
        }, {
            id: "6201",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 Sportback 1.4 TFSI 185cv 5p S-tronic",
            ano: "2015",
            combustivel: "Gasolina"
        }, {
            id: "6200",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 Sportback 1.4 TFSI 5p S-tronic",
            ano: "Zero",
            combustivel: "KM"
        }, {
            id: "7418",
            brand: "AUDI",
            model: "a1",
            setUp: "A1 Sportback 1.8 TFSI 192cv 5p S-tronic",
            ano: "Zero",
            combustivel: "KM"
        }, {
            id: "52",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.6 3p",
            ano: "2003",
            combustivel: "Gasolina"
        }, {
            id: "53",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.6 3p Aut.",
            ano: "2003",
            combustivel: "Gasolina"
        }, {
            id: "54",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.6 5p",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "55",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.6 5p Aut.",
            ano: "2003",
            combustivel: "Gasolina"
        }, {
            id: "4154",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.6 8V 102cv 3p",
            ano: "2007",
            combustivel: "Gasolina"
        }, {
            id: "56",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 3p",
            ano: "2004",
            combustivel: "Gasolina"
        }, {
            id: "57",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 3p Aut.",
            ano: "2004",
            combustivel: "Gasolina"
        }, {
            id: "58",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 5p Aut.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "59",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 5p Mec.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "60",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 180cv 3p Aut./ Tip.",
            ano: "2003",
            combustivel: "Gasolina"
        }, {
            id: "61",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 180cv 3p Mec.",
            ano: "2004",
            combustivel: "Gasolina"
        }, {
            id: "62",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 180cv 5p Aut./ Tip.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "63",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 180cv 5p Mec.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "64",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 3p Aut.",
            ano: "2003",
            combustivel: "Gasolina"
        }, {
            id: "65",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 3p Mec.",
            ano: "2004",
            combustivel: "Gasolina"
        }, {
            id: "66",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 5p Aut.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "67",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 1.8 Turbo 5p Mec.",
            ano: "2006",
            combustivel: "Gasolina"
        }, {
            id: "6950",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 Cabriolet 1.8 16V TFSI 180cv S-tronic",
            ano: "2016",
            combustivel: "Gasolina"
        }, {
            id: "8227",
            brand: "AUDI",
            model: "a3",
            setUp: "A3 Cabriolet Ambition 2.0 TFSI S-tronic",
            ano: "Zero",
            combustivel: "KM"
        }`;
        const veiculos = [
            {
                id: "43",
                brand: "AUDI",
                model: "100",
                setUp: "100 2.8 V6",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "44",
                brand: "AUDI",
                model: "100",
                setUp: "100 2.8 V6 Avant",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "46",
                brand: "AUDI",
                model: "80",
                setUp: "80 2.0",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "47",
                brand: "AUDI",
                model: "80",
                setUp: "80 2.0 Avant",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "48",
                brand: "AUDI",
                model: "80",
                setUp: "80 2.6/ 2.8",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "49",
                brand: "AUDI",
                model: "80",
                setUp: "80 2.6/2.8 Avant",
                ano: "1996",
                combustivel: "Gasolina"
            }, {
                id: "50",
                brand: "AUDI",
                model: "80",
                setUp: "80 2.8 Cabriolet",
                ano: "1999",
                combustivel: "Gasolina"
            }, {
                id: "51",
                brand: "AUDI",
                model: "80",
                setUp: "80 S2 Avant",
                ano: "1995",
                combustivel: "Gasolina"
            }, {
                id: "5496",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 1.4 TFSI 122cv S-tronic 3p",
                ano: "2014",
                combustivel: "Gasolina"
            }, {
                id: "6293",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 2.0 TFSI Quattro 256cv 3p",
                ano: "2013",
                combustivel: "Gasolina"
            }, {
                id: "6143",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 Sport 1.4 TFSI 185cv 3p S-tronic",
                ano: "2014",
                combustivel: "Gasolina"
            }, {
                id: "7727",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 Sport. S Edition 1.4 TFSI 5p S-tronic",
                ano: "2017",
                combustivel: "Gasolina"
            }, {
                id: "6201",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 Sportback 1.4 TFSI 185cv 5p S-tronic",
                ano: "2015",
                combustivel: "Gasolina"
            }, {
                id: "6200",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 Sportback 1.4 TFSI 5p S-tronic",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "7418",
                brand: "AUDI",
                model: "a1",
                setUp: "A1 Sportback 1.8 TFSI 192cv 5p S-tronic",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "52",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.6 3p",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "53",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.6 3p Aut.",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "54",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.6 5p",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "55",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.6 5p Aut.",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "4154",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.6 8V 102cv 3p",
                ano: "2007",
                combustivel: "Gasolina"
            }, {
                id: "56",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 3p",
                ano: "2004",
                combustivel: "Gasolina"
            }, {
                id: "57",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 3p Aut.",
                ano: "2004",
                combustivel: "Gasolina"
            }, {
                id: "58",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 5p Aut.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "59",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 5p Mec.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "60",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 180cv 3p Aut./ Tip.",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "61",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 180cv 3p Mec.",
                ano: "2004",
                combustivel: "Gasolina"
            }, {
                id: "62",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 180cv 5p Aut./ Tip.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "63",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 180cv 5p Mec.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "64",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 3p Aut.",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "65",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 3p Mec.",
                ano: "2004",
                combustivel: "Gasolina"
            }, {
                id: "66",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 5p Aut.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "67",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 1.8 Turbo 5p Mec.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "6950",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 Cabriolet 1.8 16V TFSI 180cv S-tronic",
                ano: "2016",
                combustivel: "Gasolina"
            }, {
                id: "8227",
                brand: "AUDI",
                model: "a3",
                setUp: "A3 Cabriolet Ambition 2.0 TFSI S-tronic",
                ano: "Zero",
                combustivel: "KM"
            }
        ];
        return res.json(veiculos);
    }
}

module.exports = new VeiculoController();