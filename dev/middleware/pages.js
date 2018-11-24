export default function({ store, redirect, route }) {
  if (route.path === '/') {
    store.dispatch('updatePage', 1)
    return
  }

  if (route.path === '/slide/1') {
    return redirect('/')
  }

  const slideArr = route.path.split('/slide/')

  if (slideArr.length < 2) {
    return redirect('/')
  }

  // GitHubのクソ野郎がURL末尾に勝手に「/」を付与するための対策
  const slideId = Number(slideArr[1].split('/')[0])

  if (slideId < 2 || 88 < slideId || isNaN(slideId)) {
    return redirect('/')
  }

  store.dispatch('updatePage', slideId)
}
