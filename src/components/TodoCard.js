import React from "react";
import { Container, Card } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineFieldTime } from "react-icons/ai";

import "./style/todoCard.css";

export const TodoCard = ({ id, title, completed, dueDate, category }) => {
  return (
    <div>
      <Container className="todoCard-container">
        <div className="top">
          <div className={`circle-${category} circle`}></div>
          <div style={{ maxWidth: "80%", textAlign: "center" }}>
            <div className="todo-topCard">
              <div className="todo-title">{title}</div>
            </div>

            <div className="todo-bottomCard">
              <div className="todo-dueDate">
                <AiOutlineCalendar className="dueDate-icon" />
                {dueDate}
              </div>
            </div>
          </div>
          <AiOutlineFieldTime className="completed-icon" />
        </div>
      </Container>
    </div>
  );
};
