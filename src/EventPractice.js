import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const changeNext = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeNext);
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyEnter}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
