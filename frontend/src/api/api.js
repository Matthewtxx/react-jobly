import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get") ? data : {};

    try {
      const response = await axios({ url, method, data, params, headers });
      console.debug("API Response:", response);
      return response.data;
    } catch (err) {
      console.error("API Error:", err);
      let message = err.response?.data?.error?.message || "Unknown error";
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async searchCompanies(searchTerm) {
    const queryParams = searchTerm ? { search: searchTerm } : {};
    const res = await this.request("companies", queryParams);
    return res.companies;
  }

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }
   
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async applyToJob(jobId) {
     let res = await this.request(`jobs/${jobId}/apply`, {}, "post");
    return res.message;
   }

  static async getUserProfile() {
     let res = await this.request("users/profile");
    return res.user;
  }

  // Update token if authentication is implemented
  static updateToken(newToken) {
    JoblyApi.token = newToken;
  }
}

// For now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
