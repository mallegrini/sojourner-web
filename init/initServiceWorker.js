import store from '@/store'

export default function () {
  if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service worker registered successfully'))
      .catch(error => console.log(`Error registering service worker: ${error}`))

    const updateScheduleChannel = new BroadcastChannel('update-schedule')
    updateScheduleChannel.addEventListener('message', async (event) => {
      setTimeout(() => {
        store.dispatch('notifyRefreshSchedule')
      }, 10000)
    })
  }
}
