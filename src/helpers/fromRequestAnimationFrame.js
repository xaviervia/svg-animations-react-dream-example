import { Stream } from 'most'

export default () =>
  new Stream({
    run: (sink, scheduler) => {
      let shouldRun = true

      const loop = () => {
        sink.event(scheduler.now(), Date.now())
        if (shouldRun) requestAnimationFrame(loop)
      }

      requestAnimationFrame(loop)

      return {
        dispose: function() {
          shouldRun = false
        },
      }
    },
  })
