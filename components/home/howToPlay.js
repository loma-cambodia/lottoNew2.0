
const HowToPlay = () => {
    return (
      <>
       <section className="how-to-play custom-padding">
    <div className="container">
        <div className="heading-part text-center mb-4">
            <h5 className="text-uppercase fw-bold">HOW TO PLAY</h5>
            <h2 className="text-uppercase text-color-main fw-bold">Easiest Way To Picking A Number</h2>
        </div>

        <div className="timeline">
            <div className="timeline-container left">
              <div className="date">1</div>
              <div className="content">
                <h2>Set A Budget</h2>
                <p>
                    Playing the lottery is gambling, so keep it
                    fun by treating it as part of your
                    entertainment budget.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">2</div>
              <div className="content">
                <h2>Choose Your Numbers</h2>
                <p>
                    Pick single/multiple 4 digit numbers from
                    0000 to 9999. Choose how you want to 
                    play (Big bet, Small bet etc..)
                </p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="date">3</div>
              <div className="content">
                <h2>Buy Your Numbers</h2>
                <p>
                    Add selected numbers to the cart, check if 
                    you have sufficient balance then place 
                    your order.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">4</div>
              <div className="content">
                <h2>Check Winnings</h2>
                <p>
                    Congratulations! You are winner if your
                    selected number are in the announced
                    winners list.
                </p>
              </div>
            </div>
            
          </div>
          <div className="clearfix text-center mt-5">
            <a href="#" className="btn-yellow rounded-full">Play Now</a>
        </div>
    </div>
  </section>
      </>
    )
  }
  export default HowToPlay;
  