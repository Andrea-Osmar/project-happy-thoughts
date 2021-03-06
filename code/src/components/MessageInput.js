import React, { useState } from "react";
import "../index.css";

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage, name);
    setNewMessage("");
    setName("");
  };

  return (
    <article className="input-card">
      <form onSubmit={handleSumbit}>
        <h2>What makes you happy today?</h2>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
          className="form-name"
        ></input>
        <input
          type="text"
          value={newMessage}
          placeholder="Your message"
          minLength="5"
          maxLength="140"
          onChange={(event) => setNewMessage(event.target.value)}
          className="form-text"
        ></input>
        <div className="input-characters">
          <p className="input-min">min. 5 characters</p>
          <p className="input-length">{newMessage.length}/140</p>
        </div>

        <section className="button-wrapper">
          {newMessage.length < 5 && (
            <button disabled>
              <p>
                <span className="heart" role="img" aria-label="Heart">
                  {"❤️ "}
                </span>
                Send a happy thought!
                <span className="heart" role="img" aria-label="Heart">
                  {" ❤️"}
                </span>
              </p>
            </button>
          )}
          {newMessage.length >= 5 && (
            <button type="submit" onClick={handleSumbit}>
              <p>
                <span className="heart" role="img" aria-label="Heart">
                  {"❤️ "}
                </span>
                Send a happy thought!
                <span className="heart" role="img" aria-label="Heart">
                  {" ❤️"}
                </span>
              </p>
            </button>
          )}
        </section>
      </form>
    </article>
  );
};
