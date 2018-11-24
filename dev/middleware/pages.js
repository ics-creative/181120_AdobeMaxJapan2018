export default function({ store, redirect, route }) {
  if (route.path === '/') {
    store.dispatch('updatePage', 1)
    return
  }

  if (route.path === '/slide/1') {
    return redirect('/')
  }

  const slideArr = route.path.split('/slide/')

  if (slideArr.length !== 2) {
    return redirect('/')
  }

  const slideId = Number(slideArr[1])

  if (slideId < 2 || 88 < slideId || isNaN(slideId)) {
    return redirect('/')
  }

  store.dispatch('updatePage', slideId)
}
