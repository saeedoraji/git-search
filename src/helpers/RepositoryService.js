// @flow
import { req } from "helpers/Utility";

export class RespositoryService {
  serviceName: string;
  constructor(username: string) {
    this.serviceName = `users/${username}/repos`;
  }

  async getUsersRepo() {
    return await req(this.serviceName);
  }
}
