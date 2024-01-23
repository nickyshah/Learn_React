import React from 'react'
import Header from '../../Layout/Header'
import RemoveAllContact from './RemoveAllContact'
import AddContact from './AddContact'
import FavouriteContact from './FavouriteContact'
import GeneralContact from './GeneralContact'
import AddRandomContact from './AddRandomContact'
import Footer from '../../Layout/Footer'

class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactList: [
                {
                    id:1,
                    name: "Ben Parker",
                    email: "ben@gmail.com",
                    isFavorite: false,
                },
                {
                    id:2,
                    name: "Sam Parker",
                    email: "Sam@gmail.com",
                    isFavorite: true,
                },
                {
                    id:3,
                    name: "Harry Parker",
                    email: "Harry@gmail.com",
                    isFavorite: true,
                },
            ]
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact/>
                        </div>
                        <div className="col-4 ">
                            <RemoveAllContact/>
                        </div>
                        <div className="row py-2">
                            <AddContact />
                        </div>
                        <div className="row py-2">
                            <FavouriteContact 
                            contacts={this.state.contactList.filter((u) => u.isFavorite == true)}
                            />
                        </div>
                        <div className="row py-2">
                            <GeneralContact
                            contacts={this.state.contactList.filter((u) => u.isFavorite == false)}
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ContactIndex