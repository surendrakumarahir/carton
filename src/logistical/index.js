import {defaultOptions} from '../config';

class Logistical {
  // getVehicleListing(data) {
  //   this.post('/getvehiclelisting', data);
  // }

  post(path, data = null) {
    return this.send(path, 'POST', data);
  }

  put(path, data = null) {
    return this.send(path, 'PUT', data);
  }

  get(path, data = null) {
    return this.send(path, 'GET', data);
  }

  delete(path, data = null) {
    return this.send(path, 'DELETE', data);
  }

  send(url, method, data) {
    //let uri = `${this.base_url}${this.root_path}${url}`;

    let uri = `${defaultOptions.baseUrl}${url}`;

    const headers = {
      APIKEY: `${defaultOptions.apikey}`,
      'Content-Type': 'application/json',
    };
    // if (this.access_token) {
    //   headers.Authorization = `Bearer ${this.access_token}`;
    // }

    return new Promise((resolve, reject) => {
      // console.log({
      //     uri, method, headers, data, ...params,
      // });
      fetch(uri, {method, headers, body: JSON.stringify(data)})
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }

          if(response.status === 500 || response.status === 401 || response.status === 404) {
            let customResponse = {"STATUS":"fail","MESSAGE":"Somthing Go Wrong"};
            return customResponse;
          }
          // Possible 401 or other network error
          return response
            .json()
            .then(errorResponse => Promise.reject(errorResponse));
        })
        .then(responseData => {
          // debugger;
          console.log('error', responseData);
          resolve(responseData);
        })
        .catch(error => {
          // logError(error);
          console.log('catch', error);
          // const customError = this.getErrorMessageForResponce(error);
          // reject(new Error(customError));
        });
    });
  }

  // getErrorMessageForResponce(data) {
  //   const params = data.parameters;
  //   let {message} = data;
  //   if (typeof params !== 'undefined') {
  //     if (Array.isArray(params) && params.length > 0) {
  //       data.parameters.forEach((item, index) => {
  //         message = message.replace(`%${index + 1}`, item);
  //       });
  //       return message;
  //     }
  //     _.forEach(params, (value, name) => {
  //       message = message.replace(`%${name}`, value);
  //     });
  //   }
  //   return message;
  // }
}

export const logistical = new Logistical();
