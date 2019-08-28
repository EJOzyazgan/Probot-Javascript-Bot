var express = require('express');
var router = express.Router();

//  This is a very simple example showing how to use the game data
//  It is highly recomended that you update this logic with your own
// 
//  Gets bot from game_state
//  If you have two of a kind raises for twice the minimum amount
//  Otherwise calls
router.post('/bet', function (req, res, next) {
  const gs = req.body.state;
  const p = gs.players;
  const me = p[gs.me];

  let bet = 0;

  if (me.cards[0].rank == me.cards[1].rank)
    bet = gs.minimumRaiseAmount * 2;
  else if (me.chipsBet > 0)
    bet = gs.callAmount;

  return res.status(200).send('' + bet);
});

module.exports = router;
