let main_block = document.getElementById("main-content");

function createChessMap() {
    let alphabet = "ABCDEFGH";

    let chess_map = document.createElement("table");

    main_block.appendChild(chess_map);

    let counter = 1;

    for (let i = 0; i <= 8; i++) {

        let chess_map_row = document.createElement("tr");
        chess_map.appendChild(chess_map_row);

        if (i === 0) {
            let block = document.createElement("td");
            chess_map_row.appendChild(block);
        }
        
        for (let j = 0; j <= 8; j++) {

            if (i === 0 && j !== 0) {
                let td = document.createElement('td');
                td.innerText = j;
                td.style.width = "2em";
                td.style.border = "solid";
                td.style.textAlign = "center";
                chess_map_row.appendChild(td);
            }
            
            if (j === 0 && i !== 0) {
                let td = document.createElement('td');
                td.innerText = alphabet[i - 1];
                td.style.width = "2em";
                td.style.border = "solid";
                td.style.textAlign = "center";
                chess_map_row.appendChild(td);

            }
            
            if (i !== 0 && j !== 0) {
                let block = document.createElement("td");
                chess_map_row.appendChild(block);
                block.style.backgroundColor = counter % 2 === 0 ? "black" : "white";
                if (j !== 8) {
                    counter++;
                }
            }
        }
    }
}

createChessMap();