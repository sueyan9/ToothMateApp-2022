export const LowerRightSecondPremolar = () => {
    const back = () =>{
        return  window.history.back()
      }
    return(
        <div>
        Clicked on lower right second premolar
        <button onClick={back}>Back to Dental Chart</button>
        </div> 
    )
}