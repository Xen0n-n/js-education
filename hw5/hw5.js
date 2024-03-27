let main_block = document.getElementById("main-content");


let white_block = document.createElement("td");
white_block.style.width = "60px";
white_block.style.height = "60px";
white_block.style.backgroundColor = "yellow";


function createChessMap() {
    let chess_map = document.createElement("table");
    
    main_block.appendChild(chess_map);
    
    let counter = 1;
    for (let i = 0; i < 8; i++) {
        
        let chess_map_row = document.createElement("tr");
        chess_map.appendChild(chess_map_row);
        
        for (let j = 0; j < 8; j++) {
            
            let block = document.createElement("td");
            block.style.width = "5em";
            block.style.height = "5em";
            chess_map_row.appendChild(block);
            block.style.backgroundColor = counter % 2 === 0 ? "black" : "white";
            if (j !== 7){
                counter++;
            }
        }
    }
}

createChessMap();