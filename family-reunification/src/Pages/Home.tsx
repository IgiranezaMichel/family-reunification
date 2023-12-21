import { VisitorNavigationBar } from "../Component/VisitorNavigationBar"

export const Home=()=>{
    return(
    <>
    <VisitorNavigationBar/>
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
       <div className="row g-3 col-sm-9 float-end">
         <div className="col-md-6 p-3 bg-danger">
           <input type="text" className="p-2 border-0 btn-outline-light text-left mx-2 w-50" placeholder="Search ..." id="validationDefault03" required/>
             <select className="p-2 border-0 bg-white w-25" aria-label="Default select example">
               <option selected>Select Country</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
             </select>
           <button type="button" className="px-3 py-2 mx-1 border-0 rounded  btn-outline-light"><i className="bi bi-search"></i></button>
         </div>
         <div className="col-md-6">
           <i className="bi bi-telephone display-5 rounded-circle px-3 py-2 mx-2" style={{background: "#00BFFF"}}></i>
           <i className="bi bi-geo-alt-fill display-5 rounded-circle px-3 py-2 mx-2" style={{background: "#00BFFF"}}></i>
           <i className="bi bi-patch-plus-fill display-5 rounded-circle px-3 py-2 mx-2" style={{background: "#00BFFF"}}></i>
         </div>
       </div>
    </div>
    <div  style={{marginTop:'70px'}}>
        <span className="display-6 d-block container"></span>
    </div>
    
    <section className="container m-auto row g-1">
    <div className="fw-bolder text-center display-6 " style={{fontFamily: "fantasy"}}>Let’s find your loved one</div>
    <section className="col-md-3">
            <div className="card text-white rounded-0 p-0 bg-white border border-info ">
                <span className="d-block border border-4 border-info"></span>
                <div className="text-center">
                <span className="bg-info border-0 p-2 fw-bolder">American</span>
                </div>
                <img className="card-img-top" src="/Visitor/baby-sitting.png" alt="Title" />
                <div className="card-body">
                    <h5 className="card-title text-dark">Zawadi Grace</h5>
                    <div className="text-dark">
                        <span className="d-block"><b>Father </b></span>
                        <span className="d-block"><b>Mother </b></span>
                        <span className="d-block"><b>DOB </b></span>
                        <span className="d-block"><b>Place </b></span>
                        <i className="bi bi-calendar"></i> <span className="text-muted">Posted on 29/05/2023</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="col-md-3">
            <div className="card text-white rounded-0 p-0 bg-white border border-info ">
                <span className="d-block border border-4 border-info"></span>
                <div className="text-center">
                <span className="bg-info border-0 p-2 fw-bolder">American</span>
                </div>
                <img className="card-img-top" src="/Visitor/baby-sitting.png" alt="Title" />
                <div className="card-body">
                    <h5 className="card-title text-dark">Zawadi Grace</h5>
                    <div className="text-dark">
                        <span className="d-block"><b>Father </b></span>
                        <span className="d-block"><b>Mother </b></span>
                        <span className="d-block"><b>DOB </b></span>
                        <span className="d-block"><b>Place </b></span>
                        <i className="bi bi-calendar"></i> <span className="text-muted">Posted on 29/05/2023</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="col-md-3">
            <div className="card text-white rounded-0 p-0 bg-white border border-info ">
                <span className="d-block border border-4 border-info"></span>
                <div className="text-center">
                <span className="bg-info border-0 p-2 fw-bolder">American</span>
                </div>
                <img className="card-img-top" src="/Visitor/baby-sitting.png" alt="Title" />
                <div className="card-body">
                    <h5 className="card-title text-dark">Zawadi Grace</h5>
                    <div className="text-dark">
                        <span className="d-block"><b>Father </b></span>
                        <span className="d-block"><b>Mother </b></span>
                        <span className="d-block"><b>DOB </b></span>
                        <span className="d-block"><b>Place </b></span>
                        <i className="bi bi-calendar"></i> <span className="text-muted">Posted on 29/05/2023</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="col-md-3">
            <div className="card text-white rounded-0 p-0 bg-white border border-info ">
                <span className="d-block border border-4 border-info"></span>
                <div className="text-center">
                <span className="bg-info border-0 p-2 fw-bolder">American</span>
                </div>
                <img className="card-img-top" src="/Visitor/baby-sitting.png" alt="Title" />
                <div className="card-body">
                    <h5 className="card-title text-dark">Zawadi Grace</h5>
                    <div className="text-dark">
                        <span className="d-block"><b>Father </b></span>
                        <span className="d-block"><b>Mother </b></span>
                        <span className="d-block"><b>DOB </b></span>
                        <span className="d-block"><b>Place </b></span>
                        <i className="bi bi-calendar"></i> <span className="text-muted">Posted on 29/05/2023</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
    
    </>)
}