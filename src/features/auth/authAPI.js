// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email="+email);
    const data = await response.json();
    console.log("api", {data});
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
        console.log("resolved", data);
      } else {
        reject({ message: "Invalid User" });
      }
    } else {
      reject({ message: "Invalid User" });
    }
  });
}
