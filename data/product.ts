// Product data structure
export interface Product {
    id: string
    name: string
    features: string[]
    price: string
    image?: string
  }
  
  // JSON data for products
  export const productsData = {
    mostPopular: [
      {
        id: "yamaha-aerox-2020",
        name: "Yamaha Aerox Connected 2020+ Double Bi-LED",
        features: [
          "2x Bi-LED AES Turbo SE Experience",
          "Shroud BMW Classic",
          "Devil Eye & DRL1 Mode",
          "Saklar Vision Oid",
          "Extra Fan",
          "Relay Set",
        ],
        price: "Rp. 2,450,000",
        image: "/most-popular/Pict.png",
      },
      {
        id: "honda-vario-2015",
        name: "Honda Vario 2015-2018 Double Bi-LED",
        features: [
          "2x Bi-LED AES Turbo SE Experience",
          "Shroud BMW Classic",
          "Devil Eye & DRL1 Mode",
          "Saklar Revo + Passbeam",
          "Extra Fan",
          "Relay Set",
        ],
        price: "Rp. 2,150,000",
        image: "/most-popular/Pict-1.png",
      },
      {
        id: "yamaha-aerox-155-2018",
        name: "Yamaha Aerox 155 2018+ Double Bi-LED",
        features: [
          "2x Bi-LED AES Turbo SE Experience",
          "Shroud BMW Classic",
          "Devil Eye & DRL1 Mode",
          "Saklar Mio + Passbeam",
          "Extra Fan",
          "Relay Set",
        ],
        price: "Rp. 2,250,000",
        image: "/most-popular/Pict-2.png",
      },
      {
        id: "honda-vario-2022",
        name: "Yamaha Aerox New Double Bi-LED",
        features: [
          "2x Bi-LED AES Turbo SE Experience",
          "Shroud BMW Classic",
          "Devil Eye & DRL1 Mode",
          "Saklar Vixion Old",
          "Extra Fan",
          "Relay Set",
        ],
        price: "Rp. 2,350,000",
        image: "/most-popular/Pict-3.png",
      },
    ],
    underglow: [
      {
        id: "paket-1",
        name: "Paket 1",
        features: ["1 Lampu LED (Warna sesuai request)", "Set Kabel", "Biaya Jasa"],
        price: "Rp. 40,000",
        image: "/underglow/Pict.png",
      },
      {
        id: "paket-2",
        name: "Paket 2",
        features: ["2 Lampu LED (Warna sesuai request)", "Set Kabel", "Biaya Jasa"],
        price: "Rp. 50,000",
        image: "/underglow/Pict-1.png",
      },
      {
        id: "paket-3",
        name: "Paket 3",
        features: ["2 Lampu LED (Warna sesuai request)", "Set Kabel", "Saklar Lampu", "Biaya Jasa"],
        price: "Rp. 60,000",
        image: "/underglow/Pict-2.png",
      },
      {
        id: "paket-4",
        name: "Paket 4",
        features: ["2 Lampu LED (Warna sesuai request)", "Set Kabel", "Saklar Lampu", "Modul Blitz", "Biaya Jasa"],
        price: "Rp. 75,000",
        image: "/underglow/Pict-3.png",
      },
    ],
    additional: [
      {
        id: "additional-1",
        features: 
        [
            "Devil Eye RGB (+100k)",
            "DRL RGB (+250K)",
            "Shroud RGB (+500K)",
            "Mini Projector AES D2 Laser 30W (+350K)"
        ],
      },
    ],
  }
  