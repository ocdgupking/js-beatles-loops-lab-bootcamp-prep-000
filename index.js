function theBeatlesPlay(musicians, instruments){
  var bands = [];
  for (var i = 0; i < musicians.length; i++ ){
    bands.push("${musicians} plays ${instruments}")
  }
  return bands
}