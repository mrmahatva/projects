
export default function ResizableFrame() {
  function getHeight(){
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT
    if(!exampleUrl) {return null}
  }
  return (
    <>
      <Flex>
        <Resizabale bounds ={'parent'} minWidth={250} minHeight={getHeight()} maxHeight={getHeight()}>
          <iframe loading='lazy' width={'100%'} height={getHeight()} src={exampleUrl} onLoad={syncHight} ref={ref} title='#' />
        </Resizabale>
      </Flex>
    </>
  )
}
