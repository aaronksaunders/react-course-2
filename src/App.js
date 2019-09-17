import React from "react";
import "./App.css";
import AddUser from "./components/AddUsers";
import ListUsers from "./components/ListUsers";

// Ionic
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import {
  IonApp,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent
} from "@ionic/react";

class App extends React.Component {
  state = {
    people: []
  };

  /**
   * function to add users to the people object in this components
   * state
   */
  handleAddUser = _userInfo => {
    console.log(_userInfo);
    let createdDate = new Date().getTime();
    let { people } = this.state;

    // array method to add item to the end of an array
    people.push({ name: _userInfo, createdDate, id: createdDate });

    // set the state to the value of people array
    // that was just updated
    this.setState({ people: people });
  };

  //
  handleDeleteUser = _userIndex => {
    let { people } = this.state;

    // remove the element and create a new array
    let newPeople = [
      ...people.slice(0, _userIndex), // get all items in array BEFORE to selected index
      ...people.slice(_userIndex + 1) // get all items in array AFTER the selected index
    ];

    // set the state to the value of newPeople array
    // that was just updated
    this.setState({ people: newPeople });
  };

  render() {
    return (
      <IonApp>
        <IonPage>
          <IonContent>
          <IonCard>
            <IonCardHeader>
              <h2>Enter A New User</h2>
            </IonCardHeader>
            <IonCardContent>
              <AddUser handleSubmit={this.handleAddUser}></AddUser>
            </IonCardContent>
          </IonCard>
          <ListUsers
            users={this.state.people}
            onDelete={this.handleDeleteUser}
          ></ListUsers>
          </IonContent>
        </IonPage>
      </IonApp>
    );
  }
}

export default App;
