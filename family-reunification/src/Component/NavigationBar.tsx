import {Link} from 'react-router-dom'
type VisitorNavigationBarProps = {
    navigationItems: NavigationItem;
  };
export const NavigationBar:React.FC<VisitorNavigationBarProps>=({navigationItems})=>{
    return(
        <>
            <nav
                className={"navbar navbar-expand-md navbar-dark "+navigationItems.navSticky}
                style={{backgroundColor:navigationItems.bg}}>
                <Link  className="navbar-brand"to={'/'}>
                    <img src="/Visitor/unhcr.jpeg" alt="" className="rounded-circle"/>
                </Link>
               <div className={navigationItems.textColor}>
               <span className="display-5 d-block fw-bolder">
                    UNHCR
                </span>
                <span className="fw-bold">
                The Refugee Agency
                </span>
               </div>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"
                ><i className="bi bi-three-dots"></i></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    </ul>
                    <div className={"d-flex my-2 my-lg-0 "+navigationItems.textColor}>
                        {navigationItems.items.map((data,index)=>{
                            return(
                                    <Link key={index} to={data.link} className={(data.name==navigationItems.activeLinkName)?
                                        "nav-link fw-bold m-4  border-bottom border-3":"nav-link fw-bold m-4"
                                    }>{data.name}</Link>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}
