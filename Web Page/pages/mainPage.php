<!DOCTYPE html>


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Wild Bird</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="../styles/mainPageStyle.css" rel="stylesheet" type="text/css" media="all" />

</head>
<body>

<!--Isto é o body em si!-->
<form id="testForm" action="../server/mainPage.php" method="POST">
	<input type="button" id="testButton" value="test">
</form>

<div id="wrapper">
	<div id="menu-wrapper">
	<div id="header-wrapper">
		<div id="header" class="container">
			<div id="logo">
				<img id="logoImg" src="../resources/logos/logo.png" alt="companylogo">
			</div>
		</div>
	</div>
		<div id="menu" class="container">
			<ul>
				<li class="current_page_item"><a href="#">Homepage</a></li>
				<li><a href="#">Events</a></li>
				<li><a href="#">Search</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Logout</a></li>
			</ul>
		</div> 
	
	</div>
	<!-- Making a slider!-->
	<div id="banner">
		<div id="slider">
				<div id="slider1"> </div>
				<div id="slider2"> </div>
				<div id="slider3"> </div>
				<div id="slider4"> </div>
				<div id="slider5"> </div>
		</div>
	</div>
	<!-- End of slider -->
	
	<div id="page" class="container">
		<div id="content">
			<div class="title">
				<h2>Integer sit amet aliquet</h2>
				<span class="byline">Phasellus nec erat sit amet nibh pellentesque congue</span> </div>
			<p>This is <strong>GrassyGreen</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
			<p>Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus ac magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. </p>
		</div>
		<div id="sidebar">
			<div class="box2">
				<div class="title">
					<h2>Integer gravida</h2>
				</div>
				<ul class="style2">
					<li><a href="#">Amet turpis, feugiat et sit amet</a></li>
					<li><a href="#">Ornare in hendrerit in lectus</a></li>
					<li><a href="#">Semper mod quis eget mi dolore</a></li>
					<li><a href="#">Quam turpis feugiat sit dolor</a></li>
					<li><a href="#">Amet ornare in hendrerit in lectus</a></li>
					<li><a href="#">Quam turpis feugiat sit dolor</a></li>
					<li><a href="#">Consequat etiam lorem phasellus</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
	
<!-- Isto é o footer!-->
<div id="footer-wrapper">
	<div id="footer" class="container">
		<div id="box1">
			<div class="title">
				<h2>Latest Post</h2>
			</div>
			<ul class="style1">
				<li><a href="#">Semper mod quis eget mi dolore</a></li>
				<li><a href="#">Quam turpis feugiat sit dolor</a></li>
				<li><a href="#">Amet ornare in hendrerit in lectus</a></li>
				<li><a href="#">Consequat etiam lorem phasellus</a></li>
				<li><a href="#">Amet turpis, feugiat et sit amet</a></li>
				<li><a href="#">Semper mod quisturpis nisi</a></li>
			</ul>
		</div>
		<div id="box2">
			<div class="title">
				<h2>Popular Links</h2>
			</div>
			<ul class="style1">
				<li><a href="#">Semper mod quis eget mi dolore</a></li>
				<li><a href="#">Quam turpis feugiat sit dolor</a></li>
				<li><a href="#">Amet ornare in hendrerit in lectus</a></li>
				<li><a href="#">Consequat etiam lorem phasellus</a></li>
				<li><a href="#">Amet turpis, feugiat et sit amet</a></li>
				<li><a href="#">Semper mod quisturpis nisi</a></li>
			</ul>
		</div>
		
		<div id="box3">
			<div class="title">
				<h2>Follow Us</h2>
			</div>
			<p>Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet magna.</p>
			<ul class="contact">
				<li><a href="#" class="icon icon-twitter"><span>Twitter</span></a></li>
				<li><a href="#" class="icon icon-facebook"><span>Facebook</span></a></li>
				<li><a href="#" class="icon icon-dribbble"><span>Dribbble</span></a></li>
				<li><a href="#" class="icon icon-tumblr"><span>Tumblr</span></a></li>
				<li><a href="#" class="icon icon-rss"><span>Pinterest</span></a></li>
			</ul>
				<a href="#" class="button">Read More</a> </div>
		</div>
	</div>
</div>

<div id="copyright" class="container">
	<p>&copy; Wild Bird</p>
	<p>	All rights reserved.</p>
</div>
<script src="../actions/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../actions/slider.js"></script>
<script type="text/javascript" src="../actions/acessSession.js"></script>
</body>
</html>