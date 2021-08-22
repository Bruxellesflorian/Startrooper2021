import React,{useEffect} from 'react'
import styled from 'styled-components'

const ButtonList = styled.button`
background: none;
`
const BoxPrincipale = styled.div`
width: 100%;
display: flex;
`

const DisplayLargeSize = styled.div`
> div {
display: flex;

    > div {
        border: inset red 1px;
        width: 10px;
        height: 10px;
    }
}`

const DisplaySmallSize = styled.div`
> div {
    display: flex;
    
        > div {
            border: inset red 1px;
            width: 10px;
            height: 3.5px;
        }
    }`

const Menus = ({position,setPosition}) => {

    const largeDisplay = () =>{
        setPosition(false)
    }

    const smallDisplay = () =>{
        setPosition(true)
    }

    return(
        <BoxPrincipale>
            <ButtonList onClick={largeDisplay}>
                       <DisplayLargeSize>
                <div>    
                    <div></div>
                    <div></div>       
                </div>
                <div>    
                    <div></div>
                    <div></div>       
                </div>   
            </DisplayLargeSize>     
            </ButtonList>

            <ButtonList onClick={smallDisplay}>
            <DisplaySmallSize>
            <div>    
                    <div></div>
                    <div></div>       
                </div>
                <div>    
                    <div></div>
                    <div></div>       
                </div>  
                <div>    
                    <div></div>
                    <div></div>       
                </div>  
                <div>    
                    <div></div>
                    <div></div>       
                </div>  
        
            </DisplaySmallSize>     
            </ButtonList>

        </BoxPrincipale>
    )
}

export default Menus

