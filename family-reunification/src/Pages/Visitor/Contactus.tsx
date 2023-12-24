import { NavigationBar} from "../../Component/NavigationBar"
export const Contactus=()=>{
    const navigationItems:NavigationItem={
        activeLinkName:'Contact Us',
        bg:'#00BFFF',
        textColor:'text-white',
        items:[{
            name:'Home',
            link:'/'
        },
        {
            name:'Contact Us',
            link:'/contact-us'
        },
        {
            name:'Login',
            link:'/login'
        },
        {
            name:'Signup',
            link:'/signup'
        }
    ],
       
    }
    return(
        <>
        <NavigationBar navigationItems={navigationItems}/>
        <main className="row col-12 m-auto p-5 text-light " style={{background: 'linear-gradient(150deg,#00BFFF,rgb(255, 255, 255))'}}>
        <section className="col-md-9 container">
        <span className="display-5 fw-bolder d-block">Family Reunification and</span>
        <span className="display-5 fw-bolder d-block">Tracking</span>
        <div className="mt-3">
            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte 
            aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., 
            le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé 
            à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant
            tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem
            Ipsum.
        </div>
        </section>
        <section className="col-md-3 p-0 border-0 card bg-transparent text-white">
            <img className="card-img" src="/Visitor/baby-sitting.png" alt="Title" />
        </section>
    </main>
    <div style={{marginTop:'-35px'}} className="container-fluid text-center">
       <div className="row g-3 col-sm-8 float-end">
         <div className="col-md-12 row g-2">
         <section className="col-4">
                <div className="card border-0 rounded-0 text-light" style={{background: "#00BFFF"}}>
                   <div className="row col-12 m-auto">
                   <div className="col-3">
                    <i className="bi bi-envelope display-4"></i>  
                  </div>
                  <div className="col-9">
                    <span className="d-block fs-5 fw-bold">Email us</span>
                    <span>exa@gmail.com</span>
                  </div>
                   </div>
                </div>
            </section>
            <section className="col-4">
                <div className="card border-0 rounded-0 text-light" style={{background: "#00BFFF"}}>
                   <div className="row col-12 m-auto">
                   <div className="col-3">
                    <i className="bi bi-telephone display-4"></i>  
                  </div>
                  <div className="col-9">
                    <span className="d-block fs-5 fw-bold">Tel</span>
                    <span>+250788 888 888</span>
                  </div>
                   </div>
                </div>
            </section>
            <section className="col-4">
                <div className="card border-0 rounded-0 text-light" style={{background: "#00BFFF"}}>
                   <div className="row col-12 m-auto">
                   <div className="col-3">
                    <i className="bi bi-geo-alt-fill display-4"></i>  
                  </div>
                  <div className="col-9">
                    <span className="d-block fs-5 fw-bold">Location</span>
                    <span>KG <sup>st</sup> 150 Ave</span>
                  </div>
                   </div>
                </div>
            </section>
         </div>
       </div>
    </div>
    <div style={{marginTop:'100px'}}></div>
    <div className="row container m-auto g-2 mb-5">
        <section className="col-md-6">
            <span className="d-block display-6 fw-bolder text-center">Contact Us For Any Queries!</span>
            <span className="d-block text-center mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                <label>Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                <label>Email</label>
            </div>
            <div className="mb-3">
                <label   className="form-label"></label>
                <textarea className="form-control" name="" id="" placeholder="Enter your message here .."></textarea>
            </div>
            <button type="button" className="btn btn-outline-primary">Submit</button>
        </section>
        <section className="col-md-6 card p-0 border-0">
        <iframe className="h-100 w-100"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31900.37055746256!2d30.086618900000005!3d-1.9336858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1703182424182!5m2!1sen!2srw" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
        </>
    )
}