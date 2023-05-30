import './index.css'

const GameResult = props => {
  const {score, onClickGameResult} = props

  const PlayAgain = () => {
    onClickGameResult()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-container"
      />
      <p className="score">YOUR SCORE</p>
      <p className="result-score">{score}</p>
      <button className="button" type="button" onClick={PlayAgain}>
        <img
          className="reset-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResult
