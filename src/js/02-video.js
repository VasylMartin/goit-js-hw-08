import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe)

function getTime(data) {
    const time = data.seconds
    localStorage.setItem('videoplayer-current-time', time)
}
const localTime = localStorage.getItem('videoplayer-current-time')
if (localTime) {
  player.setCurrentTime(localTime);
}

player.on('timeupdate', throttle(getTime, 1000))