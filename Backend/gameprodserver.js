 const gamingProducts = [
    {
        productname:"Playstation 5",
        price:"50000",
        rating:"4.6",
        discount:"28",
        category:"console",
        availability:"yes",
        img:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt054c12973dc65d3e/60db71928491e60f790b1b87/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        desc:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as the successor to the PlayStation 4 in April 2019, was launched on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, and was released worldwide one week later. The PS5 is part of the ninth generation of video game consoles, along with Microsoft's Xbox Series X/S consoles, which were released in the same month."
    },
    {
        productname:"Xbox Series X",
        price:"40000",
        rating:"4.2",
        discount:"20",
        category:"console",
        availability:"yes",
        img:"https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png",
        desc:"The Xbox Series X and Xbox Series S are the fourth generation of consoles in the Xbox series. Released on November 10, 2020, the higher-end Xbox Series X and lower-end Xbox Series S are part of the ninth generation of video game consoles, which also includes Sony's PlayStation 5, released the same month.[4] Both superseded the Xbox One."
    },
    {
        productname:"Playstation 4",
        price:"30000",
        rating:"3.5",
        discount:"28",
        category:"console",
        availability:"no",
        img:"https://www.sony.co.in/image/c4712ccfab97c7102498a5d0ba18de5f?fmt=jpeg&wid=600",
        desc:"The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America, November 29, 2013, in Europe, South America, and Australia, and on February 22, 2014, in Japan. A console of the eighth generation, it competes with Microsoft's Xbox One and Nintendo's Wii U and Switch."
    },
    {
        productname:"Nitendo Switch",
        price:"30000",
        rating:"4",
        discount:"10",
        category:"console",
        availability:"yes",
        img:"https://m.media-amazon.com/images/I/51TJ3ERPBwL.jpg",
        desc:"The Nintendo Switch[m] is a video game console developed by Nintendo and released worldwide in most regions on March 3, 2017. Released in the middle of the eighth generation of home consoles, the Switch succeeded the Wii U and competes with Microsoft's Xbox One and Sony's PlayStation 4; it has also competed with the ninth-generation consoles, Microsoft's Xbox Series X/S and Sony's PlayStation 5."
    },
    {
        productname:"Dell AlienWare",
        price:"80000",
        rating:"4.6",
        discount:"28",
        img:"https://images.anandtech.com/doci/13433/aw15r5nt_lnb_00055lf110_gy.png",
        category:"laptop",
        availability:"yes",
        desc:"Alienware Corporation is an American computer hardware subsidiary brand of Dell. Their product range is dedicated to gaming computers and can be identified by their alien-themed designs.[5] Alienware was founded in 1996 by Nelson Gonzalez and Alex Aguila.[6][7] The development of the company is also associated[why?] with Frank Azor, Arthur Lewis, Joe Balerdi,[citation needed] and Michael S. Dell. The company's corporate headquarters is located in The Hammocks, Miami, Florida.[8]"
    },
    {
        productname:"Playstation 5 (Special Edition)",
        price:"55000",
        rating:"4.8",
        img:"https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-limited-edition-console-dualsense-image-block-01-en-25jul23?$1600px$",
        discount:"15",
        category:"console",
        availability:"yes",
        desc:"Get the PlayStation 5 Console – Marvel’s Spider-Man 2 Limited Edition Bundle with a symbiote takeover design, and experience the next game in the Marvel’s Spider-Man franchise. This bundle includes a PS5 console with Limited Edition console covers, a Limited Edition DualSense wireless controller, a voucher for a digital copy of the game, and pre-order incentive items.*"
        

    },
    {
        productname: "Xbox Series X (Halo Infinite Edition)",
        price: "60000",
        rating: "4.7",
        img: "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/08/Halo_gamescom_HEROFINAL.jpg",
        discount: "10",
        category: "console",
        availability: "yes",
        desc: "Get the Xbox Series X Console – Halo Infinite Limited Edition Bundle with a special Halo-themed design, and experience the next game in the Halo franchise. This bundle includes an Xbox Series X console with Limited Edition console covers, a Limited Edition Xbox Wireless Controller, a voucher for a digital copy of the game, and exclusive Halo-themed items.*"
      },
      {
        productname: "Nintendo Switch OLED Model",
        price: "35000",
        rating: "4.6",
        img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-console-dock-joy-con-grip-1200x675",
        discount: "5",
        category: "console",
        availability: "yes",
        desc: "Introducing the Nintendo Switch OLED Model with a vibrant 7-inch OLED screen, enhanced audio, and 64GB of internal storage. Enjoy gaming on-the-go with improved visuals and immersive gameplay. Includes a Nintendo Switch console, Joy-Con controllers, and a dock.*"
      },
      {
        productname: "Razer Blade 15 Gaming Laptop",
        price: "2000",
        rating: "4.9",
        img: "https://assets2.razerzone.com/images/pnx.assets/a2c45a48832815a0cf64acd462fe9bf7/razer-blade-15-ch9-ogimage_1200x630.png",
        discount: "20",
        category: "laptop",
        availability: "yes",
        desc: "The Razer Blade 15 Gaming Laptop delivers exceptional performance in a sleek, portable design. Featuring a powerful processor, high-resolution display, and advanced cooling system, it's perfect for gaming, content creation, and more.*"
      },
      {
        productname: "Logitech G Pro Wireless Gaming Mouse",
        price: "150",
        rating: "4.8",
        img: "https://resource.logitech.com/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png",
        discount: "0",
        category: "accessory",
        availability: "yes",
        desc: "The Logitech G Pro Wireless Gaming Mouse offers precision, speed, and reliability for competitive gaming. With advanced features such as LIGHTSPEED wireless technology, HERO sensor, and customizable buttons, it's the perfect choice for professional gamers.*"
      },
      {
        productname: "SteelSeries Arctis 7 Gaming Headset",
        price: "150",
        rating: "4.7",
        img: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/03/Photo-Mar-02-11-39-43-AM.jpg",
        discount: "0",
        category: "accessory",
        availability: "yes",
        desc: "The SteelSeries Arctis 7 Gaming Headset offers immersive audio and superior comfort for long gaming sessions. With a retractable microphone, DTS Headphone:X v2.0 surround sound, and 24-hour battery life, it delivers a competitive edge in gaming.*"
      }
]
module.exports = gamingProducts;