export function makePostAPICAll(url, data) {
  return new Promise((resolve, reject) => {
    let headerObj = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer 1a3add47a0ed6f2eb3f4abd0810a5a9cbe3f3b8eeefde4ca0ca1f915b4695a69`,
    };

    fetch(url, {
      method: "POST",
      headers: headerObj,
      body: JSON.stringify(data),
      //credentials: 'include'
    })
      .then((stream) => {
        console.log(stream);
        return stream.json();
      })
      .then((apiResponse) => {
        return resolve(apiResponse);
      })
      .catch(reject);
  });
}

export function makeGetAPICAll(url, data) {
  console.log(url);
  return new Promise((resolve, reject) => {
    const headerObj = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer 1a3add47a0ed6f2eb3f4abd0810a5a9cbe3f3b8eeefde4ca0ca1f915b4695a69`,
    };

    if (data) {
      url = new URL(url);
      url.search = new URLSearchParams(data).toString();
    }

    fetch(url, {
      method: "GET",
      headers: headerObj,
    })
      .then((stream) => {
        if (stream) {
          return stream.json();
        }
      })
      .then((apiResponse) => {
        return resolve(apiResponse);
      })
      .catch(reject);
  });
}
