import Header from '../Header';
import { Outlet } from 'react-router';

export default function HomePage () {
    return (
        <>
            <Header/>
            <div className="body"><Outlet/></div>
        </>
    )
}