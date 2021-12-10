import React, { useState } from "react";
// import firebase from "../util/firebase";

export default function Forms() {
return (
    <form>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        required
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}