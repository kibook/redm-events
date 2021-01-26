RegisterNetEvent('events:playAudio')
RegisterNetEvent('events:pauseAudio')
RegisterNetEvent('events:playVideo')
RegisterNetEvent('events:pauseVideo')
RegisterNetEvent('events:screenFadeOut')
RegisterNetEvent('events:screenFadeIn')
RegisterNetEvent('events:animpostfxPlay')
RegisterNetEvent('events:animpostfxStop')

AddEventHandler('events:playAudio', function(url)
	SendNUIMessage({
		action = 'playAudio',
		url = url
	})
end)

AddEventHandler('events:pauseAudio', function()
	SendNUIMessage({
		action = 'pauseAudio'
	})
end)

AddEventHandler('events:playVideo', function(url, width, height, left, top, opacity)
	SendNUIMessage({
		action = 'playVideo',
		url = url,
		width = width,
		height = height,
		left = left,
		top = top,
		opacity = opacity
	})
end)

AddEventHandler('events:pauseVideo', function()
	SendNUIMessage({
		action = 'pauseVideo'
	})
end)

AddEventHandler('events:screenFadeOut', function(duration)
	DoScreenFadeOut(duration)
end)

AddEventHandler('events:screenFadeIn', function(duration)
	DoScreenFadeIn(duration)
end)

AddEventHandler('events:animpostfxPlay', function(effectName)
	AnimpostfxPlay(effectName)
end)

AddEventHandler('events:animpostfxStop', function(effectName)
	AnimpostfxStop(effectName)
end)
