import react from 'react';

function CategoryHeader(props) {
    return     <div className="category-header">
    <h1>{ props.title }</h1>
    <p><a className="primary-button background-blue" href="/christmas">{ props.button }</a></p>
  </div>;
}

export default CategoryHeader;