import React, {useContext} from "react";
import { LanguageContext } from "../App";

function TodoForm(props) {
  const { text, onChange, onClick } = props;
  const { language } = useContext(LanguageContext);

  return (
    <form className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder={language === "en" ? "Add a new todo" : "Tambahkan todo baru"}
        onChange={onChange}
        value={text}
      />
      <button onClick={onClick} type="submit" className="btn btn-primary">
        {language === "en" ? "Add" : "Tambahkan"}
      </button>
    </form>
  );
}

export default TodoForm;
