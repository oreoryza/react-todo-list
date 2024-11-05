import React, { useState } from "react";

function TodoForm() {

  return (
    <form className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Tambah todo..."
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
