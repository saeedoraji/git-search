import { config } from "../AppConfig";

export function req(service, body = "") {
  return new Promise((resolve, reject) => {
    fetch(`${config.apiUrl}/${service}${body}`)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
