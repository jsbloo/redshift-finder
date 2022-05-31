import { Link } from 'react-router-dom';
const Navigation = () => {

    return (
        <>
            <Link to='/'>
                <button type='button' className='btn1'>Home</button>
            </Link>
            <Link to='/citizen'>
                <button type='button'>Citizens</button>
            </Link>
            <Link to='/undefined'>
                <button type='button'>Undefined</button>
            </Link>
        </>
    );
}

export default Navigation;