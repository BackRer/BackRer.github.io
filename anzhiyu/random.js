var posts=["2023/07/01/BukkitApiCooldown/","2023/06/27/McModMade/","2023/06/27/front-matter/","2023/06/27/hello-world/","2023/07/01/BukkitTools/","2023/06/27/text/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};