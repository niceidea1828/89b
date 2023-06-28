let bets = JSON.parse(localStorage.bets_b89);

const text = ["Победа Атлетик Бильбао", "Победа Финербахче", "Победа Бешикташ"];

if (bets.length) {
  $(".congr").removeClass("hidden");
}

bets.forEach((bet) => {
  let winElem = $(`
    <div class="win">
     <img src="../png/bet${String(bet + 1) + String(bet + 1)}.png" alt="" />
     <div class="win_text">${text[bet]}</div>
    </div>
    `);

  $(".wins").append(winElem);
});
