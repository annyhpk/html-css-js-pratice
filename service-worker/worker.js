function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
 }
 self.addEventListener('message', function(e) {
   console.log(e.data); // 일해라 워커!
   sleep(3000); // 3초가 걸림을 표현
   var coords = Math.random();
   console.log(coords);
   self.postMessage(coords);
 });