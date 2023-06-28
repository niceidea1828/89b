if (!localStorage.getItem("balance_b89")) {
  localStorage.setItem("balance_b89", 50000);
}

if (!localStorage.getItem("bets_b89")) {
  localStorage.setItem("bets_b89", "[]");
}

let betList = [500, 500, 500];

$(".balance").html(localStorage.balance_b89);

updateBets();

$(".spin").each(function (ind) {
  $(this).click(function () {
    if (!betList[ind] || betList[ind] > +localStorage.balance_b89) {
      return;
    }

    changeBalance(-betList[ind], ind);

    let bets = JSON.parse(localStorage.bets_b89);
    bets.push(ind);

    localStorage.bets_b89 = JSON.stringify(bets);
    updateBets();
  });
});

$(".minus").each(function (ind) {
  $(this).click(function () {
    changeBet(-250, ind);
  });
});

$(".plus").each(function (ind) {
  $(this).click(function () {
    changeBet(250, ind);
  });
});

window.onload = () => {
  document.querySelector(".wrapper").classList.remove("hidden");
};

function changeBalance(amount) {
  localStorage.balance_b89 = +localStorage.balance_b89 + amount;
  $(".balance").html(localStorage.balance_b89);
}

function changeBet(amount, ind) {
  if (
    betList[ind] + amount > +localStorage.balance_b89 ||
    betList[ind] + amount < 0
  ) {
    return;
  }

  betList[ind] += amount;
  $(".bet_amount").eq(ind).html(betList[ind]);

  console.log(betList);
}

function updateBets() {
  let bets = JSON.parse(localStorage.bets_b89);

  $(".bet").each(function (ind) {
    console.log(ind);
    if (bets.includes(ind)) {
      $(".bet_block").eq(ind).addClass("none");
    }
  });
}
