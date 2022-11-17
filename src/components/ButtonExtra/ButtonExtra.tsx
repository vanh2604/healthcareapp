import React from 'react';
import './buttonextra.scss';
interface ButtonExtraProps {
  handleLoadMore: () => void;
}
const ButtonExtra: React.FC<ButtonExtraProps> = (props) => {
  const { handleLoadMore } = props;
  return (
    <div onClick={handleLoadMore} className="flex flex-row justify-center mt-10 cursor-pointer">
      <div className="text-white py-4 btn-extra text-center">記録をもっと見る</div>
    </div>
  );
};

export default ButtonExtra;
