import React from 'react';
import './diary.scss';
const Diary: React.FC = () => {
  return (
    <div className="diary">
      <div className="datetime">2021.05.21</div>
      <div className="datetime">23:25</div>
      <div className="desc">
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </div>
    </div>
  );
};

export default Diary;
