// Include in Read File
const fs = require("fs");
let text = fs.readFileSync("deleted.txt", "utf-8");
text = text.replace("This is a Web Developments Website.", `< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Alingments</title>
                        <style>
                            .container {
                                background - color: #0e0011;
            border: 6px solid #7a0c0c;
            width: 964px;
            margin: auto;
        }

        .item {
                                background - color: #65711e;
            border: 6px solid red;
            margin: 3px auto;
            padding: 6px;
            width: 888px;
            text-align: justify;
        }

        #friuts {
                                float: left;
            width: 40%;
        }

        #computers {
                                float: right;
            width: 40%;
        }

        #stationarys {
                                clear: left;
        }
    </style>
</head>

                    <body>
                        <div class="container">
                            <div id="friuts" class="item">
                                <h2>Friuts</h2>
                                <p id="friutspara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente in vitae ipsum
                                iste, blanditiis a, aliquid dolore commodi quae nesciunt tempora dignissimos dolores molestiae id
                                tempore! Sunt atque dolore nemo ex tenetur veniam facere? Eos alias quasi facilis aliquam corporis
                aperiam? Reiciendis, delectus dolor.</p>
                            </div>
                            <div id="computers" class="item">
                                <h2>Computers</h2>
                                <p id="computerspara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente in vitae ipsum
                                iste, blanditiis a, aliquid dolore commodi quae nesciunt tempora dignissimos dolores molestiae id
                                tempore! Sunt atque dolore nemo ex tenetur veniam facere? Eos alias quasi facilis aliquam corporis
                aperiam? Reiciendis, delectus dolor.</p>
                            </div>
                            <div id="stationarys" class="item">
                                <h2>Stationarys</h2>
                                <p id="stationaryspara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente in vitae
                                ipsum iste, blanditiis a, aliquid dolore commodi quae nesciunt tempora dignissimos dolores molestiae id
                                tempore! Sunt atque dolore nemo ex tenetur veniam facere? Eos alias quasi facilis aliquam corporis
                aperiam? Reiciendis, delectus dolor.</p>
                            </div>
                            <div id="glasses" class="item">
                                <h2>Glasses</h2>
                                <p id="glassespara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente in vitae ipsum
                                iste, blanditiis a, aliquid dolore commodi quae nesciunt tempora dignissimos dolores molestiae id
                                tempore! Sunt atque dolore nemo ex tenetur veniam facere? Eos alias quasi facilis aliquam corporis
                aperiam? Reiciendis, delectus dolor.</p>
                            </div>
                        </div>
                    </body>

</html>`);
console.log(text);
console.log("The Web Developments in Browser.");
console.log("Creating a New File....")
fs.writeFileSync("Andriod.txt", text);
