import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");
  const passwordref = useRef(null);
  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) characters += "0123456789";
    if (charAllow) characters += "!@#$%^&*()_+";

    let newPass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      newPass += characters.charAt(index);
    }
    setPass(newPass);
  }, [length, numAllow, charAllow]);
  const clipboardcopy = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);
  useEffect(() => {
    generatePassword();
  }, [length, numAllow, charAllow, generatePassword]);

  return (
    <form style={{ padding: "20px", background: "purple" }}>
      <label>
        Password:
        <input
          type='text'
          value={pass}
          readOnly
          style={{
            width: "90%",
            margin: "10px 0",
          }}
          ref={passwordref}
        />
      </label>
      <button
        onClick={clipboardcopy}
        style={{ marginLeft: "10px", cursor: "grab", transition: "blue 0.01s" }}
      >
        Copy
      </button>
      <br />
      <label>
        Length: {length}
        <input
          type='range'
          min={6}
          max={20}
          value={length}
          style={{ backgroundColor: "red" }}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <br />
      <label>
        Include Numbers:
        <input
          type='checkbox'
          checked={numAllow}
          onChange={(e) => setNumAllow(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Special Characters:
        <input
          type='checkbox'
          checked={charAllow}
          onChange={(e) => setCharAllow(e.target.checked)}
        />
      </label>
    </form>
  );
};

export default App;
