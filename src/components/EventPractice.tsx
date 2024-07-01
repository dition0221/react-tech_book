import { useState } from "react";

export default function EventPractice() {
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  // const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUsername(e.target.value);
  // const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setMessage(e.target.value);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  const onClick = () => {
    alert(`${form.username} : ${form.message}`);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력ㄱ"
        value={form.message}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}
