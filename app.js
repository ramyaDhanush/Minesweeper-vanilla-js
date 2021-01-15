document.addEventListener('DOMContentLoaded',()=>{
  const grid = document.querySelector('.grid');
  let width = 10;
  let bombsAmount = 20;
  let squares = [];
  
  // Create Board
  function createBoard(){
    // get shuffled game array with random bombs
    const bombsArray = Array(bombsAmount).fill('bomb');
    const emptyArray = Array(width*width - bombsAmount).fill('valid')
    
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(()=> Math.random()-0.5);
    
    for(let i =0; i<width * width; i++){ // 10 * 10 board
      const square = document.createElement('div');
      
      // set id & class
      square.setAttribute('id', i);
      square.classList.add(shuffledArray[i]);
      
      // append the node
      grid.appendChild(square);
      
      squares.push(square);
    }
    
    // add numbers
    for(let i = 0;i< squares.length; i++){
      let total = 0;
      const isleftEdge = i%width === 0;
      const isRightEdge = i%width === width-1;
      
      if(squares[i].classList.contains('valid')){
        if(i>0 && !isleftEdge && squares[i-1].classList.contains('bomb')) total++;
        
        if(i>9 && !isRightEdge && squares[i+1-width].classList.contains('bomb')) total++;
        
        // top of an element
        if(i>10 && squares[i-width].classList.contains('bomb')) total++;
        
        // left edge of an element
        if(i>11 && !isleftEdge && squares[i-1-width].classList.contains('bomb')) total++;
        
        if(i<98 && !isRightEdge && squares[i+1].classList.contains('bomb')) total++;
        
        if(i<99 && !isRightEdge && squares[i-1+width].classList.contains('bomb')) total++;
        
        if(i<88 && !isRightEdge && squares[i+1-width].classList.contains('bomb')) total++;
        if(i>89 &&  squares[i+width].classList.contains('bomb')) total++;
        squares[i].setAttribute('data', total);
      } 
      
    }
    
  }
  
  createBoard();
})