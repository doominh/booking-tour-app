import Footer from "../components/Footer";
import Headers from "../components/Headers";
import '../index.css'

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <Headers/>
            <div className="section">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;