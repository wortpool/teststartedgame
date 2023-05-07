import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Square from '../Square';
import './style.css'

const amountOfSquare = 20;

const BackPlatform = () => {
   

    const [mousePosition, setMousePosition] = useState({})
    const [randomPosition, setRandomPosition] = useState(randomPositionFunc)    
    const [overVar, setOverVar] = useState(false)
    const platform = useRef(null);

    function randomPositionFunc () {
        let tempArray = []; 
        for (let index = 0; index < 20; index++) {
            const randomX = Math.floor(Math.random() * 1080);  
            const randomY = Math.floor(Math.random() * 600);
            tempArray.push({randomX, randomY})
        }
        // setRandomPosition(tempArray)
        return tempArray

    }


    const over = () => {
        randomPosition.some(el => {
            return (el.randomX === mousePosition.x || el.randomY === mousePosition.y)  // чомусь ф-ція вертає undefined
            // (el.randomX === mousePosition.x || el.randomY === mousePosition.y) && setOverVar(true)
        })
    }

    const handleTarget = (e) => {
        setMousePosition({x: e.offsetX, y: e.offsetY})
        console.log( over());
    }
    
 
    

    useEffect(() => {
        randomPositionFunc()
        platform.current.addEventListener('mousemove', handleTarget)
        // console.log(over());

        return () => {
           // eslint-disable-next-line react-hooks/exhaustive-deps
           platform.current.removeEventListener('mousemove', handleTarget)
        }
    }, [])
    

    return ( 
        <div className="back__platform" ref={platform}>
            {console.log('component rerender')}
            {overVar}
            {/* {console.log(randomPosition)} */}
            {randomPosition.map((el, index) => {
                return <Square key={index} posX={el.randomX} posY={el.randomY}/>
            })}
        
            <Square posX={mousePosition.x} posY={mousePosition.y}/>
        </div>
    );
}
    
export default BackPlatform;