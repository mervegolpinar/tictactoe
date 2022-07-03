import React, { useState } from "react";
import Box from "../Box";
import './styles.css'

function Game(){
        //kazanma durumu için tanımlanan state
        const[WinStatus,setWinStatus]=useState(false) 
        //box verilerinin temizlenmesi için tanımlanan state
        const[UseEfectStatus,setUseEfectStatus]=useState(false)
        //GameControl fonksiyonu için oluşturulan myArray isimli array
        const[myArray, setMyArray]=useState([[],[],[]])

        //Kazananların tutulduğu array data
        const[WinArray, setWinArray]=useState([[],[],[]])
        //Eğer kazanıldıysa box componentininde çalışması için
        const[UseEfectWinCol,setUseEfectWinCol]=useState(false)


        //oyun kontrol fonksiyonu,changeControl props'undan gelen 3 parametre ile array oluşturulup 
        //table değişkenine atılarak parametre değerlerinin eşitlik kontrolü yapılır
        function GameControl(row,col,text){
                let table=myArray;
                table[row][col]=text;
                setMyArray(table);

                if(UseEfectStatus===true){
                        setUseEfectStatus(false);
                    }
                    if(UseEfectWinCol===true){
                        setUseEfectWinCol(false);
                    }
                GameWin();
        }

         //box'lardaki 'X' ve 'O' değerlerinin eşitlik kontrol fonksiyonu
         function GameWin(){
                for(let i=0;i<myArray.length;i++){
                   //satır kontrolü
                   if(myArray[i][0]===myArray[i][1] && myArray[i][1]===myArray[i][2] && myArray[i][0]){    
                        let table=WinArray;
                        table[i][0]="Win";
                        table[i][1]="Win";
                        table[i][2]="Win";
                        setWinArray(table);                
                        setWinStatus(true);
                        setUseEfectWinCol(true);
                        break;
                   }
                   //sütün kontrolu
                   const col0=myArray[0][i];
                   const col1=myArray[1][i];
                   const col2=myArray[2][i];

                   if(col0===col1 && col1===col2 && col0){
                        let table=WinArray;
                        table[0][i]="Win";
                        table[1][i]="Win";
                        table[2][i]="Win";
                        setWinArray(table);                   
                        setWinStatus(true);
                        setUseEfectWinCol(true)
                   }
                }
                //soldan sağa çapraz kontrol
                const crossLeft0=myArray[0][0];
                const crossLeft1=myArray[1][1];
                const crossLeft2=myArray[2][2];

                if(crossLeft0===crossLeft1 && crossLeft1===crossLeft2 && crossLeft0){
                        let table=WinArray;
                        table[0][0]="Win";
                        table[1][1]="Win";
                        table[2][2]="Win";
                        setWinArray(table);                   
                        setWinStatus(true);
                        setUseEfectWinCol(true)
                }
                //sağdan sola çapraz kontrol
                const crossRight0=myArray[0][2];
                const crossRight1=myArray[1][1];
                const crossRight2=myArray[2][0];

                if(crossRight0===crossRight1 && crossRight1===crossRight2 && crossRight0){

                        let table=WinArray;
                        table[0][2]="Win";
                        table[1][1]="Win";
                        table[2][0]="Win";
                        setWinArray(table);                   
                        setWinStatus(true);
                        setUseEfectWinCol(true)
                }

         }

         //box'ları temizleme fonksiyonu
         function GameWinClean(){
                setUseEfectStatus(true);
                
                setWinStatus(false);
              
                setMyArray([[],[],[]]);
                setWinArray([[],[],[]]);
                
         }

    return <div id="game">
        <div className="row">
                <Box row={0} col={0} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={0} col={1} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={0} col={2} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
        </div>
        <div className="row">
                <Box row={1} col={0} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={1} col={1} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={1} col={2} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
        </div>
        <div className="row">
                <Box row={2} col={0} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={2} col={1} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
                <Box row={2} col={2} Win={WinArray} ChangeControl={GameControl} UseEfectWinCol={UseEfectWinCol} UseEfectStatus={UseEfectStatus} WinStatus={WinStatus} GameWinClean={GameWinClean}></Box>
        </div>
    </div>
}

export default Game