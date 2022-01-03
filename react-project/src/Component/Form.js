import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <div class='container py-5 g-5 m-5 border rounded-3 bg-light'>
                    <form class="row needs-validation" novalidate>
                        <div class="col-md-6">
                            <label for="inputFirstName" class="form-label">First name</label>
                            <input type="firstName" class="form-control" id="inputFirstName" placeholder='First name' required/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputLastName" class="form-label">Last name</label>
                            <input type="lastName" class="form-control" id="inputLastName" placeholder='Last name' required/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='johndoe@gmail.com' required/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder='*********'/>
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>

                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="inputPostalCode" class="form-label">Postal code</label>
                            <input type="text" class="form-control" id="inputPostalCode"/>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>

                        <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Form

