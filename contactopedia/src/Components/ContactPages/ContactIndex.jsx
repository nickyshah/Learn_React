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
                    phone: 44444444,
                    isFavorite: false,
                },
                {
                    id:2,
                    name: "Sam Parker",
                    email: "Sam@gmail.com",
                    phone: 44444444,
                    isFavorite: true,
                },
                {
                    id:3,
                    name: "Harry Parker",
                    email: "Harry@gmail.com",
                    phone: 44444444,
                    isFavorite: true,
                },
            ]
        }
    }

handleAddContact = (newContact) => {
    const newFinalContact = {...newContact, id:this.state.contactList[this.state.contactList.length-1].id+1,
    isFavorite:false,}
    this.setState((prevState)=>{
        return {
            contactList: prevState.contactList.concat([newFinalContact]),
        }
    })
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
                            <div className="col-8 offset-2 row">
                            <AddContact handleAddContact={this.handleAddContact} />
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <FavouriteContact 
                            contacts={this.state.contactList.filter((u) => u.isFavorite == true)}
                            />
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <GeneralContact
                            contacts={this.state.contactList.filter((u) => u.isFavorite == false)}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ContactIndex