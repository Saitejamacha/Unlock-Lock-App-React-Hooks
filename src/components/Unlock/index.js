import {useState} from 'react'

import {AppContainer, Img, Button, Para} from './styledComponents'

const Unlock = () => {
  const [isBtnClicked, btnClickStatus] = useState(false)

  const onClickBtn = () => {
    btnClickStatus(prevState => !prevState)
    console.log(isBtnClicked)
  }

  const lockText = 'Your Device is Locked'
  const unLockText = 'Your Device is Unlocked'

  const lockImg = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const unLockImg = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const lockButtonText = 'Lock'
  const unLockButtonText = 'Unlock'

  const renderLockView = () => (
    <AppContainer>
      <Img alt="lock" src={lockImg} />
      <Para>{lockText}</Para>
      <Button onClick={onClickBtn}>{unLockButtonText}</Button>
    </AppContainer>
  )

  const renderUnlockView = () => (
    <AppContainer>
      <Img alt="Unlock" src={unLockImg} />
      <Para>{unLockText}</Para>
      <Button onClick={onClickBtn}>{lockButtonText}</Button>
    </AppContainer>
  )

  return (
    <AppContainer>
      {isBtnClicked ? renderLockView() : renderUnlockView()}
    </AppContainer>
  )
}

export default Unlock
