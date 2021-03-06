import React from 'react'; //optional

function TweetForm() {
  const fillerText = "What are you humming about?"
  
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" class="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={fillerText}></textarea>
        <input type="onSubmit={(event) => {event.preventDefault()}};" value="Tweet" className="form__input"/>.
        <span className="form__counter">140</span>
        
      </form>
    </section>
  );
}

export default TweetForm;