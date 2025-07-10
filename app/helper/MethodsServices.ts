import environment from '../../config/environment';

type Headers = {
  'Content-type'?: string;
  Authorization?: string;
};

export class MethodsServices {
  public post(
    targetUrl: string,
    payload: unknown,
    options?: { headers?: Headers },
  ) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': environment.REACT_APP_DOMAIN,
        ...(options ? options.headers : {}),
      },
      body: JSON.stringify(payload),
    };

    return fetch(`${environment.API_URI}/${targetUrl}`, requestOptions);
  }

  public put(
    targetUrl: string,
    payload: unknown,
    options?: { headers?: Headers },
  ) {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': environment.REACT_APP_DOMAIN,
        ...(options ? options.headers : {}),
      },
      body: JSON.stringify(payload),
    };

    return fetch(`${environment.API_URI}/${targetUrl}`, requestOptions);
  }

  public get(targetUrl: string, options?: { headers?: Headers }) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': environment.REACT_APP_DOMAIN,
        ...(options ? options.headers : {}),
      },
    };

    return fetch(`${environment.API_URI}/${targetUrl}`, requestOptions);
  }

  public delete(
    targetUrl: string,
    payload: unknown,
    options?: { headers?: Headers },
  ) {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': environment.REACT_APP_DOMAIN,
        ...(options ? options.headers : {}),
      },
      body: JSON.stringify(payload),
    };

    return fetch(`${environment.API_URI}/${targetUrl}`, requestOptions);
  }
}
