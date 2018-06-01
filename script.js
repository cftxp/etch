			// Assignment to the container and creation of the reset button
			let container = document.querySelector("#container");
			let reset = document.querySelector("#reset");
			let num;
			let size;
			let squares;

			// Determines how many rows are assigned to the grid;
			function grid(rows){
				num = rows;
				for(var row = 0; row < num; row++){
					var r = document.createElement('div');
					r.classList.add("row");
					r.style.height = `${container.clientHeight/num}px`;
					container.appendChild(r);
				}
				size = container.clientHeight/num;
			}

			// Calls the "grid" function
			grid(16);
			// Assigns the generated rows to an array
			let rows = document.querySelectorAll("div.row");
			rows = Array.prototype.slice.call(rows);

			// Assigns 4 cells to each row
			for(var x = 0; x < rows.length; x++){
				for(var y = 0; y < num; y++){
					var c = document.createElement("div");
					var newContent = document.createTextNode("");
					c.classList.add("cell");
					c.style.width = `${size}px`;
					c.style.height = `${size}px`;
					c.appendChild(newContent);
					rows[x].appendChild(c);
				}
			}

			// Assigns all generated cells to an array
			let cells = document.querySelectorAll("div.cell");
			cells = Array.prototype.slice.call(cells);
			// Hovering over each cell makes it change color
			cells.forEach(cell => cell.addEventListener("mouseover", function(){
				cell.style.backgroundColor = color();
			}));

			// Clicking on the "reset" button will reset the etch
			reset.addEventListener("click", function(){
				for(var rgb = 0; rgb < cells.length; rgb++){
					cells[rgb].style.backgroundColor = "rgba(220, 220, 220, 1)";
				}
				// squares = prompt("How many squares should there be on each side?");
				// squares = prompt("How many squares should there be on each side?");
				// takeOut();
				// grid(Number(squares));
			});

			// function takeOut(){
			// 	// rows = rows.slice(0, (rows.length-1));
			// 	// cells = cells.slice(0, (cells.length-1));
			// 	rows.forEach(row => row.style.display = "none");
			// 	cells.forEach(cell => cell.style.display = "none");
			// 	replace();
			// }

			// function replace(){
			// 	rows.forEach(row => row.style.display = "block");
			// 	cells.forEach(cell => cell.style.display = "inline");
			// 	grid(Number(squares));
			// }

			// This function changes color according to RGBA format
			function color(){
				let red = random();
				let green = random();
				let blue = random();
				let alpha = Math.random()*1;
				return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
			}

			// This function generates a random number between 0 and 256, then returns it 
			function random(){
				return Math.floor(Math.random() * 256);
			}