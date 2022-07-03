import React, { useState,useEffect } from "react";
import './styles.css'

function Box(props){

    const[text,setText]=useState('')
    const[ClassValue,setClassValue]=useState("box")


    //boxları temizleyip eski haline getiriyor
    useEffect(() => {
        if(props.UseEfectStatus===true){
            setText("");
            setClassValue("box");
        }
      }, [props.UseEfectStatus]);

      //oyun kazanım durumunda 'X' ve 'O'ya ait border renklerinin ayarlanması
      useEffect(() => {
        if(props.UseEfectWinCol===true){
            let table=props.Win;

            
            if(table[props.row][props.col]==="Win"){
                if(text==="O"){
                    setClassValue("box blue winborderblue");
                }
                else{
                    setClassValue("box red winborderred");
                }
            }
        }
      }, [props.UseEfectWinCol])
   
    //toggleText fonksiyonu ile box'lara tıklanma eventi eklenip her tık işleminde 'X' ve 'O' olarak değişimi sağlanıp renk ataması yapıldı.
    //tıklanılan boxlara gelen 'X' veya 'O' değerleri ChangeControl isimli props ile GameControl fonksiyonuna gönderildi.
    //if koşulu sağlanmadığı taktirde else ile boxlar temizleniyor.
    function toggleText(){
        if(props.WinStatus===false){
            let value = text==='X'?'O':'X';
            if(value==="X"){
                setClassValue("box red");
            }
            else{
                setClassValue("box blue");
            }
            setText(value);
            props.ChangeControl(props.row, props.col, value);
        }
        else{
            
            props.GameWinClean();
        } 
    }

    return(
        <button className={ClassValue} onClick={toggleText} >
        {text}
        </button>
    ) 
}
export default Box 