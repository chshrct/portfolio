import React, { FC } from "react";
import s from "./Project.module.scss";

type PropsType = {
  title: string;
  description: string;
};

const Project: FC<PropsType> = ({ title, description }) => {
  return (
    <div className={s.projectBlock}>
      <div className={s.preview}>
        <a href="#s">View</a>
      </div>
      <div className={s.descriptionBlock}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
