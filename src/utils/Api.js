import axios from "axios";

export default {
    getEmployeeList : function() {
        return axios.get("https://randomuser.me/api/?results=10");
    }

}