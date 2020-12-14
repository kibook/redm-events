function playAudio(url) {
	var audio = document.querySelector('#audio-player');
	audio.src = url;
	audio.play();
}

function pauseAudio(url) {
	var audio = document.querySelector('#audio-player');
	audio.pause();
}

function playVideo(data) {
	var videoContainer = document.querySelector('#video-container');
	videoContainer.innerHTML = '';

	if (!data.url) {
		return;
	}

	var video = document.createElement('video');

	video.src = data.url;

	video.style.position = 'absolute';
	video.style.objectFit = 'fill';

	if (data.width > 0) {
		video.style.width = data.width + 'vw';
	} else {
		video.style.width = '50vw';
	}
	if (data.height > 0) {
		video.style.height = data.height + 'vh';
	} else {
		video.style.height = '50vh';
	}

	if (data.left > 0 || data.top > 0) {
		if (data.left > 0) {
			video.style.left = data.left + 'vw';
		} else {
			video.style.left = '0vw';
		}
		if (data.top > 0) {
			video.style.top = data.top + 'vh';
		} else {
			video.style.top = '0vh';
		}
	} else {
		video.style.left = '50vw';
		video.style.top = '50vh';
		video.style.transform = 'translate(-50%, -50%)';
	}

	if (data.opacity > 0) {
		video.style.opacity = data.opacity + '%';
	}

	video.onended = function() {
		pauseVideo();
	}

	videoContainer.appendChild(video);
	videoContainer.style.display = 'block';

	video.play();
}

function pauseVideo() {
	var videoContainer = document.querySelector('#video-container')
	videoContainer.innerHTML = '';
	videoContainer.style.display = 'none';
}

window.addEventListener('message', function (event) {
	switch (event.data.action) {
		case 'playAudio':
			playAudio(event.data.url);
			break;
		case 'pauseAudio':
			pauseAudio();
			break;
		case 'playVideo':
			playVideo(event.data);
			break;
		case 'pauseVideo':
			pauseVideo();
			break;
	}
});
