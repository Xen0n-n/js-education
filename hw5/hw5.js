let main_block = document.getElementById("main-content");

function createChessMap() {
    let chess_map = document.createElement("table");
    
    main_block.appendChild(chess_map);
    
    let counter = 1;
    for (let i = 0; i < 8; i++) {
        
        let chess_map_row = document.createElement("tr");
        chess_map.appendChild(chess_map_row);
        
        for (let j = 0; j < 8; j++) {
            
            let block = document.createElement("td");
            chess_map_row.appendChild(block);
            block.style.backgroundColor = counter % 2 === 0 ? "black" : "white";
            if (j !== 7){
                counter++;
            }
        }
    }
}

createChessMap();