import { AdminNavigationBar } from "../../Component/AdminNavigationBar"

export const Report=()=>{
    return(
    <AdminNavigationBar active="Report" userName="Mugisha Jean">
        <section className="row mb-3">
            <span className="display-6" style={{fontFamily:'fantasy'}}>List of Collaborators</span>
            <section className="col-sm-9">
                <div className="table-responsive-md">
                    <table className="table table-hover table-borderless table-primary align-middle">
                        <thead className="table-info">
                            <tr>
                                <th>Organization Name</th>
                                <th>Head of organization</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr className="table-primary" >
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td className="text-center">
                                    <i className="bi bi-trash" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#delete"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>
                                    <span className="float-end">1 out of 10 <button className="m-1">Previous</button><button>Next</button></span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>   
            </section>
            <section className="col-sm-3">
                <button type="button" className="btn btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#modalId"><i className="bi bi-person-plus-fill"></i> New</button>
                <div>
                    <div className="col-md-12 m-auto mt-5 border border-dark row p-2 g-1">
                        <div className="input-group col-md-12 mb-3">
                            <span className="bi bi-pencil input-group-text border-dark"></span>
                            <input type="text" className="form-control border-dark" placeholder="Search ..." aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                        Please choose a username.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="date" name="" id="" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="date" className="w-100" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        </div>
                        <div className="mb-3">
                            <select className="form-select border-dark" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-outline-primary">Search</button>
                    </div>
                </div>
            </section>
        </section>
    {/* modals */}
        <div className="modal fade " id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"  aria-labelledby="modalTitleId">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg " role="document">
                <div className="modal-content rounded-0 border-2 border-danger">
                    <div className="modal-header bg-danger rounded-0 text-light">
                        <h5 className="modal-title" id="modalTitleId">Add Organization</h5>
                        <button type="button"  className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <i className="bi bi-person-plus-fill display-5 d-block text-center"></i>
                        body
                    </div>
                    <div className="modal-footer bg-primary rounded-0"> 
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade " id="delete" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"  aria-labelledby="modalTitleId">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg " role="document">
                <div className="modal-content rounded-0 border-2 border-danger">
                    <div className="modal-header bg-danger rounded-0 text-light">
                        <h5 className="modal-title" id="modalTitleId">Delete Organization</h5>
                        <button type="button"  className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <i className="bi bi-trash-fill display-5 d-block text-center"></i>
                    body
                    </div>
                    <div className="modal-footer bg-primary rounded-0"> 
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </AdminNavigationBar>
    )
}