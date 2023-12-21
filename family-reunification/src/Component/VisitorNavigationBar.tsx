import {Link} from 'react-router-dom'
export const VisitorNavigationBar=()=>{
    return(
        <>
            <nav
                className="navbar navbar-expand-md navbar-dark sticky-top"
                style={{backgroundColor:'#00BFFF'}}>
                <Link  className="navbar-brand"to={'/'}>
                    <img src="/Visitor/unhcr.jpeg" alt="" className="rounded-circle"/>
                </Link>
               <div>
               <span className="display-5 d-block fw-bolder text-light">
                    UNHCR
                </span>
                <span className="text-light fw-bold">
                The Refugee Agency
                </span>
               </div>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                ><i className="bi bi-three-dots"></i></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    </ul>
                    <div className="d-flex my-2 my-lg-0 text-white">
                    <Link to={'/'} className="nav-link fw-bold m-4  border-bottom border-3">Home</Link>
                        <Link key={0} to={'/contact-us'} className="nav-link fw-bold m-4">Contact us</Link>
                        <Link to={'/'} className="nav-link fw-bold m-4">Login</Link>
                        <Link to={'/'} className="nav-link fw-bold m-4">Signup</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
