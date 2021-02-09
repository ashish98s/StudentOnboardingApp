import React from "react";



import { compMap } from '../config/routePath';
import ListStudents from "./ListStudents";
import Loginform from "./Loginform";

const mockData = [
    {
        id: 1,
        name: 'Vehicle 1',
        regNo: '11111'
    },
    {
        id: 2,
        name: 'Vehicle 2',
        regNo: '22222'
    },
    {
        id: 3,
        name: 'Vehicle 3',
        regNo: '33333'
    }
]

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            visibleComponent: compMap.students,
            currentStudent: null,
            lastVisit: null,
            students: []
        }
    }

    componentDidMount() {
        this.getStudents();
    }

    getStudents = async () => {

        const res = await fetch('http://localhost:4000/students');
        const data = await res.json();
        this.setState({
            students: data
        })

        // fetch('http://localhost:4000/vehicles')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             vehicles: data
        //         })
        //     });
    }

    getRoutedComponent = (val) => {
        switch(val) {
            case compMap.loginform:
                return <Loginform navigateTo={(path => this.navigateTo(path))}/>;
            case compMap.listStudents:
                return <ListStudents vehicle={this.state.currentStudent} navigateTo={(path => this.navigateTo(path))}/>;
            
            default:
                return <VehicleList vehicles={this.state.vehicles} lastVisited={this.state.lastVisit} viewDetails={this.viewDetails} deleteItem={this.deleteItem} navigateTo={(path => this.navigateTo(path))}/>;  
        }
    }

    navigateTo = (path) => {
        this.setState({
            visibleComponent: path
        });
        this.getStudents();
    }

    viewDetails = (vehicle) => {
        this.setState({
            currentVehicle: vehicle,
            lastVisit: vehicle.id
        });
        this.navigateTo(compMap.vehicleDetails)
    }

    deleteItem = (id) => {
        this.setState((prev) => ({
            vehicles: prev.vehicles.filter(item => item.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <div>
                    {this.getRoutedComponent(this.state.visibleComponent)}
                </div>
            </div>
        )
    }
}

export default Home;