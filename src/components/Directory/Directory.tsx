import CategoryItem from '../CategoryItem/CategoryItem';

import './Directory.scss';

const Directory = (props: any) => {
  return (
    <div className='directory-container'>
      {props.categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;