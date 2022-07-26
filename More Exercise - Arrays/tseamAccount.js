function tseamAccount(games) {
  let currentGames = games.shift().split(" ");

  for (let i = 0; i < games.length; i++) {
    let split = games[i].split(" ");
    let command = split[0];
    let game = split[1];

    if (command === `Install`) {
      if (!currentGames.includes(game)) {
        currentGames.push(game);
      }
    } else if (command === `Uninstall`) {
      if (currentGames.includes(game)) {
        let gameIndex = currentGames.indexOf(game);
        currentGames.splice(gameIndex, 1);
      }
    } else if (command === `Update`) {
      if (currentGames.includes(game)) {
        let gameIndex = currentGames.indexOf(game);
        currentGames.splice(gameIndex, 1);
        currentGames.push(game);
      }
    } else if (command === `Expansion`) {
      game = game.split("-");
      let oldGame = game[0];
      let expansion = game[1];
      if (currentGames.includes(oldGame)) {
        let index = currentGames.indexOf(oldGame);
        currentGames.splice(index + 1, 0, `${oldGame}:${expansion}`);
      }
    } else if (command === "Play!") {
      console.log(currentGames.join(" "));
      break;
    }
  }
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
