import { useSelector } from "react-redux"

const Navbar = () => {
    const {cart} = useSelector(root => root)

    let cartInit = 0
    cart.forEach(Element => cartInit += Element.qty)
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand text-light" href="/">MARKETPLACE PPLG II</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <a href="#" className="bg-dark text-light">
                            <i className="fa-solid fa-cart-shopping text-light"></i> <span className="badge text-bg-secondary"
                                id="cart-total">{cartInit}</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar