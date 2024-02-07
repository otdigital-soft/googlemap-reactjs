import axios from "axios";

const BASEURL = `https://api.jsonone.com/api/v1`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMGFkZDYzNmQ2MDJlMzc5NDZiMDM3NiIsImlhdCI6MTY3NjEwNTg2MX0.XqAQVwklddEy1UVeg72YaDD4Hh6rWoiz2KlIZYLLCMQ";
const PROJECT_ID = "640042807cd5faa7799dfa6a";

const APIClient = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${TOKEN}`,
    Project: PROJECT_ID,
  },
  get: function (url: string, params: any = {}, headers: any = {}) {
    const defaultHeaders: any = this.headers;
    return axios.get(`${BASEURL}${url}`, {
      params: params,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    });
  },
  post: function (url: string, data: any, headers = {}) {
    const defaultHeaders: any = this.headers;
    return axios.post(
      `${BASEURL}${url}`,
      {
        headers: {
          ...defaultHeaders,
          ...headers,
        },
      },
      data
    );
  },
};
export default APIClient;
