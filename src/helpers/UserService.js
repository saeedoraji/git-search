// @flow
import { req } from "helpers/Utility";

type SearchUserType = {
  per_page: number,
  q: string,
  type: string,
};

export class UserService {
  q: string;
  serviceName: string;
  constructor(value: string) {
    this.serviceName = "search/users";
    this.q = value;
  }

  createSearchBody() {
    const searchBody: SearchUserType = {
      per_page: 5,
      q: this.q,
      type: "user",
    };
    return this.parseBody(searchBody);
  }

  parseBody(searchBody: SearchUserType) {
    let qs = "?";
    for (let field in searchBody) {
      qs += field + "=" + searchBody[field] + "&";
    }

    return qs.slice(0, qs.length - 1);
  }

  async getUsers() {
    return await req(this.serviceName, this.createSearchBody());
  }
}
