import React, { Component } from "react";
import API from "../utils/Api";
import Alert from "./Alert";
import SearchForm from "./SearchForm";
import Header from "./Header";
import RenderedResult from "./RenderedResult";

class EmpDirectoryContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
    order: "descending",
    sorted: false
  }

   handleNameSort = event => {
    if (this.state.order === "descending") {
      this.setState({
        order: "ascending"
      })
    } else {
      this.setState({
        order: "descending"
      })
    }

    const compareFunction = (a, b) => {
      if (this.state.order === "ascending") {
          return a.name.first.localeCompare(b.name.first);
        } 
      else {
          return b.name.first.localeCompare(a.name.first);
      }

    }
if(!this.state.sorted){
  const sortedUsers = this.state.results.sort(compareFunction);
  this.setState({ results: sortedUsers });
}
else {
  const sortedUsers = this.state.filteredResults.sort(compareFunction);
  this.setState({ filteredResults: sortedUsers });
}
   
  }


  handleDOBSort = event => {
    if (this.state.order === "descending") {
      this.setState({
        order: "ascending"
      })
    } else {
      this.setState({
        order: "descending"
      })
    }

    const compareDobFunction = (a, b) => {
      if (this.state.order === "ascending") {
          return a.dob.date.localeCompare(b.dob.date);
        } 
      else {
          return b.dob.date.localeCompare(a.dob.date);
      }

    }
  const sortedUsers = this.state.results.sort(compareDobFunction);
  this.setState({ results: sortedUsers });
}
componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
 
  searchEmp = () => {
    let { results, search } = this.state;
    let filteredResults = results.filter(sorted => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) 
      )
    })
    this.setState({ filteredResults })
  }

  handleSearchEvent = event => {
    this.setState({ search: event.target.value }, () => {
      this.searchEmp();
      this.setState({ sorted: true });
    });
  };
render() {
    return (
    <div>
      <Header />
      {/* <Alert /> */}
      <SearchForm
        name="search"
        handleSearchEvent={this.handleSearchEvent}
        label="Search"
      />

<div className="container mt-5">
      <table className="table table-striped table-hover table-condensed">
        <thead className="thead">
          <tr>
            <th className="col"  style={{width: "10%"}}>Image</th>
            <th className="col" key = "Name"  style={{width: "15%"}} onClick = {this.handleNameSort}>Name  <i className="fa fa-sort" aria-hidden="true"></i></th>
            <th className="col"  style={{width: "20%"}}>Email</th>
            <th className="col"  style={{width: "20%"}}>Phone</th>
            <th className="col" key = "DOB" style={{width: "20%"}} onClick = {this.handleDOBSort}>DOB<i className="fa fa-sort" aria-hidden="true"></i></th>
          </tr>
        </thead>
      {/* if it's not sorted, map accordingly */}
        {!this.state.sorted ? this.state.results.map(employee => (
        
          < RenderedResult
            key={employee.login.uuid}
            firstName={employee.name.first}
            lastName={employee.name.last}
            phone={employee.phone}  
            email={employee.email}
            icon={employee.picture.medium}
            dob={employee.dob.date}
          />
       
        ))
          // otherwise map the sorted employees
          : this.state.filteredResults.map(employee => (

            < RenderedResult
            key={employee.login.uuid}
            firstName={employee.name.first}
            lastName={employee.name.last}
            phone={employee.phone}
            email={employee.email}
            icon={employee.picture.medium}
            dob={employee.dob.date}
          />
          ))}
          </table>
          </div>
      </div>

    )
  }

}

export default EmpDirectoryContainer;