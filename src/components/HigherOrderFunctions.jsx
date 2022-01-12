import React from 'react';
export default class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
    
            ]
        }
    }

    // display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => {
        return <React.Fragment>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
                <span>Age: {item.age}</span>
                <span>Years: {item.years}</span>
           </li>
        </React.Fragment>
});
    return mapRows;
};

//PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE
renderUserType = (type) => {
    const data =this.state.userData;
    const mapRows =data.filter((item) => {
        return item.user_type === type;
    }).map((item) => {
        return <React.Fragment>
        <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
    });
    return mapRows;
}

//PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J
renderLetterJ =() => {
    const data =this.state.userData;
    const mapRows =data.filter((item) => {
        return item.name.startsWith("J");
    }).map((item) => {
        return <React.Fragment>
        <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
    });
    return mapRows;
}

//PROGRESSION 5 | FILTER DATA BASED ON AGE
renderAge = () => {
    const data =this.state.userData;
    const mapRows = data.filter((item)=>{
        return item.age>28 && item.age<=50;
    }).map((item)=>{
        return <React.Fragment>
        <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
    });
    return mapRows;
}

//PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
renderExp = () => {
    const data = this.state.userData;
    const mapRows = data.filter((item)=>{
        return item.user_type === 'Designer';
    }).reduce((a,b)=>{return a.years+b.years});
        return <React.Fragment>
            <li className="list-elements">
                <span>Total Experience: {mapRows}</span>
            </li>
        </React.Fragment>
}

render() {
    return  <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
        <h1>Display Based on User Type</h1>
        <div className="display-box">
            <ul>{this.renderUserType("Designer")}</ul>
        </div>
        <h1>Filter all the data start with J</h1>
        <div className="display-box">
            <ul>{this.renderLetterJ()}</ul>
        </div>
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
        <div className="display-box">
            <ul>{this.renderAge()}</ul>
        </div>
        <h1>Find the total years of Designer</h1>
        <div className="display-box">
            <ul>{this.renderExp()}</ul>
        </div>
      </React.Fragment>
}

}
