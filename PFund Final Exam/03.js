function solve(input) {
  let capacity = Number(input.shift());
  input.pop();
  const records = {};

  for (const line of input) {
    let [comm, ...rest] = line.split("=");

    if (comm == "Add") {
      let username = rest[0];
      let sent = Number(rest[1]);
      let received = Number(rest[2]);

      if (!records.hasOwnProperty(username)) {
        records[username] = {
          sent,
          received,
        };
      }
    } else if (comm == "Message") {
      let sender = rest[0];
      let receiver = rest[1];

      if (records.hasOwnProperty(sender) && records.hasOwnProperty(receiver)) {
        records[sender].sent++;
        records[receiver].received++;
        if (records[sender].sent + records[sender].received >= capacity) {
          delete records[sender];
          console.log(`${sender} reached the capacity!`);
        }
        if (records[receiver].received + records[receiver].sent >= capacity) {
          delete records[receiver];
          console.log(`${receiver} reached the capacity!`);
        }
      }
    } else if (comm == "Empty") {
      let username = rest[0];
      if (username == "All") {
        Array.from(Object.keys(records)).forEach((name) => {
          delete records[name];
        });
      } else if (records.hasOwnProperty(username)) {
        delete records[username];
      }
    }
  }

  let count = Object.keys(records).length;

  console.log(`Users count: ${count}`);

  Array.from(Object.keys(records)).forEach((name) => {
    console.log(`${name} - ${records[name].sent + records[name].received}`);
  });
}

solve([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
