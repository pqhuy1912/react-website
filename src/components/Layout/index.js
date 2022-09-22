import Navbar from './Navbar';

// Page nào sử dụng Layout để bọc các components thì sẽ có navbar
function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Layout;
