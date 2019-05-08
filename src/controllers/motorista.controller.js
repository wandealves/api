class MotoristaController {

    async show(req, res) {
        const motoristas = [  
            {  
               codigo:"1",
               nome:"Motorista 01",
               cpf:"11111111111",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"2",
               nome:"Motorista 02",
               cpf:"98987767666",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"3",
               nome:"Motorista 03",
               cpf:"22222222222",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"4",
               nome:"Motorista 04",
               cpf:"33333333333",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"5",
               nome:"Motorista 05",
               cpf:"44444444444",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"6",
               nome:"Motorista 06",
               cpf:"55555555555",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"7",
               nome:"Motorista 07",
               cpf:"66666666666",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"8",
               nome:"Motorista 08",
               cpf:"77777777777",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"9",
               nome:"Motorista 09",
               cpf:"88888888888",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"10",
               nome:"Motorista 10",
               cpf:"99999999999",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"11",
               nome:"Motorista 11",
               cpf:"1010101010101",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"12",
               nome:"Motorista 12",
               cpf:"121212121212121",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"13",
               nome:"Motorista 13",
               cpf:"131313131313113",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"14",
               nome:"Motorista 14",
               cpf:"141414141414141",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"15",
               nome:"Motorista 15",
               cpf:"1515151515115",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"16",
               nome:"Motorista 16",
               cpf:"161616161616116",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"17",
               nome:"Motorista 17",
               cpf:"171717171717117",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"18",
               nome:"Motorista 18",
               cpf:"1818181818118118",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"19",
               nome:"Motorista 19",
               cpf:"1919191919119",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            },
            {  
               codigo:"20",
               nome:"Motorista 20",
               cpf:"2020202020220",
               phone:"99999999",
               city:"Serra",
               state:"ES"
            }
         ];
        return res.json(motoristas);
    }
}

module.exports = new MotoristaController();