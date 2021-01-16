import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  saveEmployee: function (employee) {
    return axios.post("/api/employee/create", employee);
  },
};
