const poses = [
  [3600 ,"assets/Ayu1.gif"],
  [19000 ,"assets/Ayu2.gif"]
]
$("#gif1").on('click', () => {
  const lenPoses = poses.length;
  let rand = Math.ceil(Math.random()*lenPoses) -1;
  $("#gif1").attr("src", poses[rand][1]);
  setTimeout( () => {
      $("#gif1").attr("src", 'assets/Ayu_IDLE.gif');
  }, poses[rand][0]);
});