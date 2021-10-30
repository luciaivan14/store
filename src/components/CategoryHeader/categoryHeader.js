import react from 'react';

function CategoryHeader(props) {


    return     <div className="category-header">
    <h1>{ props.title }</h1>
  </div>;
}

export default CategoryHeader;