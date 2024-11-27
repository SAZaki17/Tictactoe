const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
}
function getOriboard(){
    return{
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9'
    }
}
function resetboard() {
    board = getOriboard();
}

function boardstatus(){
console.log(
        ' '+board[1]+' | '+board[2]+' | '+board[3]+' \n' +
        ' --------- \n' +
        ' '+board[4]+' | '+board[5]+' | '+board[6]+' \n' +
        ' --------- \n' +
        ' '+board[7]+' | '+board[8]+' | '+board[9]+' \n') 
}

let turn = false
let winneryet = false

function markBoard(position) {
    if (turn == false){
    var position = prompt("Player X where would you mark: ")
    mark = Number(position)       
    return  mark;}
    else {
        var position = prompt("Player O where would you mark: ")
        mark = Number(position)       
        return  mark;} 
    } 


function validateMove(position) {
    if (board[position] == 'X' || board[position] == 'O'){
        var position = prompt("This place is taken, choose another! : ")
        var mark = Number(position)
        validateMove(mark)
        //return false    
    }else if (position >=1 && position <= 9 && turn == false){
        board[position] = 'X'
        return turn = true
        //return true
    }else if(position >=1 && position <= 9 && turn == true){
        board[position] = 'O'
        return turn = false
    }else {
        var position = prompt("Only choose the position 1 to 9!")
        var mark = Number(position)
        validateMove(mark)
    }
}

function checkWinner (){
    if (board[1]==='X' &&board[2]==='X' && board[3] ==='X' ||
        board[4]==='X' &&board[5]==='X' && board[6] ==='X' ||
        board[7]==='X' &&board[8]==='X' && board[9] ==='X' ||
        board[1]==='X' &&board[4]==='X' && board[7] ==='X' ||
        board[2]==='X' &&board[5]==='X' && board[8] ==='X' ||
        board[3]==='X' &&board[6]==='X' && board[9] ==='X' ||
        board[1]==='X' &&board[5]==='X' && board[9] ==='X' ||
        board[3]==='X' &&board[5]==='X' && board[7] ==='X' ){
        console.log("It seems that player X is our WINNER!!!")
        var newGame = prompt("Start a new game?: (Y/N) ")
        if (newGame =='Y' || newGame =='y'){
            resetboard()
        }else{
            winneryet = true
        }
    }else if (board[1]==='X' &&board[2]==='X' && board[3] ==='X' ||
            board[4]==='O' &&board[5]==='O' && board[6] ==='O' ||
            board[7]==='O' &&board[8]==='O' && board[9] ==='O' ||
            board[1]==='O' &&board[4]==='O' && board[7] ==='O' ||
            board[2]==='O' &&board[5]==='O' && board[8] ==='O' ||
            board[3]==='O' &&board[6]==='O' && board[9] ==='O' ||
            board[1]==='O' &&board[5]==='O' && board[9] ==='O' ||
            board[3]==='O' &&board[5]==='O' && board[7] ==='O' ){
        console.log("It seems that player O is our WINNER!!!")
        var newGame = prompt("Start a new game?: (Y/N) ")
        if (newGame =='Y' || newGame =='y'){
            resetboard()
        }else{
            return winneryet = true
        }
    }else if (board[1]!=1&&board[2]!=2&&board[3]!=3&&board[4]!=4&&board[5]!=5&&board[6]!=6&&board[7]!=7&&board[8]!=8&&board[9]!=9){
        console.log("Hard Game!!! The result is a draw")
        var newGame = prompt("Start a new game?: (Y/N) ")
        if (newGame =='Y' || newGame =='y'){
            resetboard()
            }else{
            return winneryet = true
            }
    }else {
            return winneryet = false
        }}




//The process starts from here

        
while (winneryet == false){
    boardstatus()
    markBoard()
    validateMove(mark)    
    checkWinner(winneryet)    
}
boardstatus()
console.log('GGWP! Byebye!!!')