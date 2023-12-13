interface FullScreenInterface {
  requestFullscreen?: () => Promise<void>
  mozRequestFullScreen?: () => Promise<void>
  webkitRequestFullscreen?: () => Promise<void>
  msRequestFullscreen?: () => Promise<void>
  exitFullscreen?: () => Promise<void>
  mozCancelFullScreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
  msExitFullscreen?: () => Promise<void>
}

interface FullScreenDocument extends Document {
  mozCancelFullScreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
  msExitFullscreen?: () => Promise<void>
}

export default function goFullScreen({ elementId }: { elementId: string }) {
  const fullScreenDoc = document as FullScreenDocument
  const element = document.getElementById(elementId) as FullScreenInterface

  if (!document.fullscreenElement) {
    element.requestFullscreen?.() ||
      element.mozRequestFullScreen?.() ||
      element.webkitRequestFullscreen?.() ||
      element.msRequestFullscreen?.()
  } else {
    fullScreenDoc.exitFullscreen?.() ||
      fullScreenDoc.mozCancelFullScreen?.() ||
      fullScreenDoc.webkitExitFullscreen?.() ||
      fullScreenDoc.msExitFullscreen?.()
  }
}
