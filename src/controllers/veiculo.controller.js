class VeiculoController {

    

    async show(req, res) {
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
            },{
                id: "7436",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy 3.6 4x4 256cv Aut.",
                ano: "2015",
                combustivel: "Gasolina"
            }, {
                id: "2145",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL 1.8",
                ano: "1994",
                combustivel: "Gasolina"
            }, {
                id: "2146",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL 2.0/ GLS Mec",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2147",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL TW 2.0 4x2 Mec./Aut.",
                ano: "2000",
                combustivel: "Gasolina"
            }, {
                id: "2148",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL TW 2.0 4x4 Aut.",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2149",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL TW 2.0 4x4 Mec.",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2150",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GL/ GLS 2.0 Aut.",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "5216",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GT 2.5  16V 280cv Aut.",
                ano: "2014",
                combustivel: "Gasolina"
            }, {
                id: "2151",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX 2.2 4x4",
                ano: "1998",
                combustivel: "Gasolina"
            }, {
                id: "2152",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX 2.5 4x4 Aut.",
                ano: "2003",
                combustivel: "Gasolina"
            }, {
                id: "2153",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX 2.5 4x4 Mec.",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2154",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX TW 2.2 4x4 Aut.",
                ano: "1997",
                combustivel: "Gasolina"
            }, {
                id: "2155",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX TW 2.2 4x4 Mec.",
                ano: "1997",
                combustivel: "Gasolina"
            }, {
                id: "2156",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX TW 2.5 4x4 Aut.",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2157",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy GX TW 2.5 4x4 Mec",
                ano: "2002",
                combustivel: "Gasolina"
            }, {
                id: "2158",
                brand: "SUBARU",
                model: "legacy",
                setUp: "Legacy SW 2.2",
                ano: "1997",
                combustivel: "Gasolina"
            }, {
                id: "2159",
                brand: "SUBARU",
                model: "outback",
                setUp: "Outback 2.5 4x4 Aut.",
                ano: "2006",
                combustivel: "Gasolina"
            }, {
                id: "2160",
                brand: "SUBARU",
                model: "outback",
                setUp: "Outback 2.5 4x4 Mec.",
                ano: "2000",
                combustivel: "Gasolina"
            }, {
                id: "2161",
                brand: "SUBARU",
                model: "outback",
                setUp: "Outback 3.0 H6 SW 245cv Aut.",
                ano: "2009",
                combustivel: "Gasolina"
            }, {
                id: "5217",
                brand: "SUBARU",
                model: "outback",
                setUp: "Outback 3.6 H6 SW Aut.",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "2162",
                brand: "SUBARU",
                model: "svx",
                setUp: "SVX Cupê 3.3 4x4 Aut",
                ano: "1998",
                combustivel: "Gasolina"
            }, {
                id: "4688",
                brand: "SUBARU",
                model: "tribeca",
                setUp: "TRIBECA 3.6 24V 270cv 5p Aut.",
                ano: "2012",
                combustivel: "Gasolina"
            }, {
                id: "2163",
                brand: "SUBARU",
                model: "vivio",
                setUp: "Vivio SD GLI 3p Mec.",
                ano: "1997",
                combustivel: "Gasolina"
            }, {
                id: "8357",
                brand: "SUBARU",
                model: "xv",
                setUp: "XV 2.0 L 16V 4x4 Aut.",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "6331",
                brand: "SUBARU",
                model: "xv",
                setUp: "XV 2.0/2.0 S 16V 4x4 Aut.",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "5192",
                brand: "TAC",
                model: "stark",
                setUp: "Stark 2.3 4WD 127cv TDI Diesel 3p",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "3978",
                brand: "TROLLER",
                model: "pantanal",
                setUp: "PANTANAL 3.0 TDI Elet. 4x2 CS Diesel",
                ano: "2007",
                combustivel: "Diesel"
            }, {
                id: "3979",
                brand: "TROLLER",
                model: "pantanal",
                setUp: "PANTANAL 3.0 TDI Elet. 4x4 CS Diesel",
                ano: "2007",
                combustivel: "Diesel"
            }, {
                id: "2289",
                brand: "TROLLER",
                model: "rf",
                setUp: "RF Esport 4x4 2.0",
                ano: "1997",
                combustivel: "Gasolina"
            }, {
                id: "2290",
                brand: "TROLLER",
                model: "rf",
                setUp: "RF Esport T-4 4x4 2.0 Cap. Lona",
                ano: "2001",
                combustivel: "Gasolina"
            }, {
                id: "2291",
                brand: "TROLLER",
                model: "rf",
                setUp: "RF Esport T-4 4x4 2.0 Cap. Rígida",
                ano: "2001",
                combustivel: "Gasolina"
            }, {
                id: "2292",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 2.8 TB Int. Cap. Lona Diesel",
                ano: "2005",
                combustivel: "Diesel"
            }, {
                id: "2293",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 2.8 TB Int. Cap. Rígida Diesel",
                ano: "2005",
                combustivel: "Diesel"
            }, {
                id: "2294",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 3.0 TB Int. Cap. Lona Diesel",
                ano: "2011",
                combustivel: "Diesel"
            }, {
                id: "2295",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 3.0 TB Int. Cap. Rígida Diesel",
                ano: "2012",
                combustivel: "Diesel"
            }, {
                id: "6933",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 3.2 20V Tdi Cap. Rígida Diesel",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "6194",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 4x4 3.2 TGV tdi Cap. Rígida Diesel",
                ano: "2014",
                combustivel: "Diesel"
            }, {
                id: "7816",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 BOLD 4x4 3.2 Tdi Cap. Rígida Diesel",
                ano: "2017",
                combustivel: "Diesel"
            }, {
                id: "5652",
                brand: "TROLLER",
                model: "t",
                setUp: "T-4 DESERT STORM 4x4 3.0 TB Int Diesel",
                ano: "2012",
                combustivel: "Diesel"
            }, {
                id: "5088",
                brand: "WAKE",
                model: "way",
                setUp: "Way 1.6 Total Flex 8V Mec.",
                ano: "Zero",
                combustivel: "KM"
            }, {
                id: "5089",
                brand: "WAKE",
                model: "way",
                setUp: "Way 1.8 Total Flex 8V Mec.",
                ano: "2012",
                combustivel: "Gasolina"
            }, {
                id: "3998",
                brand: "WALK",
                model: "buggy",
                setUp: "Buggy  Walk Sport 1.6 8V 58cv",
                ano: "Zero",
                combustivel: "KM"
            }
        ];
        return res.json(veiculos);
    }
}

module.exports = new VeiculoController();