import styled from "styled-components";

export const Div1 = styled.div`{
    background-color: #5E5E5E;
    min-height: 100vh;
    padding: 5vh 3vw;
}`


export const Div2 = styled.div`{
    display: flex;
}`

export const Button = styled.button`{
    outline: none;
    border: none;
    width: 150px;
    padding: 0.3rem 0;
    margin: 1rem;
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #b74555;
    border-radius: 8px;
}`

export const Div4 = styled.div`{
    min-height: 10vh;
    display: flex;
    justify-content: center;
    color: pink;
    background-image:url("./pokemon.png");
}`

export const Div3 = styled.div`{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 0.5fr));
    grid-gap: 5rem;-  
    flex-basis: 80%;   
}`


/** >> Div1
   width: 90%;
    margin: auto;
    padding-top: 100px;
    display: flex;     
*/

/*
export const Div2 = styled.div`{
    display: flex;
}`

export const Button = styled.button`{
    outline: none;
    border: none;
    width: 150px;
    padding: 0.3rem 0;
    margin: 1rem;
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #b74555;
    border-radius: 8px;
}`

export const Div3 = styled.div`{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 0.5fr));
    grid-gap: 3rem;  
    flex-basis: 50%;   
}`

export const Div4 = styled.div`{
    min-height: 10vh;
    display: flex;
    justify-content: center;
    color: pink;
    background-image:url("./pokemon.png");
}`*/

/**
 .container{
    width: 90%;
    margin: auto;
    padding-top: 100px;
    display: flex;
}

.left-content, .rigth-content{
   flex-basis: 50%; 
}

.left-content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 0.5fr));
    grid-gap: 3rem;
}
.btn-group{
    display: flex;
}

.btn-group button{
    outline: none;
    border: none;
    width: 150px;
    padding: 0.3rem 0;
    margin: 1rem;
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #b74555;
    border-radius: 8px;
}*/ 