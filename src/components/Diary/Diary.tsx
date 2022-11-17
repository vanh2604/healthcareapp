import React from 'react';
import './diary.scss';
import { IMyDiary } from '../../interfaces/record';

interface DiaryProps {
  diary: IMyDiary;
}

const Diary: React.FC<DiaryProps> = (props) => {
  const { diary } = props;
  return (
    <div className="diary">
      <div className="datetime">{diary.date}</div>
      <div className="datetime">{diary.time}</div>
      <div className="desc">{diary.content}</div>
    </div>
  );
};

export default Diary;
