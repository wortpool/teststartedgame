const Square = ({posX, posY}) => {

    const squareStyle = {
        width: '15px',
        height: '15px',
        backgroundColor: 'red',
        position: 'absolute',
        top: posY,
        left: posX
    }

    return ( 
        <div className="square" style={squareStyle}></div>
    );
}
 
export default Square;