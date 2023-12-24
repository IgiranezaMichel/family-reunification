import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { AdminNavigationAttribute } from "./NavigationBarAttributes"

type sideBar={
    children:ReactNode,
    active:string,
    userName:string,
}
export const AdminNavigationBar:React.FC<sideBar>=({children,active,userName})=>{
    const navigations={
        active:active,
        items:[
        {
            name:'Home',
            link:'/admin',
            icon:'bi bi-house'
        },
        {
            name:'Users',
            link:'/admin/user',
            icon:'bi bi-person-vcard-fill'
        },
        {
            name:'Collaborator',
            link:'/admin/collaborator',
            icon:'bi bi-people'
        },
        {
            name:'Manage Cases',
            link:'/admin/manage-cases',
            icon:'bi bi-file-earmark-break-fill'
        },
        {
            name:'Report',
            link:'/admin/report',
            icon:'bi bi-file-earmark-text-fill'
        },
        {
            name:'Chat',
            link:'/admin/chat',
            icon:'bi bi-chat-quote-fill'
        },
        {
            name:'Settings',
            link:'/admin/setting',
            icon:'bi bi-gear'
        },
    ]}
 return(
   <>
   <NavigationBar navigationItems={AdminNavigationAttribute('Home')}/>
   <main className="row  m-auto  text-light ">
            <section className="col-md-2 rounded-0 border-0 d-flex justify-content-center align-content-center card p-0">
                <Link to={'/'} className="bi bi-house display-1 d-block text-center text-light" style={{background: "#00BFFF"}}></Link>   
            </section>
            <section className="col-md-10 card rounded-0 border-0" style={{background: "#00BFFF"}}>
                <span className="fs-5 fw-bolder d-block">Family Reunification and Tracking</span>
                <span className="display-5 fw-bolder d-block">{active}</span>
            </section>
         </main>
    <main className="sticky-top">
        <section className="col-12 m-auto  text-light " style={{background: '#00BFFF'}}>
            <section className="col-md-9 mx-3">
                <span className="fs-5 pb-5 fw-bolder d-block"><i className="bi bi-person-fill"></i>{userName}</span>
            </section>
        </section>
        <div style={{marginTop:'-35px'}} className="container-fluid text-center">
            <div className="g-3 col-sm-9 col-lg-8 float-end">
                <div className="col-md-12 float-end">
                {navigations.items.map((data,index)=>{
                    return(
                        <>
                        <Link to={data.link} key={index+'admin'} className={
                            navigations.active==data.name?data.icon+" display-6 border border-3 border-danger text-dark rounded-circle px-3 py-2 mx-2 ":
                            data.icon+" display-6 border border-3 border-white text-white rounded-circle px-3 py-2 mx-2 bg-danger"
                            } style={{background: "#00BFFF"}}></Link>
                        </>
                    )
                })}
                </div>
            </div>
        </div>
</main>
    <div  style={{marginTop:'70px'}}>
        <span className="display-6 d-block container"></span>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2" style={{background: '#D8232A'}}>
                <nav id="ScrollNavbar" className="navbar navbar-light" style={{position:'sticky',top:'100px'}}>
                    <ul className="nav nav-pills flex-column text-center">
                        {navigations.items.map((data,index)=>{
                            return(
                                <li className="nav-item" key={index}>
                                    <Link to={data.link} className={navigations.active==data.name?
                                    "nav-link text-white fw-bolder border-bottom border-white rounded-0 border-3"
                                    :"nav-link text-white fw-bolder"}  >{data.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="col-sm-10 mt-5">
               {children}
            </div>
        </div>
    </div>
   </>
 )   
}