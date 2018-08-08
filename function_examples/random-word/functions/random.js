exports.handler = function(event, context, callback) {
  const randomWords = [
    'copper',
    'explain',
    'tenuous',
    'neat',
    'discovery',
    'sweltering',
    'dusty',
    'unruly',
    'week',
    'rejoice',
  ];
  const randomNumber = Math.floor(Math.random() * randomWords.length);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ word: randomWords[randomNumber] }),
  });
};
