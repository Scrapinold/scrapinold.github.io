---
---
function goToRandomPost(excludedPage) {
	var posts = [];

	var post_url;

	{% for post in site.posts %}

	post_url = '{{ post.url }}';

	if(post_url != excludedPage) {
		posts.push(post_url);
	}

	{% endfor %}  

	window.location = posts[Math.floor(Math.random() * posts.length)]; 
}