import '../App.css';

function Header(props) {
    return (
        <div className='shopping-card'>
            <div className='logo' onClick={() => props.handleShow(false)} >Just Shopping</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
            
        </div>
    );
}

export default Header;